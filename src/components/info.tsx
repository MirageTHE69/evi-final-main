"use client";

import React, { useState } from "react";
import { FaBolt, FaPiggyBank, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const infoData = [
  {
    id: 1,
    title: "Reliability",
    description:
      "Engineered to endure – tough, dependable, and crafted for India's diverse landscapes.",
    icon: FaShieldAlt,
  },
  {
    id: 2,
    title: "Efficiency",
    description:
      "Efficiency at its best – quick charging and extensive range to keep you on the move.",
    icon: FaBolt,
  },
  {
    id: 3,
    title: "Cost-Effective",
    description:
      "Experience significant savings with operational costs as low as 20 paise per km.",
    icon: FaPiggyBank,
  },
];

const Info: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <motion.section
      className="relative py-16 bg-gradient-to-r from-orange-400 to-orange-600 overflow-hidden"
      initial={{ backgroundColor: "#ff7f50" }}
      animate={{ backgroundColor: "#ff4500" }}
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      {/* Star Effect Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <StarBackground />
      </div>

      {/* Section Title */}
      <div className="max-w-7xl mx-auto text-center mb-12 relative z-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Why Choose E-Vi?
        </h2>
      </div>

      {/* Info Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 relative z-10">
        {infoData.map((item) => (
          <motion.div
            key={item.id}
            className={`rounded-lg p-6 flex flex-col items-center cursor-pointer transition-transform duration-300 ${
              activeCard === item.id ? "scale-105" : "scale-100"
            }`}
            style={{
              background:
                activeCard === item.id
                  ? "linear-gradient(135deg, #FFA500 0%, #FF4500 100%)"
                  : "linear-gradient(135deg, #FFFFFF 0%, #F3F4F6 100%)",
              boxShadow:
                activeCard === item.id
                  ? "0 4px 20px rgba(255, 69, 0, 0.3)"
                  : "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: item.id * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              setActiveCard(activeCard === item.id ? null : item.id)
            }
          >
            <item.icon
              className={`text-4xl mb-4 ${
                activeCard === item.id ? "text-white" : "text-orange-500"
              }`}
            />
            <motion.h3
              className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                activeCard === item.id ? "text-white" : "text-gray-800"
              }`}
              animate={{
                color: activeCard === item.id ? "#FFFFFF" : "#1F2937",
              }}
              transition={{ duration: 0.3 }}
            >
              {item.title}
            </motion.h3>
            <p
              className={`text-center ${
                activeCard === item.id ? "text-white" : "text-gray-600"
              }`}
            >
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const StarBackground = () => {
  return (
    <div className="absolute inset-0">
      <div className="w-full h-full bg-transparent">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_70%)] animate-starAnimation" />
      </div>
      <style jsx>{`
        @keyframes starAnimation {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }

        .animate-starAnimation {
          animation: starAnimation 30s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
};

export default Info;
