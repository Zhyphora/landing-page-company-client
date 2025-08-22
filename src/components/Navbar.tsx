import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-8 px-12 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <span className="font-bold text-lg tracking-wide">Creative Agency</span>
        <span className="ml-2 rotate-12 inline-block border border-black rounded-full px-2 py-0.5 text-xs">
          ⟳
        </span>
      </div>
      <ul className="flex gap-8 text-gray-500 font-medium text-base">
        <li className="text-black border-b-2 border-black pb-1">Home</li>
        <li className="hover:text-black cursor-pointer">Work</li>
        <li className="hover:text-black cursor-pointer">About</li>
        <li className="hover:text-black cursor-pointer">Contact us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
