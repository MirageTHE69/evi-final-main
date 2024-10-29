// /components/SplashScreen.jsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/public/logo.svg";

export default function SplashScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const splashDuration = 2000; // Duration in milliseconds (2 seconds)

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, splashDuration);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants for the splash screen container
  const containerVariants = {
    initial: { y: 0 },
    animate: { y: 0 },
    exit: {
      y: "-100vh", // Slide up out of the viewport
      transition: { type: "easeInOut", duration: 1 },
    },
  };

  const logoVariants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: {
      scale: 0.5,
      transition: { type: "tween", duration: 1 },
    },
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center z-50"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              className="flex flex-col items-center"
              variants={logoVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Image
                src={logo}
                alt="Logo"
                width={128}
                height={128}
                className="w-32 h-32 sm:w-24 sm:h-24"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && children}
    </>
  );
}
