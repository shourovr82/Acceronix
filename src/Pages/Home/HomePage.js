import React from 'react';
import AdBanner from './Adbanner/AdBanner';
import BannerArea from './Banner/BannerArea';
import BestSellsProducts from './BestSellsProducts/BestSellsProducts';
import Categories from './Categories/Categories';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import LatestBlogs from './LatestBlog/LatestBlogs';
import LatestProducts from './LatestProducts/LatestProducts';
import ProductsTab from './Productsforpeople/ProductsTab';
import SpecialProducts from './SpecialProducts/SpecialProducts';

const HomePage = () => {
  return (
    <div className=' bg-white px-3 flex flex-col gap-3'>
      {/* banner area */}
      <div className='gap-3 pb-2 mt-5'>
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

      {/*  Ad Banner 1 */}
      <div>
        <AdBanner />
      </div>

      {/* Special Products */}
      <div>
        <SpecialProducts />
      </div>

      {/* Featured Products and Best Sells Products */}
      <div className='grid grid-cols-2  gap-2 '>
        <div className=' w-full border-r pr-2'>
          <FeaturedProducts />
        </div>
        <div className='w-full pl-1'>
          <BestSellsProducts />
        </div>
      </div>

      {/*  Latest Blog sections */}
      <div>
        <LatestBlogs />
      </div>
    </div>
  );
};

export default HomePage;


