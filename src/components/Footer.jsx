import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Logo from "./images/Logo-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 md:px-10 lg:px-20 w-full mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Logo + Brand */}
        <div className="flex items-center gap-4">
          <img src={Logo} alt="OnTime Logo" className="h-12 w-auto" />
          <h1 className="text-xl md:text-2xl font-bold">
            <span className="text-orange-500">On</span>
            <span className="text-blue-500">Time</span>{" "}
            <span className="text-white">Co-working Space</span>
          </h1>
        </div>

        {/* Contact Info */}
        <div className="text-sm md:text-base font-medium space-y-4">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-lg text-blue-400" />
            <span>
              Orbit View Hotel / Ismariot, 9th FLR, Eastleigh, Nairobi, 12th Street
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-lg text-blue-400" />
            <span>+254711664459</span>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-lg text-blue-400" />
            <span>ontimecowork@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <p className="mb-4">
          Copyright © {new Date().getFullYear()} OnTime Co-working Space. All
          rights reserved. Powered by <span className="text-white">SuluHubFarhan</span>
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 text-2xl font-bold text-white">
          <FaFacebookF className="hover:text-blue-500 transition" />
          <FaTwitter className="hover:text-sky-400 transition" />
          <FaInstagram className="hover:text-pink-500 transition" />
          <FaTiktok className="hover:text-gray-400 transition" />
          <FaLinkedinIn className="hover:text-blue-600 transition" />
          <FaYoutube className="hover:text-red-600 transition" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
