import React from 'react'
import Hero from './component/Hero'
import About from './component/About'
import Tariff from './component/Tarrif'
import Information from './component/Information'
import Reviews from './component/Reviews'
import Routes from './component/Routes'
import OurService from './component/OurService'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
// import { MdLocalPhone } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import Lottie from "lottie-react";
import phoneAnimation from "./assets/phone.json"; // path to your downloaded JSON

export default function App() {
  return (
    <div className='bg-[#004E62]'>

<div className="bg-[#004E62]">
  {/* Phone Button (Left Edge) */}
  <a
    href="tel:+917200343435"
    className="fixed bottom-2 right-2 text-white rounded-full flex items-center justify-center transition-all duration-300 z-50"
  >
    <div>
      {/* For md+ screens */}
      <div className="hidden md:block w-28 h-28">
        <Lottie animationData={phoneAnimation} loop={true} />
      </div>

      {/* For small screens */}
      <div className="md:hidden w-24 h-24">
        <Lottie animationData={phoneAnimation} loop={true} />
      </div>
    </div>
  </a>

  {/* WhatsApp Button (Right Edge) */}
  <a
    href="https://wa.me/917200343435?text=I%20want%20more%20info"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50"
  >
    <FaWhatsapp size={42} className="hidden md:block" />
    <FaWhatsapp size={36} className="md:hidden" />
  </a>
</div>

    
      <Navbar/>
      <Hero/>
      <About/>
      <Tariff/>
      <Information/>
      <Reviews/>
      <Routes/>
      <OurService/>
      <Footer/>
    </div>
  )
}
