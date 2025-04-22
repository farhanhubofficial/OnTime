import React from "react";
import h1 from "./images/h1.jpg";

const Coworkingspaces = () => {
  const Brand = () => (
    <span className="inline-block">
      <span className="text-orange-600 font-bold">On</span>
      <span className="text-blue-500 font-bold">Time</span>
    </span>
  );

  return (
    <div className="overflow-hidden w-full bg-white rounded-xl shadow-lg">
      <img
        src={h1}
        alt="Coworking Spaces"
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
          <Brand /> offers vibrant coworking spaces designed for professionals
          seeking a collaborative and flexible work environment. Whether you're a
          startup founder, freelancer, or remote worker, our spaces foster
          creativity and productivity.
        </p>

        <p>
          Each workspace is equipped with ergonomic furniture, high-speed internet,
          and access to meeting rooms, ensuring a comfortable and efficient workday.
          The open layout encourages networking and idea-sharing among members.
        </p>

        <p>
          At <Brand />, we prioritize community. Regular events and workshops are
          organized to help members grow professionally and personally, creating a
          supportive network of like-minded individuals.
        </p>

        <p>
          Our flexible membership plans cater to various needs, from hot desks to
          dedicated offices, allowing you to choose the option that best suits your
          work style and budget.
        </p>

        <p>
          Experience a dynamic and inspiring work environment at <Brand /> —
          where innovation meets collaboration.
        </p>
      </div>
    </div>
  );
};

export default Coworkingspaces;

