import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import dummy from '@/assets/dummy.png';

const PlantProtection = () => {
  const products = [
    {
      name: "Stunner",
      description: "Broad spectrum antibiotic bactericide specifically formulated for the effective control of various bacterial diseases in a wide range of plants.",
      features: ["Dual antibiotic action", "Systemic movement in plants", "Rapid absorption"],
      benefits: ["Controls tough bacterial blights", "Reduces crop loss from rot", "Long-lasting protection"],
      crops: "Paddy, Chilli, Tomato, Citrus, and Pomegranate.",
      dosage: "1-2 gm per 10 liters of water.",
      packSize: "6gm, 12gm, 50gm, 100gm",
      image: dummy,
      contents: "Streptomycin sulphate 9% + Tetracycline Hydrochloride 1%"
    },
    {
      name: "Recorn",
      description: "New generation systemic insecticide of Neo-nicotinoid group with excellent residual activity and translaminar action for superior pest control.",
      features: ["Systemic and translaminar action", "Low dosage requirement", "Safe for environment"],
      benefits: ["Effective against sucking pests", "Protects new growth", "Long duration control"],
      crops: "Cotton, Paddy, Chilli, and Vegetables.",
      dosage: "0.5 - 1 ml per liter of water.",
      packSize: "100ml, 250ml, 500ml, 1L",
      image: dummy,
      contents: "Imidacloprid 17.8% SL"
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
              alt="Plant Protection Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Biostimulants
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Highly productive Biostimulants solutions for complete farm and crop safety against pests and diseases.
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
                contents={product.contents}
                badge="CROP PROTECTION"
                simple
              />
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Customized Protection Program?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our plant protection specialists can design customized IPM programs based on your specific crop requirements and local pest pressures.
            </p>
            <Link to="/contact-us">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                Get Protection Program
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlantProtection;


