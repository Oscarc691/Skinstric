import React from "react";
import { useNavigate } from "react-router-dom";

const DiscoverAI = () => {
  const navigate = useNavigate();
  return (
    <div className="page">
      <h1>Discover A.I.</h1>
      <p>Explore the power of AI in skincare.</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default DiscoverAI;
