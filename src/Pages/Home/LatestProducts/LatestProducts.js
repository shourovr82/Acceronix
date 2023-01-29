import React from 'react';
import latestproduct1 from '../../../Assets/latestproducts/latestproduct1.jpg'
import latestproduct2 from '../../../Assets/latestproducts/latestproduct2.jpg'
import latestproduct3 from '../../../Assets/latestproducts/latestproduct3.jpg'
import './Latestproducts.css'

const LatestProducts = () => {
  return (
    <div >
      <div className='py-5'>
        <h2 className='text-3xl font-semibold text-center'>Latest Products </h2>
      </div>
      <div className='flex justify-between gap-3    '>
        <div className='overflow-hidden '><img className='h-full  w-full hover:scale-105 latestproductimg' src={latestproduct1} alt="" /></div>
        <div className='overflow-hidden '><img className='h-full  w-full hover:scale-105 latestproductimg' src={latestproduct2} alt="" /></div>
        <div className='overflow-hidden '><img className='h-full  w-full hover:scale-105 latestproductimg' src={latestproduct3} alt="" /></div>
      </div>
    </div>

  );
};

export default LatestProducts;