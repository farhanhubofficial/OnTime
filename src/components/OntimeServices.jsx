import React from "react";
import h3 from "./images/h3.jpg";
import h4 from "./images/h4.jpg";
import h5 from "./images/h5.jpg";
import h6 from "./images/h6.jpg";

const services = [
  {
    title: "Office & Event Space Rentals",
    description:
      "Flexible, professional spaces for freelancers, startups, and teams. Includes private offices, boardrooms, and conference areas.",
    image: h3,
  },
  {
    title: "Creative & Marketing Services",
    description:
      "Boost your brand with our podcast studio, social media marketing, and modern interior design solutions.",
    image: h4,
  },
  {
    title: "Skills Training Programs",
    description:
      "Job-ready training in freelancing, design, video editing, public speaking, cybersecurity, and more.",
    image: h5,
  },
  {
    title: "Recruitment & Career Services",
    description:
      "We help you land jobs! Get expert CV reviews, interview prep, and personalized job matching.",
    image: h6,
  },
];

const OntimeServices = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-16 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        <span className="text-orange-500">On</span>
        <span className="text-blue-500">Time</span>{" "}
        <span className="text-gray-900">Services</span>
      </h2>
      <p className="text-gray-700 text-base md:text-lg mb-12 max-w-3xl mx-auto">
        Discover our range of services designed to empower your career, grow your business, and connect with a vibrant community.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-[1.01] h-[26rem] bg-white"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 transition-all duration-300 group-hover:bg-opacity-40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left">
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm md:text-base">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h4 className="text-2xl font-semibold text-blue-600 mb-3">
          Ready to grow with{" "}
          <span className="text-orange-500">On</span>
          <span className="text-blue-500">Time</span>?
        </h4>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join our community of professionals, creators, and entrepreneurs today.
        </p>
        <a
          href="mailto:ontimecowork@gmail.com"
          className="inline-block bg-blue-600 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default OntimeServices;
