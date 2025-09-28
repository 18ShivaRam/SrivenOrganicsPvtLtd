import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import plantomycin from '@/assets/plantomycin.png';
import haasil from '@/assets/haasil.png';

const PlantProtection = () => {
  const products = [
    {
      name: "Plantomycin",
      description: "Broad spectrum antibiotic bactericide for control of bacterial diseases in plants.",
      targetPests: ["Bacterial blight", "Fire blight", "Soft rot"],
      image: "/src/assets/bio-fungicide.jpg",
      contents: "Streptomycin sulphate 9% + Tetracycline Hydrochloride 1%"
    },
    {
      name: "Haasil (Imidacloprid 17.8% SL)",
      description: "New generation systemic insecticide of Neo-nicotinoid group with excellent residual activity.",
      targetPests: ["Aphids", "Thrips", "Whiteflies", "Termites"],
      image: "/src/assets/bio-fungicide.jpg",
      contents: "Imidacloprid 17.8% SL"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Plant Protection
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Checkout a range of highly productive plant protection products that can be used for protecting complete farms and crops from all kinds of threats.
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
                    <h4 className="font-semibold text-foreground mb-3">Target Issues:</h4>
                    <ul className="space-y-2">
                      {product.targetPests.map((pest, pestIndex) => (
                        <li key={pestIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {pest}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Integrated Pest Management
              </h3>
              <p className="text-muted-foreground mb-4">
                Our plant protection products are designed to work as part of an integrated pest management (IPM) approach, combining biological, cultural, and chemical controls for sustainable crop protection.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Environmentally friendly formulations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Resistance management strategies
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Beneficial insect conservation
                </li>
              </ul>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Application Guidelines
              </h3>
              <p className="text-muted-foreground mb-4">
                Proper application timing and techniques are crucial for effective plant protection. Our products come with detailed application guidelines for optimal results.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Pre-harvest interval guidelines
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Weather-based application timing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Equipment calibration support
                </li>
              </ul>
            </Card>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Customized Protection Program?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our plant protection specialists can design customized IPM programs based on your specific crop requirements and local pest pressures.
            </p>
            <a href="tel:1234567890">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                Get Protection Program
              </Button>
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlantProtection;