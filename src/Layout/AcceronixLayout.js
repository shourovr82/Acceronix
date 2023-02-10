import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Navbar/Header';
import Navbar from '../Components/Shared/Navbar/Navbar';
import NavbarMain from '../Components/Shared/Navbar/NavbarMain';
import NavbarTop from '../Components/Shared/Navbar/NavbarTop';

const AcceronixLayout = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      {/* <NavbarTop /> */}
      <Outlet />

    </div>
  );
};

export default AcceronixLayout;