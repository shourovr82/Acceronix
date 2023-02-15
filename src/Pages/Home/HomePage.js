import React from 'react';
import { Link } from 'react-router-dom';
import { BiCategory } from 'react-icons/bi';
import { FiChevronRight } from 'react-icons/fi';
import bannerAd1 from '../../Assets/BannerAd/bannerAd1.bmp';
import userLogo from '../../Assets/Logo/userLogo.png'
import LoginModal from '../Authentication/AuthenticationModal/LoginModal';
import bannerAd2 from '../../Assets/BannerAd/BannerAd2.jpg';
import bannerAd4 from '../../Assets/BannerAd/BannerAd4.png'
import bannerAd5 from '../../Assets/BannerAd/bannerAd5.jpg';
import brandLogo from '../../Assets/BannerAd/brand.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import FlashSell from './FlashSell/FlashSell';
import BestProducts from './BestProducts/BestProducts';

const HomePage = () => {
  return (
    <section className='max-w-7xl  mx-auto'>
      {/* category and menu sections */}
      <div className='grid grid-cols-12 pb-5 justify-center   '>

        <div className='col-span-2'>
          {/* Category Title */}
          <div>
            <h1 className='flex  text-white justify-center  bg-[#5736FD] items-center py-2 rounded-md gap-3  uppercase font-semibold'><span><BiCategory className='text-lg mt-1' /></span> Categories</h1>
          </div>
          {/* left categories items */}
          <div className='bg-white shadow-lg w-full  pl-4 py-2 pb-11'>
            <ul className='flex flex-col h-full gap-3.5'>
              <li className='font-semibold truncate text-sm'>Supermarket</li>
              <li className='font-semibold truncate text-sm'>TVs & Home Appliances</li>
              <li className='font-semibold truncate text-sm'>Mobiles & Tablets</li>
              <li className='font-semibold truncate text-sm'>Computers & Office</li>
              <li className='font-semibold truncate text-sm'>Electronic Devices & Gadgets</li>
              <li className='font-semibold truncate text-sm'>Sports & Travel</li>
              <li className='font-semibold truncate text-sm'>Men's Fashion</li>
              <li className='font-semibold truncate text-sm'>Health & Beauty</li>
              <li className='font-semibold truncate text-sm'>Women's Fashion</li>
              <li className='font-semibold truncate text-sm'>Home & Lifestyle</li>
              <li className='font-semibold truncate text-sm'>Mom, Baby & Kids</li>
              <li className='font-semibold truncate text-sm'>Motorcycles</li>
              <li className='font-semibold truncate text-sm'>Vouchers & Top ups</li>
            </ul>
          </div>
        </div>
        {/* middle content of banner */}
        <div className='col-span-8  '>
          {/* category items upper */}
          <ul className='flex bg-white   py-2 justify-between px-6  w-full  font-semibold'>
            <li>Coupons</li>
            <li>Mobiles</li>
            <li>Fashion</li>
            <li>Health & Beauty</li>
            <li>Mom & Baby</li>
            <li>Home Appliances</li>
          </ul>
          <div className=' bg-transparent border p-2  '>
            <>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                  clickable: true
                }}
                autoplay={true}
                effect={
                  'fade'
                }
                navigation={true}
                modules={[Pagination, EffectFade, Navigation, Autoplay]}
                className="mySwiper overflow-hidden"
              >
                <SwiperSlide>      <img className='object-contain w-full' src={bannerAd1} alt="" /></SwiperSlide>
                <SwiperSlide>      <img className='object-contain w-full' src={bannerAd1} alt="" /></SwiperSlide>
                <SwiperSlide>      <img className='object-contain w-full' src={bannerAd1} alt="" /></SwiperSlide>
                <SwiperSlide>      <img className='object-contain w-full' src={bannerAd1} alt="" /></SwiperSlide>
                <SwiperSlide>      <img className='object-contain w-full' src={bannerAd1} alt="" /></SwiperSlide>
                <SwiperSlide>      <img className='object-contain w-full' src={bannerAd1} alt="" /></SwiperSlide>
                <SwiperSlide>      <img className='object-contain w-full' src={bannerAd1} alt="" /></SwiperSlide>
                <SwiperSlide>      <img className='object-contain w-full' src={bannerAd1} alt="" /></SwiperSlide>
              </Swiper>
            </>
          </div>
          {/* middle bottom contents */}
          <div className='grid grid-cols-3 px-2 gap-2  justify-center text-center'>
            <div className='border bg-white'>
              <img src={bannerAd2} className='object-contain w-full' alt="" />
            </div>
            <div className='border bg-white'>
              <img src={bannerAd5} className='object-contain w-full' alt="" />
            </div>

            <div className='border bg-white'>
              <img src={bannerAd4} className='object-contain w-full' alt="" />
            </div>
          </div>
        </div>

        {/* right side content */}
        <div className=' col-span-2 flex  items-center flex-col'>
          {/* site details */}
          <div className='bg-white text-center px-2 pb-1'>
            <h5 className='text-center  font-bold'>Acceronix </h5>
            <p className='text-slate-400 text-xs  '>I would like to inform you that <span className='font-semibold  text-[#5736fd]'>Acceronix</span> site is developing soon</p>
          </div>

          {/* user info , login and sign up button */}

          <div className='bg-white w-full   pt-3 pb-5 border-t-4 border-[#5736fd]'>
            <div className='flex flex-col items-center gap-1'>
              <img className='w-20' src={userLogo} alt="" />
              <h2 className='text-sm font-bold'>Welcome to ACCERONIX</h2>
            </div>

            <div className='flex justify-center gap-3 mt-2'>
              <LoginModal />
              <Link to='/register' className='bg-[#5736fd] hover:bg-[#5033e0] rounded-lg px-5 text-white py-1'><button className='' type='button'>Sign Up</button></Link>
            </div>


          </div>

          {/* Whats new or new details from website */}

          <div className='w-full'>
            <div className='flex justify-between  items-center p-2'>
              <h5 className='text-sm font-semibold'>What's New?</h5>
              <Link className='flex items-center gap-2 text-[#5736fd] text-xs font-semibold border-2 border-[#5736fd] rounded-xl pl-2 pr-0.5 justify-between'>See More <span className='border rounded-full bg-[#5736fd]
               '><FiChevronRight className=' text-white text-sm' /></span> </Link>
            </div>
            {/* new notifications */}
            <div className='pl-5'>
              <ul className='text-sm list-disc font-medium text-[#333333]'>
                <li>
                  Acceronix  is developing
                </li>
                <li>
                  Acceronix  is developing
                </li>
                <li>
                  Acceronix  is developing
                </li>
                <li>
                  Acceronix  is developing
                </li>
              </ul>
            </div>
          </div>

          {/* no 1 shop brand */}
          <div className='w-full bg-white h-full shadow-lg flex items-center justify-center'>
            <img src={brandLogo} className="object-contain" alt="" />
          </div>
        </div>
      </div>


      {/* flash sell */}
      <div>
        <FlashSell />
      </div>
      {/* top brands, best of acceronix, new arrivals */}
      <div>
        <BestProducts />
      </div>
    </section>

  );
};

export default HomePage;


