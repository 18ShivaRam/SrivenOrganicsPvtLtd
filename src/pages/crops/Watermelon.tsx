import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Watermelon = () => {
  const deficiencies = [
    {
      name: "Nitrogen Deficiency",
      symptoms: "Yellowing of older leaves, stunted vine growth and small fruit size",
      affect: "Reduced plant vigor, poor fruit development and low yield",
      product: "Foliar: Apply Urea @ 20g/L water during vegetative growth",
      soilDrip: "Soil: Apply Urea @ 100kg/ha in 3-4 splits during growing season",
      benefit: "Promotes healthy vine growth and improves fruit size",
      image: "https://www.ariesagro.com/upload/pests/orn_nitrogen_def_symptoms1701151815.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Phosphorus Deficiency", 
      symptoms: "Purple discoloration on leaves, delayed flowering and poor fruit set",
      affect: "Poor root development, delayed flowering and reduced fruit formation",
      product: "Foliar: Apply DAP @ 15g/L water during flowering stage",
      soilDrip: "Soil: Apply SSP @ 75kg/ha as basal application",
      benefit: "Enhances flowering, fruit set and root development",
      image: "https://www.ariesagro.com/upload/pests/orn_phosphorus_def_symptoms1701151878.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Yellowing and browning of leaf margins, poor fruit quality and reduced sugar content",
      affect: "Poor fruit quality, reduced sweetness and increased susceptibility to diseases",
      product: "Foliar: Apply SOP @ 15g/L water during fruit development",
      soilDrip: "Soil: Apply MOP @ 80kg/ha during fruit enlargement",
      benefit: "Improves fruit quality, sweetness and disease resistance",
      image: "https://www.ariesagro.com/upload/pests/orn_potassium_def_symptoms1701151940.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Calcium Deficiency",
      symptoms: "Blossom end rot in fruits, poor fruit quality and reduced shelf life",
      affect: "Fruit disorders like blossom end rot and poor storage quality",
      product: "Foliar: Apply Calcium Chloride @ 5g/L water during fruit development",
      soilDrip: "Soil: Apply Gypsum @ 200kg/ha before planting",
      benefit: "Prevents blossom end rot and improves fruit quality",
      image: "https://www.ariesagro.com/upload/pests/orn_calcium_def_symptoms1701152312.jpg", 
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Magnesium Deficiency",
      symptoms: "Interveinal chlorosis in older leaves while veins remain green",
      affect: "Reduced photosynthesis and poor fruit development",
      product: "Foliar: Apply MgSO4 @ 10g/L water during active growth",
      soilDrip: "Soil: Apply Magnesium Sulphate @ 50kg/ha during planting",
      benefit: "Improves chlorophyll formation and fruit development",
      image: "https://www.ariesagro.com/upload/pests/orn_magnesium_def_symptoms1701152126.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Boron Deficiency",
      symptoms: "Hollow fruits, poor seed development and reduced fruit quality",
      affect: "Poor internal fruit quality with hollow centers and poor pollination",
      product: "Foliar: Apply Borax @ 2g/L water during flowering and fruit development",
      soilDrip: "Soil: Apply Boron @ 5kg/ha before flowering",
      benefit: "Improves pollination, fruit set and internal fruit quality",
      image: "https://www.ariesagro.com/upload/pests/orn_boron_def_symptoms1701152250.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Watermelon Nutrition Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete watermelon nutrition solutions for sweet, juicy fruits with excellent size and quality.
            </p>
          </div>

          {/* Featured Product */}
          <div className="mb-16 mt-16">
            <Card className="p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Majorsol Watermelon</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Majorsol watermelon supplies needed phosphorus and potash in balanced proportion along with secondary & micronutrients. 
                Enhances fruit sweetness, improves size and prevents blossom end rot.
              </p>
              <div className="w-48 h-48 mx-auto mb-6">
                <img 
                  src="/src/assets/fertimax-hd.png" 
                  alt="Majorsol Watermelon"
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

export default Watermelon;