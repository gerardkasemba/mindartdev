"use client";
import { BentoSection } from "@/components/modules/bento-section";
import { ServicesShowcase } from "@/components/modules/company-showcase";
import ContactSection from "@/components/modules/contact-section";
import { CTASection } from "@/components/modules/cta-section";
import { FAQSection } from "@/components/modules/faq-section";
import { FeatureSection } from "@/components/modules/feature-section";
import { FooterSection } from "@/components/modules/footer-section";
import { GrowthSection } from "@/components/modules/growth-section";
import { HeroSection } from "@/components/modules/hero-section";
import JoinTheTeam from "@/components/modules/join-the-team";
import PortfolioSection from "@/components/modules/portfolio-section";
import { PricingSection } from "@/components/modules/pricing-section";
import { QuoteSection } from "@/components/modules/quote-section";
import { TestimonialSection } from "@/components/modules/testimonial-section";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
            <HeroSection />
            <ServicesShowcase />
            <BentoSection />
            {/* <QuoteSection /> */}
            <FeatureSection />
            {/* <GrowthSection /> */}
            <PortfolioSection />
            <ContactSection />
            <TestimonialSection />
            <JoinTheTeam />
            <FAQSection />
            {/* <CTASection /> */}
            <FooterSection />
        </main>
    );
}
