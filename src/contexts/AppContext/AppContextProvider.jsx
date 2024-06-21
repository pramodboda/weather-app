import React, { useState } from "react";

import AppContext from "./AppContext";
const AppContextProvider = ({ children }) => {
  const [query, setQuery] = useState({ q: "banjara hills" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const [currentTime, setCurrentTime] = useState(new Date());
  const [timesOfDay, setTimesOfDay] = useState("night");
  const [bgVidURL, setBgVidURL] = useState("../../assets/videos/day-sky.mp4");

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        units,
        setUnits,
        weather,
        setWeather,
        currentTime,
        setCurrentTime,
        timesOfDay,
        setTimesOfDay,
        bgVidURL,
        setBgVidURL,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;

// export const useAppContext = () => React.useContext(AppContext);
