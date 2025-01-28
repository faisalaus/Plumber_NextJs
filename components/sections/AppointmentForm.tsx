import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faList,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

const AppointmentForm: FC = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        {/* Headline */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500">
            Simplify Your Plumbing Solutions
          </h2>
          <p className="text-lg text-gray-400">
            with our professional services.
          </p>
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            {/* Full Name */}
            <div className="flex items-center bg-gray-700 p-4 rounded-md">
              <FontAwesomeIcon
                icon={faUser}
                className="text-3xl text-blue-500 mr-4"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-lg"
              />
            </div>

            {/* Email */}
            <div className="flex items-center bg-gray-700 p-4 rounded-md">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-3xl text-blue-500 mr-4"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-lg"
              />
            </div>

            {/* Contact Number */}
            <div className="flex items-center bg-gray-700 p-4 rounded-md">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-3xl text-blue-500 mr-4"
              />
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-lg"
              />
            </div>
            {/* Service Selection */}
            <div className="flex items-center bg-gray-700 p-4 rounded-md">
              <FontAwesomeIcon
                icon={faList}
                className="text-3xl text-blue-500 mr-4"
              />
              <select
                defaultValue=""
                className="w-full bg-transparent outline-none text-lg focus:bg-gray-800"
              >
                <option value="" disabled hidden className="text-gray-400">
                  Choose a Service
                </option>
                <option value="kitchen-plumbing" className="text-white">
                  Kitchen Plumbing
                </option>
                <option value="gas-line-services" className="text-white">
                  Gas Line Services
                </option>
                <option value="water-line-repair" className="text-white">
                  Water Line Repair
                </option>
                <option value="bathroom-plumbing" className="text-white">
                  Bathroom Plumbing
                </option>
                <option value="basement-plumbing" className="text-white">
                  Basement Plumbing
                </option>
              </select>
            </div>
            {/* Message */}
            <div className="flex items-start bg-gray-700 p-4 rounded-md">
              <FontAwesomeIcon
                icon={faCommentDots}
                className="text-3xl text-blue-500 mr-4 mt-2"
              />
              <textarea
                placeholder="Your Message"
                className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-lg"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-md text-lg"
            >
              Submit Appointment Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
