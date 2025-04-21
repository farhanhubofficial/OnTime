import React from "react";
import h6 from "./images/h6.jpg";

const OnTimeStudio = () => {
  const Brand = () => (
    <span className="inline-block">
      <span className="text-orange-600 font-bold">On</span>
      <span className="text-blue-500 font-bold">Time</span>
    </span>
  );

  return (
    <div className="overflow-hidden w-full bg-white rounded-xl shadow-lg">
      <img
        src={h6}
        alt="OnTime Studio"
        className="w-full h-96 object-cover transition-all duration-300 group-hover:brightness-75"
      />

      <div className="px-6 py-8 text-gray-800 space-y-6 text-justify leading-relaxed tracking-normal">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
          <span className="block">
            <span className="text-orange-600">On</span>
            <span className="text-blue-500">Time</span>
          </span>
        </h1>

        <p>
          Our state-of-the-art OnTime Studio is the perfect space for content creators,
          podcasters, and filmmakers. Whether you’re recording a podcast, producing a
          video, or streaming live, our studio is equipped with professional-grade
          gear and facilities.
        </p>

        <p>
          The studio features high-quality cameras, microphones, and lighting setups
          that ensure your content is of the highest standard. You’ll also have access
          to soundproof rooms, ensuring your recordings are clear and crisp.
        </p>

        <p>
          In addition to the equipment, we offer expert technical support to help you
          set up and operate the equipment, so you can focus on creating exceptional
          content.
        </p>

        <p>
          The flexible nature of our studio space means you can rent it by the hour or
          book for extended periods. Whether you're a solo creator or a team, we have
          the right package for you.
        </p>

        <p>
          Elevate your content creation experience at <Brand /> and make your next
          project a masterpiece.
        </p>
      </div>
    </div>
  );
};

export default OnTimeStudio;
