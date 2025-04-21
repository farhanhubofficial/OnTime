import React from "react";
import h5 from "./images/h5.jpg";

const ConferenceRoom = () => {
  const Brand = () => (
    <span className="inline-block">
      <span className="text-orange-600 font-bold">On</span>
      <span className="text-blue-500 font-bold">Time</span>
    </span>
  );

  return (
    <div className="overflow-hidden w-full bg-white rounded-xl shadow-lg">
      <img
        src={h5}
        alt="Conference Room"
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
          At <Brand />, our conference rooms are designed to host larger groups and
          corporate events. They are perfect for seminars, conferences, and large
          team meetings, offering ample space for collaboration.
        </p>

        <p>
          Each conference room is equipped with cutting-edge audio-visual systems,
          microphones, and large screens to ensure your presentations are impactful.
          Whether you’re hosting a workshop, panel discussion, or training session, we
          provide the tools to make your event a success.
        </p>

        <p>
          We offer flexible rental options and customizable configurations to meet your
          needs. The rooms can be set up for theatre-style, classroom-style, or boardroom-style
          seating, depending on the event.
        </p>

        <p>
          At <Brand />, we take care of everything, so you can focus on what matters. We provide
          technical support, catering options, and additional services to ensure your event runs smoothly.
        </p>

        <p>
          Book a conference room today and host your next big event at <Brand /> — where
          professional meetings meet perfection.
        </p>
      </div>
    </div>
  );
};

export default ConferenceRoom;
