import React from 'react';
import './Category.css'
import { RiMenu4Fill } from 'react-icons/ri';
import { RxChevronRight } from 'react-icons/rx';


const CategoriesMenu = () => {
  return (
    <div className=''>
      <div className='  w-full bg-gradient-to-r from-[#633ed9] to-[#200d89]'>
        <button className='flex w-full mx-3 py-1.5    items-center gap-4'>
          <span><RiMenu4Fill className='text-white' /></span>
          <h3 className='text-white font-semibold'>Browse Categories</h3>
        </button>
      </div>
      {/*  categories menus */}
      <div className=' relative bg-gray-50'>


        <div className='category-menus mx-3  '>
          <div className="header-menu ">
            <div className="primary-menu py-3  ">
              <ul className='flex flex-col gap-5  '>
                <li><p className='text-slate-500 flex  items-center justify-between text-sm'>Cell Phones  <RxChevronRight className='text-slate-500 text-xl ' /></p></li>
                <li><p className='text-slate-500  text-sm flex  items-center justify-between '>Computer & Accessories  <RxChevronRight className='text-slate-500 text-xl ' /></p></li>
                <li className='service-btn '><p className='text-slate-500  text-sm flex  items-center justify-between '>Television & Video
                  <RxChevronRight className='text-slate-500 text-xl ' />
                </p>
                  <ul className='flex flex-col gap-3'>
                    <li><p >Time Planner apps</p></li>
                    <li><p>Health Tracker apps</p></li>
                    <li><p>Health restore apps</p></li>
                    <li><p>Health recover apps</p></li>
                    <li><p>Time maintain apps</p></li>
                    <li><p>Time faster apps</p></li>
                    <li><p>Time talkable apps</p></li>
                  </ul>
                </li>
                <li className='service-btn '><p className='text-slate-500  text-sm flex  items-center justify-between '>Smartwatches  <RxChevronRight className='text-slate-500 text-xl ' />

                </p>
                  <ul>
                    <li><p >Time Planner apps</p></li>
                    <li><p>Health Tracker apps</p></li>
                    <li><p>Health restore apps</p></li>
                    <li><p>Health recover apps</p></li>
                    <li><p>Time maintain apps</p></li>
                    <li><p>Time faster apps</p></li>
                    <li><p>Time talkable apps</p></li>
                  </ul>
                </li>
                <li><p className='text-slate-500  text-sm flex  items-center justify-between '>Camera & Headphones  <RxChevronRight className='text-slate-500 text-xl ' /></p></li>
                <li><p className='text-slate-500  text-sm flex  items-center justify-between '>Video Games  <RxChevronRight className='text-slate-500 text-xl ' /></p></li>
                <li><p className='text-slate-500  text-sm flex  items-center justify-between '>Sports & Outdoors <RxChevronRight className='text-slate-500 text-xl ' /></p></li>
              </ul>
            </div>
          </div>
        </div>


      </div>

    </div >


  );
};

export default CategoriesMenu;