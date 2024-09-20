import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import ContactCard from '../components/ContactCard'

const RequestQuote = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropLocation, setDropLocation] = useState('')
  const [trailerType, setTrailerType] = useState('')

  const [loading, setLoading] = useState(false);

const submitQuoteForm = async (e) => {
  e.preventDefault();
  setLoading(true);
  // ... rest of your code
  const potentialLoadFromMannWebsite = {
    name,
    email,
    pickupLocation,
    dropLocation,
    trailerType,
  };

  try {
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(potentialLoadFromMannWebsite),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
  setLoading(false);
};


  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[200px] text-[#212529] text-4xl font-bold p-8 flex flex-col items-center justify-center bg-[#e2ecf1]">
        <h2 className="mb-4 text-center">Looking for Reliable Trucking Solutions?</h2>
        <div className="flex items-center justify-center space-x-2">
      <h2 className="text-blue-500 text-2xl">Give Us A Call</h2>
      <BsFillTelephoneFill className="text-blue-500 text-lg" />
      <h2 className="text-blue-500 text-2xl">+1 123-456-789</h2>
    </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center p-8 bg-white">
        <form  onSubmit={submitQuoteForm} className="w-full max-w-lg space-y-6">
          {/* Name and Email */}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Pickup Location and Drop Location */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-black text-lg font-medium mb-2" htmlFor="pickup-location">
                Pickup Location
              </label>
              <input
                id="pickup-location"
                type="text"
                placeholder="123 Main St"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="block text-black text-lg font-medium mb-2" htmlFor="drop-location">
                Drop Location
              </label>
              <input
                id="drop-location"
                type="text"
                placeholder="456 Main St"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={dropLocation}
                onChange={(e) => setDropLocation(e.target.value)}
              />
            </div>
          </div>

          {/* Trailer Type */}
          <div className="flex flex-col">
            <label className="block text-black text-lg font-medium mb-2" htmlFor="trailer-type">
              Trailer Type
            </label>
            <select
              id="trailerType"
              name="trailerType"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={trailerType}
              onChange={(e) => setTrailerType(e.target.value)}
            >
              <option value="" disabled>Select trailer type</option>
              <option value="Reefer">Reefer</option>
              <option value="Dry-van">Dry Van</option>
            </select>
          </div>

          {/* Send Message Button */}
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

      {/* Contact Card */}
      <ContactCard />
    </div>
  )
}

export default RequestQuote
