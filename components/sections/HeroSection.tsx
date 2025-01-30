"use client";

import { Calendar, Truck, Wrench } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const steps = [
    {
      title: "Book Online",
      icon: <Calendar className="h-12 w-12 text-cyan-600" />,
    },
    {
      title: "We Arrive",
      icon: <Truck className="h-12 w-12 text-cyan-600" />,
    },
    {
      title: "Solve Problem",
      icon: <Wrench className="h-12 w-12 text-cyan-600" />,
    },
  ];

  return (
    <section className="relative bg-gray-50 dark:bg-gray-800">
      {/* Hero Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-between py-16 px-8 container mx-auto">
        {/* Left Content */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Ready for <span className="text-teal-600">Help</span> You.
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            We are a certified company providing reliable plumbing services -
            Specialized Plumbing Services in North Melbourne
          </p>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-6 rounded-full shadow-lg transition">
            Book Online
          </button>
        </div>

        {/* Right Image */}
        <div className="relative max-w-lg mt-8 md:mt-0">
          <Image
            src="/images/prof_plumber.webp" // Correct path to the image in the public folder
            alt="Professional plumber"
            width={500}
            height={500}
            priority={true}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Process Steps */}
      <div className="relative bg-white dark:bg-gray-700 py-10 px-8 rounded-t-lg shadow-lg -mt-12 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transform transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
