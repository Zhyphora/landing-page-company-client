import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-4 w-full flex justify-between items-center py-2 pb-0 lg:px-8 bg-[#191919] text-white z-30 border-b border-gray-800/50">
      {/* Logo */}
      {/* <div className="absolute left-0 top-0 h-full w-72 bg-[#000000] rounded-r-4xl" /> */}

      {/* Logo */}
      <div className="flex items-center relative z-10 pb-4">
        <Link href="/" className="flex items-center group">
          <div className="h-14 relative overflow-hidden">
            {/* <div className="h-14 sm:h-15 md:h-16 relative overflow-hidden"> */}
            <Image
              width={300}
              height={300}
              src="/kes-logo-horizontal-crop-removebg.png"
              alt="KilauEmas Studio"
              className="h-full w-auto  transition-transform duration-300 group-hover:scale-105 "
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-500" />
          </div>
        </Link>
      </div>

      {/* Navigation Menu */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <ul className="hidden lg:flex lg:items-center gap-8 text-gray-300 font-medium text-sm">
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
