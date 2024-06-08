import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export default function CurrentWeatherCard() {
  return (
    <Card variant="outlined" className="current-weather-card">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Banjara Hills
        </Typography>
        <Typography variant="h1" component="h1" className="current-temp-value">
          26 <sup>°C</sup>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          There will be mostly sunny skies. The high will reach 33° on this
          humid day.
        </Typography>
      </CardContent>
    </Card>
  );
}
