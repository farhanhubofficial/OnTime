import React from 'react'
import Header from './Header'
import Home from './Home'
import Footer from "./Footer"
import AboutUs from "./AboutUs"
import { Routes, Route } from 'react-router-dom'
import Vision from './Vision'
import Approach from './Approach'
import OntimeServices from "./OntimeServices"
import CoworkingSpaces from "./CoworkingSpaces";
import CreativeSpaces from "./CreativeSpaces";
import PrivateOffices from "./PrivateOffices";
import MeetingRooms from "./MeetingRooms";
import ConferenceRoom from "./ConferenceRoom";
import OnTimeStudio from "./OnTimeStudio";

function Connectivity() {
  return (
    <div>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/approach" element={<Approach />} />
        <Route  path = "/services" element = {<OntimeServices/>} ></Route>
        <Route path= "/coworking" element = {<CoworkingSpaces/>}></Route>
        <Route path= "/creative" element = {<CreativeSpaces/>}></Route>
        <Route path= "/private" element = {<PrivateOffices/>}></Route>
        <Route path= "/meeting" element = {<MeetingRooms/>}></Route>
        <Route path= "/conference" element = {<ConferenceRoom/>}></Route>
        <Route path= "/studio" element = {<OnTimeStudio/>}></Route>





        </Routes>
        
        <Footer/>
    </div>
  )
}

export default Connectivity