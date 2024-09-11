import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
// import { useAppContext } from "../../contexts/AppContext/AppContext";
import { useAppContext } from "../../hooks/useAppContext";

export default function Clock({ weather: { formattedLocalTime } }) {
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
        {/* {currentTime.toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
        })} */}
        {/* Good {timeOfDay}! */}
        {formattedLocalTime.slice(-8)}
      </Typography>
    </>
  );
}
