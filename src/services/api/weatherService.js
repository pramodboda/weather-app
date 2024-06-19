import { DateTime } from "luxon";

const API_KEY = "e21c99a4129f3d0c6bb6ebd20ac91bea";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  console.log(url);
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

// Helper function
const iconURL_FromCode = (icon) =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;
const formatToLocalTime = (
  secs,
  offset,
  format = "cccc, dd LLL yyyy' | Local time:'hh:mm a"
) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

const formatCurrent = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed, gust, deg },
    timezone,
  } = data;

  const { main: details, icon } = weather[0];
  const formattedLocalTime = formatToLocalTime(dt, timezone);

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    country,
    sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"),
    sunset: formatToLocalTime(sunset, timezone, "hh:mm a"),
    speed: speed.toFixed(),
    gust,
    deg,
    details,
    icon: iconURL_FromCode(icon),
    formattedLocalTime,
    dt,
    timezone,
    lat,
    lon,
  };
};

const formatForecastWeather = (secs, offset, data) => {
  //hourly
  const hourly = data
    .filter((forecast) => forecast.dt > secs)
    .slice(0, 5)
    .map((forecast) => ({
      temp: forecast.main.temp,
      title: formatToLocalTime(forecast.dt, offset, "hh:mm a"),
      icon: iconURL_FromCode(forecast.weather[0].icon),
      date: forecast.dt_txt,
    }));

  // daily
  const daily = data
    .filter((forcast) => forcast.dt_txt.slice(-8) === "00:00:00")
    .map((forcast) => ({
      temp: forcast.main.temp,
      title: formatToLocalTime(forcast.dt, offset, "ccc"),
      icon: iconURL_FromCode(forcast.weather[0].icon),
      data: forcast.dt_txt,
    }));

  return { hourly, daily };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrent);

  const { dt, lat, lon, timezone } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units,
  }).then((data) => formatForecastWeather(dt, timezone, data.list));

  console.log(formattedCurrentWeather);
  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

export default getFormattedWeatherData;
