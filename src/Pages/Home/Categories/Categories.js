import React from 'react';
import CategoriesMenu from './CategoriesMenu';
import CategoryMainItem from './CategoryMainItem';

const Categories = () => {
  return (
    <div className='flex  gap-3'>
      <div className='w-[20%]'><CategoriesMenu /></div>

      <div className="grid  w-full grid-cols-5 gap-3">
        <div className="col-span-3">
          <CategoryMainItem />
        </div>
        {/* right category */}
        <div className=" flex flex-col gap-3 h-full  col-span-2 ">
          <div className=' categorysecond h-full p-2 px-3'>
            <div className='flex gap-5 flex-col '>
              <h1 className='text-2xl font-bold'>JBL Music <br /> Speaker</h1>
              <div>
                <p className='text-sm text-slate-600 font-semibold'>Weekend Discount</p>
                <div className='flex items-center gap-5'>
                  <p className='text-[#3f24ae] font-bold text-2xl '>$270</p>
                  <span className='text-xs line-through text-slate-700 font-semibold'>$260</span>
                </div>
              </div>
            </div>
          </div>
          <div className=' categorythird h-full p-2  px-3'>
            <div className='flex gap-5 flex-col '>
              <h1 className='text-2xl font-bold'>Apple <br /> AirPods Pro</h1>
              <div>
                <p className='text-sm text-slate-600 font-semibold'>Weekend Discount</p>
                <div className='flex items-center gap-5'>
                  <p className='text-[#3f24ae] font-bold text-2xl '>$270</p>
                  <span className='text-xs line-through text-slate-700 font-semibold'>$260</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Categories;