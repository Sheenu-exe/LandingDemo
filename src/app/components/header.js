import Image from "next/image";
import Logo from "../components/logo.png";
import { FaArrowCircleRight } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full px-4 sm:px-6 h-[12vh] py-3 sm:py-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="text-white font-bold text-xl sm:text-2xl flex items-center gap-2">
          <Image
            src={Logo}
            alt="logo"
            className="h-[8vh] sm:h-[10vh] w-auto ml-2 sm:ml-5"
          />
        </div>
      </div>

      {/* Connect Wallet Button */}
      <button className="bg-black transition-all helveticaNewRoman hover:text-green-600 hover:bg-opacity-20 hover:backdrop-blur-lg text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full flex items-center gap-2 text-sm sm:text-base">
        <span className="flex gap-x-1 items-center justify-center">
          <FaArrowCircleRight /> Connect Wallet
        </span>
      </button>
    </header>
  );
};

export default Header;
