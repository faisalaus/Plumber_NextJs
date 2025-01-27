'use client'; // Mark as client component
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Using shadcn/ui for the button
import { Menu } from "lucide-react"; // For the mobile menu icon
import ModeToggle from "@/components/ModeToggle"; // Import the ModeToggle component

export default function Navbar() {
  return (
    <nav className="fixed top-14 left-0 right-0 z-40 bg-white shadow-md dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Plumco
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400">
            Services
          </Link>
          <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">
            Contact
          </Link>
        </div>

        {/* Right Side: Call-to-Action Button and Theme Toggle */}
        <div className="flex items-center space-x-4">
          {/* Call-to-Action Button (Desktop) */}
          <Button className="hidden md:block bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
            Get a Quote
          </Button>

          {/* Theme Toggle */}
          <ModeToggle />

          {/* Mobile Menu Icon */}
          <Menu className="md:hidden h-6 w-6 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
        <div className="flex flex-col space-y-4 p-4">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400">
            Services
          </Link>
          <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">
            Contact
          </Link>
          <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
            Get a Quote
          </Button>
        </div>
      </div>
    </nav>
  );
}