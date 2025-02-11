import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import DiscoverAI from "./components/DiscoverAI/DiscoverAI";
import TakeTest from "./components/TakeTest/TakeTest";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover-ai" element={<DiscoverAI />} />
        <Route path="/take-test" element={<TakeTest />} />
      </Routes>
    </Router>
  );
};

export default App;
