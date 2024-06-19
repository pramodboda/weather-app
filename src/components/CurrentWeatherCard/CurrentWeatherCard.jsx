import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CurrentWeatherCard({
  weather: {
    name,
    country,
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
  },
}) {
  return (
    <Card variant="outlined" className="current-weather-card">
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {name}, {country}
        </Typography>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <img src={icon} alt={details} />
          <Typography
            variant="h1"
            component="h1"
            className="current-temp-value"
            sx={{ fontSize: "72px" }}
          >
            {`${temp.toFixed()}`} <sup>°</sup>
          </Typography>
        </Box>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {details}
        </Typography>
        <Typography variant="body2">
          There will be mostly sunny skies. The high will reach 33° on this
          humid day.
        </Typography>
      </CardContent>
    </Card>
  );
}
