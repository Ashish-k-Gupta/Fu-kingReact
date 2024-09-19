import React from 'react';
import { PiTruckTrailerFill, PiCurrencyCircleDollar, PiPhoneFill } from "react-icons/pi";
import { FiClock } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const Hiring = () => {
  return (
    <div className="flex flex-col lg:flex-col rounded-md p-auto">
      <div >
        <div className="text-white p-8 rounded-lg shadow-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">We're Hiring Drivers!</h1>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <PiTruckTrailerFill className="mr-4 text-3xl" />
              <p>Join our team of professional drivers</p>
            </div>
            <div className="flex items-center">
              <PiCurrencyCircleDollar className="mr-4 text-4xl" />
              <p>Competitive pay and benefits</p>
            </div>
            <div className="flex items-center">
              <FiClock className="mr-4 text-3xl" />
              <p>Flexible schedules available</p>
            </div>
          </div>

          <p className="mb-6">
            We're looking for responsible, reliable drivers to join our growing team. 
            If you have a clean driving record and excellent customer service skills, we want to hear from you!
          </p>

          <div className="flex items-center">
           
            <NavLink to="tel:+1234567890" className="flex items-center bg-white text-slate-900 px-3 py-2 rounded-md hover:text-red-500 text-xl">
                  <PiPhoneFill size={30} color="currentColor" className='mr-3'/>
                  <span>Call Us: (123) 456-7890</span>
                </NavLink>
          </div>
        </div>
      </div>

      <div className="bg-white h-full">
        <div className="flex flex-col items-center p-8">
          <form className="w-full max-w-lg space-y-6">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-black text-lg font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-black text-lg font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-black text-lg font-medium mb-2" htmlFor="pickup-location">
                  Cell Number
                </label>
                <input
                  id="pickup-location"
                  type="text"
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-black text-lg font-medium mb-2" htmlFor="drop-location">
                  Expericence (In Years)
                </label>
                <input
                  id="drop-location"
                  type="text"
                  placeholder="Years Of Experience"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hiring;