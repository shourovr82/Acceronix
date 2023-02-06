import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { TbTruckDelivery } from 'react-icons/tb';
import NavbarRightItems from './NavbarRightItems';
import NavbarSettings from './NavbarSettings';

const NavbarMain = () => {
  return (
    <div>
      <div className='px-4 border-b  py-1.5 flex justify-between items-center
    '>
        <div>
          <h1>ACCERONIX</h1>
        </div>
        <div>
          <ul className='flex items-center justify-center 
         gap-6'>
            <li className=' text-[#73777c] font-semibold'>Collection</li>
            <li className=' text-[#73777c] font-semibold'>Brands</li>
            <li className=' text-[#73777c] font-semibold'>New</li>
            <li className=' text-[#73777c] font-semibold'>Sales</li>
          </ul>
        </div>
        <div className='flex items-center
       gap-5'>
          <div>
            <button>
              <span><HiOutlineShoppingBag className='text-xl' /></span>
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