import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";
import Logo from "../components/Logo";

const Splash = () => {
  let [progress, setProgress] = useState(0);
  useEffect(() => {
    setInterval(function () {
      setProgress((progress += 1));
    }, 10);
  }, []);

  if (progress < 200) {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <h1
            style={{
              fontFamily: "Poppins",
              letterSpacing: "6px",
              padding: "2px",
            }}
          >
            Faceplant
          </h1>
          <div style={{ width: "40%", padding: "10px" }}>
            <ProgressBar striped variant="info" animated now={progress} />
          </div>
        </header>
      </div>
    );
  } else {
    return <Redirect to="/home" />;
  }
};

export default Splash;
