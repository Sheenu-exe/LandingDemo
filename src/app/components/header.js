'use client'
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaTelegramPlane } from "react-icons/fa";

const Header = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["gambit"],
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: true,
      cursorChar: "|",
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header className="w-full px-4 sm:px-6 h-[12vh] py-3 sm:py-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="sm:text-2xl flex items-center gap-2 text-lg jetbrains-mono-font font-light text-green-200">
          &gt;_
          <span
            className="relative text-lg jetbrains-mono-font font-light text-green-200 glitch-effect"
            ref={typedRef}
          ></span>
        </div>
      </div>

      <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm sm:text-base transition-colors duration-300 ease-in-out hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50">
  <span className="flex gap-x-1 jetbrains-mono-light items-center font-medium">
    Connect <FaTelegramPlane />
  </span>
</button>



    </header>
  );
};

export default Header;
