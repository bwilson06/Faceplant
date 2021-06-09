import React from "react";
import Logo from "../components/Logo";
import { Button, ProgressBar } from "react-bootstrap";
const Home = () => {
  return (
    <div style={{ backgroundColor: "#282c34", height: "100vh" }}>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <h1 style={{color: 'white', marginRight: '10px', marginTop: '10px', marginBottom: '0px'}}><i class="fas fa-cog"></i></h1>
        </div>
        <div style={{margin: '0 auto'}}>
      <h1
        style={{
          color: "white",
          fontFamily: "Courier new, Sans serif",
          textAlign: "center",
          paddingBottom: '10px'
        }}
      >
        Black Earth, WI
      </h1>
      <h1
        style={{
          color: "white",
          fontFamily: "Courier new, Sans serif",
          textAlign: "center",
        }}
      >
        72˚
      </h1>
      </div>
      <div className="future-weather">
          <div style={{fontSize: '20px', fontFamily: 'Courier new, Sans serif', paddingTop: '10px'}}>
        <p>1am</p>
        <i class="fas fa-moon"></i>
        <p>72˚</p>
        </div>
        <div style={{fontSize: '20px', fontFamily: 'Courier new, Sans serif', paddingTop: '10px'}}>
        <p>2am</p>
        <i class="fas fa-cloud-moon"></i>
        <p>70˚</p>
        </div>
        <div style={{fontSize: '20px', fontFamily: 'Courier new, Sans serif', paddingTop: '10px'}}>
        <p>3am</p>
        <i class="fas fa-moon"></i>
        <p>70˚</p>
        </div>
        <div style={{fontSize: '20px', fontFamily: 'Courier new, Sans serif', paddingTop: '10px'}}>
        <p>4am</p>
        <i class="fas fa-cloud-moon"></i>
        <p>70˚</p>
        </div>
          
      </div>
      <div
        className="text-center"
        style={{ margin: "0 auto", top: "50%", transform: "translateY(10%)" }}
      >
        <Logo />
        <div style={{ width: "50%", margin: "0 auto", marginBottom: "40px" }}>
          <ProgressBar
            style={{ backgroundColor: "#00cc66 !important" }}
            now={100}
          />
        </div>
        <Button variant="outline-primary" size="lg" block>
          Give me Water!
        </Button>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          height: "8vh",
          width: "100%",
          backgroundColor: "#98C379",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "80%",
            justifyContent: "space-between",
            margin: "0 auto",
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#282c34",
          }}
        >
          <h1>
            <i class="fas fa-home"></i>
          </h1>
          <h1>
            <i class="fas fa-seedling"></i>
          </h1>
          <h1>
            <i class="fas fa-signal"></i>
          </h1>
          <h1>
            <i class="fas fa-gamepad"></i>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
