import React from "react";


const App = () => {
  const handleDiscoverAI = () => {
    alert("Navigating to AI discovery...");
    // can replace this with: window.location.href = "/discover-ai";
  };

  const handleTakeTest = () => {
    alert("Taking the skincare test...");
    // can replace this with: window.location.href = "/take-test";
  };

  const handleEnterCode = () => {
    const code = prompt("Enter your code:");
    if (code) {
      alert(`Code entered: ${code}`);
      // can replace this with validation logic
    }
  };

  return (
    <div className="container">
      {/* Top Bar */}
      <header className="top-bar">
        <span className="brand">
          SKINSTRIC <span className="intro">[ INTRO ]</span>
        </span>
        <button className="enter-code" onClick={handleEnterCode}>
          ENTER CODE
        </button>
      </header>

      {/* Main Content */}
      <main className="content">
        <h1 className="title">
          Sophisticated <br /> skincare
        </h1>
      </main>

      {/* Side Navigation */}
      <div className="side-navigation left" onClick={handleDiscoverAI}>
        <div className="nav-item">DISCOVER A.I.</div>
      </div>

      <div className="side-navigation right" onClick={handleTakeTest}>
        <div className="nav-item">TAKE TEST</div>
      </div>

      {/* Footer */}
      <footer className="footer">
        SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALISED ROUTINE
        TAILORED TO WHAT YOUR SKIN NEEDS.
      </footer>
    </div>
  );
};

export default App;
