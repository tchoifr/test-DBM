import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "../sass/carousel.scss";

const Carousel = () => {
  return (
    <div className="container-carousel">
      <Swiper
        // Install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3.4}
        navigation={false} // Disable navigation arrows
        pagination={{ clickable: false }} // Disable pagination dots
        scrollbar={{ draggable: true }} // Enable scrollbar
      >
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl flex items-end justify-center bg-image-carousel1 p-4">
            <span className="text-3xl font-semibold text-white  ">
              Bains intérieurs
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl flex items-end justify-center bg-image-carousel2 p-4">
            <span className="text-3xl font-semibold text-white">
              Bains extérieurs
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl flex items-end justify-center bg-image-carousel3 p-4">
            <span className="text-3xl font-semibold text-white ">
              Sauna & Hammam
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl flex items-end justify-center bg-image-carousel4 p-4"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
