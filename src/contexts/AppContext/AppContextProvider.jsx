import React, { useState } from "react";

import AppContext from "./AppContext";
const AppContextProvider = ({ children }) => {
  const [query, setQuery] = useState({ q: "banjara hills" });
  const [timesOfDay, setTimesOfDay] = useState("night");
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

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
