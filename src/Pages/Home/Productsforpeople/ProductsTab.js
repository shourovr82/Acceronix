import React, { useState } from 'react';
import ProductsForKids from './ProductsForKids';
import ProductsForMen from './ProductsForMen';
import ProductsForWomen from './ProductsForWomen';
import './ProductsTab.css'

const ProductsTab = () => {
  const [productTab, setProductTab] = useState(1)
  return (
    <div>

      <div class=" ">

        <div>
          <div class="py-10 flex items-center justify-start gap-6 ">
            <label onClick={() => setProductTab(1)} class="font-semibold cursor-pointer text-lg" id="one-tab" for="one">For Men</label>
            <span className='text-xl font-bold text-slate-400'>/</span>
            <label onClick={() => setProductTab(2)} class="font-semibold cursor-pointer text-lg" id="two-tab" for="two">For Women</label>
            <span className='text-xl font-bold text-slate-400'>/</span>
            <label onClick={() => setProductTab(3)} class="font-semibold cursor-pointer text-lg" id="three-tab" for="three">For Kids</label>
            <hr className='w-[68%] mt-2' />
          </div>
        </div>


        <div>
          {productTab === 1 && (
            <div>
              <ProductsForMen />
            </div>
          )}

          {productTab === 2 &&
            <div class="" id="">
              <ProductsForWomen />
            </div>
          }
          {productTab === 3 &&
            <div class="" id="">
              <ProductsForKids />
            </div>
          }
        </div>


      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div >
  );
};

export default ProductsTab;