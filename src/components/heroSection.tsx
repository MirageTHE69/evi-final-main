"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const thunderRef = useRef<HTMLDivElement>(null);

  const headingText = "Power Up with E-Vi Electric 3 Vehicles";

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
  }, [descriptionData]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (thunderRef.current) {
        gsap.to(thunderRef.current, {
          y: -20,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

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

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          opacity: 0,
          x: 100,
          duration: 1,
          ease: "power2.out",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="relative w-screen h-screen bg-white flex flex-col md:flex-row items-center px-8 md:px-16 overflow-hidden"
      ref={heroRef}
    >
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 h-full flex justify-end z-0">
        <div className="relative w-3/4 h-full" ref={thunderRef}>
          <Image
            src="/thunderHero.svg"
            alt="Thunder Icon"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div
        className="relative z-10 flex flex-col justify-center w-full md:w-1/2"
        ref={textRef}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          {headingText.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-8 description-text">
          {currentDescription}
        </p>
        <div className="flex space-x-4" ref={buttonsRef}>
          <motion.button
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transform transition-transform duration-300"
            whileHover={{ scale: 1.05, backgroundColor: "#FFB84D" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Get in Touch
          </motion.button>
          <motion.button
            className="px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transform transition-transform duration-300"
            whileHover={{ scale: 1.05, backgroundColor: "#D1D5DB" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Book a Test Drive
          </motion.button>
        </div>
      </div>

      <motion.div
        className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end items-end"
        ref={imageRef}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-3/4 md:w-full h-auto">
          <Image
            src="/rick1.svg"
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
