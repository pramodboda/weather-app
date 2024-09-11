import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import DailyWeather_XS from "../DailyWeather_XS/DailyWeather_XS";

import "./CurrentWeatherCard.css";

export default function CurrentWeatherCard({
  weather,
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
        <Typography sx={{ fontSize: 16 }} gutterBottom>
          {name}, {country}
        </Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          // justifyContent={"center"}
          sx={{ marginTop: "1rem" }}
        >
          <img src={icon} alt={details} className="current-icon" />
          <Box>
            <Typography
              variant="h1"
              component="h1"
              className="current-temp-value"
              sx={{ fontSize: "72px", fontWeight: 400 }}
            >
              {`${temp.toFixed()}`}°
            </Typography>
            <Chip label={details} size="small" />
          </Box>
        </Box>
        <Divider />
        <Box sx={{ py: 1.5 }}>
          <Typography
            sx={{ lineHeight: "1.3", mb: "0.5rem" }}
            component="p"
            variant="overline"
            color="text.secondary"
            gutterBottom
          >
            5 Day forecast
          </Typography>
          <DailyWeather_XS weather={weather} />
        </Box>

        <Typography variant="body2">
          There will be mostly sunny skies. The high will reach 33° on this
          humid day.
        </Typography>
      </CardContent>
    </Card>
  );
}
