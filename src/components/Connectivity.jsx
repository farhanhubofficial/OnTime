import React from 'react'
import Header from './Header'
import Home from './Home'
import Footer from "./Footer"
import AboutUs from "./AboutUs"
import { Routes, Route } from 'react-router-dom'
import Vision from './Vision'
import Approach from './Approach'

function Connectivity() {
  return (
    <div>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/approach" element={<Approach />} />
        </Routes>
        
        <Footer/>
    </div>
  )
}

export default Connectivity