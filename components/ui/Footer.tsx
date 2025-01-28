import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { projects } from "@/data/projects";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
  <div className="container mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {/* About Section */}
    <div>
      <h3 className="text-lg font-bold mb-4">NHPS Services</h3>
      <p className="text-sm text-gray-400">
        Management Plumbing includes a broad range of activities, and the many firms and their
        members often define these practices.
      </p>
      {/* Social Icons */}
      <div className="flex space-x-4 mt-4">
        <Link href="#" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} className="text-xl hover:text-blue-500" />
        </Link>
        <Link href="#" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} className="text-xl hover:text-blue-500" />
        </Link>
        <Link href="#" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-blue-500" />
        </Link>
        <Link href="#" aria-label="Google">
          <FontAwesomeIcon icon={faGoogle} className="text-xl hover:text-blue-500" />
        </Link>
      </div>
    </div>

    {/* Contact Section */}
    <div className="sm:pr-4">
      <h3 className="text-lg font-bold mb-4">Contact</h3>
      <ul className="text-sm text-gray-400 space-y-2">
        <li>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
          7 Green Lake Street, Crawfordsville, IN 47933
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          +1 800 123 456 789
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Plumco@gmail.com
        </li>
      </ul>
    </div>

    {/* Services Section */}
    <div>
      <h3 className="text-lg font-bold mb-4">Services</h3>
      <ul className="text-sm text-gray-400 space-y-2">
        <li>
          <Link href="/services/kitchen-plumbing" className="hover:text-blue-500">
            Kitchen Plumbing
          </Link>
        </li>
        <li>
          <Link href="/services/gas-line-services" className="hover:text-blue-500">
            Gas Line Services
          </Link>
        </li>
        <li>
          <Link href="/services/water-line-repair" className="hover:text-blue-500">
            Water Line Repair
          </Link>
        </li>
        <li>
          <Link href="/services/bathroom-plumbing" className="hover:text-blue-500">
            Bathroom Plumbing
          </Link>
        </li>
        <li>
          <Link href="/services/basement-plumbing" className="hover:text-blue-500">
            Basement Plumbing
          </Link>
        </li>
      </ul>
    </div>

    {/* Projects Section */}
    <div>
      <h3 className="text-lg font-bold mb-4">Projects</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {projects.slice(0, 3).map((project) => (
          <Link href={project.link} key={project.id} className="block">
            <div className="group">
              <Image
                src={project.image}
                alt={project.title}
                width={80}
                height={80}
                className="rounded-md object-cover hover:opacity-75"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="bg-gray-800 text-center py-4 text-sm text-gray-500">
    &copy; {currentYear} NHPS Services. All Rights Reserved.
  </div>
</footer>
  );
};

export default Footer;
