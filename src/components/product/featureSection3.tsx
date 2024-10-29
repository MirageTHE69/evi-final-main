"use client"; // Mark as client-side

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Import necessary components from Framer Motion

const FeatureSection2: React.FC = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("capability");

  // Function to switch tabs
  const switchTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-screen py-16 px-10 bg-white">
      {/* Tabs */}
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-[#1B4572] mb-4">Features</h2>
        <p className="text-gray-600 mb-6">
          Packed with innovative features for a smarter, more efficient ride.
        </p>
        <div className="flex space-x-8 text-lg font-medium mb-16">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "capability"
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => switchTab("capability")}
          >
            Capability
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "technology"
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => switchTab("technology")}
          >
            Technology
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "design"
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => switchTab("design")}
          >
            Design
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto">
        {/* Use AnimatePresence for conditional rendering with animations */}
        <AnimatePresence>
          {/* Capability Content */}
          {activeTab === "capability" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Starting state
              animate={{ opacity: 1, y: 0 }} // Animate to this state
              exit={{ opacity: 0, y: 20 }} // Exit animation
              transition={{ duration: 0.5 }} // Animation duration
              className="relative flex justify-center items-center mt-24"
            >
              <Image
                src="/capability2.svg" // Replace with your actual image path
                alt="Chhota Bull Rickshaw"
                width={1000}
                height={1000}
              />
            </motion.div>
          )}

          {/* Technology Content */}
          {activeTab === "technology" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-14 items-center"
            >
              {/* Left Section: Technology Details */}
              <div className="space-y-16 mt-16">
                <div className="flex justify-between items-center border-b border-gray-300 pb-4">
                  <div>
                    <h4 className="text-lg text-gray-500">
                      Battery (Fixed & Swappable)
                    </h4>
                  </div>
                  <div className="text-right">
                    <p className="text-5xl font-bold">5.04</p>
                    <p className="text-gray-500">kw peak</p>
                  </div>
                </div>

                <div className="flex justify-between items-center border-b border-gray-300 pb-4">
                  <div>
                    <h4 className="text-lg text-gray-500">Motor</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-5xl font-bold">2</p>
                    <p className="text-gray-500">kw</p>
                  </div>
                </div>

                <div className="flex justify-between items-center border-b border-gray-300 pb-4">
                  <div>
                    <h4 className="text-lg text-gray-500">Fast Charging</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-5xl font-bold">2.5</p>
                    <p className="text-gray-500">Hour</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg text-gray-500">
                      Independent Suspension
                    </h4>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">Lowers Toppling Risk</p>
                  </div>
                </div>
              </div>

              {/* Right Section: Rickshaw Image */}
              <div className="flex justify-center">
                <Image
                  src="/rick2.svg" // Replace with actual image path
                  alt="Rickshaw Image"
                  width={700}
                  height={700}
                />
              </div>
            </motion.div>
          )}

          {activeTab === "design" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col space-y-20"
            >
              {/* Rickshaw with Metal Frame Body */}
              <div className="flex justify-between mt-16 items-center">
                <div>
                  <div className="absolute top-0 right-4 mt-16">
                    <p className="text-2xl font-bold">Frame Body</p>
                    <p className="text-4xl font-bold">Metal</p>
                  </div>
                  <Image
                    src="/rick2.svg" // Replace with your actual rickshaw image path
                    alt="Rickshaw Full"
                    width={600}
                    height={600}
                  />
                </div>
              </div>

              {/* Cargo Space */}
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <p className="text-2xl font-bold">Adaptability</p>
                  <p className="text-4xl font-bold">Foldable Seats</p>
                </div>
                <Image
                  src="/seat.svg" // Replace with your cargo SVG path
                  alt="seat Space"
                  width={400}
                  height={300}
                />
              </div>

              {/* Brakes */}
              <div className="flex justify-between items-center">
                <Image
                  src="/hydrolic.svg" // Replace with your brake SVG path
                  alt="Brakes"
                  width={400}
                  height={300}
                />
                <div className="text-right">
                  <p className="text-2xl font-bold">Brakes</p>
                  <p className="text-4xl font-bold">Hydraulic</p>
                </div>
              </div>

              {/* Handlebar - Ergonomic Design */}
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <p className="text-2xl font-bold">Handlebar</p>
                  <p className="text-4xl font-bold">Ergonomic Design</p>
                </div>
                <Image
                  src="/handel.svg" // Replace with your handlebar SVG path
                  alt="Handle Bar"
                  width={400}
                  height={300}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FeatureSection2;
