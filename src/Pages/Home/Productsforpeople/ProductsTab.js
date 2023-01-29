import React, { useState } from 'react';
import './ProductsTab.css'

const ProductsTab = () => {
  const [productTab, setProductTab] = useState(1)
  return (
    <div>

      <div class=" ">

        <div>
          <div class=" flex items-center justify-start gap-6 ">
            <label onClick={() => setProductTab(1)} class="font-semibold text-lg" id="one-tab" for="one">For Men</label>
            <span className='text-xl font-bold text-slate-400'>/</span>
            <label onClick={() => setProductTab(2)} class="font-semibold text-lg" id="two-tab" for="two">For Women</label>
            <span className='text-xl font-bold text-slate-400'>/</span>
            <label onClick={() => setProductTab(3)} class="font-semibold text-lg" id="three-tab" for="three">For Kids</label>
            <hr className='w-[68%] mt-2' />
          </div>



        </div>


        <div>
          {productTab === 1 && (
            <div>
              <div class="" >
                <div class="">Shafin</div>
                <p>rahman one panel</p>
              </div>
            </div>
          )}
          {
            productTab === 1 && <div class="panel" id="one-panel">
              <div class="panel-title">Shafin</div>
              <p>rahman one panel</p>
            </div>
          }
          {productTab === 2 &&
            <div class="" id="">
              <div class="">shafin shakljfd</div>
              <p>second panel</p>
            </div>
          }
          {productTab === 3 &&
            <div class="" id="">
              <div class="">shourolkajdfkaljdkj</div>
              <p>third panel</p>
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