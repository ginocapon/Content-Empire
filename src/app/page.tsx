import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import { faqData } from "@/lib/faq-data";
import CTASection from "@/components/home/CTASection";
import { FaqJsonLd } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <FaqJsonLd faqs={faqData} />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Features Section */}
      <FeaturesSection />

      {/* 3. How It Works */}
      <HowItWorksSection />

      {/* 4. Stats Section */}
      <StatsSection />

      {/* 5. Testimonials */}
      <TestimonialsSection />

      {/* 6. Pricing Section */}
      <PricingSection />

      {/* 7. FAQ Section */}
      <FAQSection />

      {/* 8. Final CTA Section */}
      <CTASection />
    </>
  );
}
