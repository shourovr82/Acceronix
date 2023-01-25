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



          <div className='relative'>
            <div className='bg-b absolute -top-4 -right-20  origin-center rotate-3 w-full h-[110vh]'>
              <div class="relative h-screen ...">
                <div class="absolute shadow-lg shadow-[#0201019a] bg-[#023726] w-full h-24 rounded-tl rounded-[3rem] p-3 origin-center -rotate-12  -left-14 -top-10 
               ">
                </div>
                <div class="absolute bg-[#210d3b] down-div w-full top-96 rounded-[2rem]  p-3 origin-center -rotate-45  -bottom-20  -right-0 
               ">
                </div>
                <div class="absolute bg-[#682815] shadow-lg shadow-black w-full top-[37rem] rounded-[2rem]  p-3 origin-center -rotate-45  -bottom-96  -right-10 
               ">
                </div>

              </div>
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