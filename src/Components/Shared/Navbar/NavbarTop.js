import React from 'react';
import { AiFillBank } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaGlobeAmericas } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const NavbarTop = () => {


  return (
    <nav className='bg-[#f4f4f4]'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <div className=''>
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="flex cursor-pointer text-[#666666] hover:underline underline-offset-2 hover:text-[#321a9e]  text-sm gap-1 items-center">Customer Service <span><FiChevronDown className='mt-0.5' /></span> </label>
            <ul tabIndex={0} className="dropdown-content menu text-sm shadow  bg-base-100 rounded-box ">
              <li><a>ASK SHAFIN</a></li>
              <li><a>Help Center</a></li>
              <li><a>Feedback</a></li>
            </ul>
          </div>
        </div>

        <div className='flex items-center gap-3'>

          {/* select language */}
          <div className='border-r'>
            <div className="dropdown dropdown-hover ">
              <label tabIndex={0} className="flex items-center cursor-pointer text-sm gap-1 font-medium text-[#666666]
               m-1"><span><FaGlobeAmericas /></span> EN <span><FiChevronDown /></span>  </label>
              <ul tabIndex={0} className="dropdown-content menu  shadow bg-base-100 rounded-box">
                <li><a> <span><AiFillBank /></span> BN</a></li>
                <li><a> <span><AiFillBank /></span>EN</a></li>
                <li><a> <span><AiFillBank /></span>IN</a></li>
              </ul>
            </div>
          </div>


          {/* sign in button */}
          <div className='flex items-center gap-1 border-r pr-2'>
            <p><BiUser className='text-lg ' /></p>
            <p className='text-sm   text-[#666666]'>Sign in</p>
          </div>

          {/* Social follow*/}
          <div className='flex items-center gap-2 text-[#666666] text-sm'>
            <p className='text-sm'>Follow us on</p>
            <div className='flex gap-1 items-center'>
              <p><span><BsFacebook /></span></p>
              <p><span><BsTwitter /></span></p>
              <p><span><BsInstagram /></span></p>
              <p><span><BsYoutube /></span></p>
            </div>
          </div>

        </div>
      </div>

    </nav>
  );
};

export default NavbarTop;