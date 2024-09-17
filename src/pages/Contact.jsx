import React from 'react';
import { FaRoad } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import ContactCard from '../components/ContactCard';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 border-b">

      {/* Map Section */}
      <div className="mb-8 ">
        <div className="relative w-full h-64 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1004.2130057404183!2d-119.25365572412369!3d35.26633308888182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDE1JzU4LjgiTiAxMTnCsDE1JzA4LjgiVw!5e1!3m2!1sen!2sin!4v1726559290324!5m2!1sen!2sin" 
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Information */}
      <div className="  bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <div className='flex items-start'>

      <div className=" flex items-center mb-4">
      <FaRoad className='text-4xl mr-3 ml-6' />
    <p className="text-lg text-slate-500">9741 S Enos Ln, Bakersfield, CA 93311, USA</p>
      </div>

        <div className="flex items-center mb-4">
          <FaPhoneAlt className='text-3xl mr-3 ml-6' />
          <p className="text-lg text-slate-500">+1 (123) 456-7890</p>
        </div>
        <div className="flex items-center">
          <IoIosMail className='text-4xl mr-3 ml-6'/>
          <p className="text-lg text-slate-500">contact@example.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className=" p-6 rounded-lg bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 p-3 rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded-md"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border border-gray-300 p-3 rounded-md"
              required
            />
            <input
              type="text"
              placeholder="Address"
              className="border border-gray-300 p-3 rounded-md"
              required
            />
          </div>
          <textarea
            placeholder="Message"
            className="border border-gray-300 p-3 w-full rounded-md mb-6"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
        </div>
        </div>
  );
};

export default ContactUs;
