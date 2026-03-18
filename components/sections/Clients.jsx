// components/sections/Clients.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const clients = [
  {
    name: "Tech Corp",
    industry: "Technology",
    logo: "/clients/tech-corp.svg",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Fashion Brand",
    industry: "Retail",
    logo: "/clients/fashion-brand.svg",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Health Plus",
    industry: "Healthcare",
    logo: "/clients/health-plus.svg",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "EduGlobal",
    industry: "Education",
    logo: "/clients/edu-global.svg",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "FinServe",
    industry: "Finance",
    logo: "/clients/finserve.svg",
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    name: "Foodie Hub",
    industry: "Food & Beverage",
    logo: "/clients/foodie-hub.svg",
    gradient: "from-orange-500 to-red-500",
  },
];

const successStories = [
  {
    client: "Tech Corp",
    challenge: "Needed to increase B2B leads and brand awareness",
    solution: "Implemented comprehensive SEO + LinkedIn Ads strategy",
    result: "300% increase in qualified leads, 200% ROI",
    image: "/success/tech-corp.jpg",
  },
  {
    client: "Fashion Brand",
    challenge: "Low online engagement and sales",
    solution: "Instagram marketing + influencer collaborations",
    result: "150% sales increase, 500K new followers",
    image: "/success/fashion-brand.jpg",
  },
  {
    client: "Health Plus",
    challenge: "Poor local visibility and patient acquisition",
    solution: "Local SEO + Google Ads campaign",
    result: "400% increase in local searches, 200+ new patients/month",
    image: "/success/health-plus.jpg",
  },
];

export default function Clients() {
  const [hoveredClient, setHoveredClient] = useState(null);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Brands We&apos;ve{" "}
            <span className="gradient-text">Collaborated With</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partnering with innovative companies across industries to drive
            digital success
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredClient(index)}
              onHoverEnd={() => setHoveredClient(null)}
              className="relative group cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${client.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
              ></div>
              <div className="glass-card p-6 h-32 flex items-center justify-center hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-r ${client.gradient} flex items-center justify-center text-white font-bold text-lg`}
                  >
                    {client.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-sm">{client.name}</h3>
                  <p className="text-xs text-gray-500">{client.industry}</p>
                </div>
              </div>

              {/* Hover Tooltip */}
              {hoveredClient === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap"
                >
                  Click to view case study
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Featured <span className="gradient-text">Success Stories</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-xl overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-r from-yellow-400 to-orange-500 relative">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="text-white text-4xl">📈</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">
                    {story.client}
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-500">
                        Challenge
                      </p>
                      <p className="text-gray-700">{story.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500">
                        Solution
                      </p>
                      <p className="text-gray-700">{story.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500">
                        Result
                      </p>
                      <p className="text-green-600 font-bold">{story.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Collaboration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            Join these amazing brands and start your success story today
          </p>
          <button className="gradient-bg text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
            Become Our Next Success Story
          </button>
        </motion.div>
      </div>
    </section>
  );
}
