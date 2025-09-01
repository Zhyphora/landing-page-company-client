"use client";
import React from "react";
import WaveBackground from "./WaveBackground";

const Hero = () => {
  return (
    <section className="w-full bg-black text-white relative overflow-hidden min-h-screen flex flex-col">
      {/* Top badge */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-gray-800 px-4 py-2 rounded-full text-sm font-medium">
          • Crafting Unique Brand Identities
        </div>
      </div>

      {/* Wave Background */}
      <WaveBackground opacity={0.2} variant="default" />

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-8 z-10 pt-20">
        <div className="max-w-6xl w-full text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9]">
            <span className="text-white">Branding</span>
            <span className="text-gray-400 mx-4">that</span>
            <span className="text-white">you</span>
            <br />
            <span className="text-white">need</span>
            <span className="text-green-400 mx-4">Indeed</span>
          </h1>
          <p className="text-lg sm:text-xl mb-12 opacity-80 max-w-2xl mx-auto">
            Elevate your brand with custom identity and package design. Showcase
            your story through bold visuals and strategic design solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
              Get Started Now
            </button>
            <button className="border border-white px-8 py-3 rounded-full text-white hover:bg-white hover:text-black transition font-medium">
              See Projects
            </button>
          </div>

          {/* Horizontal scroll indicator with dotted lines */}
          <div className="text-center mb-16 z-20">
            <div className="flex items-center justify-center gap-8 group max-w-2xl mx-auto">
              {/* Scroll down text */}
              <p className="text-gray-400 text-sm transition-all duration-300 group-hover:text-gray-300 flex-shrink-0">
                Scroll down
              </p>

              {/* Left dotted line */}
              <div className="relative overflow-hidden flex-1 max-w-32">
                <div className="w-full h-0.5 border-t-2 border-dotted border-gray-400 transition-all duration-300 group-hover:-translate-x-full group-hover:opacity-0"></div>
              </div>

              {/* Mouse indicator */}
              <div className="w-6 h-10 border border-gray-400 rounded-full flex justify-center transition-all duration-300 group-hover:border-gray-300 flex-shrink-0">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce transition-all duration-300 group-hover:bg-gray-300"></div>
              </div>

              {/* Right dotted line */}
              <div className="relative overflow-hidden flex-1 max-w-32">
                <div className="w-full h-0.5 border-t-2 border-dotted border-gray-400 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0"></div>
              </div>

              {/* To see projects text */}
              <p className="text-gray-400 text-sm transition-all duration-300 group-hover:text-gray-300 flex-shrink-0">
                to see projects
              </p>
            </div>
          </div>

          {/* Close main content wrappers */}
        </div>
      </div>

      {/* Brand logos at bottom - moved higher */}
      <div className="pb-10 z-10">
        <div className="flex items-center justify-center gap-8 opacity-50">
          <div className="text-gray-400 font-medium text-lg">cool</div>
          <div className="text-gray-400 font-medium text-lg flex items-center gap-1">
            <span>♡</span>
            <span>Dune</span>
          </div>
          <div className="text-gray-400 font-medium text-lg">Oasis</div>
          <div className="text-gray-400 font-medium text-lg flex items-center gap-1">
            <span>✱</span>
            <span>Asterisk</span>
          </div>
          <div className="text-gray-400 font-medium text-lg">Books</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
