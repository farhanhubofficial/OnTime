import React from 'react';
import h1 from "./images/h1.jpg";
import h2 from "./images/h2.jpg";
import h3 from "./images/h3.jpg";
import h4 from "./images/h4.jpg";
import h5 from "./images/h5.jpg";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 font-[Poppins]">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center bg-no-repeat text-white py-24 px-6 md:px-12"
        style={{ backgroundImage: `url(${h1})` }}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        </div>
      </div>

      {/* First Paragraph (after hero) */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12 leading-relaxed text-base md:text-lg">
        <p>
          At OnTime Co-Working Space, we understand that work is more than just a place; it’s an experience.
          Our meticulously crafted co-working environment seamlessly blends modern amenities with a touch of nature,
          fostering a balanced and productive atmosphere.
        </p>
      </div>

      {/* Image + Content Sections */}
      <div className="bg-white">
        {/* Image 1 */}
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <img src={h2} alt="Workspace 1" className="rounded-lg mx-auto my-8" />
        </div>

        {/* Paragraph 1 */}
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 leading-relaxed text-base md:text-lg">
          <p>
            Our story began with a passion for creating a workspace that transcends the conventional.
            Arbor House is not just a co-working space; it’s a hub of creativity and connection.
            Rooted in the belief that diverse minds drive progress, we provide a platform for individuals and teams to flourish.
          </p>
        </div>

        {/* Image 2 */}
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <img src={h3} alt="Workspace 2" className="rounded-lg mx-auto my-8" />
        </div>

        {/* Paragraph 2 */}
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 leading-relaxed text-base md:text-lg">
          <p>
            Our commitment extends beyond shared desks and meeting rooms.
            Arbor House is dedicated to nurturing a sense of community.
            From networking events to skill-sharing sessions, we curate opportunities that empower our members both professionally and personally.
          </p>
        </div>

        {/* Image 3 */}
        <div className="w-[100rem] mx-auto px-4 md:px-8">
          <img src={h4} alt="Workspace 3" className="rounded-lg mx-auto my-8" />
        </div>

        {/* Final Paragraph */}
        <div className=" mx-auto px-4 md:px-8 py-6 md:pb-16 leading-relaxed text-base md:text-lg">
          <p>
            Join us at OnTime Co-working Space, where every corner is designed to inspire,
            and every connection is an opportunity to grow.
            Together, let’s redefine the way we work and thrive in a space that feels like home.
            Welcome to a new era of co-working at Arbor House!
          </p>
        </div>

        {/* Final Image */}
        
      </div>
    </div>
  );
};

export default AboutUs;
