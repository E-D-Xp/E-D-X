import { Metadata } from "next";
import BrandStory from "@/components/BrandStory";
import MissionValues from "@/components/MissionValues";
import WhyChooseEDX from "@/components/WhyChooseEDX";

export const metadata: Metadata = {
  title: "About Us - EDX",
  description: "Learn about EDX's mission, values, and why we're the right choice for your digital marketing and freelancing needs.",
};

export default function About() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About EDX
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Empowering businesses through innovative digital solutions
          </p>
        </div>
        <BrandStory />
        <MissionValues />
        <WhyChooseEDX />
      </div>
    </div>
  );
}

