
import React, { useState } from 'react';
import NavbarTop from './NavbarTop';
import './Navbar.css';
import { BsChevronDown, BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import NavItems from './NavItems';


const Navbar = () => {
  const navlists = [
    {
      nav: 'Home'
    },
    {
      nav: 'About'
    },
    {
      nav: 'Services'
    },
    {
      nav: 'Dashbboard'
    },
  ]
  const [openNav, setOpenNav] = useState(false);

  return (


    <div >
      <div className='border-b-[1px] border-[#000000b5]'>
        <NavbarTop />
      </div>
      <div>
        <div className='flex flex-col-reverse  lg:flex-row bg-[#2f333a] px-2 py-2 lg:gap-10 gap-3 border-b  items-center justify-between'>
          <div className='w-[10%] hidden lg:block'>
            <h1 className='uppercase text-[#fff] font-bold text-2xl font-serif'>Acceronix</h1>
          </div>


          <div className="relative lg:w-[50%] flex items-center rounded-md  shadow-lg shadow-[#2e2c2c1e]  h-10 w-full  focus-within:shadow-lg  overflow-hidden">



            <div className="grid place-items-center lg:border-r  px-2 h-full text-gray-300 bg-[#f4f4f4]">
              <select id="Com" className="text-xs bg-transparent  text-gray-800 outline-none py-2 ">
                <option value="com" defaultChecked>All Categories</option>
                <option value="net">net</option>
                <option value="org">org</option>
                <option value="io">io</option>
              </select>
            </div>
            <input
              className="peer  h-full px-2  w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search for products..." />

            <div className="flex bg-[#603cd6] justify-center items-center h-full  w-32    ">
              <button ><BsSearch className='text-white ' /></button>
            </div>

            {/* bg-gradient-to-r from-[#633ed9] to-[#200d89]  */}
          </div>



          <div className='lg:w-[20%] w-full'>

            <div className='flex w-full   justify-center gap-10    lg:justify-end items-center'>

              <div className='flex  lg:pr-2 cursor-pointer items-center justify-between  gap-2'>
                <div>
                  <div>
                    <p><BiUser className='text-2xl text-gray-200' /></p>
                  </div>
                </div>
                <div>
                  <p className='text-xs  text-gray-200'>Sign in</p>
                  <p className='text-sm font-semibold text-gray-200'>Account</p>
                </div>
              </div>

              <div className='lg:border-l flex   border-[#f1f1f142]'>
                <div className="wishlisticon">
                  <div className="wishlistbadge ">4</div>
                  <FaRegHeart className="wishlisticonmain text-2xl text-gray-200" alt="icon" />
                </div>
              </div>

              <div className='lg:border-l flex   border-[#f1f1f142]'>
                <div className="wishlisticon lg:border-l  border-[#f1f1f142]">
                  <div className="wishlistbadge ">2</div>
                  <MdOutlineShoppingCart className="wishlisticonmain text-gray-200 text-2xl" alt="icon" />
                </div>
              </div>

              <div className='flex items-center gap-3 cursor-pointer  justify-between'>

                <div className=' lg:border-l pl-2 text-center border-[#f1f1f142]'>
                  <p className='text-xs text-gray-200'>Total</p>
                  <h2 className='text-sm font-bold text-gray-200'>$0.00</h2>
                </div>
              </div>

            </div>
          </div>


        </div>

      </div>


    </div>





  );
};

export default Navbar;


