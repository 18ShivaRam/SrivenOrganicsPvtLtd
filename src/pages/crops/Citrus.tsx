import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Citrus = () => {
  const deficiencies = [
    {
      name: "Nitrogen Deficiency",
      symptoms: "Older leaves turn yellow starting from the tips and edges, reduced vigor and small pale fruits",
      affect: "Reduces tree growth, flowering and fruit production. Fruits become small with poor quality",
      product: "Drip: Apply Fertimax Gold 19:19:19 @ 25g/plant every 15 days",
      soilDrip: "Soil: Apply Urea @ 100g/plant in 2 splits during growing season",
      benefit: "Promotes healthy vegetative growth, improves fruit size and quality",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/nitrogene-1.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Phosphorus Deficiency", 
      symptoms: "Dark green leaves with purplish discoloration, reduced flowering and poor root development",
      affect: "Delayed flowering, poor fruit set and reduced root growth affecting nutrient uptake",
      product: "Foliar: Apply DAP @ 10g/L water during flowering stage",
      soilDrip: "Soil: Apply SSP @ 150g/plant before flowering season",
      benefit: "Enhances root development, improves flowering and fruit setting",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/phosphorus-1.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Yellowing and browning of leaf margins, small fruits with thick rinds and low juice content",
      affect: "Poor fruit quality, reduced juice content and increased susceptibility to diseases",
      product: "Foliar: Apply SOP @ 15g/L water during fruit development",
      soilDrip: "Drip: Apply MOP @ 50g/plant during fruit development stage",
      benefit: "Improves fruit quality, juice content and disease resistance",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/potassium-1.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Iron Deficiency",
      symptoms: "Young leaves turn yellow with green veins (interveinal chlorosis), stunted growth",
      affect: "Reduced photosynthesis leading to poor growth and fruit development",
      product: "Foliar: Apply Ferrous Sulphate @ 5g/L water every 15 days",
      soilDrip: "Soil: Apply Iron Chelate @ 25g/plant during active growth",
      benefit: "Restores green color to leaves and improves photosynthesis",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/iron-1.jpg", 
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Zinc Deficiency",
      symptoms: "Small leaves with interveinal chlorosis, shoot dieback and reduced fruit size",
      affect: "Poor shoot development, small fruits and reduced yield",
      product: "Foliar: Apply ZnSO4 @ 5g/L water every 20 days",
      soilDrip: "Soil: Apply Zinc Sulphate @ 50g/plant before new flush",
      benefit: "Promotes normal leaf development and improves fruit size",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/zinc-1.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Magnesium Deficiency",
      symptoms: "Yellowing between veins in older leaves while veins remain green, premature leaf drop",
      affect: "Reduced photosynthesis and premature defoliation affecting tree health",
      product: "Foliar: Apply MgSO4 @ 10g/L water during active growth",
      soilDrip: "Soil: Apply Magnesium Sulphate @ 75g/plant annually",
      benefit: "Improves chlorophyll formation and photosynthesis efficiency",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/manganese-1.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/20">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Citrus Nutrition Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete citrus nutrition solutions for healthy trees and premium quality fruits with extended shelf life.
            </p>
          </div>

          {/* Featured Product */}
          <div className="mb-16 mt-16">
            <Card className="p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Majorsol Citrus</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Majorsol citrus supplies needed phosphorus and potash in balanced proportion along with secondary & micronutrients. 
                Enhances fruit quality, juice content and improves disease resistance. Its application increases shelf life of fruits.
              </p>
              <div className="w-48 h-48 mx-auto mb-6">
                <img 
                  src="/src/assets/fertimax-hd.png" 
                  alt="Majorsol Citrus"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="bg-muted/20 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-2">Contents:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <div>Manganese as Mn: 1.0%</div>
                  <div>Magnesium as Mg: 2.0%</div>
                  <div>Zinc as Zn: 2.5%</div>
                  <div>Sulphur as S: 8.0%</div>
                  <div>Potassium as K2O: 18.0%</div>
                  <div>Phosphorus as P2O5: 12.0%</div>
                  <div>Calcium as Ca: 2.0%</div>
                  <div>Copper as Cu: 1.0%</div>
                  <div>Boron as B: 0.2%</div>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                Read More
              </Button>
            </Card>
          </div>
          
          {/* Deficiency Management */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Nutrient Deficiency Management
            </h2>
            <div className="space-y-8">
              {deficiencies.map((deficiency, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    <div>
                      <img 
                        src={deficiency.image} 
                        alt={deficiency.name}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-xl font-bold text-foreground mb-4">{deficiency.name}</h3>
                      <div className="space-y-3">
                        <div>
                          <strong className="text-foreground">Symptoms:</strong>
                          <p className="text-muted-foreground">{deficiency.symptoms}</p>
                        </div>
                        <div>
                          <strong className="text-foreground">Affect:</strong>
                          <p className="text-muted-foreground">{deficiency.affect}</p>
                        </div>
                        <div>
                          <strong className="text-foreground">Benefit:</strong>
                          <p className="text-muted-foreground">{deficiency.benefit}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="text-center">
                        <img 
                          src={deficiency.productImage} 
                          alt="Product"
                          className="w-32 h-32 object-contain mx-auto mb-4"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="bg-muted/20 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground mb-2">Foliar Application:</h4>
                          <p className="text-sm text-muted-foreground">{deficiency.product}</p>
                        </div>
                        <div className="bg-muted/20 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground mb-2">Soil/Drip Application:</h4>
                          <p className="text-sm text-muted-foreground">{deficiency.soilDrip}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Citrus;
