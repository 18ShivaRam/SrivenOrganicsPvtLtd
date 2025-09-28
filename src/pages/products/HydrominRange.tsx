import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const HydrominRange = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Hydromin Range</h1>
          <p className="text-lg text-muted-foreground">Specialized water-soluble fertilizers designed for modern agricultural needs.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HydrominRange;