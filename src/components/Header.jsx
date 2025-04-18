import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import Logo from "./images/Logo.jpg";

function Header() {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // ✅ Close dropdown when clicking outside (for all screens)
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md font-[Poppins]">
      <div className="flex items-center justify-between px-6 py-4 lg:px-10 relative">
        {/* Logo - Now Bigger & Clear */}
        <div className="flex-shrink-0">
          <img
            src={Logo}
            alt="OnTime Logo"
            className="h-20 w-26 object-cover rounded-full"
          />
        </div>

        {/* Centered Nav */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-full max-w-[1000px] justify-center">
          <ul className="flex justify-between text-xl flex-wrap w-full px-6 items-center text-black font-medium">
            <li><Link to="/" className="hover:text-green-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-600">About Us</Link></li>

            {/* Facilities Dropdown (Click to Toggle) */}
            <li
              ref={dropdownRef}
              className="relative cursor-pointer"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <div className="flex items-center hover:text-green-600 select-none">
                Facilities <FaChevronDown className="ml-1 text-sm" />
              </div>

              {isDropdownOpen && (
                <ul className="absolute bg-gray-500 text-white shadow-md rounded-md mt-2 py-2 w-52 z-40">
                  {[
                    { name: "Coworking Spaces", path: "/coworking" },
                    { name: "Creative Spaces", path: "/creative" },
                    { name: "Private Offices", path: "/private" },
                    { name: "Meeting Rooms", path: "/meeting" },
                    { name: "Conference Rooms", path: "/conference" },
                    { name: "Ontime Studio", path: "/studio" },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.path}
                        className="block px-4 py-2 hover:bg-orange-600"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><Link to="/arbitration" className="hover:text-green-600">Arbitration</Link></li>
            <li><Link to="/faqs" className="hover:text-green-600">FAQs</Link></li>
            <li><Link to="/news-events" className="hover:text-green-600">News & Events</Link></li>
            <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
          </ul>
        </div>

        {/* Search Icon */}
        <div className="hidden md:block">
          <CiSearch className="text-2xl cursor-pointer hover:text-green-600" />
        </div>

        {/* Mobile Menu Button */}
        <IoMdMenu
          onClick={() => setMenu(true)}
          className="text-3xl md:hidden text-black cursor-pointer"
        />
      </div>

      {/* Mobile Side Menu */}
      {isSideMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div className="flex-1 bg-black bg-opacity-40" onClick={() => setMenu(false)}></div>

          {/* Side Menu Panel */}
          <div className="w-64 bg-white h-full p-6 shadow-lg relative z-50">
            <IoMdClose
              className="text-3xl mb-6 cursor-pointer"
              onClick={() => setMenu(false)}
            />

            <ul className="space-y-4 text-black font-medium">
              <li><Link to="/" onClick={() => setMenu(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setMenu(false)}>About Us</Link></li>

              {/* Facilities Dropdown - Pushes Content Down */}
              <li ref={dropdownRef}>
                <div
                  className="font-semibold text-gray-700 flex items-center justify-between cursor-pointer"
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                >
                  Facilities <FaChevronDown className="ml-2" />
                </div>

                {isDropdownOpen && (
                  <ul className="mt-2 space-y-2 bg-gray-500 text-white rounded-md p-2">
                    <li><Link to="/coworking" onClick={() => setMenu(false)}>Coworking Spaces</Link></li>
                    <li><Link to="/creative" onClick={() => setMenu(false)}>Creative Spaces</Link></li>
                    <li><Link to="/private" onClick={() => setMenu(false)}>Private Offices</Link></li>
                    <li><Link to="/meeting" onClick={() => setMenu(false)}>Meeting Rooms</Link></li>
                    <li><Link to="/conference" onClick={() => setMenu(false)}>Conference Rooms</Link></li>
                    <li><Link to="/studio" onClick={() => setMenu(false)}>Ontime Studio</Link></li>
                  </ul>
                )}
              </li>

              <li><Link to="/arbitration" onClick={() => setMenu(false)}>Arbitration</Link></li>
              <li><Link to="/faqs" onClick={() => setMenu(false)}>FAQs</Link></li>
              <li><Link to="/news-events" onClick={() => setMenu(false)}>News & Events</Link></li>
              <li><Link to="/contact" onClick={() => setMenu(false)}>Contact</Link></li>
              <li><CiSearch className="text-2xl mt-4 cursor-pointer" /></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
