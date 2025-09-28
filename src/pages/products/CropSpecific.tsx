import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const CropSpecific = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Crop Specific</h1>
          <p className="text-lg text-muted-foreground">Browse our Crop Specific organic products that are proven to boost the crop production and quality of crops farming.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CropSpecific;