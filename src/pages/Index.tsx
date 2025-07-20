import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CommunitySection from "@/components/CommunitySection";
import TrendingSection from "@/components/TrendingSection";
import MountainSection from "@/components/MountainSection";
import RoadmapSection from "@/components/RoadmapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <CommunitySection />
      <TrendingSection />
      <MountainSection />
      <RoadmapSection />
      <Footer />
    </div>
  );
};

export default Index;
