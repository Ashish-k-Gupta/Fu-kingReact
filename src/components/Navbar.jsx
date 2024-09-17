import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/tablogo.png';
import { PiTruckTrailerFill} from "react-icons/pi";
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="bg-[#003366] border-b">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start ">
            <Link className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className='w-auto mb-7' style={{ height: '75px' }} src={logo} alt='Mann Trans Logo' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2 mt-3'>
                Mann Trans Inc
              </span>
            </Link>

            <div className="md:ml-auto">
             <div className="flex space-x-2 mt-8">
            <Link to="/" className='text-white bg-[#d3d3d3] hover:bg-[#b0b0b0] hover:text-white rounded-md px-3 py-2 font-semibold'>HOME</Link>
            <Link to="/about" className='text-white bg-[#d3d3d3] hover:bg-[#b0b0b0] hover:text-white rounded-md px-3 py-2 font-semibold'>ABOUT US</Link>
            <Link to="/contact" className='text-white bg-[#d3d3d3] hover:bg-[#b0b0b0] hover:text-white rounded-md px-3 py-2 font-semibold'>CONTACT US</Link>
            <Link to="/hiring" className='flex items-center text-white bg-red-500 hover:bg-red-600 hover:text-white rounded-md px-3 py-2 font-semibold'>
              <span className="mr-2">HIRING!</span>
               <PiTruckTrailerFill size={24} color="white" />
             </Link>          
            <Link to="/requestQuote" className='text-white bg-green-500 hover:bg-green-600 hover:text-white rounded-md px-3 py-2 font-semibold'>GET A QUOTE</Link>   
            <Link to="tel:+1234567890" className="flex items-center space-x-2 text-white bg-customYellow hover:text-red-500 rounded-md px-3 py-2 font-semibold ml-15 ">
          <BsFillTelephoneOutboundFill size={20} color="currentColor" />
          <span>(123) 456-7890</span>
        </Link>       
            
            </div>         
            </div>


          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
