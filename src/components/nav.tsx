"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={64}
              height={64}
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
          </Link>

          {/* Centered Menu (Desktop) */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/product-page">Products</NavLink>
            <NavLink href="/blogs">Blogs</NavLink>
            <NavLink href="/privacy">Policy</NavLink>
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 sm:px-6 rounded-md transition-colors duration-300"
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

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-orange-500 transition-colors duration-300 text-sm sm:text-base font-medium relative group"
    >
      {children}
      {/* Underline Effect */}
      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-orange-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </Link>
  );
};

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-orange-500 focus:outline-none focus:text-orange-500 transition-colors duration-300"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
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
        <>
          <div className="fixed inset-0 bg-black opacity-25 z-40"></div>
          <div className="fixed top-16 left-0 w-full bg-white shadow-lg z-50 animate-slide-down">
            <div className="flex flex-col items-center space-y-4 py-4">
              <MobileNavLink
                href="/product-page"
                onClick={() => setIsOpen(false)}
              >
                Products
              </MobileNavLink>
              <MobileNavLink href="/blogs" onClick={() => setIsOpen(false)}>
                Blogs
              </MobileNavLink>
              <MobileNavLink href="/privacy" onClick={() => setIsOpen(false)}>
                Policy
              </MobileNavLink>
              <Link
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 sm:px-6 rounded-md transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  href,
  children,
  onClick,
}) => {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-orange-500 transition-colors duration-300 text-lg font-medium"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
