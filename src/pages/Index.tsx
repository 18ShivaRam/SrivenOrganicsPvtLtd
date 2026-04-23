import { Header } from '@/components/Header';
import { HeroCarousel } from '@/components/HeroCarousel';
import { StatsSection } from '@/components/StatsSection';
import { CropsSection } from '@/components/CropsSection';
import { ProductsSection } from '@/components/ProductsSection';
import { AboutSection } from '@/components/AboutSection';
import { AwardsSection } from '@/components/AwardsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/20">
      <Header />
      <HeroCarousel />
      <StatsSection />
      <CropsSection />
      <ProductsSection />
      <AboutSection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default Index;


