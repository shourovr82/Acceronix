import React from 'react';
import { HiEye } from 'react-icons/hi';
import { GoEyeClosed } from 'react-icons/go';
import './RegistrationMain.css'


const RegisterMain = () => {



  return (
    <div className='w-full p-4 rounded-l '>


      {/* Form for Registration */}

      <div >
        <div className="text-3xl font-bold uppercase">Register Now</div>
        <div className="subtitle">
          <p className='text-[#475161] text-xs '>Secure Your Communication with Acceronix</p>
        </div>
        <div className='flex  flex-col gap-7'>
          <div className='flex items-center gap-4'>
            <div className="input-container ic1">
              <input id="firstname" className="forminput  focus:ring-2 ring-[#1f2aa1] ring-offset-0 " type="text" placeholder=" " />
              <div className="cut bg-base-100"></div>
              <label for="firstname" className="placeholder flex items-center gap-3">First name  </label>
            </div>
            <div className="input-container ic1">
              <input id="lastname" className="forminput  focus:ring-2 ring-[#1f2aa1] " type="text" placeholder=" " />
              <div className="cut"></div>
              <label for="lastname" className="placeholder">Last name</label>
            </div>
          </div>

          {/* Email */}
          <div className="input-container ">
            <input id="email" className="forminput  focus:ring-2 ring-[#1f2aa1] " type="text" placeholder=" " />
            <div className="cut cut-short"></div>
            <label for="email" className="placeholder">Email</label>
          </div>


          {/* Photos */}
          <div className="input-container     ">
            <input type="file" className="file-input focus:outline-none focus:ring-2 ring-[#1f2aa1] ring-offset-0   forminputupload file-input-info rounded-xl
               w-full" />


          </div>

          {/* Password */}
          <div className="input-container  ">
            <div className="relative flex items-center h-full ">
              <input id="firstname" className="forminput   focus:ring-2 ring-[#1f2aa1] ring-offset-0 " type="text" placeholder=" " />
              <button
                type="button" className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                <span><HiEye /></span>

                <span><GoEyeClosed /></span>
              </button>
              <div className="cut bg-base-100"></div>
              <label for="firstname" className="placeholder flex items-center gap-3">Password  </label>
            </div>
          </div>


          {/* account type */}
          <div className="input-container     flex items-center justify-between">
            <h4>
              Account Type?
            </h4>
            <p className="btn-switch">
              <input type="radio" id="yes" name="switch" className="btn-switch__radio btn-switch__radio_yes" />
              <input type="radio" checked id="no" name="switch" className="btn-switch__radio btn-switch__radio_no" />
              <label for="yes" className="btn-switch__label btn-switch__label_yes">
                <span className="btn-switch__txt">Buyer</span>
              </label>
              <label for="no" className="btn-switch__label btn-switch__label_no"><span className="btn-switch__txt">Seller</span></label>
            </p>
          </div>


          {/* submit */}
          <div className="input-container flex justify-between  items-center  rounded-xl">
            <div>
              <button className='border p-2 px-4 font-semibold  rounded-3xl '>Create Account <span></span></button>
            </div>
            <div>
              <p>Or</p>
            </div>
            <div className='flex items-center justify-between gap-10'>
              <button>F</button>

              <button>F</button>
            </div>

          </div>





        </div>







      </div>

    </div >
  );
};

export default RegisterMain;