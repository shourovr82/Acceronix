import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { TbTruckDelivery } from 'react-icons/tb';
import NavbarSettings from './NavbarSettings';
import logo from '../../../Assets/Logo/logo.png'
import { FiInbox } from 'react-icons/fi';

const NavbarMain = () => {
  return (
    <div>
      <div className='lg:px-4 px-2 border-b  py-1.5 md:flex
        justify-between items-center
    flex 
    '>
        <div>
          <img className='lg:w-40 w-28' src={logo} alt="" />
        </div>



        {/* ul */}
        {/* <div className='`'>
          <ul className='md:flex hidden items-center justify-center 
         gap-6'>
            <li className=' text-[#73777c] font-semibold'>Collection</li>
            <li className=' text-[#73777c] font-semibold'>Brands</li>
            <li className=' text-[#73777c] font-semibold'>New</li>
            <li className=' text-[#73777c] font-semibold'>Sales</li>
          </ul>
        </div> */}


        {/* starts of search bar */}
        <div>
          <div className="flex  flex-col items-center justify-center bg-white">
            {/* <!--  --> */}
            <div className=" flex items-center rounded-full border hover:shadow-md">
              <input type="text" className="w-full bg-transparent rounded-full py-1.5 lg:focus:w-[20rem] duration-300 ease-in-out pl-4 outline-none" placeholder='Search Anything...' />
              <div className="pr-4">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>


              </div>
            </div>
          </div>
        </div>

        {/* ends of search bar */}



        <div className='flex items-center
       gap-5'>
          <div>
            <button>
              <span><HiOutlineShoppingBag className='text-xl' /></span>
            </button>
          </div>
          <div>
            <button>
              <span><FiInbox className='text-xl' /></span>
            </button>
          </div>
          <div>
            <button>
              <span><TbTruckDelivery className='text-xl' /></span>
            </button>
          </div>
          <div>
            <NavbarSettings />
          </div>

        </div>
      </div >
    </div>
  );
};

export default NavbarMain;