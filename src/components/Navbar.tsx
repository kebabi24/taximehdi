import React, { useState, useEffect } from "react";
import lg from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";
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
    { link: "Qui somme-nous", path: "home" },
    { link: "Produits", path: "service" },
    { link: "Services", path: "about" },
    { link: "Nos partenaires", path: "product" },
    { link: "Contact", path: "testimonial" },
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
              <a
                className="block text-base text-textPrimary hover:text-textPrimary first:font-medium"
                href={path}
                key={path}
              >
                {link}
              </a>
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
          className={`space-y-4 px-4 mt-16 py-7 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <a
              className="block text-base text-gray900 hover:text-brandPrimary first:font-medium"
              href={path}
              key={path}
            >
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
