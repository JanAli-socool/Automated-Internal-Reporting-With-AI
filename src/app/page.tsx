import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import EnvironmentValidation from "@/components/EnvironmentValidation";
import TechnicalApproach from "@/components/TechnicalApproach";
import AIRecommendation from "@/components/AIRecommendation";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import ScopeAndDeliverables from "@/components/ScopeAndDeliverables";
import Timeline from "@/components/Timeline";
import CostBreakdown from "@/components/CostBreakdown";
import SecurityAndPrivacy from "@/components/SecurityAndPrivacy";
import RisksAndAssumptions from "@/components/RisksAndAssumptions";
import FutureExpansion from "@/components/FutureExpansion";
import WhyMe from "@/components/WhyMe";
import Footer from "@/components/Footer";

export default function ProposalPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ExecutiveSummary />
      <EnvironmentValidation />
      <AIRecommendation />
      <TechnicalApproach />
      <ArchitectureDiagram />
      <ScopeAndDeliverables />
      <Timeline />
      <CostBreakdown />
      <SecurityAndPrivacy />
      <RisksAndAssumptions />
      <FutureExpansion />
      <WhyMe />
      <Footer />
    </main>
  );
}
