import React from "react";
import { useNavigate } from "react-router-dom";

const TakeTest = () => {
  const navigate = useNavigate();
  return (
    <div className="page">
      <h1>Take the Skincare Test</h1>
      <p>Answer a few questions to personalize your skincare routine.</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default TakeTest;
