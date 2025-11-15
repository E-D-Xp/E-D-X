"use client";

import Link from "next/link";
import { Search, Megaphone, Palette, Code, PenTool, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your search rankings and drive organic traffic with proven SEO strategies.",
  },
  {
    icon: Megaphone,
    title: "Digital Advertising",
    description: "Maximize ROI with targeted ad campaigns across Google, Facebook, and more.",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description: "Create a memorable brand identity that resonates with your audience.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Build fast, responsive, and scalable websites that convert visitors into customers.",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Engaging content that tells your story and drives engagement across all platforms.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Data-driven strategies to accelerate your business growth and market presence.",
  },
];

export default function ServicesShowcase() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions to elevate your digital presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-500 ease-out hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

