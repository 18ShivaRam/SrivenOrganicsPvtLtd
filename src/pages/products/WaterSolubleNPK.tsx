import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import agrominGold from '@/assets/agromin-gold.png';

const WaterSolubleNPK = () => {
  const products = [
    {
      name: "Vengrow 19:19:19",
      npk: "19:19:19",
      description: "Balanced NPK for all-purpose fertigation and foliar application.",
      application: "Suitable for all crops during vegetative growth stage",
      image: agrominGold,
    },
    {
      name: "Vengrow 20:20:20",
      npk: "20:20:20",
      description: "High analysis balanced fertilizer for intensive farming.",
      application: "Ideal for greenhouse and hydroponic cultivation",
      image: agrominGold,
    },
    {
      name: "Vengrow 13:0:45",
      npk: "13:0:45",
      description: "High potassium formula for fruit development and quality.",
      application: "Perfect for fruiting stage of crops",
      image: agrominGold,
    },
    {
      name: "Vengrow 12:61:0",
      npk: "12:61:0",
      description: "High phosphorus for root development and flowering.",
      application: "Excellent for root establishment and flower initiation",
      image: agrominGold,
    },
    {
      name: "Vengrow 30:10:10",
      npk: "30:10:10",
      description: "High nitrogen for vigorous vegetative growth.",
      application: "Ideal for leafy vegetables and early crop stages",
      image: agrominGold,
    },
    {
      name: "Vengrow 15:15:15",
      npk: "15:15:15",
      description: "Balanced nutrition with micronutrients included.",
      application: "All-purpose fertilizer for diverse cropping systems",
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
              Water Soluble NPK
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A water-soluble fertilizer with an optimum combination of Nitrogen, Phosphorous, Potassium, and Sodium. It is readily soluble in water and is best for drip irrigation and foliar application of fertilizer.
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
                  <div className="text-2xl font-bold text-primary">{product.npk}</div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Application:</h4>
                    <p className="text-sm text-muted-foreground">{product.application}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Application Methods
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Drip irrigation systems
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Foliar spray application
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Hydroponic cultivation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Soil application through irrigation
                </li>
              </ul>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Key Advantages
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  100% water soluble
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Quick nutrient availability
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Uniform nutrient distribution
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  No soil residue accumulation
                </li>
              </ul>
            </Card>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Fertigation Program Design?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our agronomists can design customized fertigation programs for your specific crops and growing conditions.
            </p>
            <a href="tel:1234567890">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                 <Link to="/contact-us" className="block text-background/80 hover:text-background transition-colors">Get Fertigation Program</Link>
              </Button>
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WaterSolubleNPK;
