"use client"; // Mark as client-side

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ChhotaOttoCard: React.FC = () => {
  // JSON data embedded in the component
  const data = {
    title: "Chhota Otto",
    description:
      '  "Chhota Otto" is E-Vi\'s durable electric rickshaw, offering low operational costs, quick charging, and seating for six. Perfect for city commutes.',
    features: [
      "Seats up to six comfortably: 4 adults and 2 children",
      "Built with a sturdy, full metal body",
      "Travels 120 kms on a full charge",
      "IP67-rated battery ensures waterproof and dustproof safety",
    ],
  };

  // Typewriter effect state
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedDescription, setDisplayedDescription] = useState("");

  // Typewriter effect function
  const typeWriterEffect = (
    text: string,
    setDisplayed: React.Dispatch<React.SetStateAction<string>>,
    delay: number
  ) => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(index));
      index += 1;
      if (index > text.length) {
        clearInterval(interval);
      }
    }, delay);
  };

  // Effect to initiate typewriter effect
  useEffect(() => {
    // Start typing effects when component mounts
    typeWriterEffect(data.title, setDisplayedTitle, 100); // Typewriter effect for title
    const descriptionDelay = setTimeout(() => {
      typeWriterEffect(data.description, setDisplayedDescription, 50); // Typewriter effect for description
    }, data.title.length * 100); // Delay description until title is finished

    return () => clearTimeout(descriptionDelay); // Cleanup on unmount
  }, [data.title, data.description]);

  // Animation variants

  // Image hover effect
  const imageHover = {
    initial: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  // Button hover effect
  const buttonHover = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <motion.div
      className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-6xl mx-auto items-center relative z-10"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
    >
      {/* Left Section - Rickshaw Image */}
      <motion.div className="w-full md:w-2/3 flex justify-center">
        <motion.div variants={imageHover} whileHover="hover">
          <div className="w-full max-w-lg h-auto">
            <Image
              src="/rick2.svg" // Assuming your image is named 'chhota-otto.svg' and located in the 'public' directory
              alt="Chhota Otto"
              width={600}
              height={600}
              layout="responsive"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section - Text Content */}
      <motion.div className="flex flex-col justify-center w-full md:w-1/3 text-left">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          {displayedTitle} {/* Typewriter effect for title */}
        </h2>
        <p className="text-gray-600 mb-6">
          {displayedDescription} {/* Typewriter effect for description */}
        </p>

        <ul className="mb-6 space-y-4">
          {data.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center text-gray-800">
              <svg
                className="w-6 h-6 mr-2 text-blue-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-4.418 0-8 3.582-8 8v4h16v-4c0-4.418-3.582-8-8-8z"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex space-x-4">
          <motion.button
            className="px-6 py-2 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-700"
            variants={buttonHover}
            initial="initial"
            whileHover="hover"
          >
            Learn More
          </motion.button>
          <motion.button
            className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500"
            variants={buttonHover}
            initial="initial"
            whileHover="hover"
          >
            Get a Quote
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChhotaOttoCard;
