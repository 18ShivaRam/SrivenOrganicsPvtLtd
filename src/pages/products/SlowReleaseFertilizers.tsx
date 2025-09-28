import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const SlowReleaseFertilizers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Slow Release Fertilizers (Pastilles)</h1>
          <p className="text-lg text-muted-foreground">Slow-release fertilizers (SRF) provide a steady supply of plant nutrients over an extended period of time. They contain plant nutrient(s) (mostly nitrogen) in a form that delays their initial availability.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SlowReleaseFertilizers;