import React, { useState, useEffect } from "react";
import lg from "../assets/logooo.png";
import { FaXmark, FaBars, FaPhone } from "react-icons/fa6";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Link } from "react-scroll";
const Navbar = () => {
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
    { link: "Qui sommes-nous", path: "about" },

    { link: "Services", path: "services" },

    { link: "Nos partenaires", path: "partners" },
    { link: "Contact", path: "contact" },
  ];
  return (
    <header className="w-full bg-white md:bg-white  top-0 left-0 right-0 overflow-hidden">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a>
            <img src={lg} alt="" />
          </a>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                className="block text-base text-textPrimary hover:text-textPrimary first:font-medium cursor-pointer font-bold"
                to={path}
                key={path}
              >
                {link}
              </Link>
            ))}
          </ul>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="md:flex space-x-12 hidden">
            <Link
              className="flex block text-base text-textPrimary hover:text-textPrimary first:font-medium cursor-pointer"
              to="/cart"
            >
              <FaPhone className="h-6 w-6" />
              <span>(213) 6 71 42 14 48</span>
            </Link>
          </div>
        </div>
        {/* nav items for mobile devices */}
        <div
          className={` px-4 mt-24 py-5 bg-textPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
          style={{ zIndex: 99 }}
          onScroll={toggleMenu}
        >
          {navItems.map(({ link, path }) => (
            <Link
              className="mt-4 block text-base text-black hover:text-brandPrimary text-center cursor-pointer "
              to={path}
              key={path}
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
