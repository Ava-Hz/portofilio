import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="Home" className="w-full h-screen text-white">
      {/* Start Container */}
      <div className="max-w-[1028px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-2xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ava Hoseinzadeh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Junior Front-End Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum at
          corporis ad, iste voluptatibus soluta minus, laborum porro cum sit
          ratione sunt eligendi veniam eveniet aspernatur fugit necessitatibus
          esse nemo.
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 group flex item-center hover:border-pink-600 rounded-full">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="mt-1.5 ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
