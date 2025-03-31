import { useState, useEffect, useRef } from "react";
import "./introduce.css";
import { useNavigate } from "react-router-dom";

export default function IntroduceYourself() {
  const [name, setName] = useState(""); // Initialize the name state
  const [isTyping, setIsTyping] = useState(false); // Track if the user is typing
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the name is submitted
  const inputRef = useRef(null); // Reference for the input field
  const submitButtonRef = useRef(null); // Reference for the submit button
  const navigate = useNavigate();

  // Use localStorage to load saved name
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
      setIsSubmitted(true); // Ensure it shows the saved name properly
    }
  }, []);

  // Handle click to start typing
  const handleClick = () => {
    setIsTyping(true);
    setIsSubmitted(false); // Reset submission state to allow editing
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  // Handle submit name
  const submitName = async (e) => {
    e.stopPropagation();

    if (name.trim() === "") {
      console.error("Name cannot be empty");
      return;
    }

    const trimmedName = name.trim();
    localStorage.setItem("name", trimmedName);
    console.log("Name saved to localStorage:", trimmedName);

    setIsTyping(false);
    setIsSubmitted(true); // Set submitted state
    setName(trimmedName);
  };

  // Handle focus and blur
  const handleBlur = (e) => {
    if (!submitButtonRef.current || !submitButtonRef.current.contains(e.relatedTarget)) {
      setIsTyping(false);
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

        {/* Swapped positions based on isSubmitted */}
        <div className={`response-container ${isSubmitted ? "swapped" : ""}`}>
          {/* Answer (Emphasized when submitted) */}
          {isTyping ? (
            <div className="input-wrapper">
              <input
                ref={inputRef}
                type="text"
                className="input-box"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={handleBlur}
                onKeyPress={(e) => e.key === "Enter" && submitName(e)}
              />
            </div>
          ) : (
            <p
              className={isSubmitted ? "answer emphasized" : "click-to-type"}
              onClick={handleClick}
            >
              {isSubmitted ? name : "Click To Type"}
            </p>
          )}

          {/* Title (Smaller when submitted) */}
          <div className={`question ${isSubmitted ? "small-title" : ""}`} onClick={handleClick}>
            Where are you from?
          </div>
        </div>

        {/* Submit Button - Only visible while typing */}
        {isTyping && (
          <button ref={submitButtonRef} className="submit-button" onClick={submitName}>
            Submit
          </button>
        )}
      </div>

      {/* Bottom Left Back Button */}
      <p className="back-button" onClick={() => navigate("/")}>&#9665; BACK</p>
    </div>
  );
}
