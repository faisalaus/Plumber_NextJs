"use client"; // Mark as a client component
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Using shadcn/ui for the button
import { Menu, X } from "lucide-react"; // For the mobile menu icon and close icon
import ModeToggle from "@/components/sections/ModeToggle"; // Import the ModeToggle component
import { useStickyNav } from "@/lib/hooks/useStickyNav"; // Import the sticky hook

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isSticky = useStickyNav();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav
      className={`${
        isSticky ? "fixed top-0 left-0 right-0 shadow-lg" : ""
      } z-50 bg-white dark:bg-gray-900 transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-cyan-600 dark:text-teal-400"
        >
          NHPS Services
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="hover:text-teal-600 dark:hover:text-teal-400"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-teal-600 dark:hover:text-teal-400"
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-teal-600 dark:hover:text-teal-400"
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="hover:text-teal-600 dark:hover:text-teal-400"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-teal-600 dark:hover:text-teal-400"
          >
            Contact
          </Link>
        </div>

        {/* Right Side: Call-to-Action Button and Theme Toggle */}
        <div className="flex items-center space-x-4">
          {/* Call-to-Action Button (Desktop) */}
          <Button className="hidden md:block bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-700 dark:hover:bg-cyan-800">
            Get a Quote
          </Button>

          {/* Theme Toggle */}
          <ModeToggle />

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden flex items-center justify-center text-gray-800 dark:text-gray-200"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              className="hover:text-teal-600 dark:hover:text-teal-400"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-teal-600 dark:hover:text-teal-400"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-teal-600 dark:hover:text-teal-400"
            >
              Services
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-teal-600 dark:hover:text-teal-400"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-teal-600 dark:hover:text-teal-400"
            >
              Contact
            </Link>
            <Button
              className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
