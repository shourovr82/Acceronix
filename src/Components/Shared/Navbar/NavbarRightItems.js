import React from 'react';
import SelectBoxSimple from '../../SelectBox/SelectBoxSimple';
import NavbarSettings from './NavbarSettings';

const currency = [
  { name: 'USD $' },
  { name: 'EUR €' },
  { name: 'BDT ৳' },
  { name: 'INR ₹' },
]
const language = [
  { name: 'ENGLISH' },
  { name: 'BANGLA' },
  { name: 'HINDI' },
  { name: 'SPANISH' },
]
const NavbarRightItems = () => {


  return (
    <div className=' flex  justify-between items-center w-full'>
      {/* select currency */}
      <div className="">
        <SelectBoxSimple selectboxdata={currency} />
      </div>
      {/* select language */}
      <div className=''>
        <SelectBoxSimple selectboxdata={language} />
      </div>
    </div>
  );
};

export default NavbarRightItems;