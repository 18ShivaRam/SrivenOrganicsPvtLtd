import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Potato = () => {
  const deficiencies = [
    {
      name: "Nitrogen Deficiency",
      symptoms: "Yellowing of lower leaves, reduced plant vigor, and smaller tubers.",
      affect: "Stunted growth with reduced foliage and lower tuber yield.",
      product: "Macrofert 20:20:20 5gm/lit",
      soilDrip: "Plantex 20:20:20 5kg/acre",
      benefit: "Promotes vegetative growth and improves tuber development",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/nitrogene-1.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Phosphorous Deficiency",
      symptoms: "Purple discoloration of leaves, delayed maturity, and poor root development.",
      affect: "Reduced tuber formation and delayed plant maturity.",
      product: "Fertimax 12:61:00 5gm/lit, Fertimax 00:52:34 5-10gm/lit",
      soilDrip: "Plantex 12:61:00 5kg/acre",
      benefit: "Enhances root development and tuber formation",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/phosphorus-1.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Brown scorching of leaf margins, reduced tuber quality and storage life.",
      affect: "Poor tuber quality with reduced starch content and storage problems.",
      product: "Fertimax 00:00:50 5gm/lit, Fertimax13:00:45 5-10gm/lit, Fertisol 3-5gm/lit",
      soilDrip: "Plantex 13:00:45 3kg/acre",
      benefit: "Improves tuber quality, starch content and storage life",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/potassium-1.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Calcium Deficiency",
      symptoms: "Internal brown spot in tubers, poor cell wall development.",
      affect: "Tuber quality deterioration with internal defects.",
      product: "Aquacal-3-4ml/lit, Calcium nitrate 5-10gm/lit, combical-3-5gm/lit, horticab 2-3ml/lit",
      soilDrip: "combical 3 kg/acre",
      benefit: "Prevents internal brown spot and improves tuber quality",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/calcium-1.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Magnesium Deficiency",
      symptoms: "Interveinal chlorosis starting from older leaves, yellowing between veins.",
      affect: "Reduced photosynthesis and poor tuber development.",
      product: "Magmix 4-5gm/lit, zinc mag 3-5ml/lit, Fertisol 3-5gm/lit",
      soilDrip: "Ferromag 5kg/acre",
      benefit: "Enhances photosynthesis and chlorophyll formation",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/magnesium-2.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Sulphur Deficiency",
      symptoms: "General yellowing of young leaves, reduced protein synthesis.",
      affect: "Poor tuber quality with reduced protein content.",
      product: "Primasulf 3-4ml/lit, fertisol 5gm/lit",
      soilDrip: "fertisol 3kg/acre",
      benefit: "Improves protein synthesis and tuber quality",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/sulphur-2.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Boron Deficiency",
      symptoms: "Hollow heart in tubers, cracking of stems and petioles.",
      affect: "Internal tuber defects reducing market quality.",
      product: "Boron 20 1gm/lit, Potabor super-2-3gm/lit",
      soilDrip: "Boron-20 1 kg/acre",
      benefit: "Prevents hollow heart and improves tuber quality",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/borron.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Zinc Deficiency",
      symptoms: "Stunted growth, small leaves with interveinal chlorosis.",
      affect: "Reduced plant vigor and tuber yield.",
      product: "Chelamin plus1-2gm/lit",
      soilDrip: "Chelamin gold 0.5kg/acre",
      benefit: "Promotes enzyme activation and plant growth",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/zinc-1.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Iron Deficiency",
      symptoms: "Interveinal chlorosis in young leaves, leaves become pale yellow.",
      affect: "Reduced photosynthesis and plant vigor.",
      product: "Chelafer1.5gm/lit, agrofer-1.5gm/lit",
      soilDrip: "Ferromag 5kg/acre, Ferromix-5kg/acre",
      benefit: "Improves chlorophyll synthesis and photosynthesis",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/iron-deff.jpg",
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
              Potato Nutrition Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive potato nutrition solutions for optimal tuber quality and yield.
            </p>
          </div>

          {/* Featured Product */}
          <div className="mb-16 mt-16">
            <Card className="p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Majorsol Potato</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Majorsol potato supplies needed phosphorus and potash in balanced proportion along with secondary & micronutrients. 
                Enhances tuber quality and increases storage life. Its application increases disease and pest resistance.
              </p>
              <div className="w-48 h-48 mx-auto mb-6">
                <img 
                  src="/src/assets/fertimax-hd.png" 
                  alt="Majorsol Potato"
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

export default Potato;