"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@edx.com",
    href: "mailto:contact@edx.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Business St, Suite 100, City, ST 12345",
    href: "#",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM EST",
    href: "#",
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <div className="space-y-6">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <a
                key={info.label}
                href={info.href}
                className="flex items-start space-x-4 hover:opacity-80 transition-opacity"
              >
                <div className="p-2 bg-white/20 rounded-lg">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold mb-1">{info.label}</p>
                  <p className="text-blue-100">{info.value}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Follow Us</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                aria-label={social.label}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Why Contact Us?</h3>
        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-3 mt-2 flex-shrink-0"></span>
            Free consultation to discuss your needs
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-3 mt-2 flex-shrink-0"></span>
            Customized solutions for your business
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-3 mt-2 flex-shrink-0"></span>
            Quick response time (within 24 hours)
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-3 mt-2 flex-shrink-0"></span>
            Transparent pricing with no hidden fees
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

