import React from 'react';
import BannerArea from './BannerArea';
import Categories from './Categories/Categories';

const HomePage = () => {
  return (
    <div className=' bg-white '>
      <div className='mt-4 gap-3 py-2'>
        <BannerArea />
      </div>
      <div className=''>
        <Categories />
      </div>
    </div>
  );
};

export default HomePage;


