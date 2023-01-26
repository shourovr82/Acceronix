import React, { useState } from 'react';
import { HiEye, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { GoEyeClosed } from 'react-icons/go';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './RegistrationMain.css'
import RegistrationText from './RegistrationText';
import { useForm } from 'react-hook-form';
import ReactFlagsSelect from 'react-flags-select';


const RegisterMain = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [selected, setSelected] = useState("");
  const onSelect = (code) => setSelected(code);
  const searchable = Boolean("Searchable", false);


  const handleRegister = (data) => {
    console.log(data);
  }


  return (

    <div >
      <RegistrationText />
      <form
        onSubmit={handleSubmit(handleRegister)}
        className='flex  flex-col gap-5'>

        {/* Name */}

        <div className='flex items-center gap-4'>

          {/* First Name */}
          <div className="input-container my-2 mt-6">
            <input id="firstname" className="forminput  focus:ring-2 ring-[#1f2aa1] ring-offset-0 " type="text" placeholder=" "  {...register("firstname", {
              required: 'Your First name is Required ', minLength: { value: 3, message: 'Your first name must be at least 3' }
            })} />
            <div className="cut bg-base-100"></div>
            <label for="firstname" className="placeholder flex items-center gap-3">First name  </label>
            {
              errors.firstname && <p className='text-white mt-1 text-center border bg-red-700 px-3 rounded-lg'>{errors.firstname?.message}</p>
            }

          </div>

          {/* Last Name */}
          <div className="input-container my-2 mt-6">
            <input id="lastname" className="forminput  focus:ring-2 ring-[#1f2aa1] " type="text" placeholder=" "
              {...register("lastname", {
                required: 'Your Last Name is Required ', minLength: { value: 3, message: 'Your Last Name must be at least 3' }
              })}
            />
            <div className="cut"></div>
            <label for="lastname" className="placeholder">Last name</label>
            {
              errors.lastname && <p className='text-white mt-1 text-center border bg-red-700 px-3 rounded-lg'>{errors.lastname?.message}</p>
            }
          </div>
        </div>




        {/* Email */}
        <div className="input-container my-2">
          <input id="email" className="forminput  focus:ring-2 ring-[#1f2aa1] " type="text" placeholder=" "  {...register("email", {
            required: 'Your Email is Required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email must be Valid' }
          })} />
          <div className="cut cut-short"></div>
          <label htmlFor="email" className="placeholder">Email</label>
          {
            errors.email && <p className='text-white mt-1 text-center border bg-red-700 px-3 rounded-lg'>{errors.email?.message}</p>
          }
        </div>
        {/* Country */}
        <div className="input-container  my-2">
          <div className=" ">
            <ReactFlagsSelect
              className='border-none bg-[#dddcde] rounded-xl'
              selected={selected}
              onSelect={onSelect}
              searchable={searchable}
            />
          </div>
        </div>


        {/* photo upload */}
        <div className="input-container  my-2   ">
          <input type="file" className="file-input focus:outline-none focus:ring-2 ring-[#1f2aa1] ring-offset-0   forminputupload file-input-info rounded-xl
               w-full"    />
        </div>

        {/* Password */}
        <div className="input-container   ">
          <div className="relative flex items-center h-full ">
            <input id="password" className="forminput   focus:ring-2 ring-[#1f2aa1] ring-offset-0 " type={showPassword ? 'text' : 'password'} placeholder=" "
              {...register("password", {
                required: 'Your password is needed',
                pattern: { value: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/, message: 'Password is must be Stronger' }
              })}

            />
            <button
              type="button" className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
              <span
                onClick={() => setShowPassword(!showPassword)}
              >{showPassword ? <HiEye className='text-xl' /> : <GoEyeClosed className='text-xl' />}</span>


            </button>
            <div className="cut bg-base-100"></div>
            <label for="firstname" className="placeholder flex items-center gap-3">Password  </label>
          </div>
          {
            errors.password && <p className='text-white mt-1 text-center border bg-red-700 px-3 rounded-lg'>{errors.password?.message}</p>
          }
        </div>


        {/* account type */}
        <div className="input-container  mt-2   flex items-center justify-between">
          <h4 className='text-sm font-bold'>
            Account Type?
          </h4>
          <p className="btn-switch">
            <input type="radio" id="yes" name="switch" className="btn-switch__radio btn-switch__radio_yes" />
            <input type="radio" checked id="no" name="switch" className="btn-switch__radio btn-switch__radio_no" />
            <label for="yes" className="btn-switch__label btn-switch__label_yes">
              <span className="btn-switch__txt">Seller</span>
            </label>
            <label for="no" className="btn-switch__label btn-switch__label_no"><span className="btn-switch__txt"> Buyer </span></label>
          </p>
        </div>


        {/* submit */}
        <div className="input-container flex justify-between  items-center  rounded-xl">
          <div>
            <button
              type='submit'
              className='border bg-gradient-to-r from-[#633ed9] to-[#200d89] text-white flex justify-between items-center gap-4 p-2   font-semibold  rounded-3xl '> <span className='ml-10'>Create Account </span> <span className='bg-[#513bd1] rounded-full p-1'> <HiOutlineArrowNarrowRight className='text-2xl' /></span></button>
          </div>
          <div>
            <p className='text-slate-400'>Or</p>
          </div>
          <div className='flex items-center justify-between gap-2'>
            <button className='border rounded-full p-2.5'>
              <FcGoogle className='text-2xl' />
            </button>

            <button className='border rounded-full p-2.5'>
              <FaFacebookF className='text-2xl text-[#1877f2]' />
            </button>
          </div>

        </div>





      </form>







    </div>
  );
};

export default RegisterMain;