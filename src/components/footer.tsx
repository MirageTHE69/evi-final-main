import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A2E3F] text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          {/* Logo and Contact Info */}
          <div className="flex flex-col space-y-4 w-full md:w-1/4">
            <Image
              src="/logo.svg"
              alt="EVI Logo"
              width={128}
              height={32}
              className="mb-4"
            />

            <div className="flex items-center space-x-2 text-gray-400">
              <FaPhoneAlt />
              <span>Contact us</span>
            </div>
            <p className="text-gray-300">12344567899</p>
            <div className="flex items-center space-x-2 text-gray-400">
              <FaEnvelope />
              <span>Email id</span>
            </div>
            <p className="text-gray-300">Email.com</p>
            <div className="flex items-center space-x-2 text-gray-400">
              <FaMapMarkerAlt />
              <span>Address</span>
            </div>
            <p className="text-gray-300">Rajkot, Gujarat</p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4">
            <h4 className="text-orange-500 font-semibold mb-4">Quick Links</h4>
            <ul className="text-gray-300 space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Our Fleet</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>

          {/* Electric 3-Wheelers */}
          <div className="w-full md:w-1/4">
            <h4 className="text-orange-500 font-semibold mb-4">
              Our Electric 3-Wheelers
            </h4>
            <ul className="text-gray-300 space-y-2">
              <li>
                <a href="#">Chhota Otto</a>
              </li>
              <li>
                <a href="#">Chhota Bull</a>
              </li>
            </ul>
          </div>

          {/* Customer Services */}
          <div className="w-full md:w-1/4">
            <h4 className="text-orange-500 font-semibold mb-4">
              Customer Services
            </h4>
            <ul className="text-gray-300 space-y-2">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Help & Resources</a>
              </li>
              <li>
                <a href="#">General Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-1/4">
            <h4 className="text-orange-500 font-semibold mb-4">
              Stay Connected with us on
            </h4>
            <div className="flex space-x-4">
              <FaFacebook className="text-white text-2xl" />
              <FaInstagram className="text-white text-2xl" />
              <FaLinkedin className="text-white text-2xl" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-4 text-gray-400 text-center">
          © 2024 EVI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
