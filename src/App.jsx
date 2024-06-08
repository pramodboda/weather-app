import React, { useEffect } from "react";
import "./App.css";
import WeatherDashboard from "./pages/WeatherDashboard";

//Context
import { ColorModeContextProvider } from "./contexts/ColorModeContext";

import DaySkyVid from "./assets/videos/day-sky.mp4";

function App() {
  useEffect(() => {
    const playBg = () => {
      document.querySelector("#bgVid").play();
    };
    playBg();
  }, []);

  return (
    <>
      <video autoPlay muted loop id="bgVid">
        <source src={DaySkyVid} type="video/mp4" />
      </video>
      <ColorModeContextProvider>
        <WeatherDashboard className="weather-dashboard" />
      </ColorModeContextProvider>
    </>
  );
}

export default App;
