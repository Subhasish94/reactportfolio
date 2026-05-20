import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
const MainLayout = () => {
  return (
    <main>
      <Sidebar />
      <div className="main-content-wrapper">
        <Navbar />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default MainLayout;