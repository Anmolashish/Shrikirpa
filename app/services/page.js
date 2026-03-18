// app/services/page.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import ServiceCategory from "@/components/ServiceCategory";
import CTABanner from "@/components/sections/CTABanner";
import { generateMetadata } from "@/lib/metadata";

// export const metadata = generateMetadata({
//   title: "Our Services - Shri Kipra Digital Marketing Agency",
//   description:
//     "Explore our comprehensive digital marketing, SEO, branding, and advertising services designed to grow your business.",
// });

const serviceCategories = [
  {
    name: "Branding & Strategy",
    icon: "🎯",
    description:
      "Build a powerful brand identity that resonates with your audience",
    services: [
      "Corporate Branding",
      "Strategic Planning",
      "Brand Ambassador",
      "Public Relations",
    ],
  },
  {
    name: "Digital Marketing",
    icon: "📱",
    description: "Reach your target audience across all digital platforms",
    services: [
      "Social Media Marketing",
      "Performance Marketing",
      "Email Marketing",
      "SMS Marketing",
      "WhatsApp Marketing",
    ],
  },
  {
    name: "SEO Services",
    icon: "🔍",
    description: "Dominate search engines with advanced SEO strategies",
    services: [
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO",
      "Local SEO",
      "E-commerce SEO",
      "AI SEO / GEO / AEO / JEO",
      "Search Engine SEO (Google, Bing)",
    ],
  },
  {
    name: "Advertising",
    icon: "📢",
    description: "Data-driven ad campaigns that deliver ROI",
    services: [
      "Meta Ads",
      "Google Ads",
      "LinkedIn Ads",
      "Facebook Ads",
      "Instagram Ads",
      "YouTube Ads",
    ],
  },
  {
    name: "Media & Content",
    icon: "🎬",
    description: "Compelling content that tells your brand story",
    services: ["Video Editing", "UGC Videos", "High-Quality Content Creation"],
  },
  {
    name: "Business Growth",
    icon: "📈",
    description: "Strategic partnerships and reputation management",
    services: [
      "Collaborations & Tie-ups",
      "Business Listings",
      "ORM (Online Reputation Management)",
      "Business Directories & Citations",
    ],
  },
  {
    name: "Events & Management",
    icon: "🎪",
    description: "Professional event and podcast management",
    services: ["Events Management", "Podcast Management"],
  },
];

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategory, setExpandedCategory] = useState(null);

  const filteredCategories = serviceCategories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.services.some((service) =>
        service.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Comprehensive digital solutions tailored to your business goals
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-md mx-auto mt-8"
          >
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category, index) => (
              <ServiceCategory
                key={index}
                category={category}
                isExpanded={expandedCategory === index}
                onToggle={() =>
                  setExpandedCategory(expandedCategory === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
