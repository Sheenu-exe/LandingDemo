import React from 'react';
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import Header from '../components/header';

const MainPage = () => {
  return (
    <div className="w-full min-h-screen gridBG flex  items-center flex-col text-white">
      <Header />
      
      <main className="max-w-7xl flex h-[90vh] justify-center mx-auto px-4 sm:px-6 py-10 sm:py-20">
        <div className="text-center space-y-6 mb-12 sm:mb-20 flex flex-col justify-center items-center">
          <h1 className="text-6xl sm:text-5xl md:text-7xl font-bold helveticaNewRoman leading-tight">
            Most liquid <br className="hidden sm:block" />primary market
          </h1>
          <p className="text-lg  md:text-xl text-gray-300 helveticaNewRoman">
            Claim first access to the most<br className="hidden sm:block" />important tokens in crypto.
          </p>
          
          <div className="flex justify-center bg-zinc-400/20 w-fit gap-2 sm:gap-4 mt-6 sm:mt-8 rounded-full p-1">
            <button className="p-2 sm:p-3 bg-black transition-all hover:bg-opacity-70 rounded-full hover:text-green-600">
              <FaTelegramPlane size={20} sm={24} />
            </button>
            <button className="p-2 sm:p-3 bg-black transition-all hover:backdrop-blur-lg hover:bg-opacity-80 rounded-full hover:text-green-600">
              <FaTwitter size={20} sm={24} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
