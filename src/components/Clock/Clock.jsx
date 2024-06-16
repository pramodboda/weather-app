import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
// import { useAppContext } from "../../contexts/AppContext/AppContext";
import { useAppContext } from "../../hooks/useAppContext";

export default function Clock() {
  // const [] = useAppContext();

  const { currentTime, setCurrentTime, timesOfDay, setTimesOfDay } =
    useAppContext();

  //   ======= Day of date =======

  // Early morning: 5 am to 8:29 am
  // Mid-morning: 8:30 am to 10:29 am
  // Late morning: 10:30 am to 11:59 am
  // Early afternoon: 12 pm to 1:59 pm
  // Mid-afternoon: 2 pm to 3:59 pm
  // Late afternoon: 4 pm to 5:59 pm
  // Early evening: 6 pm to 7:59 pm
  // Late evening: 8 pm to 9:59 pm
  // Night: 10 pm to 12:59 am
  // Late night: 1 am to 4:59 am

  let timesOfDay_Data = [
    [0, 4, "Good night", "night"],
    [5, 11, "Good morning", "morning"], //Store messages in an array
    [12, 17, "Good afternoon", "afternoon"],
    [18, 24, "Good evening", "evening"],
    [20, 0, "Good night", "night"],
  ];

  let hr = new Date().getHours();
  let timesOfDayValue;
  for (var i = 0; i < timesOfDay_Data.length; i++) {
    if (hr >= timesOfDay_Data[i][0] && hr <= timesOfDay_Data[i][1]) {
      // console.log(data[i][2]);
      timesOfDayValue = timesOfDay_Data[i][3];
    }
  }

  //   ======= End =======

  // useEffect - It runs after the component renders and can be used to fetch data, update the DOM, or set up event listeners.
  useEffect(() => {
    setTimesOfDay(timesOfDayValue);
    // setTimesOfDay("morning");
    // setTimesOfDay("evening");
    // setTimesOfDay("night");
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {/* {timesOfDay} */}
      <Typography
        component="h5"
        variant="h5"
        sx={{ color: "#f9f9f9", textShadow: "1px 2px 2px rgba(0,0,0,0.3)" }}
      >
        {/* ===== default ===== */}
        {/* {currentTime.toLocaleTimeString()} */}
        {currentTime.toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
        })}
        {/* Good {timeOfDay}! */}
      </Typography>
    </>
  );
}
