import React from 'react';
import BannerArea from './BannerArea';
import Categories from './Categories/Categories';
import LatestProducts from './LatestProducts/LatestProducts';
import ProductsTab from './Productsforpeople/ProductsTab';

const HomePage = () => {
  return (
    <div className=' bg-white px-3 flex flex-col gap-3'>
      {/* banner area */}
      <div className='gap-3 pb-2'>
        <BannerArea />
      </div>
      {/*  category  */}
      <div className=''>
        <Categories />
      </div>
      {/*  latest products */}
      <div>
        <LatestProducts />
      </div>

      {/* products for people by gender */}
      <div className='py-10'>
        <ProductsTab />
      </div>
    </div>
  );
};

export default HomePage;


