import React from 'react';
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import Header from '../components/header';
import { SiGitbook } from "react-icons/si";
import Footer from '../components/footer';
import Logo from "../components/assets/logo.png"
import Image from 'next/image';

const MainPage = () => {
  return (
    <div className="w-full min-h-screen gridBG flex  items-center flex-col text-white">
      <Header />
       <main className="max-w-7xl flex h-[78vh] justify-center mx-auto px-4 sm:px-6 py-10 sm:py-20">
        <div className="text-center space-y-6 mb-12 sm:mb-20 flex flex-col justify-center items-center">
          <Image className='h-[20vh] w-auto' src={Logo} alt='logo'/>
          <h1 className="text-6xl text-green-200 tracking-tighter sm:text-5xl md:text-7xl font-bold jetbrains-mono-font leading-tight">
            Start Trading <br className="hidden sm:block" />In Seconds
          </h1>
          <p className="text-lg  md:text-xl text-gray-300 jetbrains-mono-font tracking-tighter">
            Connect your telegram<br className="hidden sm:block" />to start trading instantly
          </p>
          
          <div className="flex justify-center bg-zinc-400/20 w-fit gap-1 sm:gap-2 mt-6 sm:mt-8 rounded-full p-1">
            <a href='https://t.me/gambit_sh' className="p-2 sm:p-3 bg-black transition-all hover:bg-opacity-70 rounded-full hover:text-green-600">
              <FaTelegramPlane size={20} sm={24} />
            </a>
            <a href='https://x.com/gambit_sh' className="p-2 sm:p-3 bg-black transition-all hover:backdrop-blur-lg hover:bg-opacity-80 rounded-full hover:text-green-600">
              <FaTwitter size={20} sm={24} />
            </a>
            <a href='https://docs.gambit.sh/' className="p-2 sm:p-3 bg-black transition-all hover:backdrop-blur-lg hover:bg-opacity-80 rounded-full hover:text-green-600">
              <SiGitbook size={20} sm={24} />
            </a>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default MainPage;
