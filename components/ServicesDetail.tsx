"use client";

import { motion } from "framer-motion";
import { Search, Megaphone, Palette, Code, PenTool, BarChart3, Target, Zap } from "lucide-react";

const digitalMarketingServices = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Comprehensive SEO audits, keyword research, on-page optimization, and link building strategies to improve your search rankings.",
    features: ["Keyword Research", "Technical SEO", "Content Optimization", "Link Building"],
  },
  {
    icon: Megaphone,
    title: "Digital Advertising",
    description: "Strategic paid advertising campaigns across Google Ads, Facebook, Instagram, LinkedIn, and other platforms to maximize ROI.",
    features: ["PPC Management", "Social Media Ads", "Display Advertising", "Retargeting"],
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description: "Create a cohesive brand identity with logo design, brand guidelines, visual assets, and marketing materials.",
    features: ["Logo Design", "Brand Identity", "Visual Assets", "Marketing Materials"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Data-driven insights with comprehensive analytics, custom dashboards, and monthly performance reports.",
    features: ["Google Analytics", "Custom Dashboards", "Performance Reports", "Data Insights"],
  },
];

const freelancingServices = [
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive websites built with the latest technologies. From simple landing pages to complex web applications.",
    features: ["Frontend Development", "Backend Development", "E-commerce Solutions", "API Integration"],
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Engaging content that resonates with your audience. Blog posts, social media content, copywriting, and more.",
    features: ["Blog Writing", "Social Media Content", "Copywriting", "Email Marketing"],
  },
  {
    icon: Target,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and beautiful experiences for your customers.",
    features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
  },
  {
    icon: Zap,
    title: "Consulting",
    description: "Strategic consulting to help you make informed decisions about your digital presence and marketing strategy.",
    features: ["Strategy Development", "Market Analysis", "Competitive Research", "Growth Planning"],
  },
];

export default function ServicesDetail() {
  return (
    <div className="space-y-20 mb-20">
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Digital Marketing Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Drive growth with proven marketing strategies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {digitalMarketingServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-500 ease-out"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Freelancing Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Expert services to bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {freelancingServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-500 ease-out"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

