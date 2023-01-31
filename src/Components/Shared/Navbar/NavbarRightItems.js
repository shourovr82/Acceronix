import React from 'react';
import SelectBoxSimple from '../../SelectBox/SelectBoxSimple';

const currency = [
  { name: 'USD $' },
  { name: 'EUR €' },
  { name: 'BDT ৳' },
  { name: 'INR ₹' },
]
const NavbarRightItems = () => {


  return (
    <div className=' '>
      {/* select currency */}
      <div className=" ">
        <SelectBoxSimple people={currency} />
      </div>

      <div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default NavbarRightItems;