// components/sections/Testimonials.jsx
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO, TechStart India",
    content:
      "Shri Kipra transformed our digital presence completely. Their strategic approach to SEO and content marketing doubled our organic traffic in just 3 months. The team is professional, creative, and truly cares about our success.",
    rating: 5,
    image: "/testimonials/client1.jpg",
    company: "TechStart India",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Marketing Director, FashionHub",
    content:
      "Working with Shri Kipra has been a game-changer for our brand. Their social media strategies and ad campaigns helped us increase engagement by 200% and sales by 150%. Highly recommended!",
    rating: 5,
    image: "/testimonials/client2.jpg",
    company: "FashionHub",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Founder, GrowthLabs",
    content:
      "The team at Shri Kipra understands modern marketing like no other. Their data-driven approach and creative execution helped us scale from startup to enterprise level. They're not just vendors, they're partners.",
    rating: 5,
    image: "/testimonials/client3.jpg",
    company: "GrowthLabs",
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "Brand Manager, UrbanStore",
    content:
      "Exceptional service and outstanding results! Shri Kipra's branding and strategy work gave us a fresh, modern identity that resonates perfectly with our target audience. Their team is responsive, creative, and professional.",
    rating: 5,
    image: "/testimonials/client4.jpg",
    company: "UrbanStore",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Director, RealEstate Pro",
    content:
      "Their local SEO expertise helped us dominate the real estate market in our area. We're now getting 3x more qualified leads than before. The ROI on our marketing spend has never been better!",
    rating: 5,
    image: "/testimonials/client5.jpg",
    company: "RealEstate Pro",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const nextTestimonial = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setAutoplay(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Don&apos;t just take our word for it - hear from some of our
            satisfied clients
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 md:px-12">
          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12"
          >
            {/* Quote Icon */}
            <div className="text-4xl sm:text-5xl md:text-6xl text-orange-200 mb-2 sm:mb-4">
              &quot;
            </div>

            {/* Rating Stars */}
            <div className="flex mb-3 sm:mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial Content */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 italic">
              {testimonials[currentIndex].content}
            </p>

            {/* Client Info */}
            <div className="flex items-center">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mr-3 sm:mr-4 flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-base sm:text-lg truncate">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 truncate">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-xs sm:text-sm text-orange-600 truncate">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons - Hidden on mobile, visible on tablet and up */}
          <button
            onClick={prevTestimonial}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 lg:-translate-x-8 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg items-center justify-center text-gray-600 hover:text-orange-600 hover:scale-110 transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 lg:translate-x-8 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg items-center justify-center text-gray-600 hover:text-orange-600 hover:scale-110 transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Mobile Navigation Buttons - Inside card on mobile */}
          <div className="flex sm:hidden justify-between mt-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-orange-600 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-orange-600 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplay(false);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 sm:w-8 bg-gradient-to-r from-yellow-400 to-orange-500"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Client Logos/Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16"
        >
          <p className="text-center text-sm sm:text-base text-gray-500 mb-4 sm:mb-6">
            Trusted by leading brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="grayscale hover:grayscale-0 transition-all"
              >
                <div className="w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 bg-gray-200 rounded flex items-center justify-center text-xs sm:text-sm text-gray-400">
                  Logo {i}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
