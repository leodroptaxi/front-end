import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sedan1 from "../assets/sedan1.svg";
import sedan2 from "../assets/sedan2.png";
import sedan3 from "../assets/sedan3.svg";
import bigSedan1 from "../assets/big-sedan1.svg";
import bigSedan2 from "../assets/big-sedan2.svg";
import bigSedan3 from "../assets/big-sedan3.svg";
import suv1 from "../assets/suv1.png";
import suv2 from "../assets/suv2.svg";
import suv3 from "../assets/suv3.svg";
import innova from "../assets/innova.png";
import shadow from "../assets/shadow.png";

export default function Tariff() {
  const carCategories = [
    {
      type: "SEDAN",
      cars: [
        {
          model: "SWIFT DZIRE",
          oneWay: 14,
          roundTrip: 13,
          img: sedan1,
        },
        {
          model: "Tata Jest",
          oneWay: 14,
          roundTrip: 13,
          img: sedan2,
        },
        {
          model: "Hyndai Aura",
          oneWay: 14,
          roundTrip: 13,
          img: sedan3,
        },
      ],
    },
    {
      type: "SEDAN",
      cars: [
        {
          model: "TOYOTA ETIOS",
          oneWay: 15,
          roundTrip: 14,
          img: bigSedan1,
        },
        {
          model: "Maruti Siaz",
          oneWay: 15,
          roundTrip: 14,
          img: bigSedan2,
        },
        {
          model: "Nizzan Sunny",
          oneWay: 15,
          roundTrip: 14,
          img: bigSedan3,
        },
      ],
    },
    {
      type: "SUV",
      cars: [
        {
          model: "MARUTI ERTIGA",
          oneWay: 19,
          roundTrip: 18,
          img: suv1,
        },
        {
          model: "MARAZZO",
          oneWay: 19,
          roundTrip: 18,
          img: suv2,
        },
        {
          model: "Xylo",
          oneWay: 19,
          roundTrip: 18,
          img: suv3,
        },
      ],
    },
    {
      type: "INNOVA",
      cars: [
        {
          model: "",
          oneWay: 20,
          roundTrip: 18,
          img: innova,
        },
      ],
    },
  ];

  const includedFeatures = [
    "Driver Bata ₹400",
    "Hillstation Charges ₹300",
    "Other State Permit",
    "Tolls",
  ];

  return (
    <div className="p-8" id="tariff">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="relative">
          <div className="absolute border-2 border-white w-52 h-9 left-16 md:left-28 top-1/2 -translate-y-1/2 z-0"></div>
          <h2 className="relative text-2xl text-[#FBFF00] font-semibold mb-4 z-10 pr-2">
            OUTSTATION TARIFF
          </h2>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {carCategories.map((category, categoryIndex) => (
          <TariffCard
            key={categoryIndex}
            category={category}
            includedFeatures={includedFeatures}
          />
        ))}
      </div>
    </div>
  );
}

function TariffCard({ category, includedFeatures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (category.cars.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % category.cars.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [category.cars.length]);

  const currentCar = category.cars[currentIndex];

  return (
    <div className="rounded-2xl bg-[#029EA1] overflow-hidden shadow-lg flex flex-col">
      {/* Car Section with Carousel */}
      <div className="relative p-6 flex items-center">
        <div className="relative w-full m-5 h-48 flex items-center">
          <div className="bg-yellow-400 w-1/2 h-48"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Car Image */}
            <AnimatePresence mode="wait">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentCar.img}
                  src={currentCar.img}
                  alt={currentCar.model || category.type}
                  initial={{ x: -200, opacity: 0 }} // start from left
                  animate={{ x: 0, opacity: 1 }} // move to center
                  exit={{ x: 200, opacity: 0 }} // exit to right
                  transition={{ duration: 0.8 }}
                  className="absolute z-[1] object-contain w-full h-60"
                />
              </AnimatePresence>
            </AnimatePresence>

            <img
              src={shadow}
              alt="Shadow"
              className="absolute md:bottom-5 bottom-8 z-0 w-full"
            />
          </div>
        </div>

        {/* Right Heading */}
        <div className="ml-auto text-right absolute top-5 right-10">
          <h2 className="text-white text-3xl font-bold uppercase tracking-wide">
            {category.type}
          </h2>
          {/* Car Model Name */}
          <div className="h-10 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentCar.model || category.type}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl font-bold text-white text-center uppercase"
              >
                {currentCar.model || category.type}
              </motion.h2>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Pricing + Includes Section */}
      <div className="bg-white px-8 py-3 mx-6 rounded-t-2xl shadow-md flex justify-between items-start">
        {/* Left Pricing */}
        <div className="flex flex-col space-y-3">
          {/* One Way */}
          <div>
            <div className="text-[#025771] text-sm font-semibold tracking-wide">
              ONE WAY
            </div>
            <div className="flex items-baseline text-[#025771]">
              <span className="text-5xl font-bold">₹{currentCar.oneWay}</span>
              <span className="text-xl ml-1">/KM</span>
            </div>
            <div className="text-sm font-medium">
              ( Minimum coverage 130 KM )
            </div>
          </div>

          {/* Round Trip */}
          <div>
            <div className="text-[#004466] text-sm font-semibold tracking-wide">
              ROUND TRIP
            </div>
            <div className="flex text-[#025771] items-baseline">
              <span className="text-5xl font-bold">
                ₹{currentCar.roundTrip}
              </span>
              <span className="text-xl ml-1">/KM</span>
            </div>
            <div className="text-sm font-medium">
              ( Minimum coverage 250 KM )
            </div>
          </div>
        </div>

        {/* Right Includes */}
        <div className="pl-10">
          <div className="text-green-800 text-lg font-bold mb-3 uppercase">
            INCLUDE WITH
          </div>
          <ul className="text-base text-gray-800 space-y-3">
            {includedFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mt-2 mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
