import React, { useState } from 'react';
import './Register.css'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import RegisterSide from './RegisterSide';
import RegisterMain from './RegisterMain';
import ReactFlagsSelect from 'react-flags-select';
import { Link } from 'react-router-dom';


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
                <Link to='/'>

                  <button className=' border p-2 rounded-full'>
                    <HiOutlineArrowNarrowLeft />
                  </button>
                </Link>
              </div>

              <div className='flex justify-end  '>
                <p className='font-semibold text-sm text-slate-500'>Already member? <Link
                  to='/login' className='text-[#1f2aa1] cursor-pointer hover:underline underline-offset-4'>Sign In</Link> </p>
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