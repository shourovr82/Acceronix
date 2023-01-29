import React from 'react';

const NavbarTop = () => {
  return (
    <div className='
       bg-[#b3b1b1]
        '>
      <div className='flex px-2 justify-between items-center'>
        <div>
          <p className='text-xs text-black'>Up to 70% off the entire store !</p>
        </div>
        <div className='flex gap-3'>
          <p className='text-sm text-black'>USD</p>
          <p className='text-sm text-black'>English</p>
        </div>

      </div>
    </div>
  );
};

export default NavbarTop;