"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-xl mt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" passHref>
              <Image
                src="/logo.svg" // Replace with your actual logo path
                alt="Logo"
                width={68} // Adjust width as needed
                height={68} // Adjust height as needed
                className="h-17 w-17"
              />
            </Link>
          </div>

          {/* Centered Menu */}
          <div className="flex-grow">
            <div className="flex justify-center space-x-8">
              <Link
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                href="/product-page"
                passHref
              >
                Products
              </Link>
              <Link
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                href="/blogs"
                passHref
              >
                Blogs
              </Link>
              <Link
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                href="/privacy"
                passHref
              >
                Policy
              </Link>
            </div>
          </div>

          {/* Contact Button */}
          <div>
            <Link
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"
              href="/contact"
              passHref
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
