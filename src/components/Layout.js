import React from 'react';
import Navbar from './Header/Navbar'; // Import the Navbar component
import Footer from './Footer/Footer'; // Import the Footer component

const Layout = ({ children }) => {
  return (
    <div className='page-wrap'>
      <Navbar />

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
