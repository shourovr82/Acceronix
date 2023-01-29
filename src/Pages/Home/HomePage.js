import React from 'react';
import BannerArea from './BannerArea';

const HomePage = () => {
  return (
    <div className=' bg-white '>
      <div className='flex flex-col mt-10 gap-3 py-2 border'>
        <BannerArea />
      </div>
    </div>
  );
};

export default HomePage;




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