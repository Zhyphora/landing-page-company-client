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
      setHiddenScrolled(false);
      requestAnimationFrame(() => setGlassVisible(true));
      setHiddenIdle(false);
      const t = setTimeout(() => setHiddenIdle(true), 500);
      return () => clearTimeout(t);
    } else {
      setGlassVisible(false);
      const s = setTimeout(() => setHiddenScrolled(true), 500);
      const i = setTimeout(() => setHiddenIdle(false), 200);

      return () => {
        clearTimeout(s);
        clearTimeout(i);
      };
    }
  }, [scrolled]);

  return (
    <div className="fixed top-0 w-full z-50">
      <div
        className={cn(
          "absolute inset-0 w-full max-w-7xl h-fit mx-auto p-4 transition-all duration-700 ease-in-out text-white mt-4",
          scrolled && "opacity-0",
          hiddenIdle && "hidden"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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

      <div
        className={cn(
          "absolute inset-0 w-full max-w-7xl h-fit mx-auto p-4 transition-all duration-700 ease-in-out text-white text-shadow-sm text-shadow-black/60 mt-4",
          hiddenScrolled && "hidden",
          scrolled
            ? "bg-white/20 backdrop-blur-xl border-white/60 border w-[95%] rounded-full shadow-[inset_0px_0px_11px_5px_rgba(255,255,255,0.25),inset_0px_0px_11px_15px_rgba(255,255,255,0.05)]"
            : " bg-transparent",
          glassVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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
