import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./assets/logo.png";
import Social from "./Social";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-white">
      {/* Add logo Image */}
      <div>
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>
      {/* Start Main menu */}
      <ul className="hidden md:flex">
        <li className="px-4 cursor-pointer">
          <Link to="Home" duration={500} smooth={true}>
            Home
          </Link>
        </li>
        <li className="px-4 cursor-pointer">
          {" "}
          <Link to="About" duration={500} smooth={true}>
            About
          </Link>
        </li>
        <li className="px-4 cursor-pointer">
          {" "}
          <Link to="Skills" duration={500} smooth={true}>
            Skills
          </Link>
        </li>
        <li className="px-4 cursor-pointer">
          {" "}
          <Link to="Work" duration={500} smooth={true}>
            Work
          </Link>
        </li>
        <li className="px-4 cursor-pointer">
          {" "}
          <Link to="Contact" duration={500} smooth={true}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger menu */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Start Hamburger menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0A192F] flex flex-col justify-center items-center"
        }
      >
        <ul>
          <li className="py-6 text-4xl cursor-pointer">
            {" "}
            <Link onClick={handleClick} to="Home" duration={500} smooth={true}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl cursor-pointer">
            {" "}
            <Link onClick={handleClick} to="About" duration={500} smooth={true}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl cursor-pointer">
            {" "}
            <Link
              onClick={handleClick}
              to="Skills"
              duration={500}
              smooth={true}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl cursor-pointer">
            {" "}
            <Link
              onClick={handleClick}
              to="Contact"
              duration={500}
              smooth={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Social Component */}
      <Social />
    </div>
  );
};

export default Navbar;
