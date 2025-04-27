import React, { useState } from "react";
import Logo from "./images/images.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you provide for residential installations?",
      answer:
        "We offer a wide range of electrical installation services for residential properties, including wiring, circuit board installations, lighting design, electrical repairs, and home automation systems to ensure safety and energy efficiency.",
    },
    {
      question: "Do you provide electrical installations for hospitals?",
      answer:
        "Yes, we specialize in providing electrical installations tailored for hospitals. This includes medical-grade power outlets, emergency backup power systems, lighting design, and electrical safety inspections to ensure compliance with healthcare standards.",
    },
    {
      question: "What electrical solutions do you offer for learning centers?",
      answer:
        "For learning centers, we provide safe, efficient, and scalable electrical solutions that include smart lighting systems, electrical infrastructure for educational tools, audio-visual setups, and proper electrical wiring for classroom safety.",
    },
    {
      question: "How do I schedule an electrical installation?",
      answer:
        "You can schedule an installation by reaching out to us through our contact page or directly calling our customer support team. We'll arrange a site visit, provide a quote, and schedule the installation at your convenience.",
    },
    {
      question: "Are your services certified and insured?",
      answer:
        "Yes, all of our electricians are certified and fully insured. We comply with local safety regulations and standards to ensure top-quality work, and we also provide warranties for all our installations.",
    },
    {
      question: "What is the cost of electrical installation services?",
      answer:
        "The cost varies depending on the scope of the installation and the specific needs of your project. We provide free estimates after evaluating your requirements. Please contact us to get a personalized quote.",
    },
    {
      question: "Do you offer emergency electrical services?",
      answer:
        "Yes, we offer 24/7 emergency electrical services. Whether it's a power outage, electrical malfunction, or any urgent issue, our team is available to assist you at any time.",
    },
    {
      question: "How long will my installation take?",
      answer:
        "The duration of the installation depends on the size and complexity of the project. For small residential installations, it can take a few hours, while larger projects, such as hospital installations, can take several days or weeks. We’ll provide you with an estimated timeline before starting.",
    },
    {
      question: "What are your payment options?",
      answer:
        "We accept various payment methods, including credit/debit cards, bank transfers, and mobile payment options. Payment terms and invoicing can be discussed before the start of the project.",
    },
    {
      question: "Do you offer warranties on your installations?",
      answer:
        "Yes, we offer warranties on all of our electrical installations. The length of the warranty may vary depending on the type of service, but we guarantee our work and are happy to address any issues during the warranty period.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
          Here are the answers to some frequently asked questions about our
          electrical installation services.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-[90%] space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 mb-4 hover:shadow-xl transition duration-300"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-xl text-teal-600 font-semibold">{faq.question}</h2>
              {activeIndex === index ? (
                <FaChevronUp className="text-teal-500" />
              ) : (
                <FaChevronDown className="text-teal-500" />
              )}
            </div>

            {activeIndex === index && (
              <p className="mt-4 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
