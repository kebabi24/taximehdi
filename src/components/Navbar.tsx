import React, { useState, useEffect } from "react";
import lg from "../assets/log.png";
import { FaXmark, FaBars, FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import Button from "@mui/material/Button";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Link } from "react-scroll";
import { Outlet, Link as LinkDom } from "react-router-dom";
import { useAuth } from "../core/context/AuthContext";
import { Variants } from "framer-motion";
const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const objUser = localStorage.getItem("user");
  const userLoggedIn = objUser ? JSON.parse(objUser) : null;
  console.log(userLoggedIn);
  const { user } = useAuth();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
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
    <header className="  mb-7 lg:ml-24 lg:mr-24 top-0 left-0 right-0 overflow-hidden rounded-lg drop-shadow-xl">
      <nav
        className={` flex flex-row justify-between py-2  px-4 ${
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
              className=" font-outfit flex block text-base text-bgWhite hover:text-textPrimary first:font-medium cursor-pointer"
              to="/cart"
            >
              <IoLogoWhatsapp className="h-6 w-6 text-bgWhite" />
            </Link>
            <Link
              className=" font-outfit flex block text-base text-bgWhite hover:text-textPrimary first:font-medium cursor-pointer"
              to="/cart"
            >
              <FaTelegramPlane className="h-6 w-6 text-bgWhite" />
            </Link>

            <Link
              className=" font-outfit flex block text-base text-bgWhite hover:text-textPrimary first:font-medium cursor-pointer"
              to="/cart"
            >
              <span>+213 6 7142 1448</span>
            </Link>
          </ul>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                className="font-outfit block text-base text-bgWhite hover:text-textPrimary underline underline-offset-4 cursor-pointer font-bold"
                to={path}
                key={path}
              >
                {link}
              </Link>
            ))}
            <LinkDom
              className="font-outfit block text-base text-bgWhite hover:text-textPrimary underline underline-offset-4 cursor-pointer font-bold"
              to={userLoggedIn ? `profile` : `login`}
            >
              {userLoggedIn
                ? "BIENVENUE " + userLoggedIn.username
                : "SE CONNECTER / S'INSCRIRE"}
            </LinkDom>
          </ul>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark color="white" className="h-6 w-6" />
              ) : (
                <FaBars color="white" className="h-6 w-6" />
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
          to={userLoggedIn ? `profile` : `login`}
        >
          {userLoggedIn
            ? "BIENVENUE " + userLoggedIn.username
            : "SE CONNECTER / S'INSCRIRE"}
        </LinkDom>
      </div>
    </header>
  );
};

export default Navbar;
