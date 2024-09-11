import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import DailyCard_XS from "../DailyCard_XS/DailyCard_XS";

function DailyWeather_XS({ weather: { daily } }) {
  // console.log("dataaaaa:", data);
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={2}
        freeMode={true}
        // pagination={{
        //   clickable: false,
        // }}
        pagination={false}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {daily.map((day) => (
          <SwiperSlide key={day.title}>
            <DailyCard_XS
              day={day.title}
              icon={day.icon}
              temp={`${day.temp.toFixed()}` + "°"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default DailyWeather_XS;
