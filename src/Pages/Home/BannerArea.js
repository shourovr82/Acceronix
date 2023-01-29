import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, EffectCoverflow, EffectCreative, EffectCube, EffectFade, EffectFlip, Navigation, Pagination } from 'swiper';
// Import Swiper styles
// import swiper style custom
import "swiper/css";
import "swiper/css/pagination";
import "./Swiperstyle.css";
import banner1 from '../../Assets/banner1.jpg'
import banner2 from '../../Assets/banner2.jpg'
import banner3 from '../../Assets/banner3.jpg'
import banner4 from '../../Assets/banner4.jpg'
import banner5 from '../../Assets/banner5.jpg'

// import photos


const BannerArea = () => {

  const allData = [
    {
      image: banner1
    },
    {
      image: banner2
    },
    {
      image: banner3
    },
    {
      image: banner4
    },
    {
      image: banner5
    },
  ]


  return (
    <div className=''>
      <>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 10500,
            disableOnInteraction: false,
          }}
          // effect={"fade"}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          navigation={true}
          // effect={"fade"}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper h-[420px] "
        >
          {allData && allData?.map(photodata =>
            <SwiperSlide>
              <div>
                <img src={photodata?.image} className=' object-contain  swiperimage' alt="" />
              </div>
            </SwiperSlide>
          )}
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



