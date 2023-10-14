import { ArticleShowcase } from "../components/landing/ArticleShowcase";
import { FeaturesSection } from "../components/landing/FeaturesSection";
import { HeroSection } from "../components/landing/HeroSection";
import { RotatingLogos } from "../components/landing/RotatingLogos";
import { StatsSection } from "../components/landing/StatsSection";

export default function Page() {
  return (
    <div className="flex flex-col px-4 gap-32 pb-16 overflow-hidden">
      <HeroSection />
      <RotatingLogos />
      <ArticleShowcase />
      <FeaturesSection />
      <StatsSection />
    </div>
  );
}
