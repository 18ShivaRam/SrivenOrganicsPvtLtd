import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Grape = () => {
  const deficiencies = [
    {
      name: "Nitrogen Deficiency",
      symptoms: "Leaf become uniformly light green or yellow colour.",
      affect: "Overall reduction in growth.",
      product: "Macrofert 20:20:20 5gm/lit",
      soilDrip: "Plantex 20:20:20 5kg/acre",
      benefit: "Helps in vegetative growth, formation of amino acids",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/nito.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Phosphorous Deficiency",
      symptoms: "The appearance of red dots on basal portion.",
      affect: "The appearance of red dots on basal portion.",
      product: "Vengrow 12:61:00 5gm/lit",
      soilDrip: "Plantex 12:61:00 5kg/acre",
      benefit: "Maintain longterm productivity",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/phos-10.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Colour fading from leaf margins, leaf margins becomes necrotic and curling occurs.",
      affect: "Plant growth, root development and fruit development are usually reduced.",
      product: "Fertimax13:00:45( 5-10gm/lit)",
      soilDrip: "Plantex 13:00:45 3kg/acre(drip)",
      benefit: "Ensures good, strong fruit set and increase sugar content in grape",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/pot-1.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Calcium Deficiency",
      symptoms: "Blossom end rot of grapes.",
      affect: "Skin becomes loose and bursts open.",
      product: "Aquacal-3-4ml/lit, combical-3-5gm/lit, horticab 2-3ml/lit",
      soilDrip: "combical 3 kg/acre or Plantex CN 3kg/acre",
      benefit: "Boosts new leaf and bud growth, ensures strong skin and minimise fruit disorder and diseases",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/cal-7.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Magnesium Deficiency",
      symptoms: "Bright yellow wedge shaped extends inward between the veins on older leaves.",
      affect: "When severe, necrosis extends inwards from the leaf margin and fruit cluster and stem necrosis.",
      product: "Magmix 4-5gm/lit, zinc mag 3-5ml/lit",
      soilDrip: "—",
      benefit: "Maximise photosynthetic activity, increase growth and berry development",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/mag-11.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Sulphur Deficiency",
      symptoms: "Redding of young leaves and red dots near the edges of younger leaves.",
      affect: "Reduced growth, small and loose cluster due to reduced fruit set.",
      product: "Primasulf 3-4ml/lit, fertisol 5gm/lit",
      soilDrip: "ferromag 3kg/1acre or fertisol 3kg/1acre",
      benefit: "Maximise photosynthetic activity, minimises diseases",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/sul-10.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Boron Deficiency",
      symptoms: "Shoot tip death and short internodes resulting in shoots with zigzag appearance.",
      affect: "Fruit set is often poor and breaking of berry.",
      product: "Boron 20 1gm/lit, Potabor super-2-3gm/lit",
      soilDrip: "Boron -20 1 kg/acre",
      benefit: "Ensures good shoot growth and strong fruit set, improve berry shape and size",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/boron-10.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Zinc Deficiency",
      symptoms: "Short internodes, resulting in shoot with a zigzag appearance.",
      affect: "Small and poorly developed branches.",
      product: "Chelamin plus1.5gm/lit or chelamin gold 0.5gm/lit",
      soilDrip: "Chelamin gold 0.5kg/acre",
      benefit: "Increases sucrose content in grapes and formation of healthy berries.",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/zinc-14.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Iron Deficiency",
      symptoms: "Young leaves show interveinal chlorosis.",
      affect: "Leaves are lightly to be very pale with necrotic blotches.",
      product: "Chelafer1.5gm/lit, agrofer-1.5gm/lit",
      soilDrip: "Ferromag 5kg/acre, Ferromix-5kg/acre",
      benefit: "Strengthening leaf development and vine productivity",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/11/iron-17.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/20">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Grape
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive grape nutrition solutions for superior fruit quality and yield.
            </p>
          </div>

          {/* Featured Product */}
          <div className="mb-16">
            <Card className="p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Grapemin</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Specifically designed for higher yield of Grapes considering its micronutrients requirement
              </p>
              <div className="w-48 h-48 mx-auto mb-6">
                <img 
                  src="/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png" 
                  alt="Grapemin"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="bg-muted/20 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-2">Contents:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <div>Iron as Fe = 3.5%</div>
                  <div>Manganese as Mn = 6%</div>
                  <div>Zinc as Zn = 4%</div>
                  <div>Copper as Cu = 1%</div>
                  <div>Boron as B = 1.5%</div>
                  <div>Potassium as K2O = 5%</div>
                  <div>Sulphur as S = 12%</div>
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
              Optimize Your Grape Production
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get customized nutrition programs for your grape varieties and growing conditions.
            </p>
            <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
              Get Nutrition Program
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Grape;
