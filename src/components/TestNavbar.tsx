
import React, { useState } from 'react';
import './styles.css'

const TestNavbar = () => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);

  const toggleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
    setDropdown2Open(false); // Close other dropdown if open
  };

  const toggleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);
    setDropdown1Open(false); // Close other dropdown if open
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link" onMouseEnter={toggleDropdown1}>
            Dropdown 1
            {dropdown1Open && (
              <ul className="dropdown">
                <li>Dropdown Item 1</li>
                <li>Dropdown Item 2</li>
                <li>Dropdown Item 3</li>
              </ul>
            )}
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onMouseEnter={toggleDropdown2}>
            Dropdown 2
            {dropdown2Open && (
              <ul className="dropdown">
                <li>Dropdown Item A</li>
                <li>Dropdown Item B</li>
                <li>Dropdown Item C</li>
              </ul>
            )}
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Other Item
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TestNavbar;