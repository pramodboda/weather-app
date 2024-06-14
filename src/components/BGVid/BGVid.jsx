import React, { useEffect, useRef } from "react";

import MorningSkyVid from "../../assets/videos/day-sky.mp4";
import NightSkyVid from "../../assets/videos/night-sky2.mp4";

import { useAppContext } from "../../hooks/useAppContext";

const BGVid = () => {
  const videoRef = useRef();

  const { timesOfDay, bgVidURL, setBgVidURL } = useAppContext();

  useEffect(() => {
    videoRef.current?.load();
    if (timesOfDay === "night") {
      setBgVidURL(NightSkyVid);
      console.log("bgVidURL:", bgVidURL);
      console.log("timesOfDay:", timesOfDay);
    } else if (timesOfDay === "afternoon") {
      setBgVidURL("afternoonURL");
      console.log("bgVidURL:", bgVidURL);
      console.log("timesOfDay:", timesOfDay);
    } else if (timesOfDay === "evening") {
      setBgVidURL("afternoonURL");
      console.log("bgVidURL:", bgVidURL);
      console.log("timesOfDay:", timesOfDay);
    } else {
      setBgVidURL(MorningSkyVid);
      console.log("bgVidURL:", bgVidURL);
      console.log("timesOfDay:", timesOfDay);
    }
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
