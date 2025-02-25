import { useState } from "react";
import "./introduce.css";
import { useNavigate } from "react-router-dom";

export default function IntroduceYourself() {
  const [name, setName] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsTyping(true);
  };
  const handleBlur = () => {
    setIsTyping(false);
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
          <p
          className="absolute top-4 text-gray-500 cursor-pointer transform -rotate-45"
          onClick={handleClick}
        >
         <h1 className = "TitleI"> Where are you from?
        </h1></p>
      </div>

      {/* Bottom Left Back Button */}
      <p className="back-button" onClick={() => navigate("/")}>&#9665; BACK</p>
    </div>
  );
};