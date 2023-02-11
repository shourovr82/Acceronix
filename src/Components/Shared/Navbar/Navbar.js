import React from 'react';
import NavbarTop from './NavbarTop';
import mainLogo from '../../../Assets/Logo/logo.png'
import { BiSearch } from 'react-icons/bi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { TbTruckDelivery } from 'react-icons/tb';
import { CgMenu } from 'react-icons/cg';

const Navbar = () => {
  return (
    <div>
      {/* Navbar top  */}
      <div>
        <NavbarTop />
      </div>

      {/* Main Navbar */}
      <nav className='flex max-w-7xl my-1 mx-auto justify-between items-center'>
        <div>
          <img className='w-52' src={mainLogo} alt="" />
        </div>


        <div class="relative block">
          <input
            class="w-full bg-white  border border-[#4629d4]  rounded-md py-2
             pl-3 pr-10 focus:outline-none"
            placeholder="Enter your keyword to search" type="text" />
          <span class="absolute inset-y-0 right-0 flex items-center pr-3">
            <BiSearch className='text-2xl' />
          </span>
        </div>



        <div className=' flex gap-5'>

          <button type='button' className='text-2xl'>
            <span><HiOutlineShoppingBag /></span>
          </button>
          <button type='button' className='text-2xl'>
            <span><TbTruckDelivery /></span>
          </button>
          <button type='button' className='text-2xl'>
            <span><CgMenu /></span>
          </button>
        </div>

      </nav>

    </div>
  );
};

export default Navbar;