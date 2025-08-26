import React, { useState, useEffect } from "react";
import Form from "./Form";


// Use your imported images
const images = ["https://ik.imagekit.io/yeoyn0r1ah/Property%201=Variant5%20(1).png?updatedAt=1756224421134", 
  "https://ik.imagekit.io/yeoyn0r1ah/Property%201=Variant4.png?updatedAt=1756224416095", 
  "https://ik.imagekit.io/yeoyn0r1ah/Property%201=Default%20(2).png?updatedAt=1756224420725",
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
      <section className="relative md:h-screen h-[50vh] pt-16" id="home">
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
        <div className="relative z-10 flex flex-col md:flex-row h-full">
          {/* Left side - Form (Desktop only) */}
          <div className="hidden mt-96 md:flex items-center justify-center w-1/2 p-8">
            <Form />
          </div>

          {/* Right side - Text */}
          <div className="flex items-center justify-center md:w-1/2 p-8 text-center">
            <div>
              <h3 className="text-white text-lg md:text-xl font-medium md:mb-4 tracking-wider">
                BOOK YOUR
              </h3>
              <h1 className="text-white text-3xl md:text-6xl font-black md:mb-6 tracking-wide leading-tight">
                OUTSTATION CAB !!
              </h1>
              <h3 className="text-yellow-400 text-sm md:text-2xl font-bold tracking-widest">
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
