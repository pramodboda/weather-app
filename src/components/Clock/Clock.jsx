import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

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

  //   const hours = new Date();
  //   const meridiem = hours.getHours() >= 12 ? "PM" : "AM";
  //   let timeOfDay;

  //   if (hours < 12 && meridiem === "PM") {
  //     timeOfDay = "morning";
  //   } else if (hours < 17 && meridiem === "PM") {
  //     timeOfDay = "afternoon";
  //   } else if (hours < 20 && meridiem === "PM") {
  //     timeOfDay = "evening";
  //   } else if (hours < 5 && meridiem === "AM") {
  //     timeOfDay = "night";
  //   }

  let data = [
    [0, 4, "Good night"],
    [5, 11, "Good morning"], //Store messages in an array
    [12, 17, "Good afternoon"],
    [18, 24, "Good evening"],
    [20, 0, "Good night"],
  ];

  let hr = new Date().getHours();

  for (var i = 0; i < data.length; i++) {
    if (hr >= data[i][0] && hr <= data[i][1]) {
      console.log(data[i][2]);
    }
  }

  //   ======= End =======

  return (
    <Typography
      component="h5"
      variant="h5"
      sx={{ color: "#f9f9f9", "text-shadow": "1px 2px 2px rgba(0,0,0,0.3)" }}
    >
      {/* ===== default ===== */}
      {/* {currentTime.toLocaleTimeString()} */}
      {currentTime.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
      })}
      {/* Good {timeOfDay}! */}
    </Typography>
  );
}
