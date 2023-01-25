import React from 'react';
import './Register.css'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';


const Register = () => {
  return (
    <div className='h-screen   '>

      <div className='flex  justify-between '>
        <div className='w-full p-10 '>
          <div className='flex justify-evenly   items-center w-full '>

            <div>
              <button className=' border p-2 rounded-full'>
                <HiOutlineArrowNarrowLeft />
              </button>
            </div>
            <div className=''>
              <h4>Already member? <span className='text-emerald-700'>Sign In</span> </h4>
            </div>
          </div>
        </div>
        <div className='w-full relative justify-end'>




          <div class="origin-[33%_75%] rotate-12 bg-black h-screen">

            <div className='origin-center absolute  -rotate-12 mt-[-100px] h-[130px] w-full rounded-2xl bg-red-600 '>
            </div>
          </div>




        </div>
      </div>



    </div>
  );
};

export default Register;


// {/* <div className='signright'>
//           </div> */}