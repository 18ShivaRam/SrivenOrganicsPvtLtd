import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Ginger = () => {
  const deficiencies = [
    {
      name: "Nitrogen Deficiency",
      symptoms: "Yellowing of older leaves, stunted plant growth and reduced rhizome formation",
      affect: "Poor plant vigor, small rhizomes and reduced yield",
      product: "Foliar: Apply Urea @ 20g/L water during vegetative growth",
      soilDrip: "Soil: Apply Urea @ 100kg/ha in 3-4 splits during growing season",
      benefit: "Promotes healthy vegetative growth and improves rhizome development",
      image: "https://www.ariesagro.com/upload/pests/orn_nitrogen_def_symptoms1701151815.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Phosphorus Deficiency", 
      symptoms: "Purple discoloration on leaves, delayed growth and poor root development",
      affect: "Poor rhizome initiation and development, reduced quality",
      product: "Foliar: Apply DAP @ 15g/L water during rhizome formation",
      soilDrip: "Soil: Apply SSP @ 75kg/ha as basal application",
      benefit: "Enhances rhizome development and improves quality",
      image: "https://www.ariesagro.com/upload/pests/orn_phosphorus_def_symptoms1701151878.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Yellowing and browning of leaf margins, reduced rhizome size and quality",
      affect: "Poor rhizome quality, reduced fiber content and storage problems",
      product: "Foliar: Apply SOP @ 15g/L water during rhizome enlargement",
      soilDrip: "Soil: Apply MOP @ 80kg/ha during rhizome development",
      benefit: "Improves rhizome quality, fiber content and storage life",
      image: "https://www.ariesagro.com/upload/pests/orn_potassium_def_symptoms1701151940.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Zinc Deficiency",
      symptoms: "Stunted growth, small leaves with interveinal chlorosis",
      affect: "Reduced plant growth and poor rhizome development",
      product: "Foliar: Apply ZnSO4 @ 5g/L water during active growth",
      soilDrip: "Soil: Apply Zinc Sulphate @ 25kg/ha before planting",
      benefit: "Promotes normal growth and improves rhizome development",
      image: "https://www.ariesagro.com/upload/pests/orn_zinc_def_symptoms1701152064.jpg", 
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Magnesium Deficiency",
      symptoms: "Interveinal chlorosis in older leaves while veins remain green",
      affect: "Reduced photosynthesis and poor rhizome quality",
      product: "Foliar: Apply MgSO4 @ 10g/L water during active growth",
      soilDrip: "Soil: Apply Magnesium Sulphate @ 50kg/ha during planting",
      benefit: "Improves chlorophyll formation and rhizome quality",
      image: "https://www.ariesagro.com/upload/pests/orn_magnesium_def_symptoms1701152126.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Sulfur Deficiency",
      symptoms: "Yellowing of young leaves, reduced essential oil content in rhizomes",
      affect: "Poor quality rhizomes with reduced pungency and essential oil content",
      product: "Foliar: Apply Sulfur @ 5g/L water during rhizome development",
      soilDrip: "Soil: Apply Gypsum @ 150kg/ha before planting",
      benefit: "Improves rhizome quality and essential oil content",
      image: "https://www.ariesagro.com/upload/pests/orn_sulphur_def_symptoms1701152188.jpg",
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
              Ginger Nutrition Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized ginger cultivation solutions for premium quality rhizomes with excellent market value.
            </p>
          </div>

          {/* Featured Product */}
          <div className="mb-16 mt-16">
            <Card className="p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Majorsol Ginger</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Majorsol ginger supplies needed phosphorus and potash in balanced proportion along with secondary & micronutrients. 
                Enhances rhizome quality, improves essential oil content and increases storage life.
              </p>
              <div className="w-48 h-48 mx-auto mb-6">
                <img 
                  src="/src/assets/fertimax-hd.png" 
                  alt="Majorsol Ginger"
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

export default Ginger;
