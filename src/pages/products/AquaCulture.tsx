import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const AquaCulture = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Aqua Culture & Animal Nutrition</h1>
          <p className="text-lg text-muted-foreground">A range of nutritional and organic products for maintaining the Aquaculture for aqua farming and animal nutritional products to maintain animal health organically.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AquaCulture;