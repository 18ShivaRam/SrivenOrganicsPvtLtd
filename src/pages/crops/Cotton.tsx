import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Cotton = () => {
  const deficiencies = [
    {
      name: "Nitrogen Deficiency",
      symptoms: "Yellowing of older leaves.",
      affect: "Stunted growth with few vegetative fruiting branches.",
      product: "Macrofert 20:20:20 5gm/lit",
      soilDrip: "Plantex 20:20:20 5kg/acre",
      benefit: "Helps in vegetative growth, formation of amino acids",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/nitrogene-1.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Phosphorous Deficiency",
      symptoms: "Purple-red leaves.",
      affect: "Root growth is affected.",
      product: "Vengrow 12:61:00 5gm/lit, Fertimax 00:52:34( 5-10gm/lit)",
      soilDrip: "Plantex 12:61:00 5kg/acre",
      benefit: "Root development, winter hardness",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/phosphorus-1.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Dark green stunted plants, reddening symptom appear on leaves.",
      affect: "Delay in blooming and fruiting.",
      product: "Fertimax 00:00:50 5gm/lit, Fertimax13:00:45( 5-10gm/lit), Fertisol 3-5gm/lit",
      soilDrip: "—",
      benefit: "Resistance to pests and diseases, opening and closing of stomata",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/potassium-1.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Calcium Deficiency",
      symptoms: "Crinkle leaf and poor root growth.",
      affect: "Large plants and few fruiting forms.",
      product: "Aquacal-3-4ml/lit, Calcium nitrate 5-10gm/lit, combical-3-5gm/lit, horticab 2-3ml/lit, crack gourd 2-3ml/lit",
      soilDrip: "—",
      benefit: "Cell formation, cell elongation, cell division",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/calcium-1.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Magnesium Deficiency",
      symptoms: "Purple-red leaves with green veins, and affected leaves may age prematurely.",
      affect: "Leaf cupping and interveinal chlorosis veins remain green, starts in young leaves.",
      product: "Magmix 4-5gm/lit, zinc mag 3-5ml/lit, Fertisol 3-5gm/lit",
      soilDrip: "Ferromag 5kg/acre",
      benefit: "Helps in photosynthesis, starch translocation",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/magnesium-2.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Sulphur Deficiency",
      symptoms: "Pale green to yellow colour of young leaves.",
      affect: "The plants are small and spindly with short, slender stalks.",
      product: "Primasulf 3-4ml/lit, fertisol 5gm/lit",
      soilDrip: "—",
      benefit: "Improves special character in crop",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/sulphur-2.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Copper Deficiency",
      symptoms: "Bud necrosis.",
      affect: "Fruit dropping.",
      product: "Phosphocop 2-3ml/lit",
      soilDrip: "—",
      benefit: "Serves to intensify flavour and colour in vegetables and colour in flowers",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/dummyimg.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Boron Deficiency",
      symptoms: "Black discolouration at the base of bolls, bolls dry and fall, terminal bud dies.",
      affect: "Excessive shedding of buds and young bolls.",
      product: "Boron 20 1gm/lit, Potabor super-2-3gm/lit",
      soilDrip: "—",
      benefit: "Translocation of sugars and help in pollination",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/borron.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Zinc Deficiency",
      symptoms: "Brown spots extends from leaf tips to base and later dry, plants show shorter appearance.",
      affect: "Tips of leaves elongated and parallel.",
      product: "Chelamin plus1-2gm/lit",
      soilDrip: "Chelamin gold 0.5kg/acre",
      benefit: "Helps in activation of enzymes",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/zinc-1.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Iron Deficiency",
      symptoms: "Leaf becomes white in colour.",
      affect: "Fibre fitness is reduced.",
      product: "Chelafer1-2gm/lit, Agrofer-1-2gm/lit",
      soilDrip: "Ferromag 5kg/acre, Ferromix-5kg/acre",
      benefit: "Helps in electron transport chain and helps in photosynthesis",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/iron-2.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cotton
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cotton nutrition solutions for optimal fiber quality and yield.
            </p>
          </div>

          {/* Featured Product */}
          <div className="mb-16">
            <Card className="p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Majorsol Cotton</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Majorsol cotton supplies needed phosphorus and potash in balanced proportion along with secondary & micronutrients. 
                Enhances quality of lint and increases oil percentage in seed. Its application increases disease and pest resistance.
              </p>
              <div className="w-48 h-48 mx-auto mb-6">
                <img 
                  src="/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png" 
                  alt="Majorsol Cotton"
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
                      </div>
                    </div>
                    <div>
                      <div className="w-32 h-32 mx-auto mb-4">
                        <img 
                          src={deficiency.productImage} 
                          alt="Product"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="space-y-3">
                        <div>
                          <strong className="text-foreground">Product:</strong>
                          <p className="text-muted-foreground">{deficiency.product}</p>
                        </div>
                        <div>
                          <strong className="text-foreground">Soil/Drip:</strong>
                          <p className="text-muted-foreground">{deficiency.soilDrip}</p>
                        </div>
                        <div>
                          <strong className="text-foreground">Benefit:</strong>
                          <p className="text-muted-foreground">{deficiency.benefit}</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        Get Solution
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Maximize Your Cotton Production
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get expert recommendations for cotton nutrition based on your soil conditions and climate.
            </p>
            <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
              Get Cotton Program
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cotton;