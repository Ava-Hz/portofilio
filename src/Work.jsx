import React from "react";
import workImg from "./assets/workImg.png";

const Work = () => {
  return (
    <div name="Work" className="w-full md:h-screen text-gray-300">
      <div className="max-w-[1028px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Work
          </p>
          <p className="py-6"> This is my sample works.</p>
        </div>
        {/*Start Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Start Sample 1 */}
          <div
            className=" bg-cover bg-center border-1 border-slate-10 shadow-2xl shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto"
            style={{ backgroundImage: `url(${workImg})` }}>
            {/* Start Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 p-1 duration-200">
              <span className="text-xl pa-1 font-bold text-white bg-slate-900 round-md px-4 pb-1">
                Online Car Shop
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-md px-4 py-2 m-2 bg-white text-gray-700 font-bold">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-md px-4 py-2 m-2 bg-white text-gray-700 font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
