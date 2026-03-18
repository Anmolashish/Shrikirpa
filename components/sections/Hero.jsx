// components/sections/Hero.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background - Fixed for Tailwind v4 */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-orange-400 to-orange-600 animate-gradient-xy">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Transform Your Brand&apos;s
          <span className="block text-yellow-200">Digital Presence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100"
        >
          From branding to digital marketing, we help businesses grow with
          data-driven strategies and creative excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/services"
            className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all"
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "200+", label: "Happy Clients" },
            { number: "50+", label: "Team Experts" },
            { number: "95%", label: "Client Retention" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-200">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-200">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
