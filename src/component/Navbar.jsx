import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    "HOME",
    "ABOUT",
    "TARIFF",
    "CUSTOMER INFORMATION",
    "POPULAR ROUTES",
    "CONTACT",
  ];

  // Detect active section on scroll
  useEffect(() => {
    const sections = menuItems.map((item) =>
      document.querySelector(
        `#${item.toLowerCase().replace(/\s+/g, "-")}` // ✅ regex fix
      )
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => {
      sections.forEach((sec) => sec && observer.unobserve(sec));
    };
  }, [menuItems]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-[#023541] px-6 py-4 shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-52" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => {
              const sectionId = item.toLowerCase().replace(/\s+/g, "-");
              return (
                <a
                  key={index}
                  href={`#${sectionId}`}
                  className={`transition-colors duration-300 text-sm font-medium ${
                    activeSection === sectionId
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {item}
                </a>
              );
            })}

            {/* Call Us Button */}
            <a
  href="tel:+917200343435"
  className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-bold text-sm transition-colors duration-300"
>
  CALL US
</a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white text-2xl focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
      </nav>

     {/* Mobile Menu Overlay */}
<div
  className={`fixed inset-0 z-40 lg:hidden transform transition-transform duration-500 ease-in-out ${
    isMenuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Dark Background (you can keep/remove since panel is full width) */}
  <div
    className={`absolute inset-0 bg-black transition-opacity duration-500 ${
      isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
    }`}
    onClick={toggleMenu}
  ></div>

  {/* Full Width Menu Panel */}
  <div className="fixed inset-0 bg-teal-700 h-full w-full shadow-xl">
    {/* Close Button */}
    <div className="absolute top-6 right-6">
      <button
        onClick={toggleMenu}
        className="text-white text-3xl focus:outline-none"
      >
        <FaTimes />
      </button>
    </div>

    {/* Menu Items */}
    <div className="flex flex-col items-center justify-center h-full space-y-10">
      {menuItems.map((item, index) => {
        const sectionId = item.toLowerCase().replace(/\s+/g, "-");
        return (
          <a
            key={index}
            href={`#${sectionId}`}
            onClick={toggleMenu} // ✅ closes menu on click
            className={`transition-colors duration-300 text-lg font-medium ${
              activeSection === sectionId
                ? "text-yellow-400"
                : "text-white hover:text-yellow-400"
            }`}
          >
            {item}
          </a>
        );
      })}
    </div>
  </div>
</div>

    </>
  );
}
