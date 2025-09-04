import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 lg:px-8 bg-black text-white relative z-30 border-b border-gray-800/50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="grid grid-cols-2 gap-1 w-5 h-5">
          <div className="bg-white rounded-sm"></div>
          <div className="bg-white rounded-sm"></div>
          <div className="bg-white rounded-sm"></div>
          <div className="bg-white rounded-sm"></div>
        </div>
        <span className="font-semibold text-lg text-white">
          KilauEmas Studio
        </span>
      </div>

      {/* Navigation Menu */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ul className="hidden lg:flex items-center gap-8 text-gray-300 font-medium text-sm">
          <li>
            <a
              href="#services"
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden flex flex-col gap-1 p-2">
        <div className="w-5 h-0.5 bg-white"></div>
        <div className="w-5 h-0.5 bg-white"></div>
        <div className="w-5 h-0.5 bg-white"></div>
      </button>
    </nav>
  );
};

export default Navbar;
