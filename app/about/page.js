// app/about/page.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Target, Award, Heart } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

export default function AboutPage() {
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
            About Shri Kipra
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Building bridges between brands and their audiences since 2020
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Founded with a vision to transform how businesses connect with
                their audience, Shri Kipra has grown from a small team of
                passionate marketers to a full-service digital agency trusted by
                brands of all sizes.
              </p>
              <p className="text-gray-600 mb-4">
                We believe in the power of authentic connections and data-driven
                strategies. Our approach combines creative excellence with
                technical expertise to deliver results that matter.
              </p>
              <p className="text-gray-600">
                From startups to established enterprises, we&apos;ve helped
                hundreds of brands find their voice, reach their audience, and
                achieve their goals in the digital landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/about-team.jpg"
                alt="Shri Kipra Team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            What Makes Us <span className="gradient-text">Different</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Client-First Approach",
                description:
                  "Your success is our priority. We build lasting relationships based on trust and results.",
              },
              {
                icon: Target,
                title: "Data-Driven",
                description:
                  "Every decision is backed by analytics and market research for maximum impact.",
              },
              {
                icon: Award,
                title: "Proven Results",
                description:
                  "Track record of delivering measurable growth for businesses of all sizes.",
              },
              {
                icon: Heart,
                title: "Passionate Team",
                description:
                  "Dedicated experts who truly care about bringing your vision to life.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center hover-glow"
              >
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg">
                To empower businesses with innovative marketing solutions that
                drive sustainable growth and create meaningful connections with
                their audience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg">
                To be the most trusted partner for businesses seeking to
                transform their digital presence and achieve unparalleled
                success in the digital age.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
