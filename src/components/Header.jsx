import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import Logo from "./images/images.png";

function Header() {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isFacilitiesDropdownOpen, setFacilitiesDropdownOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const dropdownRef = useRef(null);
  const sideMenuRef = useRef(null);
  const aboutRef = useRef(null);
  const facilitiesRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        aboutRef.current && !aboutRef.current.contains(e.target) &&
        facilitiesRef.current && !facilitiesRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
        setAboutDropdownOpen(false);
        setFacilitiesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleClickOutsideSideMenu(e) {
      if (sideMenuRef.current && !sideMenuRef.current.contains(e.target)) {
        setMenu(false);
      }
    }
    if (isSideMenuOpen) {
      document.addEventListener("mousedown", handleClickOutsideSideMenu);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideSideMenu);
    }
    return () => document.removeEventListener("mousedown", handleClickOutsideSideMenu);
  }, [isSideMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md font-[Poppins]">
      <div className="flex flex-wrap items-center justify-between px-4 py-3 md:px-6 lg:px-10 relative">

        {/* Desktop Header Layout */}
        <div className="hidden md:flex w-full justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0 min-w-0">
            <img src={Logo} alt="OnTime Logo" className="h-16 w-16 object-cover rounded-full flex-shrink-0" />
            <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-tight whitespace-nowrap">
              <span className="block text-orange-400 leading-none">UrbanVolt</span>
              <span className="text-teal-500 leading-none">Solutions</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <ul className="flex space-x-9 justify-between text-xl items-center text-black font-medium gap-6">
            <li><Link to="/" className="hover:text-green-600">Home</Link></li>

            {/* About Us Dropdown */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
              ref={aboutRef}
            >
              <div className="flex items-center hover:text-green-600 select-none">
                About Us <FaChevronDown className="ml-1 text-sm" />
              </div>
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 bg-slate-100 text-black border shadow-md z-50 w-64 mt-0 rounded-md p-3 space-y-2">
                  <Link to="/vision" className="block border-b border-yellow-800 pb-1 hover:text-orange-600">Vision, Mission & Core Values</Link>
                  <Link to="/approach" className="block border-b border-yellow-800 pb-1 hover:text-orange-600">Our Approach</Link>
                  <Link to="/services" className="block hover:text-orange-600">Our Product & Services</Link>
                </div>
              )}
            </li>

            {/* Facilities Dropdown */}
            <li
              ref={facilitiesRef}
              className="relative cursor-pointer"
              onMouseEnter={() => setFacilitiesDropdownOpen(true)}
              onMouseLeave={() => setFacilitiesDropdownOpen(false)}
            >
              <div className="flex items-center hover:text-green-600 select-none">
                Projects <FaChevronDown className="ml-1 text-sm" />
              </div>
              {isFacilitiesDropdownOpen && (
                <ul className="absolute bg-slate-100 text-black shadow-md rounded-md py-2 w-52 z-40 mt-0">
                  {[{ name: "Residential Buildings", path: "/residential" }, { name: "Commercial Buildings", path: "/residential" }, { name: "Hospitals", path: "/residential" }, { name: "Learning Institutions", path: "/residential" }, { name: "Warehouses", path: "/residential" }, { name: "Factories", path: "/residential" }]
                    .map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.path}
                          className="block px-4 py-2 hover:bg-orange-600 hover:text-white"
                          onClick={() => setFacilitiesDropdownOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </li>

            <li><Link to="/faqs" className="hover:text-green-600">FAQs</Link></li>
    
            <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
          </ul>

          {/* Desktop Search Icon */}
          <div className="hidden md:flex items-center ml-4">
            <CiSearch
              className="text-2xl cursor-pointer hover:text-green-600"
              onClick={() => setShowSearchBar(prev => !prev)}
            />
          </div>
        </div>

        {/* Mobile Menu + Search */}
        <div className="md:hidden flex items-center gap-3 w-full justify-between">
          {/* Logo and Text for Mobile */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src={Logo} alt="OnTime Logo" className="h-20 w-26 object-cover rounded-full" />
            <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-tight whitespace-nowrap">
              <span className="block text-orange-600 leading-none">UrbanVolt</span>
              <span className="text-blue-600 leading-none">Solutions</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <CiSearch
              className="text-2xl cursor-pointer text-black"
              onClick={() => setShowSearchBar(prev => !prev)}
            />
            <IoMdMenu
              onClick={() => setMenu(true)}
              className="text-3xl text-black cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {showSearchBar && (
        <div className="w-full px-6 md:px-10 pb-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md w-full text-sm md:text-base"
          />
          <button className="bg-black text-white px-4 py-2 text-sm rounded-md whitespace-nowrap">
            Search
          </button>
        </div>
      )}

      {/* Mobile Side Menu */}
      {isSideMenuOpen && (
        <div className="fixed inset-0 z-[60] overflow-y-auto">
          <div className="flex-1 bg-black bg-opacity-40" onClick={() => setMenu(false)}></div>
          <div className="w-64 bg-white h-full p-6 shadow-lg absolute right-0 z-50" ref={sideMenuRef}>
            <IoMdClose
              className="text-3xl mb-6 cursor-pointer"
              onClick={() => setMenu(false)}
            />
            <ul className="space-y-4 text-black font-medium">
              <li><Link to="/" onClick={() => setMenu(false)}>Home</Link></li>

              {/* About Us Dropdown for Mobile */}
              <li>
                <div
                  onClick={() => setAboutDropdownOpen(!isAboutDropdownOpen)}
                  className="cursor-pointer flex justify-between items-center"
                >
                  <span>About Us</span>
                  <FaChevronDown className="ml-2" />
                </div>
                {isAboutDropdownOpen && (
                  <div className="bg-slate-100 border mt-0 p-3 rounded space-y-2">
                    <Link to="/vision" onClick={() => setMenu(false)} className="block border-b border-yellow-800 pb-1">Vision, Mission & Core Values</Link>
                    <Link to="/approach" onClick={() => setMenu(false)} className="block border-b border-yellow-800 pb-1">Our Approach</Link>
                    <Link to="/services" onClick={() => setMenu(false)} className="block">Our Product & Services</Link>
                  </div>
                )}
              </li>

              {/* Facilities Dropdown for Mobile */}
              <li
              ref={facilitiesRef}
              className="relative cursor-pointer"
              onMouseEnter={() => setFacilitiesDropdownOpen(true)}
              onMouseLeave={() => setFacilitiesDropdownOpen(false)}
            >
              <div className="flex items-center hover:text-green-600 select-none">
                Projects <FaChevronDown className="ml-1 text-sm" />
              </div>
              {isFacilitiesDropdownOpen && (
                <ul className="absolute bg-slate-100 text-black shadow-md rounded-md py-2 w-52 z-40 mt-0">
                  {[{ name: "Residential Buildings", path: "/residential" }, { name: "Commercial Buildings", path: "/residential" }, { name: "Hospitals", path: "/residential" }, { name: "Learning Institutions", path: "/residential" }, { name: "Warehouses", path: "/residential" }, { name: "Factories", path: "/residential" }]
                    .map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.path}
                          className="block px-4 py-2 hover:bg-orange-600 hover:text-white"
                          onClick={() => setFacilitiesDropdownOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </li>

         
              <li><Link to="/faqs" onClick={() => setMenu(false)}>FAQs</Link></li>
             
              <li><Link to="/contact" onClick={() => setMenu(false)}>Contact</Link></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
