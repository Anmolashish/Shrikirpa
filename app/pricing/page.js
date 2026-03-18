// app/pricing/page.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { DollarSign, Target, TrendingUp, Calendar, Check } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-bg">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-custom mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Flexible Pricing Models
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Choose the model that works best for your business goals
          </motion.p>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Physical Advertising Model */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 gradient-bg rounded-xl text-white mr-4">
                  <Target size={28} />
                </div>
                <h2 className="text-2xl font-bold">Physical Advertising</h2>
              </div>

              <p className="text-gray-600 mb-6">
                Traditional advertising solutions with maximum visibility and
                impact
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-lg">Includes:</h3>
                <ul className="space-y-3">
                  {[
                    "Hoardings & Billboards",
                    "Banner Placements",
                    "Brand Placements",
                    "Event Sponsorships",
                    "Outdoor Media",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Check
                        size={18}
                        className="text-green-500 mr-3 flex-shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-lg mb-2">Revenue Model</h4>
                <p className="text-gray-700">
                  Revenue through strategic placement deals and visibility
                  partnerships. Custom pricing based on location, duration, and
                  reach.
                </p>
              </div>

              <Link
                href="/contact"
                className="block text-center gradient-bg text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                Get Physical Advertising Quote
              </Link>
            </motion.div>

            {/* Service-Based Model */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 gradient-bg rounded-xl text-white mr-4">
                  <TrendingUp size={28} />
                </div>
                <h2 className="text-2xl font-bold">Service-Based Model</h2>
              </div>

              <p className="text-gray-600 mb-6">
                Flexible digital marketing solutions for modern businesses
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-lg">Includes:</h3>
                <ul className="space-y-3">
                  {[
                    "Digital Marketing Services",
                    "Campaign-Based Projects",
                    "Monthly Retainers",
                    "Performance-Based Pricing",
                    "Custom Strategy Development",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Check
                        size={18}
                        className="text-green-500 mr-3 flex-shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-lg mb-2">
                  Pricing Structure
                </h4>
                <p className="text-gray-700">
                  Flexible pricing options including project-based, monthly
                  retainers, and performance-based models to suit your budget
                  and goals.
                </p>
              </div>

              <Link
                href="/contact"
                className="block text-center gradient-bg text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                Discuss Your Project
              </Link>
            </motion.div>
          </div>

          {/* Comparison Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 p-8 bg-gradient-to-r from-gray-50 to-white rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              How to Choose?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-semibold mb-2">Assess Your Goals</h4>
                <p className="text-gray-600">
                  Define your advertising objectives and target audience
                </p>
              </div>

              <div className="p-4">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="font-semibold mb-2">Choose Your Model</h4>
                <p className="text-gray-600">
                  Select physical or digital based on your needs
                </p>
              </div>

              <div className="p-4">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="font-semibold mb-2">Customize & Launch</h4>
                <p className="text-gray-600">
                  We&apos;ll create a tailored package and execute
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
