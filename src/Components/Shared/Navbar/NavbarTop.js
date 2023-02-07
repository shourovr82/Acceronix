import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { FiInbox } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { TbTruckDelivery } from 'react-icons/tb';
import logo from '../../../Assets/Logo/logo.png'
import NavbarSettings from './NavbarSettings';

const NavbarTop = () => {

  const [navMenuOpen, setNavMenuOpen] = useState(false)

  const navigation = [
    { title: "Collection", path: "/" },
    { title: "Brands", path: "/" },
    { title: "New", path: "/" },
    { title: "Sales", path: "/" },
  ]

  return (
    <nav className="bg-white w-full   sticky">
      <div className="items-center navshadow  px-2 md:flex py-1.5 justify-between ">
        <div className="flex   items-center justify-between md:block">
          <div>
            <img className='lg:w-40 w-28' src={logo} alt="" />
          </div>

          <div className="md:hidden">
            <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setNavMenuOpen(!navMenuOpen)}
            >
              {
                navMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                )
              }
            </button>
          </div>
        </div>

        <div className={` justify-self-center pb-3 md:flex gap-10 md:pb-0 md:mt-0 ${navMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="justify-center items-center text-center space-y-4 md:flex md:space-x-6 md:space-y-0">
            {
              navigation.map((item, idx) => {
                return (

                  <li key={idx} className="text-[#73777c] font-semibold">
                    {item.title}
                  </li>
                )
              })
            }
          </ul>
        </div>

        {/* navbar Settings */}
        <div className={` ${navMenuOpen ? 'max-md:block' : 'max-md:hidden'}`}>

          <div className='flex max-md:flex-col-reverse items-center
       gap-5'>
            <div>
              {/* starts of search bar */}
              <div >
                <div class="flex  flex-col items-center justify-center bg-white">
                  {/* <!--  --> */}
                  <div class=" flex items-center rounded-full border hover:shadow-md">
                    <input type="text" class="w-full  bg-transparent rounded-full py-1.5 lg:focus:w-[20rem] max-md:w-[20rem] duration-300 ease-in-out pl-4 outline-none" placeholder='Search Anything...' />
                    <div class="pr-4">

                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>

                    </div>
                  </div>
                </div>
              </div>
              {/* ends of search bar */}
            </div>

            {/* User Logged In start */}
            <div>
              <div className='flex  lg:pr-2 cursor-pointer items-center justify-between  gap-2'>
                <div>
                  <div>
                    <p><BiUser className='text-2xl text-gray-700 ' /></p>
                  </div>
                </div>
                <div>
                  <p className='text-xs  text-'>Sign in</p>
                  <p className='text-sm font-semibold text-gray-700 '>Account</p>
                </div>
              </div>
            </div>
            {/* User Logged In end */}

            <div className='flex lg:gap-3 max-md:justify-around  max-md:w-full'>
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

          </div>
        </div>
        {/* end navbar Settings */}


      </div>
    </nav>
  );
};

export default NavbarTop;