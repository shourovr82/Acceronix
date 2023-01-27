
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebookF, FaGithub, FaLock, FaUnlock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { SiMaildotru } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { AcceronixContext } from '../../../Contexts/Context/AcceronixProvider';
import './Login.css'



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState('Buyer');
  const { logInWithEmail, handleGoogleLogin } = useContext(AcceronixContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleLoginUser = (data) => {
    console.log(data)
    logInWithEmail(data?.email, data?.password)
      .then(result => {
        console.log(result.user);
      })
      .catch(e => console.log(e))
  }


  // login with google
  const googleLoginHandle = () => {
    handleGoogleLogin()
      .then(result => {
        const googleUser = result.user;
        const currentUser = {
          fullname: googleUser?.displayName,
          firstname: googleUser?.displayName.split(' ')[0],
          lastname: googleUser?.displayName.split(' ')[1],
          email: googleUser?.email,
          photoURL: googleUser?.photoURL,
          accountType: accountType,
        }
        fetch('http://localhost:8080/googleregister', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(result => {
            console.log(result)
          })
      })
      .catch(e => console.log(e))
  }






  return (
    <div className='flex  justify-between h-screen'>
      <div className='w-full shapedividers_com-781'>
      </div>

      <div className=' h-full w-[90%] flex flex-col justify-center '>
        {/* login form */}
        <form
          onSubmit={handleSubmit(handleLoginUser)}
          className='w-full px-20'>



          {/* Email */}
          <div className="input-container  relative w-full my-2 mt-6">
            <input id="email" className="forminput  focus:ring-2 ring-[#1f2aa1] " type="text" placeholder=" "  {...register("email", {
              required: 'Your Email is Required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email must be Valid' }
            })} />
            <span className='absolute right-3 top-[15px]'><SiMaildotru className='text-[#1f2aa1]' /></span>
            <div className="cut bg-base-100"></div>
            <label htmlFor="email" className="placeholder flex items-center gap-3">Your Email </label>
          </div>



          {/* Password */}
          <div className="input-container  relative w-full my-2 mt-6">
            <input id="email" className="forminput  focus:ring-2 ring-[#1f2aa1] ring-offset-0 " type={showPassword ? 'text' : 'password'} placeholder=" "
              {...register("password", {
                required: 'Your password is needed',
                pattern: { value: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/, message: 'Password must be Stronger between 6-16' }
              })}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3 cursor-pointer top-[15px]'>
              {
                showPassword ? <FaUnlock className='text-[#1f2aa1]
                ' /> : <FaLock className='text-[#1f2aa1]' />
              }

            </span>
            <div className="cut bg-base-100"></div>
            <label htmlFor="email" className="placeholder flex items-center gap-3">Password </label>
          </div>



          {/* forget and remember password */}
          <div className="input-container flex justify-between items-center relative w-full my-2 mt-2">
            <div>
              <div className="form-control ">
                <label className="cursor-pointer flex gap-4 label">
                  <span className="label-text font-semibold text-slate-500">Remember me</span>
                  <input type="checkbox" className="checkbox checkbox-info" />
                </label>
              </div>
            </div>
            <div>
              <h4 className='text-[#1f2aa1] font-sans text-sm font-semibold cursor-pointer hover:underline underline-offset-4'>Forget Password?</h4>
            </div>

          </div>

          <div className="input-container flex justify-between  items-center  rounded-xl mt-10">


            <div className='flex items-center justify-between gap-2'>
              <p
                onClick={() => googleLoginHandle()}
                className='border cursor-pointer hover:shadow-md socialbtn rounded-full p-2.5'>
                <FcGoogle className='text-2xl' />
              </p>

              <p className='border rounded-full cursor-pointer hover:shadow-md socialbtn  p-2.5'>
                <FaFacebookF className='text-2xl text-[#1877f2]' />
              </p>
              <p className='border rounded-full cursor-pointer hover:shadow-md socialbtn  p-2.5'>
                <FaGithub className='text-2xl text-[#171515 ]' />
              </p>
            </div>
            <div>
              <p className='text-slate-400'>Or</p>
            </div>
            <div>
              <button
                type='submit'
                className='border bg-gradient-to-r from-[#633ed9] to-[#200d89] text-white flex justify-between items-center gap-4 p-2   font-semibold  rounded-3xl '> <span className='ml-10'>Log In </span> <span className='bg-[#513bd1] rounded-full p-1'> <HiOutlineArrowNarrowRight className='text-2xl' /></span></button>
            </div>

          </div>

          <div className='flex justify-end  mt-10'>
            <p className='font-semibold text-sm text-slate-500'>Don't have an Account? <Link
              to='/register' className='text-[#1f2aa1] cursor-pointer hover:underline underline-offset-4'>Create an Account</Link> </p>
          </div>

        </form>


      </div>
    </div>
  );
};

export default Login;