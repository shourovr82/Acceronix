import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import NavbarRightItems from './NavbarRightItems';

const NavbarMain = () => {
  return (
    <div className='bg-[#180779]'>
      <div className='flex justify-between px-2 text-white items-center'>
        <div>
          <h1>Acceronix</h1>
        </div>
        <div>
          <ul className='flex gap-3'>
            <li><button className='flex items-center gap-2'>Home <AiOutlinePlus /> </button></li>
            <li><button className='flex items-center gap-2'>About Us  <AiOutlinePlus /></button></li>
            <li><button className='flex items-center gap-2'>Blog  <AiOutlinePlus /></button></li>
            <li><button className='flex items-center gap-2'>Features <AiOutlinePlus /></button></li>
            <li><button className='flex items-center gap-2'>Team  <AiOutlinePlus /></button></li>
          </ul>
        </div>
        <div>
          <NavbarRightItems />
        </div>
      </div>
    </div>
  );
};

export default NavbarMain;