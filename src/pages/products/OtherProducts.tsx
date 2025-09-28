import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const OtherProducts = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Other Products</h1>
          <p className="text-lg text-muted-foreground">Micronutrients consist of a fine blend of mineral elements comprising of Zinc (Zn), Copper (Cu), Manganese (Mn), Iron (Fe), Boron (B), Molybdenum (Mo).</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OtherProducts;