import { useState, useEffect, useRef } from "react";
import "./introduce.css";
import { useNavigate } from "react-router-dom";
import SubmitButton from "./submit";

export default function IntroduceYourself() {
  const [name, setName] = useState("");  // initialize the name state
  const [isTyping, setIsTyping] = useState(false);  // track if the user is typing
  const inputRef = useRef(null);  // reference for the input field
  const submitButtonRef = useRef(null);  // reference for the submit button
  const navigate = useNavigate();

  // Fetch the name from the API
  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await fetch('https://wk7wmfz7x8.execute-api.us-east-2.amazonaws.com/live/FES_Virtual_Internship_1/level1');
        const data = await response.json();
        if (data.name) {
          setName(data.name);
        }
      } catch (error) {
        console.error('Error fetching name:', error);
      }
    };
    fetchName();
  }, []);

  // Handle click to start typing
  const handleClick = () => {
    setIsTyping(true);
  };

  // Handle submit name and prevent blur if clicking the button
  const submitName = async (e) => {
    e.stopPropagation(); // Prevents blur event from firing when clicking submit button

    if (name.trim() === "") {
      console.error("Name cannot be empty");
      return;
    }

    const trimmedName = name.trim();

    try {
      await fetch('https://wk7wmfz7x8.execute-api.us-east-2.amazonaws.com/live/FES_Virtual_Internship_1/level1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: trimmedName }),
      });
      console.log('Name submitted successfully');
    } catch (error) {
      console.error('Error submitting name:', error);
    }
  };

  // Handle focus and blur events
  const handleFocus = () => {
    setIsTyping(true);  // Ensure the input is still in typing mode
  };

  const handleBlur = (e) => {
    if (!submitButtonRef.current.contains(e.relatedTarget)) {
      setIsTyping(false);  // Only blur if not interacting with submit button
    }
  };

  return (
    <div className="container">
      {/* Top Left Text */}
      <p className="top-left-text">SKINSTRICT [ INTRO ]</p>

      {/* Main Diamond Box */}
      <div className="diamond-box">
        <div className="inner-border"></div>
        <div className="outer-border"></div>

        {/* Click to Type */}
        {isTyping ? (
          <input
            ref={inputRef}  // Using the input reference to handle focus
            type="text"
            className="input-box"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={handleFocus} // Handle focus to ensure the input stays active
            onBlur={handleBlur}  // Handle blur carefully
            autoFocus
          />
        ) : (
          <p className="click-to-type" onClick={handleClick}>
            {name || "Click To Type"}
          </p>
        )}

        {/* Submit Button - Only shows when typing */}
        {isTyping && (
          <div
            ref={submitButtonRef} // Reference to the submit button
            className="submit-button"
            onClick={submitName}  // Trigger the submit function on click
          >
            <SubmitButton />
          </div>
        )}

        <p
          className="absolute top-4 text-gray-500 cursor-pointer transform -rotate-45"
          onClick={handleClick}
        >
          <h1 className="TitleI">Where are you from?</h1>
        </p>
      </div>

      {/* Bottom Left Back Button */}
      <p className="back-button" onClick={() => navigate("/")}>&#9665; BACK</p>
    </div>
  );
}
