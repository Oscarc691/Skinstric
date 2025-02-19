import { useState } from "react";
import "./introduce.css"; // Import the CSS file



export default function IntroduceYourself() {
  const [name, setName] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleClick = () => {
    setIsTyping(true);
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
        <p className="click-to-type" onClick={handleClick}>
          Click To Type
        </p>
        <h1 className="titleI">Where are you from?</h1>

        {isTyping && (
          <input
            type="text"
            className="input-box"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
      </div>

      {/* Bottom Left Back Button */}
      <p className="back-button" onClick={() => ("/Home")}>&#9665; BACK</p>
    </div>
  );
};