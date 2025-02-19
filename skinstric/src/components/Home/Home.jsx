import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Top Bar */}
      <header className="top-bar">
        <span className="brand">SKINSTRIC <span className="intro">[ INTRO ]</span></span>
        <button className="enter-code" onClick={() => alert("Enter your code")}>
          ENTER CODE
        </button>
      </header>

      {/* Main Content */}
      <main className="content">
        <h1 className="title">Sophisticated <br /> skincare</h1>
      </main>

      {/* Side Navigation */}
      <div className="side-navigation left" onClick={() => navigate("/discover-ai")}>
        <div className="nav-item"><HiOutlinePaperAirplane className="leftArrow" />        DISCOVER A.I.</div>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2">
      <div className="w-32 h-32 border-2 border-dotted border-gray-700 transform rotate-45 flex items-center justify-center">
      <div className="side-navigation right" onClick={() => navigate("/Introduce")}>
        <div className="nav-item">TAKE TEST         <HiOutlinePaperAirplane /></div>
      </div>
      </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALISED ROUTINE TAILORED TO WHAT YOUR SKIN NEEDS
      </footer>
    </div>
  );
};

export default Home;

