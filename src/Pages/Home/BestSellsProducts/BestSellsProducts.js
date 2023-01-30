import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import './BestSells.css'


// import required modules
import { Grid, Pagination } from "swiper";
import ProductsForMen, { allData } from '../Productsforpeople/ProductsForMen';
const BestSellsProducts = () => {
  return (
    <div className=''>
      <div class="py-10 flex items-center justify-start gap-6 ">
        <label className='cursor-pointer text-lg font-semibold'>Best Selling Products</label>
        <hr className='w-[60%] mt-2' />
      </div>
      <div className=''>
        {/* <>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}

            modules={[Pagination]}
            className="mySwiper w-[50%]"
          >
            {allData.map(singleData => (
              <SwiperSlide>
                <div>
                  <img src={singleData.image} alt="" />
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

export default BestSellsProducts;