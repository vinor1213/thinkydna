import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Clients from "@/components/sections/Clients";
import ComingSoon from "@/components/sections/ComingSoon";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Clients />
      <Testimonials />
      <FAQSection />
      <CTA />
    </>
  );
}
