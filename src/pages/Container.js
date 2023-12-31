import React from 'react'
import Footer from "../component/Footer"
import Nav from '../component/Nav';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Faq from '../pages/Faq';
import Home from '../pages/Home';
import { Route, Routes} from 'react-router-dom';
import Talents from '../pages/Talents';
import AboutEvent from '../pages/AboutEvent';
import Category from '../pages/Category'
import UpcomingEvent from './UpcomingEvent';
import Participant from './Participant';


const Container = () => {
  return (
    <div>
    <Nav/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/faq" element={<Faq/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/talent" element={<Talents/>}/>
    <Route exact path="/upcoming-event" element={<UpcomingEvent/>}/>
    <Route exact path="/event" element={<AboutEvent/>}/>
    <Route exact path="/category" element={<Category/>}/>
    <Route exact path="/participant" element={<Participant/>}/>
  
    
  
    </Routes>
    <Footer/>    
    </div>
  )
}

export default Container