import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import agrominGold from '@/assets/agromin-gold.jpg';

const HydrominRange = () => {
  const products = [
    {
      name: "Nutri Hydromin 19:19:19",
      description: "Fully water-soluble balanced NPK fertilizer enriched with essential micronutrients, providing a complete nutritional package for all crop stages.",
      features: ["Balanced NPK ratio", "100% water soluble", "Enriched with TE"],
      benefits: ["Promotes overall growth", "Increases yield potential", "Quick nutrient absorption"],
      crops: "All field crops, vegetables, and fruit orchards.",
      dosage: "3-5 kg per acre through fertigation.",
      packSize: "1kg, 5kg, 25kg",
      image: agrominGold,
    },
    {
      name: "Nutri Hydromin 12:61:00",
      description: "High phosphorus water-soluble fertilizer, ideal for root establishment and early vegetative growth stages.",
      features: ["High Phosphorus content", "Low pH formula", "Acidifying effect"],
      benefits: ["Vigorous root growth", "Early flowering initiation", "Better energy transfer"],
      crops: "Transplanted crops, Pulses, and Oilseeds.",
      dosage: "2-4 kg per acre.",
      packSize: "1kg, 5kg, 10kg",
      image: agrominGold,
    },
    {
      name: "Nutri Hydromin 00:52:34",
      description: "High phosphorus and potassium formulation, perfect for the flowering and fruiting stages to ensure quality produce.",
      features: ["Zero Nitrogen", "P & K rich", "Highest purity"],
      benefits: ["Improved fruit set", "Better color and size", "Enhanced sugar content"],
      crops: "Grapes, Pomegranate, Tomato, and Chilli.",
      dosage: "4-5 kg per acre.",
      packSize: "1kg, 5kg, 25kg",
      image: agrominGold,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src='src/assets/hero-2.jpg' 
              alt="Hydromin Range Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Hydromin Range
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Specialized water-soluble fertilizers formulated for precision fertigation and foliar feeding across all crop stages.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-20">
          <div className="space-y-16 mb-16">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                description={product.description}
                features={product.features}
                benefits={product.benefits}
                crops={product.crops}
                dosage={product.dosage}
                packSize={product.packSize}
                image={product.image}
                badge="HYDROMIN RANGE"
              />
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Want a Stage-wise Program?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Build a Hydromin schedule for rooting, vegetative, flowering, and fruiting phases.
            </p>
            <Link to="/contact-us">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                Build Schedule
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HydrominRange;
