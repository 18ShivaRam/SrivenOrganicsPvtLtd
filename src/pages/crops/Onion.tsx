import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Onion = () => {
  const deficiencies = [
    {
      name: "Nitrogen Deficiency",
      symptoms: "Yellowing of older leaves, stunted plant growth and small bulb size",
      affect: "Reduced plant vigor, poor bulb development and low yield",
      product: "Foliar: Apply Urea @ 20g/L water during vegetative growth",
      soilDrip: "Soil: Apply Urea @ 80kg/ha in 3-4 splits during growing season",
      benefit: "Promotes healthy vegetative growth and improves bulb size",
      image: "https://www.ariesagro.com/upload/pests/orn_nitrogen_def_symptoms1701151815.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Phosphorus Deficiency", 
      symptoms: "Purple discoloration on leaves especially in young plants, delayed maturity",
      affect: "Poor root development, delayed bulb formation and reduced storage quality",
      product: "Foliar: Apply DAP @ 15g/L water during bulb initiation",
      soilDrip: "Soil: Apply SSP @ 50kg/ha as basal application",
      benefit: "Enhances root development and improves bulb formation",
      image: "https://www.ariesagro.com/upload/pests/orn_phosphorus_def_symptoms1701151878.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Yellowing and browning of leaf tips and margins, poor bulb quality",
      affect: "Poor bulb quality, reduced storage life and increased susceptibility to diseases",
      product: "Foliar: Apply SOP @ 15g/L water during bulb development",
      soilDrip: "Soil: Apply MOP @ 60kg/ha during bulb enlargement stage",
      benefit: "Improves bulb quality, storage life and disease resistance",
      image: "https://www.ariesagro.com/upload/pests/orn_potassium_def_symptoms1701151940.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Sulfur Deficiency",
      symptoms: "Yellowing of young leaves, reduced bulb pungency and poor flavor development",
      affect: "Poor bulb quality with reduced pungency and flavor affecting market value",
      product: "Foliar: Apply Sulfur @ 5g/L water during bulb development",
      soilDrip: "Soil: Apply Gypsum @ 200kg/ha before planting",
      benefit: "Improves bulb quality, pungency and flavor development",
      image: "https://www.ariesagro.com/upload/pests/orn_sulphur_def_symptoms1701152188.jpg", 
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Zinc Deficiency",
      symptoms: "Stunted growth, small leaves with interveinal chlorosis",
      affect: "Reduced plant growth and poor bulb development",
      product: "Foliar: Apply ZnSO4 @ 5g/L water during active growth",
      soilDrip: "Soil: Apply Zinc Sulphate @ 20kg/ha before planting",
      benefit: "Promotes normal growth and improves bulb development",
      image: "https://www.ariesagro.com/upload/pests/orn_zinc_def_symptoms1701152064.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Boron Deficiency",
      symptoms: "Hollow bulbs, brown discoloration inside bulbs and reduced storage quality",
      affect: "Poor internal bulb quality with hollow centers affecting marketability",
      product: "Foliar: Apply Borax @ 2g/L water during bulb development",
      soilDrip: "Soil: Apply Boron @ 5kg/ha before bulb formation",
      benefit: "Improves internal bulb quality and storage characteristics",
      image: "https://www.ariesagro.com/upload/pests/orn_boron_def_symptoms1701152250.jpg",
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
              Onion Nutrition Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete onion cultivation solutions for uniform bulbs with excellent storage quality and market value.
            </p>
          </div>

          {/* Featured Product */}
          <div className="mb-16 mt-16">
            <Card className="p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Majorsol Onion</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Majorsol onion supplies needed phosphorus and potash in balanced proportion along with secondary & micronutrients. 
                Enhances bulb quality, improves storage life and prevents hollow bulbs. Its application increases pungency and flavor.
              </p>
              <div className="w-48 h-48 mx-auto mb-6">
                <img 
                  src="/src/assets/fertimax-hd.png" 
                  alt="Majorsol Onion"
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

export default Onion;
