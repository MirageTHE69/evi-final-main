"use client"; // Mark as client-side

import React, { useState } from "react";
import { FaBolt, FaPiggyBank, FaShieldAlt } from "react-icons/fa"; // Importing icons
import { motion } from "framer-motion"; // Importing motion from framer-motion

// JSON data as an array of objects
const infoData = [
  {
    id: 1,
    title: "Reliability",
    description:
      "Engineered to Endure – Tough, dependable, and crafted for India's diverse landscapes.",
    icon: FaShieldAlt, // Reference to the icon component
  },
  {
    id: 2,
    title: "Efficiency",
    description:
      "Efficiency at its Best – Quick charging and extensive range to keep you on the move.",
    icon: FaBolt, // Reference to the icon component
  },
  {
    id: 3,
    title: "Cost - Effective",
    description:
      "Experience significant savings with operational costs as low as 20 paise per km.",
    icon: FaPiggyBank, // Reference to the icon component
  },
];

const Info: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null); // State to track which card is active

  return (
    <motion.div
      className="relative overflow-hidden py-16"
      style={{
        background: "orange",
      }}
      initial={{ backgroundColor: "#ff7f50" }} // Initial background color
      animate={{ backgroundColor: "#ff4500" }} // Animate to a different background color
      transition={{ duration: 3, ease: "easeInOut" }} // Transition properties for background color
    >
      {/* Star Effect Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <StarBackground />
      </div>

      <div className="max-w-7xl mx-auto text-center mb-12 z-10 relative">
        <h2 className="text-3xl font-bold text-white">Why Choose E-Vi?</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 z-10 relative">
        {infoData.map((item) => (
          <motion.div
            key={item.id}
            className={`bg-white rounded-lg p-6 flex flex-col items-center transition duration-300 transform ${
              activeCard === item.id ? "shadow-lg" : "shadow-md"
            }`} // Shadow based on active state
            initial={{ opacity: 0, scale: 0.5 }} // Initial state
            animate={{ opacity: 1, scale: 1 }} // Final state on page load
            exit={{ opacity: 0, scale: 0.5 }} // Exit state if needed
            transition={{ duration: 0.5 }} // Transition properties for page load
            whileHover={{
              scale: 1.05,
              backgroundColor: "#f9c74f",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)", // Shadow effect on hover
              transition: { duration: 0.3 },
            }} // Scale up and change color on hover
            onClick={() =>
              setActiveCard(activeCard === item.id ? null : item.id)
            } // Toggle active card
          >
            <item.icon className="text-orange-500 text-4xl mb-4" />{" "}
            {/* Render the icon */}
            <motion.h3
              className={`text-lg font-bold mb-2 transition duration-300 ${
                activeCard === item.id ? "text-red-600" : "text-gray-900"
              }`} // Change text color if active
              animate={{
                scale: activeCard === item.id ? 1.1 : 1,
              }} // Scale text when active
              transition={{ duration: 0.3 }}
            >
              {item.title}
            </motion.h3>
            <p className="text-gray-600 text-center">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// StarBackground component for the star effect
const StarBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-transparent">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_70%)] animate-starAnimation" />
        </div>
      </div>
      <style>
        {`
          @keyframes starAnimation {
            0% {
              background-position: 0% 0%;
            }
            100% {
              background-position: 100% 100%;
            }
          }

          .animate-starAnimation {
            animation: starAnimation 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Info;
