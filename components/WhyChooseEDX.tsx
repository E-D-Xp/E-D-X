"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Proven Track Record",
    description: "With 500+ successful projects and 98% client satisfaction, we deliver results that speak for themselves.",
  },
  {
    title: "Expert Team",
    description: "Our team consists of industry experts with years of experience in digital marketing, web development, and design.",
  },
  {
    title: "Custom Solutions",
    description: "We don't believe in one-size-fits-all. Every solution is tailored to your unique business needs and goals.",
  },
  {
    title: "Transparent Communication",
    description: "Stay informed every step of the way with regular updates, detailed reports, and open communication channels.",
  },
  {
    title: "Cutting-Edge Technology",
    description: "We leverage the latest tools and technologies to ensure your business stays ahead of the competition.",
  },
  {
    title: "Results-Driven Approach",
    description: "We focus on metrics that matter. Every strategy is designed to deliver measurable ROI and business growth.",
  },
];

export default function WhyChooseEDX() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Why Choose EDX?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          The advantages of working with us
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-500 ease-out"
          >
            <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {reason.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

