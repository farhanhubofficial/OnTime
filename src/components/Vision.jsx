import React from 'react'
import AboutImage from "./images/Vision.jpg"
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa6";

function Vision() {
  return (
    <div className='w-full bg-slate-200 overflow-x-hidden'>
      {/* Hero Section */}
      <div className='w-full h-[36rem] relative'>
        <img src={AboutImage} alt="Vision" className='w-full h-[36rem]  opacity-80' />
        <h1 className='absolute bottom-5 left-4 sm:left-9 text-4xl sm:text-7xl font-bold text-yellow-800 drop-shadow-lg'>
          Vision, Mission And Core Values
        </h1>
      </div>

      {/* Breadcrumb Navigation */}
      <div className='flex flex-wrap w-full h-24 space-x-7 items-center text-xl sm:text-2xl text-yellow-800 mb-6 px-4'>
        
        <Link to='/' className= "flex items-center hover:text-yellow-600 transition duration-200 "><h1>Home</h1>
        <span className='ml-2 mt-1 text-sm'><FaChevronRight className='text-yellow-800 space-x-2' /></span>
        </Link>
       
        <h1 className='opacity-45'>About Us</h1>
      </div>

      {/* Content Section */}
      <div className='w-full  sm:px-6 md:px-8  mx-auto text-base sm:text-lg text-left leading-7 space-y-8'>

        {/* Vision Section */}
        <div className='space-y-4'>
          <h2 className='text-xl sm:text-2xl font-semibold border-b-2 border-yellow-800 inline-block pb-2'>
            Vision
          </h2>
          <p className='leading-relaxed'>
            To be the trusted linen partner with cutting-edge solutions and a passionate team to deliver distinct customer experience in our products and services.
          </p>
        </div>

        {/* Mission Section */}
        <div className='space-y-4'>
          <h2 className='text-xl sm:text-2xl font-semibold border-b-2 border-yellow-800 inline-block pb-2'>
            Mission
          </h2>
          <ul className='list-disc pl-4 sm:pl-5 space-y-3'>
            <li>Add value to the value chain of our customers' business processes via strong partnerships with our distinct interior services.</li>
            <li>Establish comprehensive business processes and methodologies to provide the highest customer satisfaction.</li>
            <li>Create the best working environment to attract and retain talented and committed staff, to perform the best services in the interior design industry.</li>
          </ul>
        </div>

        {/* Core Values Section */}
        <div className='space-y-4'>
          <h2 className='text-xl sm:text-2xl font-semibold border-b-2 border-yellow-800 inline-block pb-2'>
            Core Values
          </h2>
          <ul className='list-disc pl-4 sm:pl-5 space-y-3'>
            <li>Integrity: To act with honesty and to be truthful with our actions.</li>
            <li>Service Excellence: To constantly strive to improve service quality and exceed expectations.</li>
            <li>Teamwork: Company before Group and Group before Self.</li>
            <li>Responsibility and Dependability: To be accountable for one’s own decisions, actions, and results.</li>
            <li>Communication: To communicate constantly, respectfully, and openly with customers, colleagues, and partners.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Vision;
