import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import DiscoverAI from "./components/DiscoverAI/DiscoverAI";
import IntroduceYourself from "./components/Introduce/Introduce";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover-ai" element={<DiscoverAI />} />
        <Route path="/Introduce" element={<IntroduceYourself />} />
      </Routes>
    </Router>
  );
};

export default App;
