import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import h1 from "./images/h1.jpg";
import h2 from "./images/h2.jpg";
import h3 from "./images/h3.jpg";
import h4 from "./images/h4.jpg";
import h5 from "./images/h5.jpg";
import h6 from "./images/h6.jpg";
import h7 from "./images/h7.jpg";
import h8 from "./images/h8.jpg";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const images = [h1, h2, h3, h4, h5, h6, h7, h8];

const facilities = [
  { label: "COWORKING SPACES", image: h1 },
  { label: "PRIVATE OFFICES", image: h2 },
  { label: "MEETING ROOMS", image: h3 },
  { label: "ARBITRATION CENTER", image: h4 },
  { label: "CREATIVE SPACES", image: h5 },
  { label: "CONFERENCE ROOMS", image: h6 },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 11000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white text-black">
      {/* Hero Slider */}
      <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
            <span className="block">
              <span className="text-orange-600">On</span>
              <span className="text-blue-500">Time</span>
            </span>
            <span className="text-blue-500"> Co-working Space</span>
          </h1>
        </div>

        <div
          ref={sliderRef}
          className="flex w-full h-full transition-all duration-[1500ms] ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-3 rounded-full z-10"
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-3 rounded-full z-10"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <section className="px-4 md:px-10 lg:px-20 py-12 text-center">
  <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-snug">
    Welcome to <span className="text-orange-500">On</span>
    <span className="text-blue-500">Time</span> Co-working Space
  </h2>
  <p className="text-sm sm:text-2xl md:text-2xl lg:text-2xl text-gray-700 max-w-5xl mx-auto text-justify leading-20">
    Working at home is great, but unifying your teams’ efforts increases productivity and helps you achieve more. Also, connecting with others outside your team widens your network and perspective. As a member of OTCS, you get more than an office space — you get the benefit of our value-added services giving your startup the edge to stay ahead.
  </p>
</section>



      {/* Facilities Section */}
      <section className="px-4 md:px-10 lg:px-20 py-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8">
          Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md transform transition duration-500 hover:scale-[1.01] h-72 lg:h-80"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
              />
              <div className="absolute inset-0 border border-white border-opacity-0 group-hover:border-opacity-100 transition duration-300 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl text-center px-4">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY OnTime Co-working Space Section */}
     {/* WHY OnTime Co-working Space Section */}
{/* WHY OnTime Co-working Space Section */}
<section className="px-4 md:px-10 lg:px-20 py-12 bg-gray-200 text-white">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
    <span className="text-black">WHY </span>
    <span className="text-orange-500">On</span>
    <span className="text-blue-500">Time</span><span className="text-black"> Co-working Space</span>
  </h2>

  <div className="flex flex-col lg:flex-row items-stretch gap-8 bg-gray-00 rounded-xl shadow-lg p-6 md:p-10">
    {/* Image with hover zoom animation */}
    <div className="w-full h-[30rem] lg:w-1/2 rounded-xl overflow-hidden group">
      <img
        src={h5}
        alt="Why OnTime"
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Text List with full circle bullets */}
    <ul className="w-full text-black lg:w-1/2 text-base md:text-lg space-y-4 list-disc list-inside marker:text-black">
      <li className="p-2">Flexible membership plans to suit your schedule and budget.</li>
      <li className="p-2">Ample Parking plus Security</li>
      <li className="p-2">Conducive environment for creativity</li>
      <li className="p-2">Modern and stylish workspaces designed for comfort and productivity.</li>
      <li className="p-2">High-speed internet and top-notch amenities at your fingertips.</li>
      <li className="p-2">Access to exclusive networking events and workshops.</li>
      <li className="p-2">A supportive community that encourages growth and success.</li>
    </ul>
  </div>
</section>

{/* FIND US Section */}
  {/* FIND US Section */}
{/* FIND US Section */}
{/* FIND US Section */}
{/* FIND US Section */}
<section className="px-4 md:px-10 lg:px-20 py-28 bg-white text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
    FIND US
  </h2>

  {/* Google Map Embed */}
  <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg mb-16">
    <iframe
      title="Orbit View Hotel Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.250207487253!2d36.8468472!3d-1.2719186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1763b9de6c3b%3A0x56c69da301d7c09a!2sOrbit%20View%20Hotel!5e0!3m2!1sen!2ske!4v1713457906234!5m2!1sen!2ske"
      width="100%"
      height="100%"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="border-0 w-full h-full"
    ></iframe>
  </div>

  {/* Contact Info Flex Row Full Width with Margins */}
  <div className="flex flex-col lg:flex-row justify-between items-start gap-10 text-xl font-bold text-gray-800 px-4 md:px-10 lg:px-20">
    {/* Location */}
    <div className="flex items-start gap-4 max-w-sm">
      <FaMapMarkerAlt className="text-3xl text-blue-500 mt-1" />
      <span>
        Orbit View Hotel / Ismariot, 9th FLR,<br /> Eastleigh, Nairobi, 12th Street
      </span>
    </div>

    {/* Phone */}
    <div className="flex items-start gap-4 max-w-sm">
      <FaPhoneAlt className="text-3xl text-blue-500 mt-1" />
      <span>+254711664459</span>
    </div>

    {/* Email */}
    <div className="flex items-start gap-4 max-w-sm">
      <FaEnvelope className="text-3xl text-blue-500 mt-1" />
      <span>ontimecowork@gmail.com</span>
    </div>
  </div>
</section>






    </div>
  );
}

export default Home;
