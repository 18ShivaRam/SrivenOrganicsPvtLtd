import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DeficiencyCard } from '@/components/DeficiencyCard';
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
      image: "/assets/crops/cotton/nitro.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Phosphorous Deficiency",
      symptoms: "Purple-red leaves.",
      affect: "Root growth is affected.",
      product: "Vengrow 12:61:00 5gm/lit, Fertimax 00:52:34( 5-10gm/lit)",
      soilDrip: "Plantex 12:61:00 5kg/acre",
      benefit: "Root development, winter hardness",
      image: "/assets/crops/cotton/phos.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Dark green stunted plants, reddening symptom appear on leaves.",
      affect: "Delay in blooming and fruiting.",
      product: "Fertimax 00:00:50 5gm/lit, Fertimax13:00:45( 5-10gm/lit), Fertisol 3-5gm/lit",
      soilDrip: "—",
      benefit: "Resistance to pests and diseases, opening and closing of stomata",
      image: "/assets/crops/cotton/pota.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Calcium Deficiency",
      symptoms: "Crinkle leaf and poor root growth.",
      affect: "Large plants and few fruiting forms.",
      product: "Aquacal-3-4ml/lit, Calcium nitrate 5-10gm/lit, combical-3-5gm/lit, horticab 2-3ml/lit, crack gourd 2-3ml/lit",
      soilDrip: "—",
      benefit: "Cell formation, cell elongation, cell division",
      image: "/assets/crops/cotton/calc.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Magnesium Deficiency",
      symptoms: "Purple-red leaves with green veins, and affected leaves may age prematurely.",
      affect: "Leaf cupping and interveinal chlorosis veins remain green, starts in young leaves.",
      product: "Magmix 4-5gm/lit, zinc mag 3-5ml/lit, Fertisol 3-5gm/lit",
      soilDrip: "Ferromag 5kg/acre",
      benefit: "Helps in photosynthesis, starch translocation",
      image: "/assets/crops/cotton/magn.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Sulphur Deficiency",
      symptoms: "Pale green to yellow colour of young leaves.",
      affect: "The plants are small and spindly with short, slender stalks.",
      product: "Primasulf 3-4ml/lit, fertisol 5gm/lit",
      soilDrip: "—",
      benefit: "Improves special character in crop",
      image: "/assets/crops/cotton/sulp.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Copper Deficiency",
      symptoms: "Bud necrosis.",
      affect: "Fruit dropping.",
      product: "Phosphocop 2-3ml/lit",
      soilDrip: "—",
      benefit: "Serves to intensify flavour and colour in vegetables and colour in flowers",
      image: "/assets/crops/cotton/copp.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Boron Deficiency",
      symptoms: "Black discolouration at the base of bolls, bolls dry and fall, terminal bud dies.",
      affect: "Excessive shedding of buds and young bolls.",
      product: "Boron 20 1gm/lit, Potabor super-2-3gm/lit",
      soilDrip: "—",
      benefit: "Translocation of sugars and help in pollination",
      image: "/assets/crops/cotton/boro.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Zinc Deficiency",
      symptoms: "Brown spots extends from leaf tips to base and later dry, plants show shorter appearance.",
      affect: "Tips of leaves elongated and parallel.",
      product: "Chelamin plus1-2gm/lit",
      soilDrip: "Chelamin gold 0.5kg/acre",
      benefit: "Helps in activation of enzymes",
      image: "/assets/crops/cotton/zinc.jpg",
      productImage: "/lovable-uploads/d9876557-3b2b-4e06-ae5c-6db1383150e1.png"
    },
    {
      name: "Iron Deficiency",
      symptoms: "Leaf becomes white in colour.",
      affect: "Fibre fitness is reduced.",
      product: "Chelafer1-2gm/lit, Agrofer-1-2gm/lit",
      soilDrip: "Ferromag 5kg/acre, Ferromix-5kg/acre",
      benefit: "Helps in electron transport chain and helps in photosynthesis",
      image: "/assets/crops/cotton/iron.jpg",
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
            src="/crops/cotton/cotton.jpeg" 
            alt="Cotton Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Cotton Nutrition Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Complete cotton nutrition solutions for healthy development and premium quality.
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
                  <h2 className="text-4xl font-extrabold text-primary mb-6">Majorsol Cotton</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Majorsol cotton provides balanced nutrition with high potassium content for healthy growth, 
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
                    alt="Majorsol Cotton"
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
      </section>
      
      <Footer />
    </div>
  );
};

export default Cotton;


