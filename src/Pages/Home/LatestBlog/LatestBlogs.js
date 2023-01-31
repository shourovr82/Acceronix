import React from 'react';
import './LatestBlogs.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import LatestBlogStyle from './LatestBlog.module.css'

// import required modules
import { Pagination } from "swiper";
// import photos 
import blog1 from '../../../Assets/LatestBlogs/blog1.jpg'
import blog2 from '../../../Assets/LatestBlogs/blog2.jpg'
import blog3 from '../../../Assets/LatestBlogs/blog3.jpg'
import blog4 from '../../../Assets/LatestBlogs/blog4.jpg'
import blog5 from '../../../Assets/LatestBlogs/blog5.jpg'

const LatestBlogs = () => {

  const blogdata = [
    {
      image: blog1
    },
    {
      image: blog2
    },
    {
      image: blog3
    },
    {
      image: blog4
    },
    {
      image: blog5
    },
  ]

  return (
    <div>
      <div className="py-10 flex items-center justify-start gap-6 ">
        <label className='cursor-pointer text-lg font-semibold'>Latest Blogs</label>
        <hr className='w-[80%] mt-2' />
      </div>
      <div>

        <>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={LatestBlogStyle.swiper}
          >
            {
              blogdata?.map((singleBlog, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <div>
                      <img src={singleBlog.image} alt="" />
                    </div>
                    <div className='py-3'>
                      <h3 className='text-start text-sm font-semibold'>Nike Internationalist - Gorge Green</h3>
                      <div className='flex justify-between'>
                        <div className='flex '>
                          <p className='text-xs'>January 28, 2023</p>
                        </div>
                        <div className='flex '>
                          <p className='text-xs'>Demo Posthemes</p>
                        </div>
                      </div>
                      <p className='text-xs text-start mt-3 text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero labore eius recusandae et quae reiciendis debitis, ea similique, libero perferendis quo dolore, nesciunt maxime distinctio voluptate quos provident minima.</p>
                    </div>

                  </div>
                </SwiperSlide>
              ))
            }


          </Swiper>
        </>



      </div>
    </div>
  );
};

export default LatestBlogs;




// {/*
//                     <div className="card 1st_card">
//                       <div className="card-content">
//                         <p className="location">London</p>
//                         <h1 className="degree">20<sup>o</sup>   </h1>
//                         <p className="weather-status">Thumber</p>
//                       </div>
//                     </div> */}