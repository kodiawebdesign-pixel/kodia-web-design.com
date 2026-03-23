import SiteHeader from "@/components/common/SiteHeader";
import SiteFooter from "@/components/common/SiteFooter";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import WhySection from "@/components/home/WhySection";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import WorkflowSection from "@/components/home/WorkflowSection";
import PricingSection from "@/components/home/PricingSection";
import FaqSection from "@/components/home/FaqSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function HomePageClient() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#050505] text-white">
      <SiteHeader />

      <main className="pt-28 md:pt-32">
        <HeroSection />
        <TrustBar />
        <WhySection />
        <ServicesSection />
        <PortfolioSection />
        <WorkflowSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <SiteFooter />
    </div>
  );
}