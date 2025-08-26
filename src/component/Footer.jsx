import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import footerLogo from "../assets/footerLogo.png";
import watch from "../assets/WATCHING.png";
import thankyou from "../assets/THANKS FOR.png";
import { MdLocalPhone } from "react-icons/md";

export default function Footer() {
  const menuItems = [
    "HOME",
    "ABOUT",
    "TARIFF",
    "CUSTOMER INFORMATION",
    "POPULAR ROUTES",
    "CONTACT",
  ];

  return (
    <div className="" id="contact">
      {/* Import Josefin Sans Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* Thanks Section */}
      <div className="text-center py-12 px-8">
        <div className="md:space-y-8 space-y-3">
        <img src={thankyou} alt="" className="md:w-[55vw] w-[70vw] mx-auto"/>
        <img src={watch} alt="" className="md:w-[55vw] w-[70vw] mx-auto"/>
        </div>

        {/* Contact Buttons (Desktop only) */}
        <div className="md:flex flex-col md:flex-row gap-4 justify-center mt-8 hidden">
          <a
            href="tel:917200343435"
            className="bg-white md:w-[26vw] rounded-2xl px-6 py-4 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <MdLocalPhone className="text-teal-600 text-4xl mr-3" />
            <span className="text-[#004E62] font-bold text-xl">+917200343435</span>
          </a>

          <a
            href="https://wa.me/917200343435"
            className="bg-white rounded-2xl md:w-[26vw] px-6 py-4 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <FaWhatsapp className="text-green-600 text-4xl mr-3" />
            <span className="text-[#004E62] font-bold text-xl">
              +917200343435
            </span>
          </a>
        </div>
      </div>

      {/* Footer Info Section (Desktop) */}
      <div className="bg-[#029EA1] px-8 py-6 hidden md:block">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
          {/* Left Section - Logo and Address */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img src={logo} alt="logo" className="w-52" />
            </div>

            <div className="text-white">
              <div className="font-bold text-sm mb-1">ADDRESS :</div>
              <div className="text-sm leading-relaxed">
                No.71 18 th Block A Type Thiru Avadi,
                <br />
                Chennai-54
              </div>
            </div>
          </div>

          {/* Center Section - Menu */}
          <div className="mb-6 md:mb-0">
            <nav className="space-y-2">
              <div className="text-yellow-400 font-bold text-lg mb-3">MENU</div>
              {menuItems.map((item, index) => {
                const sectionId = item.toLowerCase().replace(/\s+/g, "-");
                return (
                  <a
                    key={index}
                    href={`#${sectionId}`}
                    className="block text-white hover:text-yellow-400 transition-colors"
                  >
                    {item}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Right Section - Social Media */}
          <div>
            <div className="text-white font-bold text-lg mb-4">
              SOCIAL MEDIA
            </div>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <FaInstagram className="text-pink-600 text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <FaTwitter className="text-blue-400 text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <FaFacebookF className="text-blue-600 text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <FaGooglePlusG className="text-red-600 text-lg" />
              </a>
            </div>

            {/* Designer Credit */}
            <div className="text-white text-xs mt-4">Designed By Mono Mist</div>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden">
        <img src={footerLogo} alt="footer logo" className="w-[70%] mx-auto" />

        <div className="bg-[#029EA1] rounded-t-3xl p-5">
          <div className="border-b border-dashed border-white pb-5 space-y-4">
            <h1 className="text-white">ADDRESS</h1>
            <p className="text-[#004E62]">
              No:28/19 5th block A Type TNHB Avadi Chennai :54
            </p>
          </div>

          <div className="flex justify-between mt-5 text-white font-semibold flex-col md:flex-row gap-6">
  {/* Mobile Number */}
  <div className="space-y-2">
    <h1>MOBILE NUMBER</h1>
    <a href="tel:+917200343435" className="text-[#FFC300] hover:underline">
      +91 7200343435
    </a>
  </div>

  {/* WhatsApp Number */}
  <div className="space-y-2">
    <h1>WHATSAPP NUMBER</h1>
    <a
      href="https://wa.me/917200343435"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#FFC300] hover:underline"
    >
      +91 7200343435
    </a>
  </div>
</div>


          {/* Mobile Menu Links */}
          <div className="mt-6 space-y-2">
            {menuItems.map((item, index) => {
              const sectionId = item.toLowerCase().replace(/\s+/g, "-");
              return (
                <a
                  key={index}
                  href={`#${sectionId}`}
                  className="block text-white hover:text-yellow-400 transition-colors"
                >
                  {item}
                </a>
              );
            })}
          </div>

          <p className="mx-auto text-white w-fit mt-4 text-sm">
            Designed By Mano Misi
          </p>
        </div>
      </div>
    </div>
  );
}
