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
import { MdLocalPhone } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

export default function App() {
  return (
    <div className='bg-[#004E62]'>
     <div className="bg-[#004E62]">
      {/* Phone Button (Left Edge) */}
      <a
        href="tel:+917200343435"
        className="fixed bottom-6 right-6 bg-[#019DBC] hover:bg-[#0185a3] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50"
      >
        <MdLocalPhone size={42} />
      </a>

      {/* WhatsApp Button (Right Edge) */}
      <a
        href="https://wa.me/917200343435?text=I%20want%20more%20info"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50"
      >
        <FaWhatsapp size={42} />
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
