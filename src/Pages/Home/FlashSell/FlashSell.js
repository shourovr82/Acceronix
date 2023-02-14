import React from 'react';
import flashSellImg from '../../../Assets/Home/FlashSell/flashSell.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation } from "swiper";

// import photos

import flashSellItem1 from '../../../Assets/Home/FlashSell/flashsellitem1.gif';
import flashSellItem2 from '../../../Assets/Home/FlashSell/flashsellitem2.gif';
import flashSellItem3 from '../../../Assets/Home/FlashSell/flashsellitem3.gif';
import flashSellItem4 from '../../../Assets/Home/FlashSell/flashsellitem4.gif';
import flashSellItem5 from '../../../Assets/Home/FlashSell/flashsellitem5.gif';
import flashSellItem6 from '../../../Assets/Home/FlashSell/flashsellitem6.gif';
import flashSellItem7 from '../../../Assets/Home/FlashSell/flashsellitem7.gif';
import flashSellItem8 from '../../../Assets/Home/FlashSell/flashsellitem8.gif';
import flashSellItem9 from '../../../Assets/Home/FlashSell/flashsellitem9.gif';

const FlashSell = () => {
  const flashSellItems = [
    {
      image: flashSellItem1,
      title: 'Frolina Bath towel 30x60" Stripe01 Set of 2',
      price: '455 $',
      prevPrice: '750',
      decreased: '-39% *',
      stock: '10 available'
    },
    {
      image: flashSellItem2,
      title: 'Frolina Bath towel 30x60" Stripe01 Set of 2',
      price: '455 $',
      prevPrice: '750',
      decreased: '-39% *',
      stock: '10 available'
    },
    {
      image: flashSellItem3,
      title: 'Frolina Bath towel 30x60" Stripe01 Set of 2',
      price: '455 $',
      prevPrice: '750',
      decreased: '-39% *',
      stock: '10 available'
    },
    {
      image: flashSellItem4,
      title: 'Frolina Bath towel 30x60" Stripe01 Set of 2',
      price: '455 $',
      prevPrice: '750',
      decreased: '-39% *',
      stock: '10 available'
    },
    {
      image: flashSellItem5,
      title: 'Frolina Bath towel 30x60" Stripe01 Set of 2',
      price: '455 $',
      prevPrice: '750',
      decreased: '-39% *',
      stock: '10 available'
    },
    {
      image: flashSellItem6,
      title: 'Frolina Bath towel 30x60" Stripe01 Set of 2',
      price: '455 $',
      prevPrice: '750',
      decreased: '-39% *',
      stock: '10 available'
    },
    {
      image: flashSellItem7,
      title: 'Frolina Bath towel 30x60" Stripe01 Set of 2',
      price: '455 $',
      prevPrice: '750',
      decreased: '-39% *',
      stock: '10 available'
    },
    {
      image: flashSellItem8,
      title: 'Frolina Bath towel 30x60" Stripe01 Set of 2',
      price: '455 $',
      prevPrice: '750',
      decreased: '-39% *',
      stock: '10 available'
    },
    {
      image: flashSellItem9,
      title: 'Frolina Bath towel 30x60" Stripe01 Set of 2',
      price: '455 $',
      prevPrice: '750',
      decreased: '-39% *',
      stock: '10 available'
    },
  ]
  return (
    <section className='grid grid-cols-6 h-[300px]'>
      <div className='col-span-1'>
        <img className='object-cover h-[300px] w-full' src={flashSellImg} alt="" />
      </div>
      <div className='col-span-5 border'>
        <>
          <Swiper
            slidesPerView={5}
            autoplay={true}
            spaceBetween={2}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper overflow-hidden"
          >
            {
              flashSellItems && flashSellItems.map(flashItem => <SwiperSlide>
                <div className='p-3 flex flex-col items-center'>
                  <div>
                    <img src={flashItem?.image} alt="" />
                  </div>

                  <div className='text-start'>
                    <h4 className='text-sm '>{flashItem?.title}</h4>
                    <h5 className='font-semibold text-xl text-[#5736fd]'>{flashItem?.price}</h5>
                    <h6 className='text-sm font-semibold'><span className='text-slate-400 line-through'>${flashItem?.prevPrice}</span> <span className=' ml-3 text-[#5736fd]'>{flashItem?.decreased}</span></h6>
                    <p className='text-sm border rounded-md px-3 bg-[#cbcbcb] mt-3'>{flashItem?.stock}</p>
                  </div>
                </div>
              </SwiperSlide>)
            }

          </Swiper>
        </>
      </div>
    </section>
  );
};

export default FlashSell;