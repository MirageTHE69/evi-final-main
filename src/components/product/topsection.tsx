import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import the Link component

const TopSection: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-16 py-10 md:py-20 bg-white">
      {/* Left Section */}
      <div className="flex flex-col items-center md:items-start">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 ml-16 text-center md:text-left">
          OUR E-VIs
        </h2>

        {/* Rickshaw Images */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-16">
          {/* Rickshaw 1: Chhota Bull */}
          <div className="flex flex-col items-center">
            <Link href="/product-page">
              {/* Link to product-page */}
              <Image
                src="/rick1.svg" // Replace with actual path to the image
                alt="Chhota Bull"
                width={400}
                height={400}
                className="mb-4 cursor-pointer" // Add cursor-pointer for better UX
              />
            </Link>
            <p className="text-center text-gray-700 font-semibold text-xl">
              Chhota Bull
            </p>
          </div>

          {/* Rickshaw 2: Chhota Otto */}
          <div className="flex flex-col items-center">
            <Link href="/product-page2">
              {/* Link to product-page2 */}
              <Image
                src="/rick2.svg" // Replace with actual path to the image
                alt="Chhota Otto"
                width={400}
                height={400}
                className="mb-4 cursor-pointer" // Add cursor-pointer for better UX
              />
            </Link>
            <p className="text-center text-gray-700 font-semibold text-xl">
              Chhota Otto
            </p>
          </div>
        </div>
      </div>

      {/* Right Section: Thunder SVG */}
      <div className="flex items-center justify-center md:justify-end mt-8 md:mt-0">
        <Image
          src="/thunderborder.svg" // Replace with actual path to the thunder SVG
          alt="Thunder Icon"
          width={600}
          height={600}
          className="transform rotate-12 hidden md:block" // Hide on small screens, show on md and larger
        />
      </div>
    </div>
  );
};

export default TopSection;
