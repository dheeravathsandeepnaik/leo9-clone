import { useState } from "react";
import "./navbar.css";
import logo from "../assets/leo9logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = ["Work", "Services", "About", "Contact"];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="Leo9 Logo" className="logo-img" />
          <span className="logo-text">Leo9 Clone</span>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="mobile-menu">
          {navLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      )}
    </nav>
  );
}
