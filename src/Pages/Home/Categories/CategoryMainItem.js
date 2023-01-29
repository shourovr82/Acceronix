import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const CategoryMainItem = () => {
  return (

    <div className='w-full gap-5 flex flex-col  items-start p-10 justify-center main-category-bg' >
      <div>
        <p className='uppercase text-xs text-[#1f2aa1] font-semibold'>summer sale upto 70%</p>
        <h1 className='text-2xl font-bold'>Polaraid i-Type <br /> Instant Camera</h1>
        <p className='text-slate-500 font-semibold'>Save and shoot straight from the box <br /> with three packs of iconic Polroid</p>
      </div>
      <button
        className='border bg-gradient-to-r from-[#633ed9] to-[#200d89] text-white p-2   font-semibold  rounded-md uppercase px-5'>Shop Now  </button>
    </div>

  );
};

export default CategoryMainItem;