import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// Images of residential buildings with electrical installations
import h1 from "./images/tamam1.jpeg";
import h2 from "./images/tamam3.jpeg";
import h3 from "./images/sagal.jpeg";
import h4 from "./images/sagal 2.jpeg";
import h5 from "./images/ResBuilding.jpeg";
import h6 from "./images/nomad1.jpeg";
import h7 from "./images/nomad2.jpeg";
import h8 from "./images/nomad3.jpeg";
import h9 from "./images/muratina2.jpeg";
import h10 from "./images/muratina1.jpeg";
import h11 from "./images/muratina3.jpeg";


const images = [h1, h2, h3, h4, h5, h6, h7, h8, h9 ];

const Residential = () => {
  const form = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",  // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",  // Replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY"   // Replace with your EmailJS public key
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

  return (
    <div className="w-full bg-white shadow-md">
      {/* Hero Image */}
      <img
        src={h1}
        alt="Residential Building Electrical Installation"
        className="w-full h-96  p-4"
      />

      {/* Content */}
      <div className="px-6 py-10 text-gray-800 space-y-8 text-justify leading-relaxed tracking-normal">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Our Electrical Installation for <span className="text-orange-600">Residential</span> Buildings
        </h1>

        <p>
          At UrbanVolt Solutions, we specialize in providing high-quality electrical installations for residential buildings.
          Our services are designed to ensure safety, efficiency, and sustainability, meeting all the necessary requirements for modern homes.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Why Choose Us for Residential Electrical Installations?</h2>
          <ul className="space-y-4 list-disc pl-6">
            <li><strong>Safety First:</strong> We prioritize safety in all our electrical installations, ensuring compliance with local electrical codes and regulations.</li>
            <li><strong>Expert Technicians:</strong> Our team consists of skilled electricians with years of experience in residential electrical systems.</li>
            <li><strong>Efficient Solutions:</strong> We use the latest technology and efficient installation techniques to save time and energy.</li>
          </ul>
        </div>
  
        <div className="bg-gray-200 rounded-lg p-4"> 
          <div className="mx-8 mr-6">
          <h2 className="text-2xl font-semibold  mb-3">Previous Residential Projects</h2>
          <p className="mb-6">
            Take a look at some of the residential buildings we've worked on. Our expertise in electrical installations has helped many homeowners enjoy a safe and well-lit environment.
          </p>
          </div>
        

          {/* Image Slider */}
          <div className="mx-auto w-[86%] mt-8">
            <div className="relative w-full h-[450px] overflow-hidden rounded-lg shadow-md bg-white">
              <div
                className="flex w-full h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((img, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0 flex items-center justify-center">
                    <img
                      src={img}
                      alt={`Residential Project ${index + 1}`}
                      className="w-full h-full max-h-[450px] object-contain p-4"
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
                      currentIndex === index ? "bg-white border-white" : "bg-gray-500 border-gray-500"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-10 bg-gray-100 p-8 rounded-lg max-w-5xl mx-auto shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Book Your Electrical Installation Consultation</h2>
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

export default Residential;
