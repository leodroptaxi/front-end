import React, { useState, useEffect } from "react";
import { TbCaretRight } from "react-icons/tb";
import route1 from "../assets/routes1.png";
import route2 from "../assets/routes2.png";
import route3 from "../assets/routes3.png";
import route4 from "../assets/routes4.png";

import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

export default function Routes() {
  const [visibleCards, setVisibleCards] = useState([]);

  const cards=[
    card1,card2,card3,card4
  ]

  const routes = [
    {
      id: 1,
      title: "CHENNAI TO KODAIKANAL",
      image: route1,
      vehicles: [
        { type: "SEDAN", oneWay: "Rs.14 / km", roundTrip: "Rs.13 / km" },
        { type: "ETIOS", oneWay: "Rs.15 / km", roundTrip: "Rs.14 / km" },
        { type: "SUV", oneWay: "Rs.19 / km", roundTrip: "Rs.18 / km" },
        { type: "INNOVA", oneWay: "Rs.20 / km", roundTrip: "Rs.18 / km" },
      ],
      includes: [
        "DRIVER BATA Rs.400",
        "HILLSTATION CHARGES Rs.300",
        "OTHER STATE PERMIT CHARGES",
        "TOLL & PARKING CHARGES",
      ],
    },
    {
      id: 2,
      title: "CHENNAI TO COURTALLAM",
      image: route2,
      vehicles: [
        { type: "SEDAN", oneWay: "Rs.17 / km", roundTrip: "Rs.15 / km" },
        { type: "ETIOS", oneWay: "Rs.17 / km", roundTrip: "Rs.15 / km" },
        { type: "SUV", oneWay: "Rs.21 / km", roundTrip: "Rs.19 / km" },
        { type: "INNOVA", oneWay: "Rs.23 / km", roundTrip: "Rs.21 / km" },
      ],
      includes: [
        "DRIVER BATA PAID",
        "HILL STATION PERMIT PAID",
        "OTHER STATE PERMIT",
        "TOLL & PARKING CHARGES",
      ],
    },
    {
      id: 3,
      title: "CHENNAI TO KANNIYAKUMARI",
      image: route3,
      vehicles: [
        { type: "SEDAN", oneWay: "Rs.17 / km", roundTrip: "Rs.15 / km" },
        { type: "ETIOS", oneWay: "Rs.17 / km", roundTrip: "Rs.15 / km" },
        { type: "SUV", oneWay: "Rs.21 / km", roundTrip: "Rs.19 / km" },
        { type: "INNOVA", oneWay: "Rs.23 / km", roundTrip: "Rs.21 / km" },
      ],
      includes: [
        "DRIVER BATA PAID",
        "HILL STATION PERMIT PAID",
        "OTHER STATE PERMIT",
        "TOLL & PARKING CHARGES",
      ],
    },
    {
      id: 4,
      title: "RAMESHWARAM TO ISHA YOGA",
      image: route4,
      vehicles: [
        { type: "SEDAN", oneWay: "Rs.17 / km", roundTrip: "Rs.15 / km" },
        { type: "ETIOS", oneWay: "Rs.17 / km", roundTrip: "Rs.15 / km" },
        { type: "SUV", oneWay: "Rs.21 / km", roundTrip: "Rs.19 / km" },
        { type: "INNOVA", oneWay: "Rs.23 / km", roundTrip: "Rs.21 / km" },
      ],
      includes: [
        "DRIVER BATA PAID",
        "HILL STATION PERMIT PAID",
        "OTHER STATE PERMIT",
        "TOLL & PARKING CHARGES",
      ],
    },
  ];

  useEffect(() => {
    routes.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 400);
    });
  }, []);

  return (
    <div className="relative overflow-hidden " id="popular-routes">
      <div className="relative z-10 px-8 md:px-0 py-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 ">
          <div className="relative">
            <div className="absolute border-2 border-[#FBFF00] w-40 md:w-80 h-9 left-36 top-1/2 -translate-y-1/2 z-0"></div>
            <h2 className="relative md:text-2xl text-white font-semibold mb-4 z-10 pr-2">
              POPULAR OUTSTATION ROUTES
            </h2>
          </div>
        </div>

        {/* Grid Layout */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {routes.map((route, index) =>
            visibleCards.includes(index) ? (
              <div
                key={route.id}
                className="relative lg:w-[450px] w-[300px] mx-auto"
              >
                <div className="absolute -top-3 -left-14 flex flex-col items-center">
                  <TbCaretRight className="text-6xl text-[#FBFF00]" />

                  <div className="bg-gray-200 h-[33rem] md:h-[35rem] w-1"></div>
                </div>
                <div>
                  <img
                    src={route.image}
                    className="rounded-tr-3xl w-full h-56 object-cover"
                    alt={route.title}
                  />
                </div>
                <div className="bg-[#029EA1] rounded-bl-[80%]">
                  <div className="w-full py-4 bg-white rounded-bl-3xl">
                    <h1 className="w-full h-full flex items-center justify-center text-[#004E62] text-2xl text-center">
                      {route.title}
                    </h1>
                  </div>
                  <div className="pb-4 overflow-hidden rounded-bl-full bg-[linear-gradient(to_right,#7fdfd0_50%,#029EA1_50%)] mt-2">
                    <div className="flex flex-col items-end justify-end bg-opacity-60">
                      <div className="lg:w-[90%] w-[85%] h-full flex flex-col items-end justify-end text-[9px]">
                     
                        <div className="space-y-0 p-2 bg-[#029EA1] w-full">
                          <div className="grid grid-cols-3 gap-2 text-center mb-2">
                            <div className="p-2 border-b-2 border-dashed border-gray-400 bg-white text-gray-800">
                              VEHICLE TYPE
                            </div>
                            <div className="p-2 border-b-2 border-dashed border-gray-400 bg-white text-gray-800">
                              ONE WAY TRIP
                            </div>
                            <div className="p-2 border-b-2 border-dashed border-gray-400 bg-white text-gray-800">
                              ROUND TRIP
                            </div>
                          </div>

                          {route.vehicles.map((v, i) => (
                            <div
                              key={i}
                              className={`grid grid-cols-3 gap-2 text-center bg-white ${
                                i !== route.vehicles.length - 1
                                  ? "border-b-2 border-dashed border-gray-400"
                                  : ""
                              }`}
                            >
                              <div className="p-2 text-gray-800">{v.type}</div>
                              <div className="p-2 text-teal-700">
                                {v.oneWay}
                              </div>
                              <div className="p-2 text-teal-700">
                                {v.roundTrip}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                 
                      <div className="bg-[#029EA1] p-4 lg:text-xs text-[8px] lg:space-y-2">
                        <ul className="text-yellow font-semibold">
                          INCLUDED WITH
                        </ul>
                        {route.includes.map((inc, i) => (
                          <li key={i} className="text-white">
                            {inc}
                          </li>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div> */}
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
  {cards.map((card, idx) => (
    <div key={idx} className="relative">
      {/* Vertical line spanning full image height */}
      <div className="absolute top-12 left-2 h-[85%] w-1 bg-gray-200"></div>

      {/* Image */}
      <img
        src={card}
        className="rounded-tr-3xl w-full object-cover"
        alt={`card-${idx}`}
      />
    </div>
  ))}
</div>



        
      </div>
    </div>
  );
}
