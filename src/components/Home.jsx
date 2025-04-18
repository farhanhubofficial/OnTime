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
    <div className="w-full">
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

      {/* Welcome Section */}
      <section className="px-4 md:px-10 lg:px-20 py-12 text-center bg-white animate-fade-in">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-snug">
          Welcome to <span className="text-orange-500">On</span>
          <span className="text-blue-500">Time</span> Co-working Space
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-5xl mx-auto text-justify leading-relaxed">
          Working at home is great, but unifying your teams’ efforts increases productivity and helps you achieve more. Also, connecting with others outside your team widens your network and perspective. As a member of AHBC, you get more than an office space — you get the benefit of our value-added services giving your startup the edge to stay ahead.
        </p>
      </section>

      {/* Facilities Section */}
      <section className="px-4 md:px-10 lg:px-20 py-12 bg-gray-100 animate-slide-up">
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
    </div>
  );
}

export default Home;
