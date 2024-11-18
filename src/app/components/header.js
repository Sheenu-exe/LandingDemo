'use client'
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaTelegramPlane } from "react-icons/fa";

const Header = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["gambit"], // Texts to type
      typeSpeed: 100, // Typing speed in milliseconds
      backSpeed: 50, // Backspacing speed in milliseconds
      showCursor: true, // Show typing cursor
      cursorChar: "|", // Cursor character
      loop: true, // Loop the animation
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      // Destroy Typed.js instance to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return (
    <header className="w-full px-4 sm:px-6 h-[12vh] py-3 sm:py-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className=" sm:text-2xl flex items-center gap-2 text-lg jetbrains-mono-font font-light text-green-200">
          &gt;_
          <span
            className="text-lg jetbrains-mono-font font-light text-green-200"
            ref={typedRef}
          ></span>
        </div>
      </div>

      <button className="bg-green-700 transition-all duration-300 ease-in-out helveticaNewRoman text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full flex items-center gap-2 text-sm sm:text-base hover:bg-gradient-to-r hover:from-green-500 hover:to-green-300 hover:scale-105 hover:shadow-xl hover:text-green-900">
  <span className="flex gap-x-1 items-center jetbrains-mono-font justify-center">
    Connect <FaTelegramPlane />
  </span>
</button>

    </header>
  );
};

export default Header;
