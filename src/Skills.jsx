import React from "react";
import HTML from "./assets/icons/html.png";
import CSS from "./assets/icons/css.png";
import Github from "./assets/icons/github.png";
import Bootstrap from "./assets/icons/bootstrap.png";
import Js from "./assets/icons/js.png";
import Mysql from "./assets/icons/mysql.png";
import Reactjs from "./assets/icons/react.png";
import { SiPython } from "react-icons/si";

const Skills = () => {
  return (
    <div name="Skills" className="w-full h-screen text-gray-300">
      <div className="max-w-[1028px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">this is a test</p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={HTML} alt="HTML-Logo" className="w-20 mx-auto" />
              <p>HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={CSS} alt="HTML-Logo" className="w-20 mx-auto" />
              <p>CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={Js} alt="HTML-Logo" className="w-20 mx-auto" />
              <p>JavaScript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={Bootstrap} alt="HTML-Logo" className="w-20 mx-auto" />
              <p>Bootstrap</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={Reactjs} alt="HTML-Logo" className="w-20 mx-auto" />
              <p>Reactjs</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={Github} alt="HTML-Logo" className="w-20 mx-auto" />
              <p>GitHub</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={Mysql} alt="HTML-Logo" className="w-20 mx-auto" />
              <p>MySQL</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <SiPython size={60} className="w-20 mx-auto" />
              <p>Python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
