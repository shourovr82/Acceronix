import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar/Navbar';
import NavbarMain from '../Components/Shared/Navbar/NavbarMain';
import NavbarTop from '../Components/Shared/Navbar/NavbarTop';

const AcceronixLayout = () => {
  return (
    <div>
      <NavbarMain />
      {/* <Navbar /> */}
      {/* <NavbarTop /> */}
      <Outlet />

    </div>
  );
};

export default AcceronixLayout;