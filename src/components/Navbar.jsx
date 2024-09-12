import React from 'react';
import logo from '../assets/images/tablogo.png';
import { PiTruckTrailerFill} from "react-icons/pi";
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="bg-customBlue border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start ">
            <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
              <img className='w-auto mb-7' style={{ height: '75px' }} src={logo} alt='Mann Trans Logo' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2 mt-3'>
                Mann Trans Inc
              </span>
            </a>

            <div className="md:ml-auto">
             <div className="flex space-x-2 mt-8">
            <a href="/index.html" className='text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 font-semibold'>HOME</a>
            <a href="/index.html" className='text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 font-semibold'>ABOUT US</a>
            <a href="/index.html" className='flex items-center text-white bg-red-500 hover:bg-red-600 hover:text-white rounded-md px-3 py-2 font-semibold'>
              <span className="mr-2">HIRING!</span>
               <PiTruckTrailerFill size={24} color="white" />
             </a>          
            <a href="/index.html" className='text-white bg-green-500 hover:bg-green-600 hover:text-white rounded-md px-3 py-2 font-semibold'>REQUEST A QUOTE</a>   
            <a href="tel:+1234567890" className="flex items-center space-x-2 text-white bg-customYellow hover:text-red-500 rounded-md px-3 py-2 font-semibold ml-15 ">
          <BsFillTelephoneOutboundFill size={20} color="currentColor" />
          <span>(123) 456-7890</span>
        </a>       
            
            </div>         
            </div>


          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
