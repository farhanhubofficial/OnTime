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
      <div className='w-full mx-2 sm:px-6 md:px-8 sm:mx-3 text-base sm:text-lg leading-7 space-y-8'>

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
      At UrbanVolt Solutions, we have a proven track record in delivering electrical installation projects across residential, commercial, and industrial sectors. We meet the most demanding timelines, adhere to budgets, and minimize client risks, ensuring peace of mind.
    </p>
    <p>
      All our projects are overseen by a highly experienced team, led by our Director, with a commitment to providing safe, reliable, and energy-efficient electrical systems tailored to each client's unique needs.
    </p>
    <p>
      We take a collaborative approach, working closely with clients, stakeholders, and design teams to define clear objectives, timelines, and budgets. This helps ensure every electrical installation meets the specific goals and requirements of the project.
    </p>
    <p>
      Our goal is to strike the perfect balance between quality, safety, cost-effectiveness, energy efficiency, and timely project delivery, ensuring that each installation is built to last and perform seamlessly.
    </p>
  </div>

  {/* Image Block */}
  <div className='w-full lg:w-1/2'>
    <img
      src={CurtApproach}
      alt="Electrical Installation Approach Visual"
      className='w-full h-auto rounded-md'
    />
  </div>
</div>

      </div>
    </div>
  )
}

export default Approach;
