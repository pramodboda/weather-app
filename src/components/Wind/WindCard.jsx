import React from "react";

import CompassIcon from "../Icons/Compass";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function WindCard({ weather: { speed, gust, deg } }) {
  return (
    <div>
      <Box display="flex" justifyContent="space-between">
        <div>
          <Typography variant="body2">Wind Speed</Typography>
          <Typography variant="body2">{speed} km/h</Typography>
          <hr />
          <Typography variant="body2">Wind Gusts</Typography>
          <Typography variant="body2">{gust}</Typography>
        </div>
        <div>
          <Typography variant="body2">Wind Direction</Typography>
          <div>
            {deg}
            <CompassIcon />
          </div>
        </div>
      </Box>
    </div>
  );
}
