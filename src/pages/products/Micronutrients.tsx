import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import agrominGold from '@/assets/agromin-gold.png';
import { Link } from 'react-router-dom';

const Micronutrients = () => {
  const products = [
    {
      name: "Agromin Gold",
      description: "Micronutrient chelate liquid with high concentration of micronutrients along with chelating agent.",
      features: ["Provides essential nutrients to crops", "Increases crop growth", "Partially chelated micronutrients"],
      image: agrominGold,
      contents: "Zinc as Zn-EDTA 3%, Manganese as Mn-EDTA 1%, Molybdenum as Mo 0.1%, Copper as Cu-EDTA 1%, Boron as B 1%, Iron as Fe-EDTA 2%"
    },
    {
      name: "Agromin SA (Soil Application)",
      description: "Essential plant nutrients in ideal predetermined proportions to prevent micronutrient deficiency.",
      features: ["Zinc, Iron, Manganese, Copper, Boron, Molybdenum", "Prevents nutrient deficiency", "For soil application"],
      image: agrominGold,
      contents: "Zinc as Zn 5%, Iron as Fe 2%, Manganese as Mn 1%, Boron as B 1%, Copper as Cu 1%, Molybdenum as Mo 0.1%"
    },
    {
      name: "Mn-CHEL",
      description: "Fine light brown colored powder, water soluble, prevents interveinal chlorosis of leaves.",
      features: ["Induces resistance to pests and diseases", "Water soluble", "Prevents chlorosis"],
      image: agrominGold,
      contents: "Mn-CHEL Powder: Mn as Mn EDTA 9%, Mn-CHEL Liquid: Mn as Mn EDTA 8%"
    },
    {
      name: "Chelamag",
      description: "Fine white powder, 100% water soluble, ensures complete and rapid absorption into the soil.",
      features: ["Increases oil content of crops", "100% water soluble", "Rapid soil absorption"],
    image: "/src/assets/fertimax-hd.png",
      contents: "Mg as Mg EDTA 6%"
    },
    {
      name: "Zinc EDTA",
      description: "Chelated zinc formulation for better absorption and utilization by plants.",
      features: ["Prevents zinc deficiency", "Better plant absorption", "Chelated formulation"],
      image: agrominGold,
      contents: "Zinc as Zn-EDTA 12%"
    },
    {
      name: "Iron EDTA",
      description: "Chelated iron formulation to prevent iron chlorosis and improve plant health.",
      features: ["Prevents iron chlorosis", "Improves photosynthesis", "Quick absorption"],
      image: agrominGold,
      contents: "Iron as Fe-EDTA 12%"
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Micronutrients
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Micronutrients consist of a fine blend of mineral elements comprising of Zinc (Zn), Copper (Cu), Manganese (Mn), Iron (Fe), Boron (B), Molybdenum (Mo). These are essential for optimal plant growth and development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Contents:</h4>
                    <p className="text-sm text-muted-foreground mb-3">{product.contents}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
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
              Need Custom Micronutrient Solutions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our technical team can formulate custom micronutrient blends based on your specific crop requirements and soil conditions.
            </p>
            <a href="tel:1234567890">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                <Link to="/contact-us" className="block text-background/80 hover:text-background transition-colors">Contact  Technical Team</Link>
              </Button>
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Micronutrients;