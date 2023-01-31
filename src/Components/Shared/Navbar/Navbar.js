import React, { useState } from 'react';
import NavbarTop from './NavbarTop';
import './Navbar.css';
import { BsChevronDown, BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import NavItems from './NavItems';


const Navbar = () => {
  const navlists = [
    {
      nav: 'Home'
    },
    {
      nav: 'About'
    },
    {
      nav: 'Services'
    },
    {
      nav: 'Dashbboard'
    },
  ]
  const [openNav, setOpenNav] = useState(false);

  return (


    <div>
      <NavbarTop />
    </div>




  );
};

export default Navbar;


// {/* nav top sections bg-gradient-to-b from-[#633ed9] to-[#200d89] */ }
// {/* <NavbarTop /> */ }

// dark mode ====================

// {/* <input class="dark-light" type="checkbox" id="dark-light" name="dark-light" />
//               <label for="dark-light"></label>

//               <div class="light-back"></div>

//               <a href="https://front.codes/" class="logo" target="_blank">
//                 <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
//               </a> */}