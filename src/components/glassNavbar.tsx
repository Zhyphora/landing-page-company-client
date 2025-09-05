"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hiddenIdle, setHiddenIdle] = useState(false);
  const [hiddenScrolled, setHiddenScrolled] = useState(false);
  const [glassVisible, setGlassVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    if (scrolled) {
      // 1) unhide dulu supaya element ada di DOM (display:block)
      setHiddenScrolled(false);
      // 2) tunggu 1 frame → baru set opacity jadi 1 (fade-in)
      requestAnimationFrame(() => setGlassVisible(true));

      // idle variant fade-out lalu disembunyikan
      setHiddenIdle(false);
      const t = setTimeout(() => setHiddenIdle(true), 500);
      return () => clearTimeout(t);
    } else {
      // glass variant fade-out dulu
      setGlassVisible(false);
      // setelah selesai transisi → baru hidden (display:none)
      const s = setTimeout(() => setHiddenScrolled(true), 500);
      const i = setTimeout(() => setHiddenIdle(false), 200);
      // idle variant tampil lagi
      //   requestAnimationFrame(() => setHiddenIdle(false));
      //   setHiddenIdle(false);

      return () => {
        clearTimeout(s);
        clearTimeout(i);
      };
    }
  }, [scrolled]);

  return (
    <div className="fixed top-0 w-full z-50">
      {/* idle */}
      <div
        className={cn(
          "absolute inset-0 w-full h-fit mx-auto p-4 transition-all duration-700 ease-in-out text-white mt-4",
          scrolled && "opacity-0",
          hiddenIdle && "hidden"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* <div className="text-xl font-bold">Logo</div> */}
          <Image
            src="/kes-logo-horizontal-crop-removebg.png"
            alt="Logo"
            width={100}
            height={100}
            className="h-10 w-auto
            "
          />

          <div className="flex space-x-8">
            <a href="#" className="hover:text-white/80 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Contact
            </a>
          </div>
          <div>
            <button className="bg-white hover:bg-white/30 backdrop-blur-md px-6 py-2 rounded-full transition-all duration-300 border text-black border-white/30">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* scrolled with glassMorphism effect*/}
      <div
        className={cn(
          "absolute inset-0 w-full h-fit mx-auto p-4 transition-all duration-700 ease-in-out text-white text-shadow-sm text-shadow-black/60 mt-4",
          hiddenScrolled && "hidden",
          scrolled
            ? "bg-white/15 backdrop-blur-xl border-white/30 border w-[95%] rounded-full shadow-[inset_0px_0px_11px_5px_rgba(255,255,255,0.35)]"
            : // ? "bg-white/20 backdrop-blur-xl border-white/30 border w-[95%] rounded-full shadow-[inset_0px_39px_56px_-36px_rgba(255,255,255,0.5),inset_0px_7px_11px_-4px_rgba(255,255,255,0.25),inset_0px_-82px_68px_-64px_rgba(96,68,144,0.3),inset_0px_98px_100px_-48px_rgba(202,172,255,0.3),inset_0px_4px_18px_0px_rgba(154,146,210,0.3),inset_0px_4px_18px_0px_,inset_0px_1px_40px_0px_rgba(227,222,255,0.2)]"
              // ? "bg-white/20 backdrop-blur-xl border-white/30 border inset-shadow-sm inset-shadow-white/30  w-[95%] rounded-full"
              " bg-transparent",
          glassVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* <div className="text-xl font-bold">Logo</div> */}
          <Image
            src="/kes-logo-horizontal-crop-removebg.png"
            alt="Logo"
            width={100}
            height={100}
            className="h-10 w-auto
            "
          />
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white/80 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Contact
            </a>
          </div>
          <div>
            <button className="bg-white hover:bg-white/30 backdrop-blur-md px-6 py-2 rounded-full transition-all duration-300 border text-black border-white/30">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
