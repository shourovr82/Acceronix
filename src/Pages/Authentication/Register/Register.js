import React from 'react';
import './Register.css'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import RegisterSide from './RegisterSide';
import RegisterMain from './RegisterMain';


const Register = () => {
  return (
    <div className='h-screen   '>

      <div className='flex  justify-between h-full'>
        <div className='w-full flex justify-between flex-col   p-10 '>
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

          {/*  Register Main */}
          <div className=' w-full '>
            <RegisterMain />
          </div>
          <div className='flex border'>
            <div>
              <h1>ENG</h1>
            </div>

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