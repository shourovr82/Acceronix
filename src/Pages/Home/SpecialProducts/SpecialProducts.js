import React from 'react';
import ProductsForMen from '../Productsforpeople/ProductsForMen';

const SpecialProducts = () => {
  return (
    <div>
      <div>
        <div class="py-10 flex items-center justify-start gap-6 ">
          <label className='cursor-pointer text-lg font-semibold'>Special Products</label>
          <hr className='w-[68%] mt-2' />
        </div>
        <div>
          <ProductsForMen />
        </div>
      </div>
    </div >
  );
};

export default SpecialProducts;