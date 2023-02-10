import React from 'react';
import NavbarTop from './NavbarTop';
import mainLogo from '../../../Assets/Logo/logo.png'

const Header = () => {
  return (
    <div>
      {/* Navbar top  */}
      <div>
        <NavbarTop />
      </div>

      {/* Main Navbar */}
      <nav>
        <div>
          <img src={mainLogo} alt="" />
        </div>
        <div>

        </div>
        <div></div>

      </nav>

    </div>
  );
};

export default Header;