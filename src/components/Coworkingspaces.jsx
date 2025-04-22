import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

import h1 from "./images/h1.jpg";
import h2 from "./images/h2.jpg";
import h3 from "./images/h3.jpg";
import h4 from "./images/h4.jpg";
import h5 from "./images/h5.jpg";
import h6 from "./images/h6.jpg";

const images = [h1, h2, h3, h4, h5, h6];

const CoworkingSpaces = () => {
  const form = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-white shadow-md">
      {/* Hero Image */}
      <img
        src={h1}
        alt="Coworking Hero"
        className="w-full h-96 object-cover"
      />

      {/* Content */}
      <div className="px-6 py-10 text-gray-800 space-y-8 text-justify leading-relaxed tracking-normal">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Discover <span className="text-orange-600">On</span>
          <span className="text-blue-500">Time</span> Coworking
        </h1>

        <p>
          Discover a new way of working in our vibrant and innovative coworking space.
          Whether you’re a freelancer, a startup, or a remote team, our shared
          workspace offers an environment designed to inspire productivity and foster
          connections.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Why Choose Our Coworking Space?</h2>
          <ul className="space-y-4 list-disc pl-6">
            <li>
              <strong>Flexibility:</strong> Embrace the freedom to work on your own
              terms. Choose from hot desks, dedicated desks, or private offices.
            </li>
            <li>
              <strong>Community:</strong> Join a diverse network of like-minded
              professionals. Collaborate, connect, and grow together.
            </li>
            <li>
              <strong>Amenities:</strong> High-speed internet, modern meeting rooms,
              printing facilities, and a fully equipped kitchen — all at your
              fingertips.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Membership Options</h2>
          <ul className="space-y-4 list-disc pl-6">
            <li><strong>Day Passes:</strong> Access for a single productive day.</li>
            <li><strong>Part-Time Memberships:</strong> Flexible days per week/month.</li>
            <li><strong>Full-Time Memberships:</strong> Unlimited access and full amenities.</li>
          </ul>
        </div>

        {/* Custom Image Slider */}
        <div className="mx-auto w-[90%] mt-8">
          <div className="relative w-full h-[450px] overflow-hidden rounded-lg shadow-md">
            <div
              className="flex w-full h-full transition-transform duration-700 ease-in-out"
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

            {/* Arrows */}
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
                      : "bg-gray-500 border-gray-500"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="mt-10 bg-gray-100 p-8 rounded-lg max-w-2xl mx-auto shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Book Your Visit</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block mb-2 font-medium">Your Name (required)</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Your Mobile Number (required)</label>
              <input
                type="tel"
                name="user_mobile"
                required
                className="w-full px-4 py-2 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Your Email (required)</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Your Message (required)</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CoworkingSpaces;
