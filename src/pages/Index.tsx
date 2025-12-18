import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { CustomizationSection } from "@/components/sections/CustomizationSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { HostingSection } from "@/components/sections/HostingSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <PortfolioSection />
        <CustomizationSection />
        <PricingSection />
        <HostingSection />
        <DifferentialsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
