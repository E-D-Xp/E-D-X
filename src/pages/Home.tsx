import Hero from "@/components/Hero";
import ServicesShowcase from "@/components/ServicesShowcase";
import ContactCTA from "@/components/ContactCTA";
// import Stats from "@/components/Stats";
// import Testimonials from "@/components/Testimonials";

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

