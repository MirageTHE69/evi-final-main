"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white fixed w-full z-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg" // Replace with your actual logo path
              alt="Logo"
              width={64} // Adjust width as needed
              height={64} // Adjust height as needed
              className="h-16 w-16 object-contain"
            />
          </Link>

          {/* Centered Menu */}
          <div className=" space-x-8">
            <Link
              href="/product-page"
              className="text-gray-700 hover:text-orange-500 transition-colors duration-300 text-sm font-medium"
            >
              Products
            </Link>
            <Link
              href="/blogs"
              className="text-gray-700 hover:text-orange-500 transition-colors duration-300 text-sm font-medium"
            >
              Blogs
            </Link>
            <Link
              href="/privacy"
              className="text-gray-700 hover:text-orange-500 transition-colors duration-300 text-sm font-medium"
            >
              Policy
            </Link>
          </div>

          {/* Contact Button */}
          <div className=" md:block">
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-2 px-6 rounded-md transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-orange-500 focus:outline-none focus:text-orange-500 transition-colors duration-300"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-40">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/product-page"
              className="text-gray-700 hover:text-orange-500 transition-colors duration-300 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/blogs"
              className="text-gray-700 hover:text-orange-500 transition-colors duration-300 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/privacy"
              className="text-gray-700 hover:text-orange-500 transition-colors duration-300 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Policy
            </Link>
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
