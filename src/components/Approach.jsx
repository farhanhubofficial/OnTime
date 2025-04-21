import React from 'react'
import CurtApproach from './images/Approach.jpg'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa6";

function Approach() {
  return (
    <div className='w-full bg-gray-50 overflow-x-hidden'>
      {/* Hero Section */}
      <div className='w-full h-[36rem] relative'>
        <img src={CurtApproach} alt="Approach" className='w-full h-[36rem]  opacity-80' />
        <h1 className='absolute bottom-5 left-4 sm:left-9 text-4xl sm:text-7xl font-bold text-yellow-800 drop-shadow-lg'>
          Our Approach
        </h1>
      </div>

      {/* Breadcrumb Navigation */}
      <div className='flex flex-wrap w-full h-24 space-x-7 items-center text-xl sm:text-2xl text-yellow-800 mb-6 px-4'>
        <Link to='/' className="flex items-center hover:text-yellow-600 transition duration-200">
          <h1>Home</h1>
          <span className='ml-2 mt-1 text-sm'>
            <FaChevronRight className='text-yellow-800' />
          </span>
        </Link>
        <h1 className='opacity-45'>Our Approach</h1>
      </div>

      {/* Content Section */}
      <div className='w-full ml-1 sm:px-6 md:px-8 mx-auto text-base sm:text-lg leading-7 space-y-8'>

        {/* Section Title */}
        <div className='space-y-4 '>
          <h2 className='text-xl sm:text-2xl font-semibold border-b-2 border-yellow-800 inline-block pb-2'>
            Our Approach
          </h2>
        </div>

        {/* Text & Image Layout */}
        <div className='flex flex-col lg:flex-row gap-10 items-start'>
          {/* Text Block */}
          <div className='w-full lg:w-1/2 space-y-6 text-left'>
            <p>
              At OnTime Co-working Space, we have a proven track record in delivering client projects to the most demanding of timescales, within budget and with the lowest possible client risk.
            </p>
            <p>
              All our projects are led by a highly experienced Director and a team with a passion for delivering high-quality linen supply and tailored solutions alongside an excellent level of service.
            </p>
            <p>
              We adopt a collaborative approach, working with the client, stakeholders, and design teams to define a clear brief that outlines objectives, timelines, and budgets tailored to project goals.
            </p>
            <p>
              Our approach is to achieve the best balance of quality, cost, function, efficiency, maintainability, and timely delivery.
            </p>
          </div>

          {/* Image Block */}
          <div className='w-full lg:w-1/2'>
            <img
              src={CurtApproach}
              alt="Approach Visual"
              className='w-full h-auto rounded-md'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Approach;
