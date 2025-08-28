import React, { useState, useEffect } from "react";
import Form from "./Form";


// Use your imported images
const images = [
  "https://ik.imagekit.io/yeoyn0r1ah/WhatsApp%20Image%202025-08-27%20at%2010.20.21%20AM.jpeg?updatedAt=1756270280685", 
  "https://ik.imagekit.io/yeoyn0r1ah/WhatsApp%20Image%202025-08-27%20at%2010.20.22%20AM.jpeg?updatedAt=1756270280698", 
  "https://ik.imagekit.io/yeoyn0r1ah/Property%201=Variant5%20(1).png?updatedAt=1756224421134",
  "https://ik.imagekit.io/yeoyn0r1ah/Property%201=Variant4.png?updatedAt=1756224416095",
   "https://ik.imagekit.io/yeoyn0r1ah/WhatsApp%20Image%202025-08-24%20at%2021.58.21_94b775ab.jpg?updatedAt=1756224411420", 
  "https://ik.imagekit.io/yeoyn0r1ah/WhatsApp%20Image%202025-08-25%20at%2006.59.59_e5c4a4de.jpg?updatedAt=1756224411120"
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className="relative md:h-[95vh] h-[60vh] mt-16 pt-12 md:pt-0" id="home">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Tropical destination ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Dark overlay for better readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto z-10 flex flex-col md:flex-row h-full">
          {/* Left side - Form (Desktop only) */}
          <div className="hidden mt-96 md:flex items-center justify-start w-1/2 ">
            <Form />
          </div>

          {/* Right side - Text */}
          <div className="flex mt-2 md:mt-0 items-center justify-center md:w-3/4 text-center impact-font">
            <div>
              <h3 className="text-white text-xl md:text-6xl font-medium  tracking-wider poppins-font">
                BOOK YOUR
              </h3>
              <h1 className="text-white text-4xl md:text-8xl font-black  tracking-wide leading-tight">
                OUTSTATION CAB !!
              </h1>
              <h3 className="text-[#FBFF00] text-sm md:text-2xl font-bold tracking-widest poppins-font">
                ONE WAY OUTSTATION TAXI
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Form - appears below Hero */}
      <div className="md:hidden rounded-t-3xl">
        <Form />
      </div>
    </main>
  );
}
