import React from "react";
import h3 from "./images/h3.jpg";

const PrivateOffices = () => {
  const Brand = () => (
    <span className="inline-block">
      <span className="text-orange-600 font-bold">On</span>
      <span className="text-blue-500 font-bold">Time</span>
    </span>
  );

  return (
    <div className="overflow-hidden w-full bg-white rounded-xl shadow-lg">
      <img
        src={h3}
        alt="Private Offices"
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
          At <Brand />, we offer private offices designed for teams and individuals
          who value their privacy and require a focused environment. Our offices
          provide complete privacy, soundproofing, and the freedom to personalize
          your workspace.
        </p>

        <p>
          Each office is fully equipped with high-speed internet, ergonomic furniture,
          and access to shared amenities, such as kitchens and meeting rooms. You’ll
          have everything you need to maintain productivity and comfort.
        </p>

        <p>
          The flexible membership plans allow you to choose the duration and size of
          the office space, so whether you need a small office or an entire floor for
          your team, we’ve got you covered.
        </p>

        <p>
          At <Brand />, we ensure your office is more than just a place to work — it's
          a space that fosters growth, innovation, and success. You’ll be surrounded by
          a thriving community of professionals and entrepreneurs.
        </p>

        <p>
          Book your private office today and experience the perfect balance of privacy
          and collaboration at <Brand />.
        </p>
      </div>
    </div>
  );
};

export default PrivateOffices;
