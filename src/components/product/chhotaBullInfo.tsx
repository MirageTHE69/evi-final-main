import React from "react";
import Image from "next/image";

// Sample JSON data for features
const featuresData = [
  {
    id: 1,
    icon: "🛡️", // You can replace with SVG or Icon
    title: "Reliability - Built to Last",
    description:
      "Designed to withstand tough conditions, E-Vi delivers durability and dependability for long-lasting performance.",
  },
  {
    id: 2,
    icon: "🔒", // You can replace with SVG or Icon
    title: "Safety: Designed with Care",
    description:
      "E-Vi prioritizes passenger safety with low risk of toppling or tumbling, stable handling, and a controlled speed.",
  },
  {
    id: 3,
    icon: "⚡", // You can replace with SVG or Icon
    title: "Efficiency – Maximizing every Journey",
    description:
      "Optimized for range and power, E-Vi ensures energy-efficient rides with quick charging and high torque capabilities.",
  },
  {
    id: 4,
    icon: "🛋️", // You can replace with SVG or Icon
    title: "Comfort & Adaptability",
    description:
      "Enhanced suspension and ergonomic design provide a smooth, fatigue-free experience for drivers.",
  },
];

const WhyChhotaBull: React.FC = () => {
  return (
    <div className="w-screen py-16 px-24 bg-white flex justify-between items-center">
      {/* Left Section */}
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold text-[#1B4572] mb-8 transition-transform transform hover:scale-105">
          Why Chhota otto?
        </h2>

        {/* Feature Cards */}
        <div className="space-y-6">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
                color: "#1B4572",
              }}
            >
              <div className="mr-4 text-3xl">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold transition-colors duration-300 hover:text-[#FF6B6B]">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Rickshaw Image */}
      <div className="w-1/2 flex justify-center">
        <div className="transform transition-transform duration-300 hover:scale-110 cursor-pointer">
          <Image
            src="/rick2.svg" // Make sure this path is correct and points to the actual image
            alt="Chhota Bull Rickshaw"
            width={650}
            height={650}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChhotaBull;
