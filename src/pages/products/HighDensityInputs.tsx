import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const HighDensityInputs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">High Density Inputs</h1>
          <p className="text-lg text-muted-foreground">High-density farming boosts crop yields without increasing the space required for planting. The technique is highly effective in Bamyan Province, where farmers grow vegetables between their fruit trees.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HighDensityInputs;