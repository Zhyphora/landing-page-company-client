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
        <span className="font-semibold text-lg text-white">Portfolite</span>
      </div>

      {/* Navigation Menu */}
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

      {/* Get Template Button */}
      <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 text-sm">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-black"
        >
          <path
            d="M7 17L17 7M17 7H7M17 7V17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Get Template
      </button>

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
