// src/layout/MainLayout.jsx

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="bg-custom-gradient min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet /> {/* Renders the nested route's component */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
