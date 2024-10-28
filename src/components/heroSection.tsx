"use client"; // Mark as client-side

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion"; // Import Framer Motion

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const thunderRef = useRef<HTMLDivElement>(null);

  const headingText = "Power Up with E-Vi Electric 3 Vehicles";

  // JSON data for description
  const descriptionData = [
    "Revolutionize urban transport with Chhota Otto, designed for comfort and efficiency.",
    "Ideal for city commuting, ensuring a smooth ride for every passenger.",
    "Experience top-notch safety and eco-friendly transport solutions with Chhota Otto.",
  ];

  const [currentDescription, setCurrentDescription] = useState(
    descriptionData[0]
  );

  useEffect(() => {
    let descIndex = 0;
    const descInterval = setInterval(() => {
      descIndex = (descIndex + 1) % descriptionData.length;
      setCurrentDescription(descriptionData[descIndex]);
      gsap.fromTo(
        ".description-text",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }, 3000);

    return () => clearInterval(descInterval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Thunder SVG Animation
      if (thunderRef.current) {
        gsap.to(thunderRef.current, {
          y: -20,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      // Text Animation
      if (textRef.current) {
        gsap.from(textRef.current, {
          opacity: 0,
          x: -50,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        });
      }

      // Buttons Animation
      if (buttonsRef.current) {
        gsap.from(buttonsRef.current.children, {
          opacity: 0,
          y: 20,
          stagger: 0.2,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: "top 80%",
          },
        });
      }

      // Image Animation (fixed on the right side)
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          opacity: 0,
          x: 100, // Start from right
          duration: 1,
          ease: "power2.out",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="relative w-screen h-screen bg-white flex items-center px-16 overflow-hidden"
      ref={heroRef}
    >
      {/* Thunder SVG in the background */}
      <div className="absolute inset-y-0 right-0 w-1/2 h-full flex justify-end z-0">
        <div className="relative w-full h-full" ref={thunderRef}>
          <Image
            src="/thunderHero.svg" // Ensure your thunder SVG path
            alt="Thunder Icon"
            layout="fill"
            objectFit="contain"
            className="z-0"
          />
        </div>
      </div>

      {/* Left Section - Text and Buttons */}
      <div
        className="relative z-10 flex flex-col justify-center w-1/2"
        ref={textRef}
      >
        <h1 className="text-5xl font-bold text-[#1B4572] mb-4">
          {headingText.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <p className="text-lg text-gray-600 mb-8 description-text">
          {currentDescription}
        </p>
        <div className="flex space-x-4" ref={buttonsRef}>
          <motion.button
            className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transform transition-transform duration-300"
            whileHover={{ scale: 1.05, backgroundColor: "#FFB84D" }} // Scale and change background color on hover
            whileTap={{ scale: 0.95 }} // Scale down when pressed
            transition={{ duration: 0.2 }} // Duration for the animation
          >
            Get in Touch
          </motion.button>
          <motion.button
            className="px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transform transition-transform duration-300"
            whileHover={{ scale: 1.05, backgroundColor: "#D1D5DB" }} // Scale and change background color on hover
            whileTap={{ scale: 0.95 }} // Scale down when pressed
            transition={{ duration: 0.2 }} // Duration for the animation
          >
            Book a Test Drive
          </motion.button>
        </div>
      </div>

      {/* Right Section - Larger Rickshaw Image */}
      <motion.div
        className="relative z-10 w-1/2 flex justify-end items-end"
        ref={imageRef}
        initial={{ x: 100, opacity: 0 }} // Start from right off-screen
        animate={{ x: 10, opacity: 5 }} // Move to original position
        transition={{ duration: 3 }} // Duration for the animation
      >
        <div className="w-[600px] h-auto mr-20">
          <Image
            src="/rick1.svg" // Replace with your actual rickshaw image
            alt="Chhota Otto"
            width={900}
            height={900}
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
