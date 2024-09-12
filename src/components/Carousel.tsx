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
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        navigation={false}
        pagination={{ clickable: false }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 3.4,
          },
          768: {
            slidesPerView: 2.2,
          },
          480: {
            slidesPerView: 1.2,
          },
        }}
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
