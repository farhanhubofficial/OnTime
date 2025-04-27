import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaInstagram,
  FaFacebookF,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";
import Logo from "./images/images.png";

function Contact() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center px-4 py-10 text-base sm:text-lg md:text-xl lg:text-2xl">
      {/* Header Section */}
      <div className="flex flex-col items-center space-y-4 mb-10 text-center w-full max-w-[90%]">
        <img
          src={Logo}
          alt="UrbanVolt Logo"
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight whitespace-nowrap">
          <span className="block text-orange-400 leading-none">UrbanVolt</span>
          <span className="text-teal-500 leading-none">Solutions</span>
        </h1>
        <p className="text-gray-600 text-center max-w-2xl">
          You can contact us here. We'd love to hear from you!
        </p>
      </div>

      {/* Contact Form */}
      <form className="bg-white w-full max-w-[90%] shadow-lg rounded-lg p-8 border border-gray-200 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Your Message</label>
          <textarea
            placeholder="Write your concern here..."
            className="w-full border border-gray-300 rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-teal-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-600 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Meet with us physically section */}
      <div className="w-full max-w-[90%] mt-16 px-4">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-4">
          Meet with us physically
        </h2>
        <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
          Whether you're a prospective client, a curious partner, or just passing by — feel free to visit our offices for an in-person consultation.
          Our team is always ready to offer expert insights and tailored solutions to meet your needs.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 text-gray-800 text-lg">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-teal-500" />
            <span><strong>Phone:</strong> 0723 048 629</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-teal-500" />
            <span><strong>Email:</strong> urbanVoltsolutions@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaGlobe className="text-teal-500" />
            <span><strong>Website:</strong> www.urbanvoltsolutions.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaFacebookF className="text-blue-600" />
            <span><strong>Facebook:</strong> UrbanVolt Solutions</span>
          </div>
          <div className="flex items-center gap-3">
            <FaInstagram className="text-pink-500" />
            <span><strong>Instagram:</strong> @urbanvolt_ke</span>
          </div>
          <div className="flex items-center gap-3">
            <FaSnapchatGhost className="text-yellow-400" />
            <span><strong>Snapchat:</strong> @urbanvoltke</span>
          </div>
          <div className="flex items-center gap-3">
            <FaTiktok className="text-black" />
            <span><strong>TikTok:</strong> @urbanvolt_official</span>
          </div>
        </div>
      </div>

      {/* Map Location */}
      <div className="w-full max-w-[90%] h-[450px] rounded-xl overflow-hidden shadow-lg mt-16 mb-16">
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

      {/* Final Paragraph */}
      <p className="text-2xl text-center text-teal-600 font-semibold mb-10">
        Feel free to talk to us — we are always here for you.
      </p>
    </div>
  );
}

export default Contact;
