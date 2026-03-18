// components/sections/ServicesOverview.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Megaphone,
  Search,
  BarChart,
  Film,
  TrendingUp,
  Calendar,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    category: "Branding & Strategy",
    icon: Sparkles,
    items: [
      "Corporate Branding",
      "Strategic Planning",
      "Brand Ambassador",
      "Public Relations",
    ],
    color: "from-yellow-400 to-orange-500",
  },
  {
    category: "Digital Marketing",
    icon: Megaphone,
    items: [
      "Social Media Marketing",
      "Performance Marketing",
      "Email/SMS/WhatsApp Marketing",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "SEO Services",
    icon: Search,
    items: [
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO",
      "Local SEO",
      "E-commerce SEO",
      "AI SEO",
    ],
    color: "from-yellow-500 to-orange-600",
  },
  {
    category: "Advertising",
    icon: BarChart,
    items: [
      "Meta Ads",
      "Google Ads",
      "LinkedIn Ads",
      "Facebook/Instagram Ads",
      "YouTube Ads",
    ],
    color: "from-orange-400 to-red-600",
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive{" "}
            <span className="gradient-text">Digital Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a full spectrum of digital marketing and branding services
            tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover-glow group cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mr-4`}
                >
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{service.category}</h3>
              </div>

              <ul className="space-y-2 mb-4">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <ChevronRight size={16} className="text-orange-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
              >
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gradient-bg text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            View All Services <ChevronRight size={18} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
