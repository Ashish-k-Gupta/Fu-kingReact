import { BsFillTelephoneFill } from "react-icons/bs";
import ContactCard from '../components/ContactCard'

const RequestQuote = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[200px] text-[#212529] text-4xl font-bold p-8 flex flex-col items-center justify-center bg-[#e2ecf1]">
        <h2 className="mb-4 text-center">Looking for Reliable Trucking Solutions?</h2>
        <div className="flex items-center justify-center space-x-2">
      <h2 className="text-blue-500 text-lg">Give Us A Call</h2>
      <BsFillTelephoneFill className="text-blue-500 text-lg" />
      <h2 className="text-blue-500 text-lg">+1 123-456-789</h2>
    </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center p-8 bg-white">
        <form className="w-full max-w-lg space-y-6">
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
              />
            </div>
          </div>

          {/* Trailer Type */}
          <div className="flex flex-col">
            <label className="block text-black text-lg font-medium mb-2" htmlFor="trailer-type">
              Trailer Type
            </label>
            <select
              id="trailer-type"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select trailer type</option>
              <option value="reefer">Reefer</option>
              <option value="dry-van">Dry Van</option>
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
