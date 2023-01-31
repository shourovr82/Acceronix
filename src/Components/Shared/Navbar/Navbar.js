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


    <header>
      <div class="navcontainer px-3  z-10">
        <div class="flex  justify-between items-center">
          {/* <!-- menu --> */}
          <div>
            <p href="/" class="text-start">ACCERONIX</p>
          </div>
          <nav className='flex justify-start '>
            <ul class="d-flex ">
              <li><a href="/">Home</a></li>

              {/*  for men */}
              <li className=' relative'>
                <a href="/" className='flex gap-2'>
                  <span>For Men</span>
                  <span>
                    <BsChevronDown />
                  </span>
                </a>
                {/* <!-- mega-menu --> */}
                <ul class="w-[500px]  drop-down top-full bg-[#2f2f2f] shadow-lg rounded-md   Mega-Menu d-flex justify-content-between">
                  <div class="mega-item">
                    <h3>list-1</h3>
                    <ul>
                      <li><a href="/">link-1</a></li>
                      <li><a href="/">link-2</a></li>
                      <li><a href="/">link-3</a></li>
                      <li><a href="/">link-4</a></li>
                    </ul>
                  </div>
                  <div class="mega-item">
                    <h3>list-1</h3>
                    <ul>
                      <li><a href="/">link-1</a></li>
                      <li><a href="/">link-2</a></li>
                      <li><a href="/">link-3</a></li>
                      <li><a href="/">link-4</a></li>
                    </ul>
                  </div>
                  <div class="mega-item">
                    <h3>list-1</h3>
                    <ul>
                      <li><a href="/">link-1</a></li>
                      <li><a href="/">link-2</a></li>
                      <li><a href="/">link-3</a></li>
                      <li><a href="/">link-4</a></li>
                    </ul>
                  </div>
                  <div class="mega-item">
                    <h3>list-1</h3>
                    <ul>
                      <li><a href="/">link-1</a></li>
                      <li><a href="/">link-2</a></li>
                      <li><a href="/">link-3</a></li>
                      <li><a href="/">link-4</a></li>
                    </ul>
                  </div>
                  <div class="mega-item">
                    <h3>list-1</h3>
                    <ul>
                      <li><a href="/">link-1</a></li>
                      <li><a href="/">link-2</a></li>
                      <li><a href="/">link-3</a></li>
                      <li><a href="/">link-4</a></li>
                    </ul>
                  </div>
                  <div class="mega-item">
                    <h3>list-1</h3>
                    <ul>
                      <li><a href="/">link-1</a></li>
                      <li><a href="/">link-2</a></li>
                      <li><a href="/">link-3</a></li>
                      <li><a href="/">link-4</a></li>
                    </ul>
                  </div>
                </ul>
              </li>

              {/*  for women */}
              <li className=' relative'>
                <a href="/" className='flex gap-2'>
                  <span>For Women</span>
                  <span>
                    <BsChevronDown />
                  </span>
                </a>
                {/* <!-- mega-menu --> */}
                <ul class="w-[500px]  drop-down top-full bg-[#2f2f2f] shadow-lg rounded-md   Mega-Menu d-flex justify-content-between">
                  <div class="mega-item">
                    <h3>list-1</h3>
                    <ul>
                      <li><a href="/">link-1</a></li>
                      <li><a href="/">link-2</a></li>
                      <li><a href="/">link-3</a></li>
                      <li><a href="/">link-4</a></li>
                    </ul>
                  </div>
                  <div class="mega-item">
                    <h3>list-1</h3>
                    <ul>
                      <li><a href="/">link-1</a></li>
                      <li><a href="/">link-2</a></li>
                      <li><a href="/">link-3</a></li>
                      <li><a href="/">link-4</a></li>
                    </ul>
                  </div>
                  <div class="mega-item">
                    <h3>list-1</h3>
                    <ul>
                      <li><a href="/">link-1</a></li>
                      <li><a href="/">link-2</a></li>
                      <li><a href="/">link-3</a></li>
                      <li><a href="/">link-4</a></li>
                    </ul>
                  </div>
                  <div class="mega-item">
                    <h3>list-1</h3>
                    <ul>
                      <li><a href="/">link-1</a></li>
                      <li><a href="/">link-2</a></li>
                      <li><a href="/">link-3</a></li>
                      <li><a href="/">link-4</a></li>
                    </ul>
                  </div>
                  <div class="mega-item">
                    <h3>list-1</h3>
                    <ul>
                      <li><a href="/">link-1</a></li>
                      <li><a href="/">link-2</a></li>
                      <li><a href="/">link-3</a></li>
                      <li><a href="/">link-4</a></li>
                    </ul>
                  </div>
                  <div class="mega-item">
                    <h3>list-1</h3>
                    <ul>
                      <li><a href="/">link-1</a></li>
                      <li><a href="/">link-2</a></li>
                      <li><a href="/">link-3</a></li>
                      <li><a href="/">link-4</a></li>
                    </ul>
                  </div>
                </ul>
              </li>

              <li><a href="/">For Kids</a></li>

            </ul>
          </nav>
          {/* currency language setting */}
          <div>
            <div>
              <div class="sec-center">
                <input class="dropdown-menu" type="checkbox" id="dropdown-menu" name="dropdown-menu" />
                <label class="for-dropdown-menu" for="dropdown-menu">dropdown-menu Menu <i class="uil uil-arrow-down"></i></label>
                <div class="section-dropdown-menu">
                  <a href="#">dropdown-menu Link <i class="uil uil-arrow-right"></i></a>
                  <input class="dropdown-menu-sub" type="checkbox" id="dropdown-menu-sub" name="dropdown-menu-sub" />
                  <label class="for-dropdown-menu-sub" for="dropdown-menu-sub">dropdown-menu Sub <i class="uil uil-plus"></i></label>
                  <div class="section-dropdown-menu-sub">
                    <a href="#">dropdown-menu Link <i class="uil uil-arrow-right"></i></a>
                    <a href="#">dropdown-menu Link <i class="uil uil-arrow-right"></i></a>
                  </div>
                  <a href="#">dropdown-menu Link <i class="uil uil-arrow-right"></i></a>
                  <a href="#">dropdown-menu Link <i class="uil uil-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>

          <div>
            <h4 className='button'>Login</h4>
          </div>
        </div>
      </div>

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
    </header>




  );
};

export default Navbar;


// {/* nav top sections bg-gradient-to-b from-[#633ed9] to-[#200d89] */ }
// {/* <NavbarTop /> */ }

// dark mode ====================

// {/* <input class="dark-light" type="checkbox" id="dark-light" name="dark-light" />
//               <label for="dark-light"></label>

//               <div class="light-back"></div>

//               <a href="https://front.codes/" class="logo" target="_blank">
//                 <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
//               </a> */}