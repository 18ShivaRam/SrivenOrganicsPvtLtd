import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import agrominGold from '@/assets/agromin-gold.jpg';

const HighDensityInputs = () => {
  const products = [
    {
      name: "Nutri Concentrated NPK",
      description: "High-strength liquid NPK formulation designed for precision fertigation, providing immediate nutrient availability and easy handling.",
      features: ["Highly concentrated liquid", "Instant solubility", "Balanced nutrient ratios"],
      benefits: ["Rapid crop response", "Easy to automate in drip systems", "Uniform nutrient distribution"],
      crops: "High-value vegetables, Fruit crops, and Greenhouse farming.",
      dosage: "2-5 liters per acre through fertigation.",
      packSize: "1L, 5L, 20L",
      image: agrominGold,
    },
    {
      name: "Nutri Nano Nutrients",
      description: "Cutting-edge nano-formulated nutrients that offer vastly enhanced uptake efficiency and penetration compared to traditional fertilizers.",
      features: ["Nano-particle technology", "High surface area for absorption", "Reduced dosage requirements"],
      benefits: ["Superior nutrient efficiency", "Minimal environmental impact", "Works even in stressful conditions"],
      crops: "All commercial and horticultural crops.",
      dosage: "1-2 ml per liter for foliar spray.",
      packSize: "100ml, 250ml, 500ml",
      image: agrominGold,
    },
    {
      name: "Nutri Calcium-Boron Liquid",
      description: "Synergistic liquid blend of Calcium and Boron to support critical reproductive stages, fruit set, and structural integrity.",
      features: ["Highly stable liquid complex", "Boron enriched for Ca mobility", "Safe for delicate flowers"],
      benefits: ["Prevents fruit cracking", "Improves fruit firmness", "Reduces flower drop"],
      crops: "Tomato, Chilli, Apple, Grapes, and Pomegranate.",
      dosage: "2-3 ml per liter of water.",
      packSize: "500ml, 1L, 5L",
      image: agrominGold,
    },
    {
      name: "Nutri Micronutrient Mix",
      description: "A perfectly balanced liquid micronutrient blend designed for quick correction of hidden deficiencies through foliar application.",
      features: ["Full spectrum of trace elements", "Chelated for stability", "Wetting agent included"],
      benefits: ["Boosts overall plant metabolism", "Corrects multiple deficiencies", "Improves chlorophyll content"],
      crops: "All field and horticultural crops.",
      dosage: "2.5 ml per liter of water.",
      packSize: "250ml, 500ml, 1L, 5L",
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
              src='/assets/hero-2.jpg'
              alt="High Density Inputs Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Liquid Fertilizers
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Fast-acting, uniform formulations designed for precision fertigation and intensive cropping systems.
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
                badge="HIGH DENSITY RANGE"
              />
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need a Fertigation Schedule?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our agronomy team designs liquid feeding programs tailored to crop stage and water quality.
            </p>
            <Link to="/contact-us">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                Get Schedule
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HighDensityInputs;


