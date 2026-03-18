// components/sections/WhyChooseUs.jsx
"use client";

import { motion } from "framer-motion";
import {
  RocketLaunchIcon,
  ChartBarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const reasons = [
  {
    icon: RocketLaunchIcon,
    title: "Data-Driven Approach",
    description:
      "Every strategy is backed by comprehensive data analysis and market research to ensure maximum ROI.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: ChartBarIcon,
    title: "Proven Track Record",
    description:
      "500+ successful projects and 200+ satisfied clients across various industries and scales.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: UserGroupIcon,
    title: "Expert Team",
    description:
      "Certified professionals with years of experience in digital marketing, SEO, and branding.",
    color: "from-yellow-500 to-orange-600",
  },
  {
    icon: ShieldCheckIcon,
    title: "Transparent Reporting",
    description:
      "Regular updates and detailed reports so you always know how your campaigns are performing.",
    color: "from-orange-400 to-red-600",
  },
  {
    icon: ClockIcon,
    title: "Timely Delivery",
    description:
      "We respect your time and deliver projects on schedule without compromising quality.",
    color: "from-yellow-600 to-orange-700",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Cost-Effective",
    description:
      "Flexible pricing models and optimized campaigns that give you the best value for your investment.",
    color: "from-orange-500 to-yellow-500",
  },
];

export default function WhyChooseUs() {
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
            Why Choose <span className="gradient-text">Shri Kipra?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine creativity with technology to deliver exceptional results
            that drive business growth.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-xl p-6 hover:shadow-2xl transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-r ${reason.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <reason.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>

              {/* Hover Effect Line */}
              <div
                className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r ${reason.color} mt-4 transition-all duration-300`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "500+", label: "Projects Completed", icon: "🚀" },
            { number: "200+", label: "Happy Clients", icon: "😊" },
            { number: "50+", label: "Team Experts", icon: "👥" },
            { number: "95%", label: "Client Retention", icon: "📊" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50"
            >
              <span className="text-3xl mb-2 block">{stat.icon}</span>
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          {[
            "Google Partners",
            "Meta Certified",
            "LinkedIn Marketing Partner",
            "Shopify Experts",
          ].map((badge, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-gray-50 rounded-full text-gray-700 font-medium"
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
