import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Maize = () => {
  const deficiencies = [
    {
      name: "Nitrogen Deficiency",
      symptoms: "Yellowing of older lower leaves starting from leaf tips, stunted plant growth and delayed maturity",
      affect: "Reduced plant height, delayed tasseling and silking, poor grain filling and low yield",
      product: "Foliar: Apply Urea @ 20g/L water at 4-6 leaf stage",
      soilDrip: "Soil: Apply Urea @ 120kg/ha in 2-3 splits during vegetative growth",
      benefit: "Promotes vigorous vegetative growth, improves grain filling and increases yield",
      image: "https://www.ariesagro.com/upload/pests/orn_nitrogen_def_symptoms1701151815.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Phosphorus Deficiency", 
      symptoms: "Purple discoloration on leaves especially in young plants, delayed maturity and poor root development",
      affect: "Poor root development, delayed flowering and reduced grain formation",
      product: "Foliar: Apply DAP @ 20g/L water during early vegetative stage",
      soilDrip: "Soil: Apply SSP @ 60kg/ha as basal application before sowing",
      benefit: "Enhances root development, improves flowering and grain setting",
      image: "https://www.ariesagro.com/upload/pests/orn_phosphorus_def_symptoms1701151878.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Yellowing and browning of leaf margins, weak stalks prone to lodging",
      affect: "Weak stems leading to lodging, poor grain quality and increased disease susceptibility",
      product: "Foliar: Apply SOP @ 15g/L water during grain filling stage",
      soilDrip: "Soil: Apply MOP @ 40kg/ha during knee-high stage",
      benefit: "Strengthens stalks, improves grain quality and disease resistance",
      image: "https://www.ariesagro.com/upload/pests/orn_potassium_def_symptoms1701151940.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Zinc Deficiency",
      symptoms: "White stripes between leaf veins, stunted growth and delayed maturity",
      affect: "Severely stunted growth, poor ear development and reduced grain yield",
      product: "Foliar: Apply ZnSO4 @ 5g/L water at 4-6 leaf stage",
      soilDrip: "Soil: Apply Zinc Sulphate @ 25kg/ha as basal application",
      benefit: "Promotes normal growth, improves ear formation and grain development",
      image: "https://www.ariesagro.com/upload/pests/orn_zinc_def_symptoms1701152064.jpg", 
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Iron Deficiency",
      symptoms: "Young leaves turn yellow with green veins, overall yellowing in severe cases",
      affect: "Reduced photosynthesis leading to poor growth and grain development",
      product: "Foliar: Apply Ferrous Sulphate @ 5g/L water during vegetative growth",
      soilDrip: "Soil: Apply Iron Chelate @ 10kg/ha during active growth",
      benefit: "Restores green color to leaves and improves photosynthesis",
      image: "https://www.ariesagro.com/upload/pests/orn_iron_def_symptoms1701152002.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Magnesium Deficiency",
      symptoms: "Interveinal chlorosis in older leaves while veins remain green",
      affect: "Reduced photosynthesis and poor grain filling",
      product: "Foliar: Apply MgSO4 @ 10g/L water during grain filling",
      soilDrip: "Soil: Apply Magnesium Sulphate @ 30kg/ha during vegetative growth",
      benefit: "Improves chlorophyll formation and grain filling",
      image: "https://www.ariesagro.com/upload/pests/orn_magnesium_def_symptoms1701152126.jpg",
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
              Maize Nutrition Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive maize nutrition solutions for maximum yield and premium grain quality.
            </p>
          </div>

          {/* Featured Product */}
          <div className="mb-16 mt-16">
            <Card className="p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Majorsol Maize</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Majorsol maize supplies needed phosphorus and potash in balanced proportion along with secondary & micronutrients. 
                Enhances grain filling, improves cob formation and increases overall yield. Its application strengthens stalks preventing lodging.
              </p>
              <div className="w-48 h-48 mx-auto mb-6">
                <img 
                  src="/src/assets/fertimax-hd.png" 
                  alt="Majorsol Maize"
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

export default Maize;