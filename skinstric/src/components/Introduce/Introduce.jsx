import { useState, useEffect, useRef } from "react";
import "./introduce.css";
import { useNavigate } from "react-router-dom";
import SubmitButton from "./submit";

export default function IntroduceYourself() {
  const [name, setName] = useState(""); // Ensuring that `name` is initialized to an empty string
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null); // Reference to the input field
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

  // Handle the blur event to allow re-clicking the input field if needed
  const handleBlur = () => {
    // If you click anywhere else but the submit button, blur the input
    if (inputRef.current && inputRef.current !== document.activeElement) {
      setIsTyping(false);
    }
  };

  // Function to submit the name to the API
  const submitName = async (e) => {
    e.stopPropagation(); // Prevents blur event from firing when clicking submit button

    // Log the value of name before calling trim()
    console.log('Name before trim:', name);

    // Check if name is valid before trimming
    if (typeof name === 'undefined' || name === null || name.trim() === "") {
      console.error("Name cannot be empty or undefined");
      return; // Exit early if name is invalid or empty
    }

    const trimmedName = name.trim(); // Only trim if it's a valid string

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
            ref={inputRef}  // Assigning the input field reference
            type="text"
            className="input-box"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <p className="click-to-type" onClick={handleClick}>
            {name || "Click To Type"}
          </p>
        )}

        {/* Submit Button - Only shows when typing */}
        {isTyping && (
          <div className="submit-button" onClick={submitName}>
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
