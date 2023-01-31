import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import NavbarRightItems from './NavbarRightItems';
import './Navbarrightside.css'


const NavbarTop = () => {
  const [hamburgerAnimation, setHamburgerAnimation] = useState(false)


  return (

    <header>
      <div class="navcontainer  px-3  z-10">
        <div class="flex  justify-between  items-center">
          {/* <!-- menu --> */}
          <div>
            <p href="/" class="text-start">ACCERONIX</p>
          </div>
          {/* main nav items */}
          <nav className='flex justify-start  '>
            <ul class="d-flex ">
              <li><a href="/" className='text-xs font-semibold uppercase'>Home</a></li>

              {/*  for men */}
              <li className=' relative'>
                <a href="/" className='flex gap-1'>
                  <span className='text-xs font-semibold uppercase'>For Men</span>
                  <span>
                    <BiChevronDown className='text-lg' />
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
                <a href="/" className='flex gap-1'>
                  <span className='text-xs font-semibold uppercase'>For Women</span>
                  <span>
                    <BiChevronDown className='text-lg' />
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

              <li><a href="/" className='text-xs font-semibold uppercase'>For Kids</a></li>
              <li><a href="/" className='text-xs font-semibold uppercase'>Categories</a></li>

            </ul>
          </nav>
          {/* currency language setting */}
          <div className=''>
            < NavbarRightItems />
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

export default NavbarTop;
// <div className='pb-10'>
    //   <header className='absolute  z-10 w-full bg-slate-300 shadow-md'>
    //     <div className='container m-auto '>
    //       <div className="flex flex-wrap items-center justify-between">
    //         <div className="relative z-10 flex  w-full items-center justify-between  lg:w-auto">
    //           <a href="/">
    //             <p>shafin</p>
    //           </a>
    //           <button
    //             onClick={() => setHamburgerAnimation(!hamburgerAnimation)}
    //             className='relative w-10 h-10 lg:hidden'>
    //             <div className={`inset-0 w-6 h-0.5 m-auto rounded bg-gray-500 transition duration-300 ${hamburgerAnimation ? 'rotate-45 ' : 'rotate-0'}`}></div>
    //             <div className={`inset-0 w-6  h-0.5 m-auto rounded bg-gray-500 transition duration-300 ${hamburgerAnimation ? '-rotate-45 absolute  ' : 'rotate-0 mt-2 relative'}`}></div>
    //           </button>
    //         </div>

    //         <div id='navlinksnew' className={`${hamburgerAnimation ? 'block' : 'hidden'} lg:block w-full bg-white px-6 lg:bg-transparent lg:w-auto`}>
    //           <ul className='pt-4 pb-6 text-gray-600 lg:flex lg:items-center lg:space-x-8 lg:pt-0 lg:pb-0'>
    //             <li>
    //               <a href="" className='py-3 hover:text-blue-600 transition'>
    //                 <span>Portfolio</span>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="" className='py-3  block hover:text-blue-600 transition'>
    //                 <span>services</span>
    //               </a>
    //             </li>

    //             <li>
    //               <a href="" className='py-3 block hover:text-blue-600 transition'>
    //                 <span>Blogs</span>
    //               </a>
    //             </li>
    //             <li>
    //               <Link to="/dashboard" className='py-3  block hover:text-blue-600 transition'>
    //                 <span>dashboard</span>
    //               </Link>
    //             </li>
    //             <li className='mt-4 lg:mt-0'>
    //               <a href="/" className='block w-full px-6  py-2 text-white bg-cyan-500 active:bg-cyan-800 rounded'>
    //                 <span className='font-semibold transition'>products</span>
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    // </div>






// another




// {/* <div className='
//     //    bg-[#b3b1b1]
//     //     '>
//     //   <div className='flex px-2 justify-between items-center'>
//     //     <div>
//     //       <p className='text-xs text-black'>Up to 70% off the entire store !</p>
//     //     </div>
//     //     <div className='flex gap-3'>
//     //       <p className='text-sm text-black'>USD</p>
//     //       <p className='text-sm text-black'>English</p>
//     //     </div>

//     //   </div>
//     // </div> */}