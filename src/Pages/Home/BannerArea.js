import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swiperstyle.css";
import { Autoplay, EffectCards, EffectCoverflow, EffectCreative, EffectFade, Navigation, Pagination } from 'swiper';

const BannerArea = () => {
  return (
    <div className='h-[60vh]'>
      <>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          crossFade={true}
          effect={"fade"}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, EffectFade, Autoplay, Navigation]}
          className="mySwiper h-3/4"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};
export default BannerArea;


// <>
//   <Swiper
//     slidesPerView={1}
//     slidesPerGroup={1}
//     loop={true}
//     loopFillGroupWithBlank={true}
//     pagination={{
//       clickable: true,
//     }}
//     navigation={true}
//     modules={[Pagination, Navigation]}
//     className="mySwiper"
//   >
//     <SwiperSlide>Slide 1</SwiperSlide>
//     <SwiperSlide>Slide 2</SwiperSlide>
//     <SwiperSlide>Slide 3</SwiperSlide>
//     <SwiperSlide>Slide 4</SwiperSlide>
//     <SwiperSlide>Slide 5</SwiperSlide>
//     <SwiperSlide>Slide 6</SwiperSlide>
//     <SwiperSlide>Slide 7</SwiperSlide>
//     <SwiperSlide>Slide 8</SwiperSlide>
//     <SwiperSlide>Slide 9</SwiperSlide>
//   </Swiper>
// </>



