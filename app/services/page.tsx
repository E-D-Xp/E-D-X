import { Metadata } from "next";
import PricingTiers from "@/components/PricingTiers";
import ServicesDetail from "@/components/ServicesDetail";

export const metadata: Metadata = {
  title: "Services - EDX",
  description: "Comprehensive digital marketing and freelancing services including SEO, ads, branding, web development, and content creation.",
};

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
        <ServicesDetail />
        <PricingTiers />
      </div>
    </div>
  );
}

