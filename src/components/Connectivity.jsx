import React from 'react'
import Header from './Header'
import Home from './Home'
import Footer from "./Footer"
import AboutUs from "./AboutUs"
import { Routes, Route } from 'react-router-dom'
import Vision from './Vision'
import Approach from './Approach'
import OntimeServices from "./OntimeServices"
import Contact from "./Contact"
import Commercial from "./Commercial"
import Learning from "./Learning"

import Coworkingspaces from './Coworkingspaces'
import CreativeSpaces from "./CreativeSpaces";
import PrivateOffices from "./PrivateOffices";
import MeetingRooms from "./MeetingRooms";
import ConferenceRoom from "./ConferenceRoom";
import OnTimeStudio from "./OnTimeStudio";
import Faqs from "./Faqs"
import Residential from "./Residential"
import Hospital from "./Hospital"
import Warehouse from './Warehouse'

function Connectivity() {
  return (
    <div>
        <Header/>
        <Routes>
        <Route path="/learning-institutions" element={<Learning />} />

        <Route path="/residential-buildings" element={<Residential />} />
        <Route path="/hospitals" element={<Hospital />} />
        <Route path="/warehouses" element={<Warehouse />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/approach" element={<Approach />} />
        <Route  path = "/services" element = {<OntimeServices/>} ></Route>
        <Route path= "/coworking" element = {<Coworkingspaces/>}></Route>
        <Route path= "/creative" element = {<CreativeSpaces/>}></Route>
        <Route path= "/private" element = {<PrivateOffices/>}></Route>
        <Route path= "/meeting" element = {<MeetingRooms/>}></Route>
        <Route path= "/conference" element = {<ConferenceRoom/>}></Route>
        <Route path= "/studio" element = {<OnTimeStudio/>}></Route>
  <Route path="/faqs" element={<Faqs />} />
        <Route path= "/contact" element = {<Contact/>}></Route>
        <Route path= "/commercial-buildings" element = {<Commercial/>}></Route>




        </Routes>
        
        <Footer/>
    </div>
  )
}

export default Connectivity