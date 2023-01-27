import React from 'react';

const Navbar = () => {
  return (
    <div className=' '>
      {/* nav top sections */}
      <div className='
       bg-[#558ff1]
        '>
        <div className='flex container mx-auto justify-between items-center'>
          <div>
            <p className='text-xs text-white'>Up to 70% off the entire store !</p>
          </div>
          <div className='flex gap-3'>
            <p className='text-sm text-white'>USD</p>
            <p className='text-sm text-white'>English</p>
          </div>

        </div>
      </div>

      <div className='flex justify-between'>
        <div>
          <h1 className='uppercase'>Acceronix</h1>
        </div>
        <div>
          <input type="text" className='input input-info' placeholder=';aljkfjalkj' />
        </div>
        <div className='flex justify-between items-center gap-3'>
          <div>
            <p>Sign in</p>
            <p>Account</p>
          </div>
          <div className='flex gap-3 justify-between items-center'>
            <p>love</p>
            <p>total</p>
          </div>
          <div></div>
        </div>
      </div>

    </div >
  );
};

export default Navbar;