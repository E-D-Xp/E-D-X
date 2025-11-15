"use client";

import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            <p>
              EDX was founded with a simple yet powerful vision: to bridge the gap between ambitious businesses and cutting-edge digital solutions. We recognized that many companies struggle to navigate the complex world of digital marketing and technology.
            </p>
            <p>
              What started as a small team of passionate freelancers has grown into a full-service agency trusted by hundreds of businesses worldwide. We combine the agility and personal touch of freelancing with the comprehensive capabilities of a full agency.
            </p>
            <p>
              Today, EDX stands as a testament to what's possible when expertise, innovation, and dedication come together. We're not just service providers—we're your partners in growth, committed to helping you achieve remarkable results.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600"
        >
          <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
            EDX
          </div>
        </motion.div>
      </div>
    </section>
  );
}

