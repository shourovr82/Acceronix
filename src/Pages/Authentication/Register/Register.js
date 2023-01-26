import React, { useState } from 'react';
import './Register.css'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import RegisterSide from './RegisterSide';
import RegisterMain from './RegisterMain';
import ReactFlagsSelect from 'react-flags-select';


const Register = () => {

  return (
    <div className='h-screen   '>

      <div className='flex  justify-between h-full'>
        {/* Registration Form */}
        <div className='w-full flex justify-between flex-col   px-10 py-8 '>


          {/*  Register Main */}
          <div className='w-full px-4 rounded-l '>

            <div className='flex justify-between   items-center w-full '>
              <div>
                <button className=' border p-2 rounded-full'>
                  <HiOutlineArrowNarrowLeft />
                </button>
              </div>
              <div className=''>
                <h4>Already member? <span className='text-emerald-700'>Sign In</span> </h4>
              </div>
            </div>


            <RegisterMain />
          </div>


          <div className='flex '>

          </div>
        </div>





        {/* side items */}
        <div className='w-full relative justify-end'>
          <div>
            <RegisterSide />
          </div>







        </div>
      </div>



    </div>
  );
};

export default Register;


// {/* <div className='signright'>
//           </div> */}