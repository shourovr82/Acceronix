import React, { useContext, useState } from 'react';
import { HiEye, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { GoEyeClosed } from 'react-icons/go';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './RegistrationMain.css'
import RegistrationText from './RegistrationText';
import { useForm } from 'react-hook-form';
import ReactFlagsSelect from 'react-flags-select';
import { AcceronixContext } from '../../../Contexts/Context/AcceronixProvider';


const RegisterMain = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selected, setSelected] = useState("");
  const [toggle, setToggle] = useState(true);
  const [photoLink, setPhotoLink] = useState('')
  const [accountType, setAccountType] = useState('Buyer');
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSelect = (code) => setSelected(code);
  const { handleGoogleLogin, registerAccount } = useContext(AcceronixContext);
  const searchable = Boolean("Searchable", false);
  const imgbbSecretKey = process.env.REACT_APP_imgbb_key;


  const getAccountType = () => {
    if (toggle) {
      setAccountType('Seller')
    } else {
      setAccountType('Buyer')
    }
  }

  const hostProfilePhoto = (image, formData) => {
    const url = `https://api.imgbb.com/1/upload?key=${imgbbSecretKey}`;
    if (image) {
      fetch(url, {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(imgData => {
          const photoURL = imgData?.data?.url;
          setPhotoLink(photoURL)
        })
    }
  }



  // register new account
  const handleRegister = (data) => {

    const image = data.image[0];
    // host image 
    if (image) {
      const formData = new FormData();
      formData.append(image, formData);
      if (formData) {
        hostProfilePhoto(image, formData);
      }
      console.log(formData);
    }
    const allData = {
      ...data,
      accountType,
      photoURL: photoLink
    }

    console.log(allData);
  }









  // login with google
  const googleLoginHandle = () => {
    handleGoogleLogin()
      .then(result => {
        const user = result.user;
      })
      .catch(e => console.log(e))
  }






  return (

    <div >
      <RegistrationText />
      <form
        onSubmit={handleSubmit(handleRegister)}
        className='flex  flex-col gap-4'>
        {/* Name */}

        <div className='flex items-center gap-4'>

          {/* First Name */}
          <div className="input-container my-2 mt-6">
            <input id="firstname" className="forminput  focus:ring-2 ring-[#1f2aa1] ring-offset-0 " type="text" placeholder=" "  {...register("firstname", {
              required: 'Your First name is Required ', minLength: { value: 3, message: 'Your first name must be at least 3' }
            })} />
            <div className="cut bg-base-100"></div>
            <label htmlFor="firstname" className="placeholder flex items-center gap-3">First name  </label>
            {
              errors.firstname && <p className='text-white mt-1 text-center border bg-red-700 px-3 text-sm rounded-lg'>{errors.firstname?.message}</p>
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
            <label htmlFor="lastname" className="placeholder">Last name</label>
            {
              errors.lastname && <p className='text-white mt-1 text-center border bg-red-700 px-3 text-sm rounded-lg'>{errors.lastname?.message}</p>
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
            errors.email && <p className='text-white text-sm mt-1 text-center border bg-red-700 px-3  rounded-lg'>{errors.email?.message}</p>
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
        <div className="input-container flex items-center forminputuploadFile justify-between  w-full my-2 rounded-xl   ">
          <input type="file" id='file' className="file-input  focus:outline-none focus:ring-2 ring-[#1f2aa1] ring-offset-0   forminputupload file-input-info rounded-xl w-full"   {...register("image")} />
          <label htmlFor="file" className="pr-2 text-xs">Upload Your Profile</label>

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
              onClick={() => setShowPassword(!showPassword)}
              type="button" className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
              <span

              >{showPassword ? <HiEye className='text-xl' /> : <GoEyeClosed className='text-xl' />}</span>


            </button>
            <div className="cut bg-base-100"></div>
            <label htmlFor="firstname" className="placeholder flex items-center gap-3">Password  </label>
          </div>
          {
            errors.password && <p className='text-white text-sm mt-1 text-center border bg-red-700 px-3 rounded-lg'>{errors.password?.message}</p>
          }
        </div>


        {/* account type */}
        <div className="input-container  mt-2   flex items-center justify-between">
          <h4 className='text-sm font-bold'>
            Account Type?
          </h4>
          <>
            <div className="flex flex-col justify-center  items-center ">
              {/*   Switch Container */}

              <div
                className="md:w-40 md:h-10 w-12 h-6 flex items-center bg-[#0915364f] rounded-full relative p-1 cursor-pointer"
                onClick={() => {
                  setToggle(!toggle);
                  getAccountType()
                }}
              >
                <span className={`absolute transition-transform font-semibold text-black ${toggle ? 'right-5 ' : 'left-5'}`}>{toggle ? 'Buyer' : 'Seller'}</span>
                {/* Switch */}
                <div
                  className={
                    "bg-black md:w-7 ml-1.5 md:h-7 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                    (toggle ? null : 'transform translate-x-28')
                  }
                ></div>
              </div>
            </div>
          </>
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
            <p
              onClick={() => googleLoginHandle()}
              className='border  rounded-full p-2.5'>
              <FcGoogle className='text-2xl' />
            </p>

            <p className='border rounded-full p-2.5'>
              <FaFacebookF className='text-2xl text-[#1877f2]' />
            </p>
          </div>

        </div>





      </form>







    </div>
  );
};

export default RegisterMain;