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

const getTimesOfDay = (dt) => {
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

  const hour = new Date(dt * 1000).getHours();
  if (hour >= 5 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 18) {
    return "afternoon";
  } else if (hour >= 18 && hour < 21) {
    return "evening";
  } else {
    return "night";
  }
};

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
  const timesOfDay = getTimesOfDay(dt);
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
    timesOfDay,
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
