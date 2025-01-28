import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faList,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

const AppointmentForm: FC<{ lightBackground?: boolean }> = ({
  lightBackground = false,
}) => {
  return (
    <section
      className={`py-12 ${
        lightBackground
          ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
          : "bg-gray-900 text-white"
      }`}
    >
      <div className="container mx-auto">
        {/* Headline */}
        <div className="text-center mb-8">
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              lightBackground
                ? "text-gray-800 dark:text-gray-100"
                : "text-blue-500"
            }`}
          >
            {lightBackground
              ? "Get in Touch"
              : "Simplify Your Plumbing Solutions"}
          </h2>
          <p
            className={`text-lg ${
              lightBackground
                ? "text-gray-600 dark:text-gray-400"
                : "text-gray-400"
            }`}
          >
            {lightBackground
              ? "We are here to help you 24/7."
              : "With our professional services."}
          </p>
        </div>

        {/* Form Section */}
        <div
          className={`max-w-4xl mx-auto rounded-lg shadow-lg p-8 ${
            lightBackground ? "bg-white dark:bg-gray-800" : "bg-gray-800"
          }`}
        >
          <form className="space-y-6">
            {/* Full Name */}
            <div
              className={`flex items-center p-4 rounded-md ${
                lightBackground ? "bg-gray-200" : "bg-gray-700"
              }`}
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-3xl text-blue-500 mr-4"
              />
              <input
                type="text"
                placeholder="Full Name"
                className={`w-full bg-transparent outline-none ${
                  lightBackground
                    ? "text-gray-900 placeholder-gray-600"
                    : "text-white placeholder-gray-400"
                } text-lg`}
              />
            </div>

            {/* Email */}
            <div
              className={`flex items-center p-4 rounded-md ${
                lightBackground ? "bg-gray-200" : "bg-gray-700"
              }`}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-3xl text-blue-500 mr-4"
              />
              <input
                type="email"
                placeholder="Email Address"
                className={`w-full bg-transparent outline-none ${
                  lightBackground
                    ? "text-gray-900 placeholder-gray-600"
                    : "text-white placeholder-gray-400"
                } text-lg`}
              />
            </div>

            {/* Contact Number */}
            <div
              className={`flex items-center p-4 rounded-md ${
                lightBackground ? "bg-gray-200" : "bg-gray-700"
              }`}
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="text-3xl text-blue-500 mr-4"
              />
              <input
                type="tel"
                placeholder="Contact Number"
                className={`w-full bg-transparent outline-none ${
                  lightBackground
                    ? "text-gray-900 placeholder-gray-600"
                    : "text-white placeholder-gray-400"
                } text-lg`}
              />
            </div>

            {/* Service Selection */}
            <div
              className={`flex items-center p-4 rounded-md ${
                lightBackground ? "bg-gray-200" : "bg-gray-700"
              }`}
            >
              <FontAwesomeIcon
                icon={faList}
                className="text-3xl text-blue-500 mr-4"
              />
              <select
                defaultValue=""
                className={`w-full bg-transparent outline-none text-lg ${
                  lightBackground
                    ? "text-gray-900 placeholder-gray-600"
                    : "text-white placeholder-gray-400"
                }`}
              >
                <option value="" disabled hidden>
                  Choose a Service
                </option>
                <option value="kitchen-plumbing">Kitchen Plumbing</option>
                <option value="gas-line-services">Gas Line Services</option>
                <option value="water-line-repair">Water Line Repair</option>
                <option value="bathroom-plumbing">Bathroom Plumbing</option>
                <option value="basement-plumbing">Basement Plumbing</option>
              </select>
            </div>

            {/* Message */}
            <div
              className={`flex items-start p-4 rounded-md ${
                lightBackground ? "bg-gray-200" : "bg-gray-700"
              }`}
            >
              <FontAwesomeIcon
                icon={faCommentDots}
                className="text-3xl text-blue-500 mr-4 mt-2"
              />
              <textarea
                placeholder="Your Message"
                className={`w-full bg-transparent outline-none ${
                  lightBackground
                    ? "text-gray-900 placeholder-gray-600"
                    : "text-white placeholder-gray-400"
                } text-lg`}
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
