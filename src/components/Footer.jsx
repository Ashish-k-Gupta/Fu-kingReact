import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#003366] text-white py-8 border-b'>
  <div className='container mx-auto text-center'>
    <p className='text-[15px]'>
      &copy; Copyright {new Date().getFullYear()} Mann Trans Inc. All Rights Reserved.
    </p>
  </div>
</footer>

  );
};

export default Footer;
