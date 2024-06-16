import React, { useEffect, useRef } from "react";

import MorningSkyVid from "../../assets/videos/day-sky.mp4";
import EveningSkyVid from "../../assets/videos/evening-sky.mp4";
import NightSkyVid from "../../assets/videos/night-sky2.mp4";

import { useAppContext } from "../../hooks/useAppContext";

const BGVid = () => {
  const videoRef = useRef();

  const { timesOfDay, bgVidURL, setBgVidURL } = useAppContext();

  useEffect(() => {
    videoRef.current?.load();

    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      // setCurrentTheme(themes.morning);
      setBgVidURL(MorningSkyVid);
      console.log("morning");
    } else if (hour >= 12 && hour < 18) {
      // setCurrentTheme(themes.afternoon);
      setBgVidURL(MorningSkyVid);
      console.log("afternoon");
    } else if (hour >= 18 && hour < 21) {
      // setCurrentTheme(themes.evening);
      setBgVidURL(EveningSkyVid);
      console.log("evening");
    } else {
      // setCurrentTheme(themes.night);
      setBgVidURL(NightSkyVid);
      console.log("night");
    }
    // if (timesOfDay === "night") {
    //   setBgVidURL(NightSkyVid);
    //   console.log("bgVidURL:", bgVidURL);
    //   console.log("timesOfDay:", timesOfDay);
    // } else if (timesOfDay === "afternoon") {
    //   setBgVidURL("afternoonURL");
    //   console.log("bgVidURL:", bgVidURL);
    //   console.log("timesOfDay:", timesOfDay);
    // } else if (timesOfDay === "evening") {
    //   setBgVidURL(EveningSkyVid);
    //   console.log("bgVidURL:", bgVidURL);
    //   console.log("timesOfDay:", timesOfDay);
    // } else {
    //   setBgVidURL(MorningSkyVid);
    //   console.log("bgVidURL:", bgVidURL);
    //   console.log("timesOfDay:", timesOfDay);
    // }
  }, [bgVidURL]);

  return (
    <>
      <video autoPlay muted loop id="bgVid" ref={videoRef}>
        <source src={bgVidURL} type="video/mp4" />
      </video>
    </>
  );
};

export default BGVid;
