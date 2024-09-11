import React, { useRef, useState } from "react";
import { useAppContext } from "../../hooks/useAppContext";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import "./FeatureLocations.css";

// import required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Navigation } from "swiper/modules";

import featureLocations_data from "../../services/api/featureLocations_data";

import Button from "@mui/material/Button";

export default function FeatureLocations() {
  const { setQuery } = useAppContext();
  return (
    <>
      <Swiper
        className="feature-locations"
        slidesPerView={6}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={{
          clickable: true,
        }}
        modules={[Navigation]}
      >
        {featureLocations_data.map((loc) => (
          <SwiperSlide key={loc.name}>
            <Button
              variant="outlined"
              aria-label="location"
              onClick={() => {
                setQuery({ q: loc.name });
              }}
            >
              {loc.name}
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
