import React, { useState } from "react";

import AppContext from "./AppContext";
const AppContextProvider = ({ children }) => {
  const [timesOfDay, setTimesOfDay] = useState("night");

  const [bgVidURL, setBgVidURL] = useState("../../assets/videos/day-sky.mp4");

  return (
    <AppContext.Provider
      value={{ timesOfDay, setTimesOfDay, bgVidURL, setBgVidURL }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
