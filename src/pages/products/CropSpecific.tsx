import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import paddy from '@/assets/paddy.jpg';
import groundnut from '@/assets/groundnut.jpg';
import maize from '@/assets/maize.jpg';
import cotton from '@/assets/cotton.jpg';
import chilli from '@/assets/chilli.jpg';
import citrus from '@/assets/citrus.jpg';
import vegetable from '@/assets/vegetable.jpg';
import agrominGold from '@/assets/agromin-gold.jpg';



const CropSpecific = () => {
  const products = [
    {
      name: "Paddy",
      description: "Tailored nutrient blend designed to meet the high potassium and micronutrient demands of banana plants for maximum yield and premium fruit quality.",
      features: ["High Potassium content", "Enriched with Boron and Zinc", "Quick absorption formula"],
      benefits: ["Bigger and heavier bunches", "Uniform fruit ripening", "Better resistance to wilt"],
      crops: "All varieties of Banana.",
      dosage: "5-10 gm per plant or 50 kg per acre.",
      packSize: "5kg, 10kg, 25kg",
      image: paddy,
    },
      {
      name: "Groundnut",
      description: "Tailored nutrient blend designed to meet the high potassium and micronutrient demands of banana plants for maximum yield and premium fruit quality.",
      features: ["High Potassium content", "Enriched with Boron and Zinc", "Quick absorption formula"],
      benefits: ["Bigger and heavier bunches", "Uniform fruit ripening", "Better resistance to wilt"],
      crops: "All varieties of Banana.",
      dosage: "5-10 gm per plant or 50 kg per acre.",
      packSize: "5kg, 10kg, 25kg",
      image: groundnut,
    },
    {
      name: "Maize",
      description: "Tailored nutrient blend designed to meet the high potassium and micronutrient demands of banana plants for maximum yield and premium fruit quality.",
      features: ["High Potassium content", "Enriched with Boron and Zinc", "Quick absorption formula"],
      benefits: ["Bigger and heavier bunches", "Uniform fruit ripening", "Better resistance to wilt"],
      crops: "All varieties of Banana.",
      dosage: "5-10 gm per plant or 50 kg per acre.",
      packSize: "5kg, 10kg, 25kg",
      image: maize,
    },
    {
      name: "Cotton",
      description: "Optimized nutrient formulation for cotton crops to enhance boll formation, reduce boll dropping, and improve fiber quality.",
      features: ["Balanced NPK + Mg", "Supports boll development", "Reduces red leaf disease"],
      benefits: ["Increased boll weight", "Higher ginning percentage", "Uniform boll opening"],
      crops: "Hybrid and BT Cotton varieties.",
      dosage: "5-10 kg per acre.",
      packSize: "5kg, 10kg, 25kg",
      image: cotton,
    },
    {
      name: "Chilli",
      description: "Premium formulation designed specifically for vineyards to improve berry size, sweetness, and uniform ripening across the bunch.",
      features: ["Potassium and Magnesium rich", "Trace element enriched", "No-residue formula"],
      benefits: ["Enhanced berry crunch and size", "Improved sugar content (Brix)", "Longer shelf life for export"],
      crops: "Table grapes and Wine grapes.",
      dosage: "3-5 kg per acre through fertigation.",
      packSize: "1kg, 5kg, 10kg",
      image: chilli,
    },
    {
      name: "Citrus",
      description: "Comprehensive nutritional support for mango orchards, promoting healthy flowering, better fruit set, and superior flavor development.",
      features: ["Rich in Calcium and Boron", "Supports carbohydrate transport", "Balanced micro-elements"],
      benefits: ["Reduces fruit drop", "Improved fruit color and aroma", "Steady orchard health"],
      crops: "All varieties of Mango.",
      dosage: "50-100 gm per tree based on age.",
      packSize: "1kg, 5kg, 10kg",
      image: citrus,
    },
    {
      name: "Vegetables",
      description: "Tailored nutrient blend designed to meet the high potassium and micronutrient demands of banana plants for maximum yield and premium fruit quality.",
      features: ["High Potassium content", "Enriched with Boron and Zinc", "Quick absorption formula"],
      benefits: ["Bigger and heavier bunches", "Uniform fruit ripening", "Better resistance to wilt"],
      crops: "All varieties of Banana.",
      dosage: "5-10 gm per plant or 50 kg per acre.",
      packSize: "5kg, 10kg, 25kg",
      image: vegetable,
    }
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
              alt="Crop Specific Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Crop Specific Solutions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Discover crop-specific nutritional solutions formulated to address the requirements of different crops and their growth stages
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
                badge="CROP SPECIFIC"
              />
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Looking for Crop Programs?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get crop-wise nutrition schedules that align with local soils and climate.
            </p>
            <Link to="/contact-us">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                Get Crop Program
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CropSpecific;


