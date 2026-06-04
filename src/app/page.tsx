import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { WhyChooseSection } from "@/components/landing/why-choose-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { Footer } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <main className="bg-[#0F172A] min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyChooseSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
