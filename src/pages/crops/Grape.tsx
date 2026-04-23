import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DeficiencyCard } from '@/components/DeficiencyCard';
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
      image: "/assets/crops/grape/nitro.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Phosphorous Deficiency",
      symptoms: "The appearance of red dots on basal portion.",
      affect: "The appearance of red dots on basal portion.",
      product: "Vengrow 12:61:00 5gm/lit",
      soilDrip: "Plantex 12:61:00 5kg/acre",
      benefit: "Maintain longterm productivity",
      image: "/assets/crops/grape/phos.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Colour fading from leaf margins, leaf margins becomes necrotic and curling occurs.",
      affect: "Plant growth, root development and fruit development are usually reduced.",
      product: "Fertimax13:00:45( 5-10gm/lit)",
      soilDrip: "Plantex 13:00:45 3kg/acre(drip)",
      benefit: "Ensures good, strong fruit set and increase sugar content in grape",
      image: "/assets/crops/grape/pota.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Calcium Deficiency",
      symptoms: "Blossom end rot of grapes.",
      affect: "Skin becomes loose and bursts open.",
      product: "Aquacal-3-4ml/lit, combical-3-5gm/lit, horticab 2-3ml/lit",
      soilDrip: "combical 3 kg/acre or Plantex CN 3kg/acre",
      benefit: "Boosts new leaf and bud growth, ensures strong skin and minimise fruit disorder and diseases",
      image: "/assets/crops/grape/calc.jpg",
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
      image: "/assets/crops/grape/sulp.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Boron Deficiency",
      symptoms: "Shoot tip death and short internodes resulting in shoots with zigzag appearance.",
      affect: "Fruit set is often poor and breaking of berry.",
      product: "Boron 20 1gm/lit, Potabor super-2-3gm/lit",
      soilDrip: "Boron -20 1 kg/acre",
      benefit: "Ensures good shoot growth and strong fruit set, improve berry shape and size",
      image: "/assets/crops/grape/boro.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Zinc Deficiency",
      symptoms: "Short internodes, resulting in shoot with a zigzag appearance.",
      affect: "Small and poorly developed branches.",
      product: "Chelamin plus1.5gm/lit or chelamin gold 0.5gm/lit",
      soilDrip: "Chelamin gold 0.5kg/acre",
      benefit: "Increases sucrose content in grapes and formation of healthy berries.",
      image: "/assets/crops/grape/zinc.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Iron Deficiency",
      symptoms: "Young leaves show interveinal chlorosis.",
      affect: "Leaves are lightly to be very pale with necrotic blotches.",
      product: "Chelafer1.5gm/lit, agrofer-1.5gm/lit",
      soilDrip: "Ferromag 5kg/acre, Ferromix-5kg/acre",
      benefit: "Strengthening leaf development and vine productivity",
      image: "/assets/crops/grape/iron.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/crops/grape/grape.jpg" 
            alt="Grape Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Grape Nutrition Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Complete grape nutrition solutions for healthy development and premium quality.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          {/* Featured Product */}
          <div className="mb-20">
            <Card className="overflow-hidden border-none shadow-2xl bg-white/80 backdrop-blur-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col bg-gradient-to-br from-primary/10 to-transparent">
                  <h2 className="text-4xl font-extrabold text-primary mb-6">Majorsol Grape</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Majorsol grape provides balanced nutrition with high potassium content for healthy growth, 
                    enhanced development, and superior quality.
                  </p>
                  
                  <div className="bg-white/60 rounded-2xl p-6 shadow-inner border border-primary/10 mb-8">
                    <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Nutrient Contents:
                    </h3>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-semibold text-muted-foreground">
 <div className="flex justify-between border-b border-primary/5 pb-1"><span>Nitrogen (N)</span> <span className="text-primary">12.0%</span></div>
                      <div className="flex justify-between border-b border-primary/5 pb-1"><span>Phosphorus (P2O5)</span> <span className="text-primary">16.0%</span></div>
                      <div className="flex justify-between border-b border-primary/5 pb-1"><span>Potassium (K2O)</span> <span className="text-primary">32.0%</span></div>
                      <div className="flex justify-between border-b border-primary/5 pb-1"><span>Magnesium (Mg)</span> <span className="text-primary">2.0%</span></div>
                      <div className="flex justify-between border-b border-primary/5 pb-1"><span>Zinc (Zn)</span> <span className="text-primary">2.5%</span></div>
                      <div className="flex justify-between border-b border-primary/5 pb-1"><span>Iron (Fe)</span> <span className="text-primary">1.5%</span></div>
                      <div className="flex justify-between border-b border-primary/5 pb-1"><span>Manganese (Mn)</span> <span className="text-primary">1.0%</span></div>
                      <div className="flex justify-between border-b border-primary/5 pb-1"><span>Copper (Cu)</span> <span className="text-primary">1.0%</span></div>
                      <div className="flex justify-between border-b border-primary/5 pb-1"><span>Sulphur (S)</span> <span className="text-primary">8.0%</span></div>

                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-4">
                    <span className="text-sm font-bold text-primary uppercase tracking-widest">Pack Size:</span>
                    <div className="flex gap-2">
                      <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-bold text-sm">5kg</span>
                      <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-bold text-sm">10kg</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative bg-white flex items-center justify-center p-6 lg:p-10">
                  <div className="absolute inset-0 bg-primary/5" />
                  <img 
                    src="/assets/fertimax-hd.jpg" 
                    alt="Majorsol Grape"
                    className="relative z-10 w-full max-w-[380px] h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </Card>
          </div>
          
          {/* Deficiency Management */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Nutrient Deficiency Management
            </h2>
            <div className="space-y-8">
              {deficiencies.map((deficiency, index) => (
                <DeficiencyCard key={index} {...deficiency} />
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
      </section>
      <Footer />
    </div>
  );
};

export default Grape;


