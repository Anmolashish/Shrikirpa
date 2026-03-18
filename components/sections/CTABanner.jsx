// components/sections/CTABanner.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="section-padding gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative container-custom mx-auto text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ready to Transform Your Brand?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Let&apos;s create something amazing together. Get in touch with our
          team today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
