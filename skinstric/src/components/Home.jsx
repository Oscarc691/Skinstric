import React, { useEffect } from "react";
import Intro from "./Intro/intro";
const Home = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
      <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>
        <Intro />
        </div>
      </div>
    );
  };

  export default Home;