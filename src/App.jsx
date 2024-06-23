import React, { useEffect } from "react";
import "./App.css";
import WeatherDashboard from "./pages/WeatherDashboard";

// importing contexts
import AppContextProvider from "./contexts/AppContext/AppContextProvider";
import { ThemeContextProvider } from "./contexts/ThemeContextProvider";

function App() {
  return (
    <>
      <AppContextProvider>
        <ThemeContextProvider>
          <WeatherDashboard className="weather-dashboard" />
        </ThemeContextProvider>
      </AppContextProvider>
    </>
  );
}

export default App;
