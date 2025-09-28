import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const UrbanProducts = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Urban Products</h1>
          <p className="text-lg text-muted-foreground">A range of Products for Urban Farming, ready to nourish Urban Gardens. We are proud to present our latest products, designed especially keeping in mind the need of Urban farming market.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UrbanProducts;