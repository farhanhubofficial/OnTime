import React from "react";
import h3 from "./images/h3.jpg";

const MeetingRooms = () => {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-[1.01] h-[26rem] bg-white">
      <img
        src={h3}
        alt="Meeting Rooms"
        className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 transition-all duration-300 group-hover:bg-opacity-50"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left">
        <h3 className="text-2xl font-bold mb-2">Meeting Rooms</h3>
        <p className="text-sm md:text-base">
          Fully-equipped meeting rooms with presentation tools, whiteboards, and video conferencing — ideal for team syncs or client calls.
        </p>
      </div>
    </div>
  );
};

export default MeetingRooms;
