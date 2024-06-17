import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import CurrentWeatherCard from "../components/CurrentWeatherCard/CurrentWeatherCard";
import CommonCard from "../components/CommonCard/CommonCard";
// import DailyCard from "../components/DailyCard/DailyCard";
import DailyWeather from "../components/DailyWeather/DailyWeather";
import CompassIcon from "../components/Icons/Compass";
import Logo from "../components/Logo/Logo";
import Clock from "../components/Clock/Clock";
import Footer from "../components/Footer/Footer";

import { useAppContext } from "../hooks/useAppContext";
import BGVid from "../components/BGVid/BGVid";
// import Compass from "../components/Icons/Compass.jsx";

import getFormattedWeatherData from "../services/api/weatherService.js";

const { bgVidURL } = useAppContext;
// updateBg();

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
      <div>
        <CompassIcon />
      </div>
    </div>
  </Box>
);
export default function WeatherDashboard() {
  const [query, setQuery] = useState({ q: "banjara hills" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    await getFormattedWeatherData({
      ...query,
      units,
    }).then((data) => {
      setWeather(data);
      console.log("weather data: ", data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);
  // getWeather();
  return (
    <>
      <BGVid />
      <div className="container">
        <div className="weather-items">
          {weather && (
            <Grid container item spacing={2}>
              <Grid item xs={12} sm={12}>
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  // backgroundColor="#f9f9f9"
                  pt={2}
                  pb={2}
                >
                  <Logo />
                  <Clock weather={weather} />
                </Box>
              </Grid>

              <Grid item xs={12} sm={3}>
                <CurrentWeatherCard weather={weather} />
              </Grid>
              <Grid item xs={12} sm={9}>
                <Grid container item spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <DailyWeather weather={weather} />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <CommonCard
                      name="Today"
                      value="8"
                      msg="well meaning and kindly. a benevolent smile"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CommonCard name="Wind" content={windContent} />
                  </Grid>

                  <Grid item xs={6} sm={3}>
                    <CommonCard
                      name="UV Index"
                      value="8"
                      msg="well meaning and kindly. a benevolent smile"
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <CommonCard
                      name="Feels Like"
                      value="22"
                      msg="well meaning and kindly. a benevolent smile"
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <CommonCard
                      name="Visibility"
                      value="22"
                      msg="well meaning and kindly. a benevolent smile"
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <CommonCard
                      name="Humidity"
                      value="62%"
                      msg="well meaning and kindly. a benevolent smile"
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <CommonCard
                      name="Air Quality"
                      value="35"
                      valueDescription="Good"
                      msg="well meaning and kindly. a benevolent smile"
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <CommonCard
                      name="sunset and sunrise"
                      value="35"
                      valueDescription="Good"
                      msg="well meaning and kindly. a benevolent smile"
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <CommonCard
                      name="pressure"
                      value="35"
                      valueDescription="Good"
                      msg="well meaning and kindly. a benevolent smile"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  // backgroundColor="#f9f9f9"
                  pt={3}
                  pb={2}
                >
                  <Footer />
                </Box>
              </Grid>
            </Grid>
          )}
        </div>
      </div>
    </>
  );
}
