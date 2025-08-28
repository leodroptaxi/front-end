import React from "react";

export default function About() {
  return (
    <section id="about" className="text-white md:mt-96 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="mb-10">
          <div className="relative">
            <div className="absolute border-2 border-white lg:w-60 w-52 h-10 md:h-12 lg:left-28 left-24 top-1/2 -translate-y-1/2 z-0"></div>
            <h2 className="relative text-xl lg:text-2xl text-[#FBFF00] font-semibold mb-4 z-10 ">
              ABOUT US OUR COMPANY
            </h2>
          </div>
        </div>

        {/* Intro text */}
        <p className="max-w-5xl text-gray-200 text-base md:text-xl leading-relaxed mb-12">
          At <span className="font-bold">LEO DROP TAXI</span>, we believe every
          journey should be safe, comfortable, and on time. Since 2023, we’ve
          been proudly serving{" "}
          <span className="font-semibold">
            Tamilnadu, Kerala, Andra Pradesh, Karnataka, and Pondicherry
          </span>{" "}
          with reliable taxi services for locals, travelers, and businesses.
          From quick city trips to long-distance rides, our professional
          drivers, well-maintained vehicles, and 24/7 availability ensure you
          reach your destination without stress or delays.
        </p>

        {/* Mission */}
        <div className="mb-12">
          <div className="relative">
            <div className="absolute border-2 border-yellow-200 lg:w-32 w-40 h-10 md:h-12 left-10 top-1/2 -translate-y-1/2 z-0"></div>
            <h2 className="relative text-lg lg:text-2xl font-semibold mb-4 z-10 px-2">
              Our Mission
            </h2>
          </div>
          <p className="text-gray-200 text-base md:text-xl leading-relaxed max-w-2xl">
            To provide fast, friendly, and affordable transportation while
            keeping safety and customer satisfaction at the heart of everything
            we do.
          </p>
        </div>

        {/* Why Choose Us */}
        <div>
          <div className="relative">
            <div className="absolute border-2 border-yellow-200 lg:w-40 w-24 h-10 md:h-12 lg:left-16 left-16 top-1/2 -translate-y-1/2 z-0"></div>
            <h2 className="relative text-lg lg:text-2xl font-semibold mb-4 z-10 px-2">
              Why Choose Us
            </h2>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-base md:text-xl leading-relaxed">
            <li>
              <span className="font-semibold">Trained & Courteous Drivers</span>{" "}
              – Polite, experienced, and customer-focused.
            </li>
            <li>
              <span className="font-semibold">Always On Time</span> – We value
              your time as much as you do.
            </li>
            <li>
              <span className="font-semibold">Fair & Transparent Pricing</span>{" "}
              – No hidden charges.
            </li>
            <li>
              <span className="font-semibold">GPS-Enabled Vehicles</span> – For
              real-time tracking and safety.
            </li>
            <li>
              <span className="font-semibold">24/7 Booking Support</span> – We’re
              always here when you need a ride.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
