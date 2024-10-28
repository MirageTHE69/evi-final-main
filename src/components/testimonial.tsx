"use client"; // Mark as client-side

import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "Partnering with EVI has significantly expanded our product offerings and increased our market share. Their electric 3-Wheelers are top-notch, offering advanced features that our clients love.",
    name: "Rohit Mehta",
    title: "Director of Sales, AutoFleet Solutions",
  },
  {
    quote:
      "EVI&apos;s support team has been amazing! Their electric vehicles have transformed our business, reducing operational costs significantly. We&apos;re excited about future opportunities.",
    name: "Amit Sharma",
    title: "CEO, FleetCorp",
  },
  {
    quote:
      "Our collaboration with EVI has been seamless. Their innovation in electric 3-wheelers is a game changer for last-mile delivery solutions. We&apos;re beyond satisfied with their service.",
    name: "Neha Gupta",
    title: "COO, Delivery Solutions",
  },
  {
    quote:
      "EVI provides unparalleled after-sales service and has helped us grow our fleet efficiently. Their electric vehicles are both reliable and cost-effective.",
    name: "Suresh Patil",
    title: "Managing Director, TransFleet",
  },
  {
    quote:
      "EVI&apos;s electric rickshaws are the best in the market. We&apos;ve seen massive growth since we partnered with them. Our customers love the smooth rides and operational efficiency.",
    name: "Priya Nair",
    title: "Founder, RideSafe",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          What Our Partners Say About Us
        </h2>

        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentIndex
                    ? "opacity-100"
                    : "opacity-0 absolute inset-0"
                }`}
              >
                <div className="flex items-center p-8">
                  {/* Left side - Orange Thunderbolt */}
                  <div className="w-1/3 relative">
                    <svg
                      viewBox="0 0 100 200"
                      className="w-32 h-auto fill-current text-orange-500 transform -rotate-12"
                    >
                      <path d="M60,0 L40,80 L80,80 L20,200 L40,120 L0,120 Z" />
                    </svg>
                  </div>

                  {/* Right side - Testimonial Content */}
                  <div className="w-2/3 pl-8">
                    <p className="text-lg text-gray-700 mb-4 italic">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">•</span>
                      <div>
                        <p className="font-semibold text-blue-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrow - Using inline SVG instead of Lucide icon */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-l-lg hover:bg-orange-600 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-orange-500" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
