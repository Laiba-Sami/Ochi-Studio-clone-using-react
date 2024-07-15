import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Face from './components/Face'
import Featuredprojects from './components/Featuredprojects'
import Bootcamp from './components/Bootcamp'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Ready from './components/Ready'

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen text-black'>
      <Navbar/>
      <Landingpage/>
      <Marquee/>
      <About/>
      <Face/>
      <Featuredprojects/>
      <Bootcamp/>
      <Ready/>
      <Footer/>
    </div>
  )
}

export default App