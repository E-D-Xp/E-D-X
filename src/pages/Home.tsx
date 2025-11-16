import Hero from "@/components/Hero";
import ServicesShowcase from "@/components/ServicesShowcase";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesShowcase />
      {/* <Stats />
      <Testimonials /> */}
      <ContactCTA />
    </>
  );
}

