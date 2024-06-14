import React, { useEffect } from "react";
import "./App.css";
import WeatherDashboard from "./pages/WeatherDashboard";

// import getTimesOfDay from "./utils/getTimesOfDay";
// getTimesOfDay();

//Context
import { ColorModeContextProvider } from "./contexts/ColorModeContext";

import AppContextProvider from "./contexts/AppContext/AppContextProvider";

function App() {
  useEffect(() => {
    const playBg = () => {
      document.querySelector("#bgVid").play();
    };
    playBg();
  }, []);

  return (
    <>
      <AppContextProvider>
        <ColorModeContextProvider>
          <WeatherDashboard className="weather-dashboard" />
        </ColorModeContextProvider>
      </AppContextProvider>
    </>
  );
}

export default App;
