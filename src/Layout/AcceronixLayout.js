import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar/Navbar';

const AcceronixLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />

    </div>
  );
};

export default AcceronixLayout;