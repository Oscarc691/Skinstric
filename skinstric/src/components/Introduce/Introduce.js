import { useState } from "react";
import "./introduce.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";




export default function IntroduceYourself() {
  const [name, setName] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleClick = () => {
    setIsTyping(true);
  };
const Home = () => {
  const navigate = useNavigate();

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
        <h1 className="title">Where are you from?</h1>

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
      <p className="back-button" onClick={() => navigate("/Home")}>&#9665; BACK</p>
    </div>
  );
};