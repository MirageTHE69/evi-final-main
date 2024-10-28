"use client"; // Mark as a client component

import React, { useState } from "react";
import { motion } from "framer-motion"; // Importing Framer Motion

const faqData = [
  {
    question: "What types of businesses can benefit from EVI’s 3-Wheeler EVs?",
    answer:
      "EVI’s 3-Wheelers are perfect for logistics, delivery services, municipal use, and any business that requires efficient, eco-friendly transportation solutions.",
  },
  {
    question: "What warranty options does EVI offer with its 3-Wheelers?",
    answer:
      "EVI offers comprehensive warranties that ensure peace of mind for buyers.",
  },
  {
    question:
      "Are there financing options available for purchasing EVI’s 3-Wheelers?",
    answer:
      "Yes, EVI provides flexible financing options tailored to meet business needs.",
  },
  {
    question: "How do EVI’s 3-Wheelers contribute to sustainability?",
    answer:
      "EVI's 3-Wheelers reduce carbon emissions, contribute to cleaner air, and offer energy-efficient transportation.",
  },
  {
    question: "Can the 3-Wheelers be customized for specific business needs?",
    answer:
      "Yes, EVI offers customization options to suit the unique requirements of different businesses.",
  },
  {
    question: "What kind of after-sales support does EVI provide?",
    answer:
      "EVI provides comprehensive after-sales support, including maintenance and repair services.",
  },
  {
    question:
      "How long does it take to fully charge an EVI vehicle, and what is the range?",
    answer:
      "Charging times vary, but EVI’s 3-Wheelers typically take 4-6 hours for a full charge and offer a range of up to 100 km.",
  },
  {
    question: "Does EVI offer training for drivers and technicians?",
    answer:
      "Yes, EVI provides training programs for drivers and technicians to ensure smooth operations.",
  },
  {
    question:
      "How can a business become an authorized dealer for EVI’s 3-Wheelers?",
    answer:
      "To become an authorized dealer, contact EVI’s sales team for more information on the process.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the current open answer
    } else {
      setOpenIndex(index); // Open the clicked answer
    }
  };

  return (
    <div className="w-screen bg-white py-8">
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <motion.div
            className="w-full md:w-1/3 p-8 bg-[#E5E5E5] rounded-lg shadow-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mb-6">
              Get answers to your questions about the Electric Car Scheme and
              discover how easy it is to drive green.
            </p>
            <button className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-500">
              More Questions? Reach Out
            </button>
          </motion.div>

          {/* Right Section - FAQ Accordion */}
          <motion.div
            className="w-full md:w-2/3 mt-8 md:mt-0 md:ml-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-4 border-b border-gray-300"
                initial={{ backgroundColor: "#fff" }}
                whileHover={{ backgroundColor: "#f9f9f9" }} // Background color animation on hover
                transition={{ duration: 0.2 }}
              >
                <button
                  className="w-full text-left text-xl font-semibold text-blue-900 py-4 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span>{openIndex === index ? "▴" : "▾"}</span>
                </button>
                {openIndex === index && (
                  <motion.div
                    className="text-gray-600 text-lg pb-4"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
