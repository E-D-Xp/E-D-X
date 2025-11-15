import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Starter",
    price: "₹3,000",
    period: "month",
    description: "Perfect for small businesses getting started",
    features: [
      "Basic SEO optimization",
      "Social media management (3 platforms)",
      "Monthly analytics report",
      "Email support",
      "Up to 10 blog posts/month",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "₹6,000",
    period: "month",
    description: "Ideal for growing businesses",
    features: [
      "Advanced SEO & content strategy",
      "Social media management (5 platforms)",
      "Google Ads management",
      "Weekly analytics reports",
      "Up to 20 blog posts/month",
      "Priority support",
      "Monthly strategy calls",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations",
    features: [
      "Full-service digital marketing",
      "Dedicated account manager",
      "Custom reporting dashboard",
      "24/7 support",
      "Unlimited content creation",
      "Advanced analytics & insights",
      "Multi-channel campaign management",
      "Custom integrations",
    ],
    popular: false,
  },
];

export default function PricingTiers() {
  return (
    <section className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Pricing Plans
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Choose the plan that fits your needs
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            className={`relative p-8 rounded-2xl ${
              tier.popular
                ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105"
                : "bg-white/95 dark:bg-gray-800 border-2 border-gray-200/50 dark:border-gray-700 shadow-lg dark:shadow-none hover:shadow-xl dark:hover:shadow-lg"
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 text-sm font-semibold rounded-full">
                Most Popular
              </div>
            )}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.period && (
                  <span className={`text-lg ${tier.popular ? "text-blue-100" : "text-gray-600 dark:text-gray-400"}`}>
                    /{tier.period}
                  </span>
                )}
              </div>
              <p className={`text-sm ${tier.popular ? "text-blue-100" : "text-gray-600 dark:text-gray-400"}`}>
                {tier.description}
              </p>
            </div>
            <ul className="space-y-4 mb-8">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${tier.popular ? "text-white" : "text-blue-600"}`} />
                  <span className={tier.popular ? "text-blue-50" : "text-gray-700 dark:text-gray-300"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-500 ease-out ${
                tier.popular
                  ? "bg-white text-blue-600 hover:shadow-lg"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
              }`}
            >
              Get Started
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

