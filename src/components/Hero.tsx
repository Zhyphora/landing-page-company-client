import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-[#232323] text-white py-20 px-8 flex flex-col items-center relative overflow-hidden min-h-[340px]">
      <div className="max-w-3xl w-full z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Let’s create something outstanding together.
        </h1>
        <p className="text-lg mb-8 opacity-80">
          We’ll help you express yourself in exciting and unexpected ways.
        </p>
        <button className="border border-white px-6 py-2 rounded text-white hover:bg-white hover:text-black transition font-medium">
          Our work
        </button>
      </div>
      <div className="absolute right-[-80px] top-[-60px] w-[340px] h-[340px] bg-[#2d2d2d] rounded-full z-0" />
      <div className="absolute right-[60px] top-[80px] w-[80px] h-[80px] bg-[#191919] rounded-md z-0 rotate-12" />
    </section>
  );
};

export default Hero;
