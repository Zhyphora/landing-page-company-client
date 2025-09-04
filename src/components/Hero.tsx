"use client";
import React, { useEffect, useRef } from "react";
import WaveBackground from "./WaveBackground";

const Hero = () => {
  // Memberikan tipe yang tepat untuk referensi video
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Memastikan video dapat diputar dengan lancar
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();

          // Menghilangkan kontrol dari video
          videoRef.current.controls = false;
        }
      } catch (error) {
        console.log("Autoplay prevented:", error);

        // Fallback: Jika autoplay dicegah, setel ulang video
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
        }
      }
    };

    playVideo();
  }, []);

  return (
    <section className="w-full bg-black text-white relative overflow-hidden min-h-screen flex flex-col">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        preload="auto"
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Glassmorphism Top Badge */}
      <div className="absolute top-18 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 px-6 py-3 rounded-full text-sm font-medium text-white shadow-lg hover:bg-white/20 transition-all duration-300">
          • Crafting Unique Brand Identities
        </div>
      </div>

      {/* Main content (pulled a bit up) */}
      <div className="flex-1 flex items-center justify-center px-8 h-full z-10  md:pt-20">
        <div className="max-w-6xl w-full text-center  h-full">
          <h1 className="flex flex-col gap-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium mb-8 leading-[0.9] tracking-tight">
            <div className="text-white text-pretty">Merajut Identitas,</div>
            {/* <br /> */}
            <div className="text-white text-pretty">Menyala</div>
          </h1>
          <p className="text-lg sm:text-xl mb-12 text-gray-300/90 max-w-2xl mx-auto font-regular text-pretty">
            Elevate your brand with custom identity and package design. Showcase
            your story through bold visuals and strategic design solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-white text-black px-8 py-3.5 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Now
            </button>
            <button className="border-2 border-white/80 px-8 py-3.5 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 font-medium transform hover:scale-105">
              See Projects
            </button>
          </div>

          {/* Horizontal scroll indicator with balanced, shorter lines and fade-to-transparent on hover */}
          <div className="text-center mb-16 z-20">
            <div className="flex items-center justify-center gap-4 group max-w-2xl mx-auto">
              <p className="text-gray-400 text-sm font-medium transition-all duration-300 group-hover:text-white/90 flex-shrink-0">
                Scroll down
              </p>

              {/* Left line (shorter for symmetry) */}
              <div className="relative flex-shrink-0 w-20 md:w-24 lg:w-32">
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-gray-400 rounded transition-all duration-500 ease-out opacity-100 group-hover:via-white group-hover:to-white"></div>
              </div>

              {/* Mouse indicator */}
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start transition-all duration-300 group-hover:border-white flex-shrink-0">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce transition-all duration-300 group-hover:bg-white"></div>
              </div>

              {/* Right line (same shorter width) */}
              <div className="relative flex-shrink-0 w-20 md:w-24 lg:w-32">
                <div className="w-full h-[2px] bg-gradient-to-r from-gray-400 to-transparent via-gray-400 rounded transition-all duration-500 ease-out opacity-100 group-hover:from-white group-hover:via-white"></div>
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
      <div className="pb-10 z-10 -mt-0  mb-24">
        <div className="relative overflow-hidden max-w-6xl mx-auto px-4 ">
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
          {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-transparent to-transparent" /> */}
          {/* <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-transparent to-transparent" />    */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background via-background/20 to-transparent backdrop-blur-lg" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background via-background/20 to-transparent backdrop-blur-sm" />
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
