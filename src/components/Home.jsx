import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import h1 from "./images/ResBuilding2.jpeg";
import h2 from "./images/comBuilding.jpeg";
import h3 from "./images/hos4.jpeg";
import h4 from "./images/data1.jpeg";
import h5 from "./images/wh5.jpeg";
import h6 from "./images/el1.jpeg";
import h7 from "./images/e12.jpg";
import h8 from "./images/e20.jpg";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const images = [h1, h2, h3, h4, h5, h6, h7, h8];

const facilities = [
  { label: "RESIDENTIAL APPARTMENTS", image: h1 },
  { label: "COMMERCIAL BUILDINGS", image: h2 },
  { label: "HOSPITALS AND HEALTH FACILITIES", image: h3 },
  { label: "DATA CENTERS", image: h4 },
  { label: "WARE HOUSES", image: h5 },
  { label: "LEARNING INSTITUTIONS", image: h6 },
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
      <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
          {/* <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
            <span className="block">
              <span className="text-white">UrbanVolt</span>
              
            </span>
            <span className="text-teal-500"> Solutions</span>
          </h1> */}
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
  className="w-full h-full object-contain"
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

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full border-2 transition ${
                currentIndex === index
                  ? "bg-white border-white"
                  : "bg-orange-500 border-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>

      <section className="px-4 md:px-10 lg:px-20 py-12 text-center">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-snug">
          Welcome to <span className="text-orange-500">UrbanVolt</span>   <span className="text-teal-500">Solutions</span> 
        </h2>
        <p className="text-sm sm:text-2xl md:text-2xl lg:text-2xl text-gray-700 max-w-5xl mx-auto text-justify leading-20">
  Reliable and efficient electrical installation is crucial for creating safe and productive environments in both residential and commercial spaces. Whether it's powering homes, offices, hospitals, or industrial facilities, our expert electrical solutions ensure that every system is optimized for maximum performance and safety. By choosing our services, you’re not just getting electrical wiring; you’re investing in a high-quality, sustainable energy system that meets your specific needs and adheres to all safety standards.
</p>

      </section>

      {/* Facilities Section */}
      <section className="px-4 md:px-10 lg:px-20 py-12">
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8">
    ............Facilities.......................
  </h1>
  <h5 className="text-xl md:text-2xl lg:text-2xl font-semibold text-center mb-8">
    We Offer Electrical Installation For 
  </h5>
  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
    {facilities.map((item, index) => (
      <div
        key={index}
        className="relative group overflow-hidden rounded-lg shadow-xl transform transition duration-500 hover:scale-[1.01] bg-white"
      >
        {/* Card container */}
        <div className="flex flex-col h-full">
          {/* Label above the image */}
          <div className="text-center p-4">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">{item.label}</h3>
          </div>

          {/* Image with padding on left and right */}
          <img
            src={item.image}
            alt={item.label}
            className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75 px-4"
          />
        </div>

        {/* Border effect with thickness, visible at all times */}
        <div className="absolute inset-0 border-4 border-gray-300 transition duration-300 rounded-lg shadow-xl"></div>
      </div>
    ))}
  </div>
</section>






      {/* WHY OnTime Co-working Space Section */}
      <section className="px-4 md:px-10 lg:px-20 py-12 bg-gray-200 text-white">
     <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="text-black"> ........WHY </span>
          <span className="text-orange-500">UrbanVolt</span>  <span className="text-blue-500">Solutions</span><span className = "text-black">.........</span>
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
          <ul className="w-full text-black lg:w-1/2 text-base md:text-lg space-y-4 list-disc list-inside marker:text-black px-4">
  <li className="p-2">
    Expert electrical installation for residential properties, ensuring safety, efficiency, and reliability.
  </li>
  <li className="p-2">
    Customized electrical solutions for hospitals, ensuring uninterrupted power supply for critical medical equipment.
  </li>
  <li className="p-2">
    Professional electrical installation for learning centers, creating conducive environments for learning and innovation.
  </li>
  <li className="p-2">
    Top-quality electrical setups for data centers, focusing on energy efficiency and continuous power supply to maintain uptime.
  </li>
  <li className="p-2">
    Reliable and safe electrical installations for warehouses, designed to handle heavy equipment and provide efficient lighting systems.
  </li>
  <li className="p-2">
    Efficient electrical systems for commercial spaces, helping businesses operate smoothly with minimal disruptions.
  </li>
  <li className="p-2">
    End-to-end electrical installation services for various industrial setups, ensuring compliance with all safety regulations and standards.
  </li>
</ul>



        </div>
      </section>

      {/* FIND US Section */}
      <section className="px-4 md:px-10 lg:px-20 py-28 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          FIND US
        </h2>

        {/* Google Map Embed */}
        <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg mb-16">
  <iframe
    title="Istanbul Business Center Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.250207487253!2d36.8468472!3d-1.2719186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1763b9de6c3b%3A0x56c69da301d7c09a!2sIstanbul%20Business%20Center!5e0!3m2!1sen!2ske!4v1713457906234!5m2!1sen!2ske"
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
             Istanbul Shopping center , Ground FLR,<br /> Eastleigh, Nairobi, jam Street
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 max-w-sm">
            <FaPhoneAlt className="text-3xl text-blue-500 mt-1" />
            <span>+254723048629</span>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 max-w-sm">
            <FaEnvelope className="text-3xl text-blue-500 mt-1" />
            <span>urbanVoltsolutions@gmail.com</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
