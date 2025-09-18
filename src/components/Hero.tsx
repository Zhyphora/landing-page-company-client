"use client";
import React, { useEffect, useRef } from "react";
import GlassmorphismButton from "./glassButton";
import { motion } from "motion/react";

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
    <section className="w-full text-white overflow-hidden min-h-screen relative">
      {/* Video Background */}
      {/* <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100 z-0"
        preload="auto"
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* overlay container */}
      <div className=" absolute inset-0 z-10 pt-36 lg:pt-52 w-full h-full flex flex-col justify-start items-center">
        {/* Glassmorphism Top Badge */}
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              backgroundColor: { duration: 0.3, ease: "easeInOut" },
            }}
            // style={{ backgroundColor: "rgba(255,255,255,0.10)" }} // <- origin color
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              // transition: {
              //   backgroundColor: { duration: 0.1, ease: "easeInOut" },
              // },
            }}
            // className=" w-full  bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium text-white shadow-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2 text-nowrap"
            className=" w-full  backdrop-blur-lg border border-white/20 px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium text-white shadow-lg flex items-center gap-2 text-nowrap"
          >
            {/* <span className="animate-blink">•</span> Crafting Unique Brands */}
            <span className=" w-2 h-2 rounded-full  animate-pulse bg-green-400"></span>{" "}
            Crafting Unique Brands Identities
          </motion.div>
          <style>{`
          @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
          }
          .animate-blink {
        animation: blink 1s infinite;
        display: inline-block;
          }
        `}</style>
        </div>

        {/* Main content (pulled a bit up) */}
        <div className=" flex items-center justify-center px-8 h-full z-10 pt-4 ">
          <div className="max-w-6xl w-full text-center  h-full px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="flex flex-col gap-0 md:gap-4 text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-medium mb-4 md:mb-8 leading-tight tracking-tight"
            >
              {/* <div className="text-white text-nowrap ">Merajut Identitas,</div> */}
              {/* <br /> */}
              {/* <div className="text-white text-pretty">Menyala</div> */}
              Merajut Identitas, <br /> Menyala
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-12 text-gray-300/90 max-w-2xl mx-auto font-regular text-pretty"
            >
              Elevate your brand with custom identity and package design.
              Showcase your story through bold visuals and strategic design
              solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center items-center mb-12 sm:mb-16 *:text-nowrap"
            >
              {/* <button className=" text-sm md:text-lg bg-white text-black px-4 py-2 md:px-8 md:py-3.5 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Now
              </button> */}
              <GlassmorphismButton text="Get Started Now" />
              <GlassmorphismButton text="See Projects" />
              {/* <button className=" text-sm md:text-lg border-2 border-white/80 px-4 py-2 md:px-8 md:py-3.5 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 font-medium transform hover:scale-105">
                See Projects
              </button> */}
            </motion.div>

            {/* Horizontal scroll indicator with improved responsiveness */}
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut", delay: 1.5 }}
              className="text-center mb-0 z-20 hidden md:block"
            >
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 group max-w-2xl mx-auto">
                <p className="text-gray-400 text-xs sm:text-sm font-medium transition-all duration-300 group-hover:text-white/90 flex-shrink-0">
                  Scroll down
                </p>

                {/* Left line */}
                <div className="relative flex-shrink-0 w-14 sm:w-20 md:w-24 lg:w-32">
                  <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-gray-400 rounded transition-all duration-500 ease-out opacity-100 group-hover:via-white group-hover:to-white group-hover:scale-x-110 group-hover:shadow-lg origin-left"></div>
                </div>

                {/* Mouse indicator */}
                <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center items-start transition-all duration-300 group-hover:border-white flex-shrink-0">
                  <div className="w-1 h-2.5 sm:h-3 bg-gray-400 rounded-full mt-2 animate-bounce transition-all duration-300 group-hover:bg-white"></div>
                </div>

                {/* Right line */}
                <div className="relative flex-shrink-0 w-14 sm:w-20 md:w-24 lg:w-32">
                  <div className="w-full h-[2px] bg-gradient-to-r from-gray-400 to-transparent via-gray-400 rounded transition-all duration-500 ease-out opacity-100 group-hover:from-white group-hover:via-white group-hover:scale-x-110 group-hover:shadow-lg origin-right"></div>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm transition-colors duration-300 group-hover:text-gray-300 flex-shrink-0 ml-1 sm:ml-2">
                  to see projects
                </p>
              </div>
            </motion.div>

            {/* Close main content wrappers */}
          </div>
        </div>

        {/* Brand logos at bottom - moved up slightly and made into an auto horizontal scroller */}
        <div className="pb-10 z-11 mb-0">
          <div className="relative overflow-hidden max-w-6xl mx-auto px-4 ">
            {/* Scrolling track: duplicate group for seamless loop */}
            <div
              className="auto-scroll-track flex items-center gap-6 opacity-70 "
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
      </div>
    </section>
  );
};

export default Hero;
