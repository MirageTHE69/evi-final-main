"use client"; // Ensure this is at the top of the file for Next.js

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Custom hook for counting animation
const useCounter = (start: number, end: number, duration: number) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(start + progress * (end - start));
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [start, end, duration]);

  return count;
};

const FeatureSection: React.FC = () => {
  // Define feature data as JSON
  const features = [
    { label: "Range", endValue: 100, unit: "Kilometers" },
    { label: "Top Speed", endValue: 25, unit: "kmph" },
    { label: "Peak Torque", endValue: 26, unit: "Nm" },
    { label: "Payload Capacity", endValue: 400, unit: "Kg" },
  ];

  // Use the custom hook for counting for each feature
  const rangeCount = useCounter(0, features[0].endValue, 1500);
  const speedCount = useCounter(0, features[1].endValue, 1500);
  const torqueCount = useCounter(0, features[2].endValue, 1500);
  const payloadCount = useCounter(0, features[3].endValue, 1500);

  // Map counts to each feature
  const counts = [rangeCount, speedCount, torqueCount, payloadCount];

  return (
    <div className="w-screen bg-white py-16">
      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto flex justify-between items-center text-center">
        {features.map((feature, index) => (
          <React.Fragment key={feature.label}>
            {/* Feature Card */}
            <div className="flex flex-col">
              <p className="text-gray-600 text-sm">{feature.label}</p>
              <motion.p
                className="text-[#1B4572] text-xl font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {`${counts[index]} ${feature.unit}`}
              </motion.p>
            </div>

            {/* Vertical Divider */}
            {index < features.length - 1 && (
              <div className="border-r border-gray-300 h-12"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Description Section */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 text-2xl font-bold">
          Experience the next generation of mobility with our electric auto
          rickshaw, equipped with industry-leading features and advanced
          engineering.
        </p>
      </div>
    </div>
  );
};

export default FeatureSection;
