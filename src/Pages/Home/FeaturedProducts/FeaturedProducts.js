import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from 'swiper';
import ProductsForMen, { allData } from '../Productsforpeople/ProductsForMen';

const FeaturedProducts = () => {
  console.log(allData)
  const newsrv =
    allData.map(f => console.log(f))


  return (
    <div className=' overflow-hidden'>
      <div class="py-10 flex items-center justify-start gap-6 ">
        <label className='cursor-pointer text-lg font-semibold'>Featured Products</label>
        <hr className='w-[60%] mt-2' />
      </div>
      <div>
        {/* <>
          <Swiper
            slidesPerView={2}
            spaceBetween={0}
            modules={[Pagination]}
            className="mySwiper border "
          >
            {allData.map(singleData => (
              <SwiperSlide className='border'>

                <div className='text-start '>
                  <h1 className='text-sm font-semibold'>Nike air huarache ultra</h1>
                  <p className='text-xs'>Fashion Manufacturer</p>
                  <div className='flex'> <span className='text-sm font-semibold'>$255.00</span> <span className='line-through text-xs text-slate-400'>$300.00</span></div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </> */}
        <ProductsForMen roundedphoto={'rounded-full'} perview={3} />
      </div>
    </div>
  );
};

export default FeaturedProducts;