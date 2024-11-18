'use client'
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaTelegramPlane } from "react-icons/fa";

const Header = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [">_ gambit"], // Texts to type
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
        <div className="text-white font-bold text-xl sm:text-2xl flex items-center gap-2">
          <span
            className="text-lg jetbrains-mono-font font-light text-green-200"
            ref={typedRef}
          ></span>
        </div>
      </div>

      {/* Connect Wallet Button */}
      <button className="bg-black transition-all helveticaNewRoman hover:text-green-600 hover:bg-opacity-20 hover:backdrop-blur-lg text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full flex items-center gap-2 text-sm sm:text-base">
        <span className="flex gap-x-1 items-center jetbrains-mono-font justify-center">
          Connect <FaTelegramPlane />
        </span>
      </button>
    </header>
  );
};

export default Header;
