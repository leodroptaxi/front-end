import React from "react";
import batch from "../assets/batch.png";
import star from "../assets/star.png";
import { FaArrowRight } from "react-icons/fa";
import call from "../assets/call.png";

export default function Information() {
  return (
    <div className="p-6 md:p-12" id="customer-information">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
         
          <div className="relative">
          <div className="absolute border-2 border-white w-48 md:w-72 h-9 left-32 top-1/2 -translate-y-1/2 z-0"></div>
          <h2 className="relative text-xl md:text-2xl text-[#FBFF00] font-semibold mb-4 z-10  pr-2">
          FOR CUSTOMER INFORMATION
          </h2>
        </div>
          
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Fare Details Card */}
          <div className="bg-[#029EA1] rounded-lg p-6">
            <h2 className="text-white text-base md:text-lg font-semibold mb-4  rounded px-3 py-2 inline-block">
              Fare Details Above
            </h2>

            <div className="text-white text-sm md:text-base space-y-3 leading-relaxed">
              <p>• Toll fees, Inter-State Permit charges (if any) are extra.</p>
              <p>
                • Drop Trips-Driver Bata For Sedan Rs.400 & SUV Rs.500 – Waiting
                Charges Rs.150 per hour.
              </p>
              <p>• Drop Trips – Minimum running must be 130kms per day.</p>
              <p>
                • Round Trips – Driver Bata Sedan Rs.400 & SUV Rs.500/- per day.
              </p>
              <p>
                • Round Trips – Minimum running must be 250kms per day. For
                Bengaluru it is minimum 300kms per day.
              </p>
              <p>• Hill station charges – Sedan Rs.400 & SUV Rs.500</p>
              <p>
                • 1 day means 1 calendar day (from midnight 12 to Next Midnight
                12)
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* 15000 Trips Completed Card */}
            <div className="bg-[#029EA1] rounded-lg p-6 relative">
              <div className="flex items-center mb-4">
                <img src={batch} alt="Batch" className="w-16 h-16 mr-4" />
                <div>
                  <div className="text-[#ffe600] text-3xl md:text-4xl font-bold">
                    15000
                  </div>
                  <div className="text-[#ffe600] text-sm md:text-base font-medium">
                    TRIPS COMPLETED
                  </div>
                </div>
              </div>

              <p className="text-white text-sm md:text-base mb-6 leading-relaxed">
                We are proud to announce that we have successfully completed
                over 15,000 trips! This milestone reflects the trust our
                customers place in us and our commitment to providing safe,
                reliable, and comfortable rides. Every journey is a step toward
                delivering excellence, and we thank our passengers for choosing
                us time and again. Here’s to many more miles together!
              </p>

              <a
                href="tel:9150245494"
                className="flex items-center justify-end text-white font-medium text-sm md:text-base ml-auto hover:underline"
              >
                CALL NOW <FaArrowRight className="ml-2" />
              </a>
            </div>

            {/* 24x7 Customer Support Card */}
            <div className="bg-[#029EA1] rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img src={call} alt="Support" className="w-12 h-12 mr-4" />
                <div className="text-[#ffe600] text-lg md:text-xl font-bold">
                  24x7 CUSTOMER SUPPORT
                </div>
              </div>

              <p className="text-white text-sm md:text-base mb-6 leading-relaxed">
                Anytime, Anywhere. We are available 24/7 to assist with
                bookings, queries, or emergencies—because your journey matters
                to us, day or night.
              </p>

              <a
                href="tel:9150245494"
                className="flex items-center justify-end text-white font-medium text-sm md:text-base ml-auto hover:underline"
              >
                CALL NOW <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Top Rated Drivers Card */}
        <div className="mt-6 w-full">
          <div className="bg-[#029EA1] rounded-lg p-6 md:w-1/2 mx-auto items-center justify-between">
            {/* Left side: Icon + Text */}
            <div className="flex items-center">
              <img src={star} alt="Star" className="w-10 h-10 mr-3" />
              <div>
                <div className="text-[#ffe600] text-base md:text-lg font-bold">
                  TOP RATED DRIVERS
                </div>
                <p className="text-white text-xs md:text-sm mt-1 leading-relaxed">
                  Drivers are trusted by thousands of happy customers. With
                  excellent safety records and 5-star ratings.
                </p>
              </div>
            </div>

            {/* Right side: Call Button */}
            <a
              href="tel:9150245494"
              className="flex items-center justify-end text-white font-medium text-sm md:text-base ml-auto hover:underline"
            >
              CALL NOW <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
