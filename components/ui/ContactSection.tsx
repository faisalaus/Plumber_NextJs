import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* Address */}
        <div className="p-6 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-800">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-4xl text-teal-600 mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Address
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            North Melbourne Australia
          </p>
        </div>

        {/* Email */}
        <div className="p-6 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-800">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-4xl text-teal-600 mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Email Us
          </h3>
          <p className="text-gray-600 dark:text-gray-400">info@nhps.com.au</p>
        </div>
        {/* Phone */}
        <div className="p-6 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-800">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-4xl text-teal-600 mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Call Now
          </h3>
          <p className="text-gray-600 dark:text-gray-400">0415 316 044</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
