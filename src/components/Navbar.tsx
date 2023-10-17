import React, { useState, useEffect } from "react";
import lg from "../assets/logo2.png";
import { FaXmark, FaBars } from "react-icons/fa6";
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
    { link: "Qui somme-nous", path: "about" },
    { link: "Produits", path: "solutions" },
    { link: "Vision", path: "vision" },
    { link: "Nos partenaires", path: "partners" },
    { link: "Contact", path: "contact" },
  ];
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            className="text-2xl font-semibold flex items-center space-x-3 "
            href=""
          >
            <img src={lg} alt="" />
          </a>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                className="block text-base text-textPrimary hover:text-textPrimary first:font-medium"
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
        </div>
        {/* nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-bgWhite ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              className="mt-8 block text-base text-gray900 hover:text-brandPrimary first:font-medium text-center"
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
