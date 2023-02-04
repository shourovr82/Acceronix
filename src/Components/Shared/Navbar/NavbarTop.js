import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { RiMenu2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import NavbarRightItems from './NavbarRightItems';
import './Navbarrightside.css'


const NavbarTop = () => {
  const [hamburgerAnimation, setHamburgerAnimation] = useState(false)


  return (

    <header className='bg-[#2f333a] py-0.5'>
      <div className='flex lg:hidden justify-center '>
        <h1 className='uppercase text-[#fff] font-bold text-2xl font-serif'>Acceronix </h1>
      </div>

      <div className="navcontainer  px-3  z-10">
        <div className="lg:flex  justify-between  items-center">
          {/* <!-- menu --> */}
          <div>

          </div>
          {/* main nav items */}

          <div>
            <div className='w-full lg:hidden  py-2'>
              <button
                onClick={() => setHamburgerAnimation(!hamburgerAnimation)}
                className='  z-50  bg-gradient-to-r from-[#633ed9] to-[#200d89] text-white flex items-center  p-2   font-semibold   rounded-md justify-between w-full px-2 '>
                Categories
                <span><RiMenu2Line /></span>
              </button>

            </div>



            <nav className='flex justify-start relative  '>
              <ul className={`flex flex-col   group-hover:block  transition-all duration-500   justify-center items-center  max-md:bg-black z-10   w-full  lg:flex-row ${hamburgerAnimation ? ' max-md:translate-y-0 ' : ' max-md:-mt-96 max-md:hidden'}`}>
                <li><a href="/" className='text-[11px] font-semibold uppercase'>Home</a></li>

                {/*  for men */}
                <li className=' relative'>
                  <a href="/" className='flex gap-1'>
                    <span className='text-[11px] font-semibold uppercase'>For Men</span>
                    <span>
                      <BiChevronDown className='text-lg' />
                    </span>
                  </a>
                  {/* <!-- mega-menu --> */}
                  <ul className="w-[500px]  drop-down top-full bg-[#2f2f2f] shadow-lg rounded-md   Mega-Menu d-flex justify-content-between">
                    <div className="mega-item">
                      <h3>list-1</h3>
                      <ul>
                        <li><a href="/">link-1</a></li>
                        <li><a href="/">link-2</a></li>
                        <li><a href="/">link-3</a></li>
                        <li><a href="/">link-4</a></li>
                      </ul>
                    </div>
                    <div className="mega-item">
                      <h3>list-1</h3>
                      <ul>
                        <li><a href="/">New Products</a></li>
                        <li><a href="/">Latest Product</a></li>
                        <li><a href="/">link-3</a></li>
                        <li><a href="/">link-4</a></li>
                      </ul>
                    </div>
                    <div className="mega-item">
                      <h3>list-1</h3>
                      <ul>
                        <li><a href="/">link-1</a></li>
                        <li><a href="/">link-2</a></li>
                        <li><a href="/">link-3</a></li>
                        <li><a href="/">link-4</a></li>
                      </ul>
                    </div>
                    <div className="mega-item">
                      <h3>list-1</h3>
                      <ul>
                        <li><a href="/">link-1</a></li>
                        <li><a href="/">link-2</a></li>
                        <li><a href="/">link-3</a></li>
                        <li><a href="/">link-4</a></li>
                      </ul>
                    </div>
                    <div className="mega-item">
                      <h3>list-1</h3>
                      <ul>
                        <li><a href="/">link-1</a></li>
                        <li><a href="/">link-2</a></li>
                        <li><a href="/">link-3</a></li>
                        <li><a href="/">link-4</a></li>
                      </ul>
                    </div>
                    <div className="mega-item">
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
                    <span className='text-[11px] font-semibold uppercase'>For Women</span>
                    <span>
                      <BiChevronDown className='text-lg' />
                    </span>
                  </a>
                  {/* <!-- mega-menu --> */}
                  <ul className="w-[500px]  drop-down top-full bg-[#2f2f2f] shadow-lg rounded-md   Mega-Menu d-flex justify-content-between">
                    <div className="mega-item">
                      <h3>list-1</h3>
                      <ul>
                        <li><a href="/">link-1</a></li>
                        <li><a href="/">link-2</a></li>
                        <li><a href="/">link-3</a></li>
                        <li><a href="/">link-4</a></li>
                      </ul>
                    </div>
                    <div className="mega-item">
                      <h3>list-1</h3>
                      <ul>
                        <li><a href="/">link-1</a></li>
                        <li><a href="/">link-2</a></li>
                        <li><a href="/">link-3</a></li>
                        <li><a href="/">link-4</a></li>
                      </ul>
                    </div>
                    <div className="mega-item">
                      <h3>list-1</h3>
                      <ul>
                        <li><a href="/">link-1</a></li>
                        <li><a href="/">link-2</a></li>
                        <li><a href="/">link-3</a></li>
                        <li><a href="/">link-4</a></li>
                      </ul>
                    </div>
                    <div className="mega-item">
                      <h3>list-1</h3>
                      <ul>
                        <li><a href="/">link-1</a></li>
                        <li><a href="/">link-2</a></li>
                        <li><a href="/">link-3</a></li>
                        <li><a href="/">link-4</a></li>
                      </ul>
                    </div>
                    <div className="mega-item">
                      <h3>list-1</h3>
                      <ul>
                        <li><a href="/">link-1</a></li>
                        <li><a href="/">link-2</a></li>
                        <li><a href="/">link-3</a></li>
                        <li><a href="/">link-4</a></li>
                      </ul>
                    </div>
                    <div className="mega-item">
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

                <li><a href="/" className='text-[11px] font-semibold uppercase'>For Kids</a></li>
                <li><a href="/" className='text-[11px] font-semibold uppercase'>Categories</a></li>

              </ul>
            </nav>
          </div>


          {/* currency language setting */}
          <div className=''>
            < NavbarRightItems />
          </div>


        </div>
      </div>


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