import React, { useState } from 'react';
import { PiTruckTrailerFill, PiCurrencyCircleDollar, PiPhoneFill } from "react-icons/pi";
import { FiClock } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import axios from 'axios'; // Import Axios

const Hiring = () => {
  const [driverName, setDriverName] = useState('');
  const [driverEmail, setDriverEmail] = useState('');
  const [cellNumber, setCellNumber] = useState('');
  const [experience, setExperience] = useState('');
  const [loading, setLoading] = useState(false); // Optional: for loading state
  const [error, setError] = useState(null); // Optional: for error handling

  const submitDriverForm = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading state
    setError(null); // Reset error message

    const potentialDriverFromMannWebsite = {
      driverName,
      driverEmail,
      cellNumber,
      experience,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/driver', potentialDriverFromMannWebsite);
      console.log(response.data); // Log the response from the backend
      // Clear form fields after successful submission
      setDriverName('');
      setDriverEmail('');
      setCellNumber('');
      setExperience('');
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an error submitting the form. Please try again.'); // Set error message
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom-gradient-card">
      <div className="text-white p-8 rounded-lg shadow-2xl w-full lg:max-w-4xl bg-custom-gradient-card">
        <h1 className="text-4xl font-bold mb-6 text-center">We're Hiring Drivers!</h1>

        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-start">
            <PiTruckTrailerFill className="mr-4 text-3xl" />
            <p>Join our team of professional drivers</p>
          </div>
          <div className="flex items-center justify-start">
            <PiCurrencyCircleDollar className="mr-4 text-3xl" />
            <p>Competitive pay and benefits</p>
          </div>
          <div className="flex items-center justify-start">
            <FiClock className="mr-4 text-3xl" />
            <p>Flexible schedules available</p>
          </div>
        </div>

        <p className="mb-6 text-center">
          We're looking for responsible, reliable drivers to join our growing team. 
          If you have a clean driving record and excellent customer service skills, we want to hear from you!
        </p>

        <div className="flex justify-center">
          <NavLink to="tel:+1234567890" className="flex items-center bg-white text-slate-900 px-3 py-2 rounded-md hover:text-red-500 text-xl">
            <PiPhoneFill size={30} color="currentColor" className="mr-3" />
            <span>Call Us: (123) 456-7890</span>
          </NavLink>
        </div>
      </div>

      <div className="bg-white w-full lg:max-w-4xl mt-8 p-8 rounded-lg shadow-2xl">
        <div className="flex flex-col items-center">
          <form onSubmit={submitDriverForm} className="w-full max-w-lg space-y-6">
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
                  required
                  value={driverName}
                  onChange={(e) => setDriverName(e.target.value)}
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
                  value={driverEmail}
                  onChange={(e) => setDriverEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-black text-lg font-medium mb-2" htmlFor="cell-number">
                  Cell Number
                </label>
                <input
                  id="cell-number"
                  type="text"
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  value={cellNumber}
                  onChange={(e) => setCellNumber(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label className="block text-black text-lg font-medium mb-2" htmlFor="experience">
                  Experience (In Years)
                </label>
                <input
                  id="experience"
                  type="text"
                  placeholder="Years Of Experience"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
            </div>

            {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loading} // Disable button while loading
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
