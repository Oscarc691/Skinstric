import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

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
        <div className="nav-item">DISCOVER A.I.</div>
      </div>

      <div className="side-navigation right" onClick={() => navigate("/take-test")}>
        <div className="nav-item">TAKE TEST</div>
      </div>

      {/* Footer */}
      <footer className="footer">
        SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALISED ROUTINE TAILORED TO
      </footer>
    </div>
  );
};

export default Home;
