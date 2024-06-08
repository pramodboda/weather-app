import React from "react";

// import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import CommonCard from "../components/CommonCard/CommonCard";
import CurrentWeatherCard from "../components/CurrentWeatherCard/CurrentWeatherCard";

import CompassIcon from "../assets/icons/compass.svg";
const windContent = (
  <Box display="flex" justifyContent="space-between">
    <div>
      <Typography variant="body2">Wind Speed</Typography>
      <Typography variant="body2">34</Typography>
      <hr />
      <Typography variant="body2">Wind Gusts</Typography>
      <Typography variant="body2">64</Typography>
    </div>
    <div>
      <Typography variant="body2">Wind Direction</Typography>
      <div>{CompassIcon}</div>
    </div>
  </Box>
);
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="weather-items">
          <Grid container item spacing={2}>
            <Grid item xs={12} sm={3}>
              <CurrentWeatherCard />
            </Grid>
            <Grid item xs={12} sm={9}>
              <Grid container item spacing={2}>
                <Grid item xs={12} sm={6}>
                  <CommonCard name="Wind" content={windContent} />
                </Grid>

                <Grid item xs={12} sm={3}>
                  <CommonCard
                    name="UV Index"
                    value="8"
                    msg="well meaning and kindly. a benevolent smile"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <CommonCard
                    name="Feels Like"
                    value="22"
                    msg="well meaning and kindly. a benevolent smile"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <CommonCard
                    name="Visibility"
                    value="22"
                    msg="well meaning and kindly. a benevolent smile"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <CommonCard
                    name="Humidity"
                    value="62%"
                    msg="well meaning and kindly. a benevolent smile"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <CommonCard
                    name="Air Quality"
                    value="35"
                    valueDescription="Good"
                    msg="well meaning and kindly. a benevolent smile"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <CommonCard
                    name="sunset and sunrise"
                    value="35"
                    valueDescription="Good"
                    msg="well meaning and kindly. a benevolent smile"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <CommonCard
                    name="pressure"
                    value="35"
                    valueDescription="Good"
                    msg="well meaning and kindly. a benevolent smile"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
