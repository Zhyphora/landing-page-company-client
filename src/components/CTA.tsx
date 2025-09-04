import React from "react";
import { FaBehance, FaTwitter, FaDribbble } from "react-icons/fa6";
import WaveBackground from "./WaveBackground";

const CTA = () => {
  return (
    <section className="w-full py-20 px-8 bg-[#191919] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Available for work badge */}
        <div className="inline-block bg-green-400 text-black px-4 py-2 rounded-full text-sm font-medium mb-8">
          Available For Work
        </div>

        {/* Main heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Curious about what we can create together? Let's bring something
          extraordinary to life!
        </h2>

        {/* CTA Button */}
        <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition text-lg mb-12">
          Book a Free Call
        </button>

        {/* Social links */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <a href="#" className="hover:text-gray-300 transition">
            <FaBehance className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            <FaDribbble className="w-6 h-6" />
          </a>
        </div>

        {/* Contact email */}
        <p className="text-gray-400 mb-2">hello@framebase.design</p>

        {/* Footer text */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-500">
          <span>Design In Framer</span>
          <span className="hidden sm:block">•</span>
          <span>All rights reserved, ©2025</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
