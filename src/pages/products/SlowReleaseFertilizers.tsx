import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import VENORGA_PROM from '@/assets/VENORGA_PROM.jpg';
import VENORGA_CMS from '@/assets/VENORGA_CMS.jpg';
import VENORGA_GREEN from '@/assets/VENORGA_GREEN.jpg';
import VENORGA_POTASH from '@/assets/VENOGRA_POTASH_K.jpg';



const SlowReleaseFertilizers = () => {
  const products = [
    {
      name: "VENORGA PROM",
      description: "Slow-release nitrogen pastilles designed for sustained nutrient availability over an extended period, reducing leaching and volatilization.",
      features: ["Controlled release technology", "Uniform pastille size", "Reduced nitrogen loss"],
      benefits: ["Steady nutrient supply", "Improved nitrogen use efficiency", "Environmentally friendly"],
      crops: "Turf, Landscape plants, and high-value Field crops.",
      dosage: "10-20 kg per acre based on crop requirement.",
      packSize: "10kg, 25kg, 50kg",
      image: VENORGA_PROM,
    },
    {
      name: "VENORGA GREEN",
      description: "Polymer-coated urea that provides extended nitrogen release, ensuring the plant receives a steady supply of nitrogen throughout its growth cycle.",
      features: ["High-quality polymer coating", "Customizable release profiles", "Abrasion resistant"],
      benefits: ["Reduces application frequency", "Minimizes nitrate leaching", "Better crop quality"],
      crops: "Sugarcane, Paddy, and long-duration crops.",
      dosage: "40-50 kg per acre.",
      packSize: "25kg, 50kg",
      image: VENORGA_GREEN,
    },
    {
      name: "VENORGA CMS",
      description: "Balanced NPK granules with a sophisticated controlled release profile to provide complete nutrition at the right time.",
      features: ["Balanced NPK ratio", "Predictable release rates", "Full nutrient spectrum"],
      benefits: ["One-time application", "Optimal growth at all stages", "Labor cost savings"],
      crops: "Nursery plants, Ornamental crops, and high-tech agriculture.",
      dosage: "5-10 gm per plant or 50 kg per acre.",
      packSize: "5kg, 10kg, 25kg",
      image: VENORGA_CMS,  
    },
     {
      name: "VENORGA POTASH",
      description: "Balanced NPK granules with a sophisticated controlled release profile to provide complete nutrition at the right time.",
      features: ["Balanced NPK ratio", "Predictable release rates", "Full nutrient spectrum"],
      benefits: ["One-time application", "Optimal growth at all stages", "Labor cost savings"],
      crops: "Nursery plants, Ornamental crops, and high-tech agriculture.",
      dosage: "5-10 gm per plant or 50 kg per acre.",
      packSize: "5kg, 10kg, 25kg",
      image: VENORGA_POTASH,  
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
              alt="Slow Release Fertilizers Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Slow Release Fertilizers
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Steady, sustained nutrient availability for extended feeding and maximum efficiency.
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
                badge="SLOW RELEASE"
              />
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need a Controlled Release Plan?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Optimize nutrient efficiency and reduce application frequency with tailored SRF programs for your crops.
            </p>
            <Link to="/contact-us">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                Get SRF Guidance
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SlowReleaseFertilizers;


