import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/tablogo.png';
import { PiTruckTrailerFill } from "react-icons/pi";
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-white border-2 border-white rounded-md px-3 pt-2 font-semibold'
      : 'text-white rounded-md px-3 pt-2 font-semibold';

  return (
    <nav className="bg-[#003366] border-b">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className='w-auto mb-7' style={{ height: '75px' }} src={logo} alt='Mann Trans Logo' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2 mt-3'>
                Mann Trans Inc
              </span>
            </NavLink>

            <div className="md:ml-auto">
              <div className="flex space-x-2 mt-8">
                <NavLink to="/" className={({ isActive }) =>
                    `${linkClass({ isActive })} bg-blue-500 hover:bg-blue-600`
                  }>HOME</NavLink>
                <NavLink to="/about" className={({ isActive }) =>
                    `${linkClass({ isActive })} bg-blue-500 hover:bg-blue-600`
                  }>ABOUT US</NavLink>
                <NavLink to="/contact" className={({ isActive }) =>
                    `${linkClass({ isActive })} bg-blue-500 hover:bg-blue-600`
                  }>CONTACT US</NavLink>

                <NavLink
                  to="/requestQuote"
                  className={({ isActive }) =>
                    `${linkClass({ isActive })} bg-green-500 hover:bg-green-600`
                  }
                >
                  GET A QUOTE
                </NavLink>

                <NavLink to="tel:+1234567890" className="flex items-center space-x-2 text-white bg-customYellow hover:text-red-500 rounded-md px-3 py-2 font-semibold ml-15">
                  <BsFillTelephoneOutboundFill size={20} color="currentColor" />
                  <span>(123) 456-7890</span>
                </NavLink>
                
                <NavLink to="/hiring" className={({ isActive }) => `${linkClass({ isActive })} bg-red-500 hover:bg-red-600 flex items-center pb-1`}>
                  <span className="mr-2">HIRING!</span>
                  <PiTruckTrailerFill size={24} color="white" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
