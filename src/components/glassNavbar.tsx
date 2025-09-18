// "use client";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { motion } from "motion/react";

// export default function GlassNavbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [hiddenIdle, setHiddenIdle] = useState(false);
//   const [hiddenScrolled, setHiddenScrolled] = useState(false);
//   const [glassVisible, setGlassVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 0;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrolled]);

//   useEffect(() => {
//     if (scrolled) {
//       setHiddenScrolled(false);
//       requestAnimationFrame(() => setGlassVisible(true));
//       setHiddenIdle(false);
//       const t = setTimeout(() => setHiddenIdle(true), 500);
//       return () => clearTimeout(t);
//     } else {
//       setGlassVisible(false);
//       const s = setTimeout(() => setHiddenScrolled(true), 500);
//       const i = setTimeout(() => setHiddenIdle(false), 200);

//       return () => {
//         clearTimeout(s);
//         clearTimeout(i);
//       };
//     }
//   }, [scrolled]);

//   return (
//     <div className="fixed top-0 w-full z-50">
//       <motion.div
//       onScroll={}
//         className={cn(
//           "absolute inset-0 w-full max-w-7xl h-fit mx-auto p-4  text-white mt-4"
//           //   "absolute inset-0 w-full max-w-[1920px] h-fit mx-auto p-4  text-white mt-4"
//           //   scrolled && "opacity-0",
//           //   hiddenIdle && "hidden"
//         )}
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between ">
//           <Image
//             src="/kes-logo-horizontal-crop-removebg.png"
//             alt="Logo"
//             width={100}
//             height={100}
//             className="h-10 w-auto
//             "
//           />

//           <div className="flex space-x-8">
//             <a href="#" className="hover:text-white/80 transition-colors">
//               Home
//             </a>
//             <a href="#" className="hover:text-white/80 transition-colors">
//               About
//             </a>
//             <a href="#" className="hover:text-white/80 transition-colors">
//               Services
//             </a>
//             <a href="#" className="hover:text-white/80 transition-colors">
//               Contact
//             </a>
//           </div>
//           <div>
//             <button className="bg-white hover:bg-white/30 backdrop-blur-md px-6 py-2 rounded-full transition-all duration-300 border text-black border-white/30">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </motion.div>

//       <div
//         className={cn(
//           "absolute inset-0 w-full max-w-7xl h-fit mx-auto p-4 transition-all duration-700 ease-in-out text-white text-shadow-sm text-shadow-black/60 mt-4",
//           hiddenScrolled && "hidden",
//           scrolled
//             ? "bg-white/20 backdrop-blur-xl border-white/60 border w-[95%] rounded-full shadow-[inset_0px_0px_11px_5px_rgba(255,255,255,0.25),inset_0px_0px_11px_15px_rgba(255,255,255,0.05)]"
//             : " bg-transparent",
//           glassVisible ? "opacity-100" : "opacity-0 pointer-events-none"
//         )}
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <Image
//             src="/kes-logo-horizontal-crop-removebg.png"
//             alt="Logo"
//             width={100}
//             height={100}
//             className="h-10 w-auto
//             "
//           />
//           <div className="flex space-x-8">
//             <a href="#" className="hover:text-white/80 transition-colors">
//               Home
//             </a>
//             <a href="#" className="hover:text-white/80 transition-colors">
//               About
//             </a>
//             <a href="#" className="hover:text-white/80 transition-colors">
//               Services
//             </a>
//             <a href="#" className="hover:text-white/80 transition-colors">
//               Contact
//             </a>
//           </div>
//           <div>
//             <button className="bg-white hover:bg-white/30 backdrop-blur-md px-6 py-2 rounded-full transition-all duration-300 border text-black border-white/30">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hiddenIdle, setHiddenIdle] = useState(false);
  const [hiddenScrolled, setHiddenScrolled] = useState(false);
  const [glassVisible, setGlassVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <div className="max-w-7xl mx-auto flex items-center justify-between ">
          <Image
            src="/kes-logo-horizontal-crop-removebg.png"
            alt="Logo"
            width={100}
            height={100}
            className="h-10 w-auto
            "
          />

          {/* Desktop links */}
          <div className="hidden lg:flex space-x-8">
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

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <button className="bg-white hover:bg-white/30 backdrop-blur-md px-6 py-2 rounded-full transition-all duration-300 border text-black border-white/30">
                Get Started
              </button>
            </div>

            {/* Mobile hamburger (right side) */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((s) => !s)}
              className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              <div className="w-6 h-0.5 bg-white mb-1" />
              <div className="w-6 h-0.5 bg-white mb-1" />
              <div className="w-6 h-0.5 bg-white" />
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
          {/* Desktop links */}
          <div className="hidden lg:flex space-x-8">
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

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <button className="bg-white hover:bg-white/30 backdrop-blur-md px-6 py-2 rounded-full transition-all duration-300 border text-black border-white/30">
                Get Started
              </button>
            </div>

            {/* Mobile hamburger (right side) */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((s) => !s)}
              className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              <div className="w-6 h-0.5 bg-white mb-1" />
              <div className="w-6 h-0.5 bg-white mb-1" />
              <div className="w-6 h-0.5 bg-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu: right-side drawer with backdrop */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <aside
          className={`fixed top-0 right-0 h-full w-72 bg-[#0f1724] rounded-l-xl p-6 text-white transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="text-lg font-bold">Menu</div>
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium hover:text-white/80"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium hover:text-white/80"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium hover:text-white/80"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium hover:text-white/80"
            >
              Contact
            </a>

            <div className="pt-6">
              <button
                onClick={() => setMobileOpen(false)}
                className="w-full bg-white text-black px-6 py-2 rounded-full transition"
              >
                Get Started
              </button>
            </div>
          </nav>
        </aside>
      </div>
    </div>
  );
}
