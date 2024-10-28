"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CardComponent: React.FC = () => {
  const data = {
    title: "Chhota Bull",
    description: ` "Chhota Bull" is E-Vi's sturdy electric loader with a 400 kg capacity, quick charge feature, and 20 paise/km running cost. Ideal for multiple sectors.`,
    features: [
      "Charges fully in just 2.5 hours",
      "Achieves 100 kms on a single charge",
      "Offers swappable and fixed battery options",
      "Supports a payload of 400 kg",
    ],
  };

  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedDescription, setDisplayedDescription] = useState("");

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

  useEffect(() => {
    typeWriterEffect(data.title, setDisplayedTitle, 100);
    const descriptionDelay = setTimeout(() => {
      typeWriterEffect(data.description, setDisplayedDescription, 50);
    }, data.title.length * 100);

    return () => clearTimeout(descriptionDelay);
  }, [data.title, data.description]);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-6xl mx-auto items-center relative z-10"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        transition={{ duration: 0.5 }}
      >
        {/* Left Section - Text Content */}
        <div className="flex flex-col justify-center w-full md:w-1/2 text-left">
          <motion.h2
            className="text-3xl font-bold text-blue-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {displayedTitle}
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {displayedDescription}
          </motion.p>

          <ul className="mb-6 space-y-4">
            {data.features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center text-gray-800"
                variants={featureVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
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
              </motion.li>
            ))}
          </ul>

          <div className="flex space-x-4">
            <motion.button
              className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden text-white font-semibold rounded-lg shadow-md transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-400 hover:to-blue-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute left-0 w-0 transition-all duration-300 bg-white h-full rounded-lg group-hover:w-full"></span>
              <span className="relative flex items-center">
                <FaArrowRight className="mr-2" /> Learn More
              </span>
            </motion.button>
            <motion.button
              className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden text-white font-semibold rounded-lg shadow-md transition-all duration-300 bg-gradient-to-r from-orange-600 to-orange-400 hover:to-orange-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute left-0 w-0 transition-all duration-300 bg-white h-full rounded-lg group-hover:w-full"></span>
              <span className="relative flex items-center">
                <FaArrowRight className="mr-2" /> Get a Quote
              </span>
            </motion.button>
          </div>
        </div>

        {/* Right Section - Rickshaw SVG with larger size */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full max-w-lg h-auto">
            {" "}
            {/* Adjusted size */}
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/rick1.svg"
                alt="Rickshaw"
                width={1200} // Increased width for larger image
                height={1200} // Increased height for larger image
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardComponent;
