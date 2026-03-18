// components/ServiceCategory.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion"; // ✅ FIXED IMPORT
import { ChevronDown } from "lucide-react";

export default function ServiceCategory({ category, isExpanded, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-xl overflow-hidden"
    >
      <div
        onClick={onToggle}
        className="p-6 cursor-pointer hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 transition-all"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">{category.icon}</span>
            <h3 className="text-xl font-bold">{category.name}</h3>
          </div>
          <ChevronDown
            className={`transform transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
            size={20}
          />
        </div>
        <p className="text-gray-600 mt-2">{category.description}</p>
      </div>

      <AnimatePresence initial={false}>
        {" "}
        {/* ✅ smoother exit behavior */}
        {isExpanded && (
          <motion.div
            key="content" // ✅ helps AnimatePresence track element
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-gray-100 overflow-hidden" // ✅ prevents jump
          >
            <div className="p-6 bg-gradient-to-b from-gray-50 to-white">
              <h4 className="font-semibold text-orange-600 mb-3">
                Services include:
              </h4>
              <ul className="space-y-2">
                {category.services.map((service, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center text-gray-700 hover:text-orange-600 transition-colors cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></span>
                    {service}
                  </motion.li>
                ))}
              </ul>
              <button className="mt-4 text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                Learn More →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
