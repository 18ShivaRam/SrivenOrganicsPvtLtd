import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import agrominGold from '@/assets/agromin-gold.jpg';

const AquaCulture = () => {
  const products = [
    {
      name: "Nutri Fish Feed Supplement",
      description: "Comprehensive mineral and vitamin supplement designed for balanced fish nutrition and optimal growth rates in various aquaculture systems.",
      features: ["Highly bio-available minerals", "Essential vitamin complex", "Palatability enhancers"],
      benefits: ["Faster weight gain", "Improved immunity", "Better feed conversion ratio"],
      crops: "All types of freshwater and marine fish.",
      dosage: "5-10 gm per kg of feed.",
      packSize: "1kg, 5kg, 25kg",
      image: agrominGold,
    },
    {
      name: "Nutri Pond Probiotic Blend",
      description: "Concentrated blend of beneficial bacteria that improves water quality and reduces organic load in aquaculture ponds naturally.",
      features: ["Multi-strain bacteria", "Rapid organic matter breakdown", "Ammonia reduction technology"],
      benefits: ["Clearer pond water", "Reduced disease incidence", "Better dissolved oxygen levels"],
      crops: "Shrimp and Fish ponds.",
      dosage: "500 gm to 1 kg per acre of pond area.",
      packSize: "500gm, 1kg, 5kg",
      image: agrominGold,
    },
    {
      name: "Nutri Animal Health Tonic",
      description: "Premium health and immunity booster designed to support overall vigor and disease resistance in livestock and aquaculture species.",
      features: ["Herbal extracts enriched", "Instant energy source", "Immune stimulants"],
      benefits: ["Reduced mortality rates", "Faster recovery from stress", "Improved overall health"],
      crops: "Livestock (Cattle, Poultry) and Aquaculture.",
      dosage: "10-20 ml per day for livestock, or as per feed for aqua.",
      packSize: "500ml, 1L, 5L",
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
              alt="Aqua Culture Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Aqua Culture & Animal Nutrition
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Supporting growth, immunity, and water quality with premium nutritional and organic solutions.
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
                badge="AQUA RANGE"
              />
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Water Quality Advice?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get programs for pond management, probiotics dosing, and nutritional balancing for aquaculture.
            </p>
            <Link to="/contact-us">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                Talk to Specialist
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AquaCulture;


