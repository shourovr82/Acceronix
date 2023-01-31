import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const NavbarTop = () => {
  const [hamburgerAnimation, setHamburgerAnimation] = useState(false)

  return (

    <div className='pb-10'>
      <header className='absolute  z-10 w-full bg-slate-300 shadow-md'>
        <div className='container m-auto '>
          <div className="flex flex-wrap items-center justify-between">
            <div className="relative z-10 flex  w-full items-center justify-between  lg:w-auto">
              <a href="/">
                <p>shafin</p>
              </a>
              <button
                onClick={() => setHamburgerAnimation(!hamburgerAnimation)}
                className='relative w-10 h-10 lg:hidden'>
                <div className={`inset-0 w-6 h-0.5 m-auto rounded bg-gray-500 transition duration-300 ${hamburgerAnimation ? 'rotate-45 ' : 'rotate-0'}`}></div>
                <div className={`inset-0 w-6  h-0.5 m-auto rounded bg-gray-500 transition duration-300 ${hamburgerAnimation ? '-rotate-45 absolute  ' : 'rotate-0 mt-2 relative'}`}></div>
              </button>
            </div>

            <div id='navlinksnew' className={`${hamburgerAnimation ? 'block' : 'hidden'} lg:block w-full bg-white px-6 lg:bg-transparent lg:w-auto`}>
              <ul className='pt-4 pb-6 text-gray-600 lg:flex lg:items-center lg:space-x-8 lg:pt-0 lg:pb-0'>
                <li>
                  <a href="" className='py-3 hover:text-blue-600 transition'>
                    <span>Portfolio</span>
                  </a>
                </li>
                <li>
                  <a href="" className='py-3  block hover:text-blue-600 transition'>
                    <span>services</span>
                  </a>
                </li>

                <li>
                  <a href="" className='py-3 block hover:text-blue-600 transition'>
                    <span>Blogs</span>
                  </a>
                </li>
                <li>
                  <Link to="/dashboard" className='py-3  block hover:text-blue-600 transition'>
                    <span>dashboard</span>
                  </Link>
                </li>
                <li className='mt-4 lg:mt-0'>
                  <a href="/" className='block w-full px-6  py-2 text-white bg-cyan-500 active:bg-cyan-800 rounded'>
                    <span className='font-semibold transition'>products</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>



  );
};

export default NavbarTop;






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