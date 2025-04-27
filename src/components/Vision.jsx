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
      <div className='w-full sm:px-6 md:px-8 mx-auto text-base sm:text-lg text-left leading-7 space-y-8'>

{/* Vision Section */}
<div className='space-y-4'>
  <h2 className='text-xl sm:text-2xl font-semibold border-b-2 border-yellow-800 inline-block pb-2'>
    Vision
  </h2>
  <p className='leading-relaxed'>
    To be the leading provider of innovative electrical solutions, empowering residential, commercial, and industrial sectors with reliable, safe, and energy-efficient installations, all backed by a dedicated and expert team.
  </p>
</div>

{/* Mission Section */}
<div className='space-y-4'>
  <h2 className='text-xl sm:text-2xl font-semibold border-b-2 border-yellow-800 inline-block pb-2'>
    Mission
  </h2>
  <ul className='list-disc pl-4 sm:pl-5 space-y-3'>
    <li>Deliver cutting-edge electrical installation solutions to residential buildings, warehouses, hospitals, learning institutions, factories, and data centers, ensuring the highest quality and safety standards.</li>
    <li>Establish long-term partnerships with our clients by offering customized electrical systems that enhance operational efficiency and sustainability.</li>
    <li>Provide a supportive and inclusive work environment to attract and retain skilled professionals who are committed to excellence in the electrical installation industry.</li>
  </ul>
</div>

{/* Core Values Section */}
<div className='space-y-4'>
  <h2 className='text-xl sm:text-2xl font-semibold border-b-2 border-yellow-800 inline-block pb-2'>
    Core Values
  </h2>
  <ul className='list-disc pl-4 sm:pl-5 space-y-3'>
    <li>Integrity: We act with honesty and transparency in all our electrical installations and business dealings.</li>
    <li>Safety: We prioritize the safety of our team, clients, and communities by adhering to the highest standards of electrical safety and compliance.</li>
    <li>Excellence: We strive for excellence in every project, delivering reliable, efficient, and durable electrical systems that exceed expectations.</li>
    <li>Innovation: We embrace new technologies and practices to continuously improve our electrical solutions for diverse sectors like residential, industrial, and commercial facilities.</li>
    <li>Collaboration: We believe in strong teamwork and fostering positive relationships with our clients, suppliers, and partners to achieve mutual success.</li>
  </ul>
</div>

</div>

    </div>
  )
}

export default Vision;
