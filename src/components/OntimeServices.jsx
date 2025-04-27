import React from "react";
import h3 from "./images/ResBuilding.jpeg";
import h4 from "./images/combuilding2.jpeg";
import h5 from "./images/Hosp.jpeg";
import h6 from "./images/hos4.jpeg";

const services = [
  {
    title: "Residential Apartments",
    description:
      "Safe and efficient electrical systems for homes, apartments, and gated communities. From wiring to smart home integration, we’ve got it covered.",
    image: h3,
  },
  {
    title: "Commercial & Retail Solutions",
    description:
      "Reliable electrical fit-outs for offices, retail stores, malls, and high-traffic buildings. Designed for scalability, safety, and minimal downtime.",
    image: h4,
  },
  {
    title: "Industrial & Factory Power Systems",
    description:
      "Heavy-duty electrical installations for factories and production plants, with a focus on efficiency, compliance, and safety in high-load environments.",
    image: h5,
  },
  {
    title: "Hospitals, Data Centers & Institutions",
    description:
      "Mission-critical power systems for hospitals, data centers, and learning institutions. We ensure zero downtime and optimal performance at all times.",
    image: h6,
  },
];

const detailedServices = [
  "Residential Apartments",
  "Commercial Buildings",
  "Shopping Malls",
  "Hospitals and Health Facilities",
  "Data Centers",
  "Factories",
  "Warehouses",
  "Learning Institutions",
  "HV & LV Substations",
  "Airfield Lighting (AGL)",
  "Power Reticulations for Estates, Towns & Cities",
];

const OntimeServices = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-16 bg-white text-center">
      {/* Heading */}
      <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-tight whitespace-nowrap">
        <span className="text-orange-400 leading-none">UrbanVolt</span>{" "}
        <span className="text-teal-500 leading-none">Solutions</span>
      </h1>
      <p className="text-gray-700 text-base md:text-lg mb-12 max-w-3xl mx-auto">
        Delivering expert electrical installation services tailored to the unique needs of residential, commercial, and industrial environments.
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

      {/* Learn About Our Services */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
          Learn About Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedServices.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-xl hover:scale-[1.02] transform transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{service}</h3>
              <p className="text-sm text-gray-600">
                Our electrical installation services cover a broad spectrum of industries, ensuring reliability, safety, and efficiency for residential, commercial, and industrial projects.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h4 className="text-2xl font-semibold text-blue-600 mb-3">
          Need expert electrical installations from{" "}
          <span className="text-orange-400 font-bold">UrbanVolt</span>{" "}
          <span className="text-blue-500">Solutions</span>?
        </h4>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Get in touch with our team to power up your next residential, commercial, or industrial project.
        </p>
        <a
          href="mailto:contact@urbanvoltsolutions.com"
          className="inline-block bg-blue-600 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default OntimeServices;
