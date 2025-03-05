import { useState, useEffect, useRef } from "react";
import "./introduce.css";
import { useNavigate } from "react-router-dom";

export default function IntroduceYourself() {
  const [name, setName] = useState("");  // initialize the name state
  const [isTyping, setIsTyping] = useState(false);  // track if the user is typing
  const [isSubmitted, setIsSubmitted] = useState(false); // track if the name is submitted
  const inputRef = useRef(null);  // reference for the input field
  const submitButtonRef = useRef(null);  // reference for the submit button
  const navigate = useNavigate();

  // Remove the API call and use localStorage only
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName); // Set the name from localStorage if it exists
    }
  }, []);

  // Handle click to start typing
  const handleClick = () => {
    setIsTyping(true);
    setTimeout(() => inputRef.current?.focus(), 0); // Automatically focus on input after clicking
  };

  // Handle submit name and save to console (localStorage)
  const submitName = async (e) => {
    e.stopPropagation(); // Prevents blur event from firing when clicking submit button

    if (name.trim() === "") {
      console.error("Name cannot be empty");
      return;
    }

    const trimmedName = name.trim();

    // Instead of an API call, save the name to localStorage
    localStorage.setItem("name", trimmedName); // Save to local storage
    console.log("Name saved to localStorage:", trimmedName); // Log it in the console

    setIsTyping(false); // Stop typing mode after submission
    setIsSubmitted(true); // Set submitted state
    setName(trimmedName); // Emphasize the entered name
  };

  // Handle focus and blur events
  const handleFocus = () => {
    setIsTyping(true);  // Ensure the input is still in typing mode
  };

  const handleBlur = (e) => {
    if (!submitButtonRef.current || !submitButtonRef.current.contains(e.relatedTarget)) {
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
            ref={inputRef}
            type="text"
            className={isSubmitted ? "input-box emphasized" : "input-box"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <p className={isSubmitted ? "click-to-type emphasized" : "click-to-type"} onClick={handleClick}>
            {name || "Click To Type"}
          </p>
        )}

        {/* Submit Button - Only shows when typing */}
        {isTyping && (
          <button
            ref={submitButtonRef}
            className="submit-button"
            onClick={submitName}
          >
            Submit
          </button>
        )}

        <p
          className={`absolute top-4 text-gray-500 cursor-pointer transform -rotate-45 ${isSubmitted ? "smaller-title" : ""}`}
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
