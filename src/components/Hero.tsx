"use client";
import React from "react";
import WaveBackground from "./WaveBackground";

const Hero = () => {
  return (
    <section className="w-full bg-black text-white relative overflow-hidden min-h-screen flex flex-col">
      {/* Top badge (slightly raised) */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-gray-800 px-4 py-2 rounded-full text-sm font-medium">
          • Crafting Unique Brand Identities
        </div>
      </div>

      {/* Wave Background */}
      <WaveBackground opacity={0.2} variant="default" />

      {/* Main content (pulled a bit up) */}
      <div className="flex-1 flex items-center justify-center px-8 z-10 pt-32 md:pt-40">
        <div className="max-w-6xl w-full text-center mt-12">
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

          {/* Horizontal scroll indicator with balanced, shorter lines and fade-to-transparent on hover */}
          <div className="text-center mb-16 z-20">
            <div className="flex items-center justify-center gap-4 group max-w-2xl mx-auto">
              <p className="text-gray-400 text-sm transition-colors duration-300 group-hover:text-gray-300 flex-shrink-0">
                Scroll down
              </p>

              {/* Left line (shorter for symmetry) */}
              <div className="relative flex-shrink-0 w-20 md:w-24 lg:w-32">
                <div className="w-full h-[2px] bg-gray-400 rounded transition-all duration-300 ease-out opacity-100 group-hover:bg-transparent group-hover:opacity-0"></div>
              </div>

              {/* Mouse indicator */}
              <div className="w-6 h-10 border border-gray-400 rounded-full flex justify-center items-start transition-colors duration-300 group-hover:border-transparent flex-shrink-0">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce transition-colors duration-300 group-hover:bg-transparent"></div>
              </div>

              {/* Right line (same shorter width) */}
              <div className="relative flex-shrink-0 w-20 md:w-24 lg:w-32">
                <div className="w-full h-[2px] bg-gray-400 rounded transition-all duration-300 ease-out opacity-100 group-hover:bg-transparent group-hover:opacity-0"></div>
              </div>

              <p className="text-gray-400 text-sm transition-colors duration-300 group-hover:text-gray-300 flex-shrink-0 ml-2">
                to see projects
              </p>
            </div>
          </div>

          {/* Close main content wrappers */}
        </div>
      </div>

      {/* Brand logos at bottom - moved up slightly and made into an auto horizontal scroller */}
      <div className="pb-10 z-10 -mt-10">
        <div className="relative overflow-hidden max-w-6xl mx-auto px-4">
          {/* Scrolling track: duplicate group for seamless loop */}
          <div
            className="auto-scroll-track flex items-center gap-6 opacity-70"
            aria-hidden="true"
          >
            {[
              "cool",
              "Dune",
              "Oasis",
              "Asterisk",
              "Books",
              "Pixel",
              "Nova",
              "Harbor",
              "Lumen",
              "Orbit",
            ].map((name) => (
              <div
                key={name + "-1"}
                className="text-gray-400 font-medium text-base sm:text-lg min-w-[7rem] flex items-center justify-center"
              >
                {name}
              </div>
            ))}

            {/* duplicate set for smooth infinite scroll */}
            {[
              "cool",
              "Dune",
              "Oasis",
              "Asterisk",
              "Books",
              "Pixel",
              "Nova",
              "Harbor",
              "Lumen",
              "Orbit",
            ].map((name) => (
              <div
                key={name + "-2"}
                className="text-gray-400 font-medium text-base sm:text-lg min-w-[7rem] flex items-center justify-center"
              >
                {name}
              </div>
            ))}
          </div>

          {/* soft left/right fades so icons appear to enter/exit */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent" />
        </div>

        {/* Inline styles for the auto-scroll animation */}
        <style>{`
            .auto-scroll-track {
          display: flex;
          will-change: transform;
          animation: scroll-left 28s linear infinite;
            }
            .auto-scroll-track > div {
          flex: 0 0 auto;
            }
            @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
            }
            /* pause on hover to allow users to focus */
            .auto-scroll-track:hover {
          animation-play-state: paused;
            }
          `}</style>
      </div>
    </section>
  );
};

export default Hero;
