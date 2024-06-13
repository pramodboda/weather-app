import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import CommonCard from "../CommonCard/CommonCard";
import DailyCard from "../DailyCard/DailyCard";

function DailyWeather() {
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
        <SwiperSlide>
          <DailyCard day="Today" temp={27} />
          {/* <CommonCard
            name="Today"
            value="8"
            msg="well meaning and kindly. a benevolent smile"
          /> */}
        </SwiperSlide>
        <SwiperSlide>
          <DailyCard day="Mon" temp={27} />
        </SwiperSlide>
        <SwiperSlide>
          <DailyCard day="Tue" temp={27} />
        </SwiperSlide>
        <SwiperSlide>
          <DailyCard day="Wed" temp={27} />
        </SwiperSlide>
        <SwiperSlide>
          <DailyCard day="Thu" temp={27} />
        </SwiperSlide>
        <SwiperSlide>
          <DailyCard day="Fri" temp={27} />
        </SwiperSlide>
        <SwiperSlide>
          <DailyCard day="Sat" temp={27} />
        </SwiperSlide>
        <SwiperSlide>
          <DailyCard day="Sun" temp={27} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default DailyWeather;
