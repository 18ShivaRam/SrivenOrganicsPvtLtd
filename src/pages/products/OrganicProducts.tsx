import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import agrominGold from '@/assets/agromin-gold.png';

const OrganicProducts = () => {
  const products = [
    {
      name: "Venorga Bio-Compost",
      description: "Accelerates composting process and improves compost quality.",
      benefits: ["Faster decomposition", "Rich in beneficial microbes", "Improves soil structure"],
      image: agrominGold,
    },
    {
      name: "Organic Growth Promoter",
      description: "Natural plant growth stimulant derived from seaweed extracts.",
      benefits: ["Enhanced root development", "Stress resistance", "Natural growth hormones"],
      image: agrominGold,
    },
    {
      name: "Mycorrhizal Inoculant",
      description: "Beneficial fungi that form symbiotic relationships with plant roots.",
      benefits: ["Improved nutrient uptake", "Enhanced water absorption", "Disease resistance"],
      image: agrominGold,
    },
    {
      name: "Organic Soil Conditioner",
      description: "Improves soil health and fertility naturally.",
      benefits: ["Better soil structure", "Increased water retention", "Enhanced microbial activity"],
      image: agrominGold,
    },
    {
      name: "Natural Enzyme Complex",
      description: "Enzymatic formulation for better nutrient availability.",
      benefits: ["Improved nutrient release", "Enhanced soil biology", "Better root zone health"],
      image: agrominGold,
    },
    {
      name: "Bio-Fertilizer Blend",
      description: "Combination of beneficial bacteria and organic nutrients.",
      benefits: ["Nitrogen fixation", "Phosphorus solubilization", "Growth promotion"],
      image: agrominGold,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/20">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Organic/Bio Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Bioproducts are products that are made from biomass. The meaning of biomass is any type of organic material that is available on a renewable basis. It includes such things as crops and trees, wood and wood wastes, aquatic plants and grasses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg bg-muted/10 flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Transitioning to Organic Farming?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our experts can help you transition to organic farming practices with our comprehensive organic product range and technical support.
            </p>
            <a href="tel:1234567890">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                  <Link to="/contact-us" className="block text-background/80 hover:text-background transition-colors">Get Organic Transition Plan</Link>
              </Button>
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrganicProducts;
