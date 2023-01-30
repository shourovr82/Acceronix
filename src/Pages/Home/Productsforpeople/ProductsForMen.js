import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './ProductsSwiper.module.css'
// import required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { BsBoxArrowUpRight, BsCart4, BsFillCartPlusFill } from 'react-icons/bs';
import { FcViewDetails } from 'react-icons/fc';
import { CgMoreVerticalO } from 'react-icons/cg';


import productsmen1 from '../../../Assets/Products/Productsformen/productsmen1.jpg'
import productsmen2 from '../../../Assets/Products/Productsformen/productsmen2.jpg'
import productsmen3 from '../../../Assets/Products/Productsformen/productsmen3.jpg'
import productsmen4 from '../../../Assets/Products/Productsformen/productsmen4.jpg'
import productsmen5 from '../../../Assets/Products/Productsformen/productsmen5.jpg'
import productsmen6 from '../../../Assets/Products/Productsformen/productsmen6.jpg'
import productsmen7 from '../../../Assets/Products/Productsformen/productsmen7.jpg'
import productsmen8 from '../../../Assets/Products/Productsformen/productsmen8.jpg'
import productsmen9 from '../../../Assets/Products/Productsformen/productsmen9.jpg'
import productsmen10 from '../../../Assets/Products/Productsformen/productsmen10.jpg'
import productsmen11 from '../../../Assets/Products/Productsformen/productsmen11.jpg'
import productsmen12 from '../../../Assets/Products/Productsformen/productsmen12.jpg'
import productsmen13 from '../../../Assets/Products/Productsformen/productsmen13.jpg'
import productsmen14 from '../../../Assets/Products/Productsformen/productsmen14.jpg'
import productsmen15 from '../../../Assets/Products/Productsformen/productsmen15.jpg'
import productsmen16 from '../../../Assets/Products/Productsformen/productsmen16.jpg'
import productsmen17 from '../../../Assets/Products/Productsformen/productsmen17.jpg'
import productsmen18 from '../../../Assets/Products/Productsformen/productsmen18.jpg'
import productsmen19 from '../../../Assets/Products/Productsformen/productsmen19.jpg'
import productsmen20 from '../../../Assets/Products/Productsformen/productsmen20.jpg'
import productsmen21 from '../../../Assets/Products/Productsformen/productsmen21.jpg'
import productsmen22 from '../../../Assets/Products/Productsformen/productsmen22.jpg'
import productsmen23 from '../../../Assets/Products/Productsformen/productsmen23.jpg'
import productsmen24 from '../../../Assets/Products/Productsformen/productsmen24.jpg'
import productsmen25 from '../../../Assets/Products/Productsformen/productsmen25.jpg'
import productsmen26 from '../../../Assets/Products/Productsformen/productsmen26.jpg'
import productsmen27 from '../../../Assets/Products/Productsformen/productsmen27.jpg'




const ProductsForMen = () => {
  const [showButtons, setShowButtons] = useState(false)
  const allData = [
    { image: productsmen1 },
    { image: productsmen2 },
    { image: productsmen3 },
    { image: productsmen4 },
    { image: productsmen4 },
    { image: productsmen5 },
    { image: productsmen6 },
    { image: productsmen7 },
    { image: productsmen8 },
    { image: productsmen9 },
    { image: productsmen10 },
    { image: productsmen11 },
    { image: productsmen12 },
    { image: productsmen13 },
    { image: productsmen14 },
    { image: productsmen15 },
    { image: productsmen16 },
    { image: productsmen17 },
    { image: productsmen18 },
    { image: productsmen19 },
    { image: productsmen20 },
    { image: productsmen21 },
    { image: productsmen22 },
    { image: productsmen23 },
    { image: productsmen24 },
    { image: productsmen25 },
    { image: productsmen26 },
    { image: productsmen27 }
  ]

  const setSrv = (data) => {
    console.log(data)
  }

  return (
    <div className='relative'>
      <>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}

          navigation={true}
          // pagination={{ clickable: true }}

          modules={[Pagination, Navigation, Scrollbar, A11y]}


          className="mySwiper"
        >

          {
            allData && allData?.map(singleProduct =>
              <SwiperSlide

              >
                <div className='group   overflow-hidden transition ease-in-out delay-150 justify-center ' >
                  <div className='group-hover:border cartsystem  p-3 ' >
                    <div className='overflow-hidden'>
                      <img
                        className="scale-100 hover:scale-105 ease-in duration-500"
                        src={singleProduct.image} alt='' />
                      <hr className=' my-3' />
                      <div className='text-start flex  flex-col gap-2'>
                        <h4 className='uppercase text-sm font-bold'>Nike zoom kdx ep</h4>
                        <p className='text-xs  text-slate-500'>Fashion Manufacturer</p>
                        <div className='flex items-center gap-3'><p className='font-semibold'>$270.00</p>
                          <span className='line-through text-xs text-slate-500'>$300.30</span>
                        </div>
                        <div className=' -mt-10 group-hover:mt-0  group-hover:block opacity-0 group-hover:opacity-100 transition-all duration-500   justify-center items-center ' >
                          <hr className='my-2' />
                          <div className='flex  items-center justify-between'>
                            <div>
                              <button className='flex hover:text-red-600 items-center  gap-3'>
                                <span><BsFillCartPlusFill title='Add To Cart' /></span>
                                <h4 className='text-xs'>Add to Cart</h4>
                              </button>
                            </div>
                            <div className='flex items-center   gap-3'>
                              <span><CgMoreVerticalO className='hover:text-red-600' title='View Details' /></span>
                              <span><BsBoxArrowUpRight className='hover:text-red-600' title='Quick View' /></span>
                            </div>

                          </div>
                        </div>


                      </div>
                      <div>








                      </div>


                    </div>
                  </div>
                </div>

              </SwiperSlide>
            )
          }
        </Swiper>
      </>
    </div >
  );
};

export default ProductsForMen;