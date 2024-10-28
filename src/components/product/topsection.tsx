import React from "react";
import Image from "next/image";

const TopSection: React.FC = () => {
  return (
    <div className="min-h-screen w-screen flex justify-between items-center px-16 py-20 bg-white">
      {/* Left Section: Rickshaw Images */}
      <div className="flex space-x-16">
        {/* Rickshaw 1: Chhota Bull */}
        <div className="flex flex-col items-center">
          <Image
            src="/rick1.svg" // Replace with actual path to the image
            alt="Chhota Bull"
            width={300}
            height={300}
            className="mb-4"
          />
          <p className="text-center text-gray-700 font-semibold text-xl">
            Chhota Bull
          </p>
        </div>

        {/* Rickshaw 2: Chhota Otto */}
        <div className="flex flex-col items-center">
          <Image
            src="/rick2.svg" // Replace with actual path to the image
            alt="Chhota Otto"
            width={300}
            height={300}
            className="mb-4"
          />
          <p className="text-center text-gray-700 font-semibold text-xl">
            Chhota Otto
          </p>
        </div>
      </div>

      {/* Right Section: Thunder SVG */}
      <div className="flex items-center justify-end">
        <Image
          src="/thunderborder.svg" // Replace with actual path to the thunder SVG
          alt="Thunder Icon"
          width={600}
          height={600}
          className="transform  rotate-12" // Rotate the icon by 45 degrees
        />
      </div>
    </div>
  );
};

export default TopSection;
