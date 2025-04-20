import React from 'react'
import AboutImage from "./images/Vision.jpg"
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa6";

function Vision() {
  return (
    <div className='w-full bg-slate-200 mx-4'>
      {/* Hero Section */}
      <div className='w-full h-[36rem] relative'>
        <img src={AboutImage} alt="Vision" className='w-full h-[36rem] object-cover opacity-80' />
        <h1 className='absolute bottom-5 left-9 text-7xl font-bold text-yellow-800 drop-shadow-lg'>
          Vision, Mission And Core Values
        </h1>
      </div>

      {/* Breadcrumb Navigation */}
      <div className='flex w-full h-24 justify-around items-center text-2xl text-yellow-800 mb-6'>
        <Link to='/'>
          <h1>Home</h1>
        </Link>
        <FaChevronRight className='text-yellow-800' />
        <h1 className='opacity-45'>About Us</h1>
      </div>

      {/* Content Section */}
      <div className='w-full max-w-5xl mx-auto text-xl text-left leading-7 space-y-8'>
        
        {/* Vision Section */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold border-b-2 border-yellow-800 inline-block pb-2'>
            Vision
          </h2>
          <p className='text-lg leading-relaxed'>
            To be the trusted linen partner with cutting-edge solutions and a passionate team to deliver distinct customer experience in our products and services.
          </p>
        </div>

        {/* Mission Section */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold border-b-2 border-yellow-800 inline-block pb-2'>
            Mission
          </h2>
          <ul className='list-disc pl-5 space-y-3'>
            <li className='text-lg'>Add value to the value chain of our customers' business processes via strong partnerships with our distinct interior services.</li>
            <li className='text-lg'>Establish comprehensive business processes and methodologies to provide the highest customer satisfaction.</li>
            <li className='text-lg'>Create the best working environment to attract and retain talented and committed staff, to perform the best services in the interior design industry.</li>
          </ul>
        </div>

        {/* Core Values Section */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold border-b-2 border-yellow-800 inline-block pb-2'>
            Core Values
          </h2>
          <ul className='list-disc pl-5 space-y-3'>
            <li className='text-lg'>Integrity: To act with honesty and to be truthful with our actions.</li>
            <li className='text-lg'>Service Excellence: To constantly strive to improve service quality and exceed expectations.</li>
            <li className='text-lg'>Teamwork: Company before Group and Group before Self.</li>
            <li className='text-lg'>Responsibility and Dependability: To be accountable for one’s own decisions, actions, and results.</li>
            <li className='text-lg'>Communication: To communicate constantly, respectfully, and openly with customers, colleagues, and partners.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Vision;
