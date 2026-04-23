import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import agrominGold from '@/assets/agromin-gold.jpg';

const OtherProducts = () => {
  const products = [
    {
      name: "Nutri Soil pH Adjuster",
      description: "Advanced formulation that helps correct soil pH levels to the optimal range, ensuring maximum availability of all essential nutrients.",
      features: ["Fast-acting pH correction", "Safe for soil microbes", "Liquid and granular options"],
      benefits: ["Unlocks fixed nutrients", "Improves root health", "Better crop uniformity"],
      crops: "All crops grown in acidic or alkaline soils.",
      dosage: "As per soil test report and pH gap.",
      packSize: "5kg, 10kg, 25kg",
      image: agrominGold,
    },
    {
      name: "Nutri Water Conditioner",
      description: "Specialized additive that improves irrigation water quality by neutralizing harmful salts and improving nutrient compatibility in spray tanks.",
      features: ["Hard water neutralizer", "pH buffering capacity", "Reduces nozzle clogging"],
      benefits: ["Better pesticide efficacy", "Prevents nutrient precipitation", "Saves chemical costs"],
      crops: "All crops where hard water is used for irrigation or spray.",
      dosage: "0.5 - 1 ml per liter of water.",
      packSize: "500ml, 1L, 5L",
      image: agrominGold,
    },
    {
      name: "Nutri Sticker-Spreaders",
      description: "High-quality adjuvant that enhances spray coverage, penetration, and adhesion of foliar applications even in adverse weather conditions.",
      features: ["Silicon-based technology", "Excellent wetting properties", "Rain-fast action"],
      benefits: ["Uniform spray film", "Reduced chemical runoff", "Improved systemic action"],
      crops: "All crops during foliar spray of fertilizers or pesticides.",
      dosage: "0.5 ml per liter of spray solution.",
      packSize: "100ml, 250ml, 500ml, 1L",
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
              src="https://www.ariesagro.com/wp-content/uploads/2022/12/other-1.jpg" 
              alt="Other Products Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Other Products
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Complementary inputs that enhance nutrient efficiency, application performance, and overall crop health.
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
                badge="ADJUVANTS & CONDITIONERS"
              />
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Unsure Which Additive to Use?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We help select adjuvants and conditioners that improve spray efficacy and nutrient delivery.
            </p>
            <Link to="/contact-us">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                Get Recommendation
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OtherProducts;


