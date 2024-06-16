import React, { useEffect } from "react";
import "./App.css";
import WeatherDashboard from "./pages/WeatherDashboard";

// import getTimesOfDay from "./utils/getTimesOfDay";
// getTimesOfDay();

//Context
import { ThemeProvider } from "./contexts/ThemeContext";

import AppContextProvider from "./contexts/AppContext/AppContextProvider";

function App() {
  return (
    <>
      <AppContextProvider>
        <ThemeProvider>
          <WeatherDashboard className="weather-dashboard" />
        </ThemeProvider>
      </AppContextProvider>
    </>
  );
}

export default App;
