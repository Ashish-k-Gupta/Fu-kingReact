import React from 'react';
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <FaExclamationTriangle className="text-red-500 text-8xl" />
        </div>
        <p className="text-base font-semibold text-customBlue text-5xl">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link 
        to="/" 
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 mt-4"
      >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;