import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import agrominGold from '@/assets/agromin-gold.jpg';

const OrganicProducts = () => {
  const products = [
    {
      name: "Nutri Venorga Bio-Compost",
      description: "Premium bio-compost accelerator that speeds up the decomposition of organic waste while enriching the final product with beneficial microbes.",
      features: ["Microbial enrichment", "Rapid action formula", "High carbon-to-nitrogen ratio"],
      benefits: ["Faster decomposition", "Rich in beneficial microbes", "Improves soil structure"],
      crops: "All agricultural crops and home gardens.",
      dosage: "1 kg per ton of organic waste.",
      packSize: "1kg, 5kg, 25kg",
      image: agrominGold,
    },
    {
      name: "Nutri Organic Growth Promoter",
      description: "Natural plant growth stimulant derived from high-quality seaweed extracts and organic nutrients for vigorous crop development.",
      features: ["100% organic seaweed base", "Rich in natural hormones", "Fast absorption"],
      benefits: ["Enhanced root development", "Stress resistance", "Natural growth hormones"],
      crops: "Fruits, Vegetables, and Flowers.",
      dosage: "2-3 ml per liter of water.",
      packSize: "250ml, 500ml, 1L",
      image: agrominGold,
    },
    {
      name: "Nutri Mycorrhizal Inoculant",
      description: "Highly effective beneficial fungi that form a symbiotic relationship with plant roots, significantly expanding the root surface area.",
      features: ["High spore count", "Multiple fungal strains", "Long shelf life"],
      benefits: ["Improved nutrient uptake", "Enhanced water absorption", "Disease resistance"],
      crops: "Cereals, Pulses, and Plantation crops.",
      dosage: "100-250 gm per acre.",
      packSize: "100gm, 250gm, 500gm",
      image: agrominGold,
    },
    {
      name: "Nutri Organic Soil Conditioner",
      description: "Comprehensive soil health restorer that improves physical, chemical, and biological properties of the soil naturally.",
      features: ["Humic and Fulvic acid enriched", "Increases CEC", "pH buffering action"],
      benefits: ["Better soil structure", "Increased water retention", "Enhanced microbial activity"],
      crops: "All types of soils, especially degraded lands.",
      dosage: "5-10 kg per acre.",
      packSize: "5kg, 10kg, 25kg",
      image: agrominGold,
    },
    {
      name: "Nutri Natural Enzyme Complex",
      description: "Concentrated enzymatic formulation designed to break down complex nutrients in the soil for easier plant availability.",
      features: ["Multi-enzyme blend", "Bio-catalytic action", "Safe for all soil types"],
      benefits: ["Improved nutrient release", "Enhanced soil biology", "Better root zone health"],
      crops: "High-intensity farming and greenhouse crops.",
      dosage: "500 ml to 1 liter per acre.",
      packSize: "500ml, 1L",
      image: agrominGold,
    },
    {
      name: "Nutri Bio-Fertilizer Blend",
      description: "Synergistic combination of Nitrogen-fixing, Phosphorus-solubilizing, and Potassium-mobilizing bacteria for complete organic nutrition.",
      features: ["Triple-action bacteria", "Organic carrier based", "Eco-friendly"],
      benefits: ["Nitrogen fixation", "Phosphorus solubilization", "Growth promotion"],
      crops: "All crops, particularly useful for organic farming.",
      dosage: "2-4 kg per acre soil application.",
      packSize: "1kg, 5kg, 10kg",
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
              alt="Organic Products Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Organic & Bio Products
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Sustainable solutions derived from renewable biomass to nourish your crops and improve soil health naturally.
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
                badge="ORGANIC RANGE"
              />
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Transitioning to Organic Farming?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our experts can help you transition to organic farming practices with our comprehensive organic product range and technical support.
            </p>
            <Link to="/contact-us">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                  Get Organic Transition Plan
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrganicProducts;
