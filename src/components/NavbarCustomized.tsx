import React, { useState, useEffect } from "react";
import lg from "../assets/lg-noir.png";
import { FaXmark, FaBars, FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import Button from "@mui/material/Button";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Link } from "react-scroll";
import { Outlet, Link as LinkDom } from "react-router-dom";
const NavbarCustomized = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  //navitemss array
  const navItems = [
    { link: "QUI SOMMES-NOUS", path: "about" },

    { link: "SERVICES", path: "services" },
  ];
  return (
    <header
      className=" relative  top-0 left-0 right-0 overflow-hidden  bg-bgWhite shadow-lg "
      style={{ zIndex: 99 }}
    >
      <nav
        className={` flex flex-row justify-between py-6  px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300 z-40"
            : ""
        }`}
      >
        <a>
          <img src={lg} alt="" style={{ width: "150px" }} />
        </a>
        <div className="flex  items-center text-base gap-8">
          <ul className="md:flex space-x-4 hidden">
            <Link
              className=" font-outfit flex block text-base text-bgGreen hover:text-bgGreen first:font-medium cursor-pointer"
              to="/cart"
            >
              <IoLogoWhatsapp className="h-6 w-6 text-textPrimary" />
            </Link>
            <Link
              className=" font-outfit flex block text-base text-bgGreen hover:text-textPrimary first:font-medium cursor-pointer"
              to="/cart"
            >
              <FaTelegramPlane className="h-6 w-6 text-textPrimary" />
            </Link>

            <Link
              className=" font-outfit flex block text-base text-bgGreen hover:text-textPrimary first:font-medium cursor-pointer"
              to="/cart"
            >
              <span>+213 6 7142 1448</span>
            </Link>
          </ul>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                className="font-outfit block text-base text-bgGreen hover:text-textPrimary underline underline-offset-4 cursor-pointer font-bold"
                to={path}
                key={path}
              >
                {link}
              </Link>
            ))}
            <LinkDom
              className="font-outfit block text-base text-bgGreen hover:text-textPrimary underline underline-offset-4 cursor-pointer font-bold"
              to={`./signin`}
            >
              SE CONNECTER / S'INSCRIRE
            </LinkDom>
          </ul>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark color="#2B2B2B" className="h-6 w-6" />
              ) : (
                <FaBars color="#2B2B2B" className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {/* nav items for mobile devices */}
      </nav>
      <div
        className={` px-4  py-5 bg-textPrimary ${
          isMenuOpen ? "block  top-0 right-0 left-0" : "hidden"
        }`}
        style={{ zIndex: 99 }}
        onScroll={toggleMenu}
      >
        {navItems.map(({ link, path }) => (
          <Link
            className=" font-outfit mt-4 block text-base text-black hover:text-brandPrimary text-center cursor-pointer "
            to={path}
            key={path}
          >
            {link}
          </Link>
        ))}
        <LinkDom
          className="font-outfit mt-4 block text-base text-bgWhite hover:text-textPrimary text-center underline underline-offset-4 cursor-pointer font-bold"
          to={`./signin`}
        >
          SE CONNECTER / S'INSCRIRE
        </LinkDom>
      </div>
    </header>
  );
};

export default NavbarCustomized;
