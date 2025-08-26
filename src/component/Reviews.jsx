import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import profile from '../assets/profile.png'

export default function Reviews() {
  const [showMore, setShowMore] = useState(false);

  const initialReviews = [
    {
      text: "Driver was on time, car was clean, and the ride was smooth. Will definitely book again!",
      author: "Priya S."
    },
    {
      text: "I've used this service they've always been punctual. Highly recommend for airport transfers.",
      author: "Anita R."
    },
    {
      text: "Affordable prices compared to others, but still excellent service quality.",
      author: "Vignesh P."
    },
    {
      text: "The driver was polite and knew the best route to avoid traffic.",
      author: "Rahul K."
    }
  ];

  const additionalReviews = [
    {
      text: "Excellent service! The car was comfortable and the driver was very professional throughout the journey.",
      author: "Meera T."
    },
    {
      text: "Great experience for our family trip. Safe driving and well-maintained vehicle. Highly satisfied!",
      author: "Rajesh M."
    },
    {
      text: "Best taxi service in the city. Always reliable and the booking process is very simple and quick.",
      author: "Kavya N."
    }
  ];

  const reviews = showMore ? [...initialReviews, ...additionalReviews] : initialReviews;

  return (
    <div className=" p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-8">
          <div className="relative">
          <div className="absolute border-2 border-[#FBFF00] w-40 md:w-72 h-9 left-32 top-1/2 -translate-y-1/2 z-0"></div>
          <h2 className="relative text-lg md:text-2xl text-white font-semibold mb-4 z-10  pr-2">
          Customer Reviews & Ratings
          </h2>
        </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#029EA1] rounded-lg p-6 mx-auto max-w-2xl">
              <div className="flex items-start space-x-4">
                {/* Avatar */}
                <div className="bg-[#868080] rounded-full p-4 flex-shrink-0">
                  <img src={profile} alt="" className='w-7'/>
                </div>
                
                {/* Review Content */}
                <div className="flex-1">
                  <p className="text-white text-lg leading-relaxed mb-3">
                    "{review.text}"
                  </p>
                  <div className="text-right">
                    <span className="text-white text-sm font-medium">
                      - {review.author}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More/Less Button */}
        <div className="text-center mt-8">
          <button 
            onClick={() => setShowMore(!showMore)}
            className="bg-[#645F5F] hover:bg-gray-700 text-white px-8 py-3 rounded-lg flex items-center justify-center mx-auto transition-colors"
          >
            {showMore ? 'VIEW LESS' : 'VIEW MORE'} 
            {showMore ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </button>
        </div>
      </div>
    </div>
  );
}