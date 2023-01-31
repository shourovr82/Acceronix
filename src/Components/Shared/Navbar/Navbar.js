import React from 'react';
import NavbarTop from './NavbarTop';
import './Navbar.css';
import { BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';


const Navbar = () => {
  return (
    <div className='  '>
      {/* nav top sections bg-gradient-to-b from-[#633ed9] to-[#200d89] */}
      <NavbarTop />

      {/* <div className='flex px-2 py-2 gap-10 border-b  items-center justify-between'>
        <div className='w-[10%]'>
          <h1 className='uppercase text-[#200d89] font-bold text-2xl font-serif'>Acceronix</h1>
        </div>


        <div className="relative w-[50%] flex items-center   border  m-0 p-0 h-10  focus-within:shadow-lg bg-white overflow-hidden">



          <div className="grid place-items-center border-r  px-2 h-full  text-gray-300">
            <select id="Com" className="text-base   text-gray-800 outline-none py-2 ">
              <option value="com" defaultChecked>All Categories</option>
              <option value="net">net</option>
              <option value="org">org</option>
              <option value="io">io</option>
            </select>
          </div>
          <input
            className="peer  h-full px-2  w-full text-center outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search for products..." />

          <div className="flex justify-center items-center h-full  w-32  bg-gradient-to-r from-[#633ed9] to-[#200d89]   ">
            <button ><BsSearch className='text-white ' /></button>
          </div>


        </div>



        <div className='w-[20%]'>

          <div className='flex w-full   justify-end items-center'>
            <div className='flex items-center justify-between gap-2'>
              <div>
                <div>
                  <p><BiUser className='text-2xl' /></p>
                </div>
              </div>
              <div>
                <p className='text-xs  text-slate-500'>Sign in</p>
                <p className='text-sm font-semibold'>Account</p>
              </div>
            </div>
            <div>
              <div className="wishlisticon">
                <div className="wishlistbadge ">4</div>
                <FaRegHeart className="wishlisticonmain text-2xl" alt="icon" />
              </div>
            </div>
            <div className='flex items-center  justify-between'>
              <div className="wishlisticon ">
                <div className="wishlistbadge ">2</div>
                <MdOutlineShoppingCart className="wishlisticonmain text-2xl" alt="icon" />
              </div>
              <div className=''>
                <p className='text-xs text-slate-500'>Total</p>
                <h2 className='text-sm font-bold'>$0.00</h2>
              </div>
            </div>
          </div>
        </div>


      </div> */}

    </div >
  );
};

export default Navbar;