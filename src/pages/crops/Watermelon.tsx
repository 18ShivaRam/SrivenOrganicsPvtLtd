import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DeficiencyCard } from '@/components/DeficiencyCard';
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
      image: "/src/assets/crops/watermelon/nitro.jpg",
      productImage: "/src/assets/fertimax-hd.jpg"
    },
    {
      name: "Phosphorus Deficiency", 
      symptoms: "Purple discoloration on leaves, delayed flowering and poor fruit set",
      affect: "Poor root development, delayed flowering and reduced fruit formation",
      product: "Foliar: Apply DAP @ 15g/L water during flowering stage",
      soilDrip: "Soil: Apply SSP @ 75kg/ha as basal application",
      benefit: "Enhances flowering, fruit set and root development",
      image: "/src/assets/crops/watermelon/phos.jpeg",
      productImage: "/src/assets/fertimax-hd.jpg"
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Yellowing and browning of leaf margins, poor fruit quality and reduced sugar content",
      affect: "Poor fruit quality, reduced sweetness and increased susceptibility to diseases",
      product: "Foliar: Apply SOP @ 15g/L water during fruit development",
      soilDrip: "Soil: Apply MOP @ 80kg/ha during fruit enlargement",
      benefit: "Improves fruit quality, sweetness and disease resistance",
      image: "/src/assets/crops/watermelon/pota.JPG",
      productImage: "/src/assets/fertimax-hd.jpg"
    },
    {
      name: "Calcium Deficiency",
      symptoms: "Blossom end rot in fruits, poor fruit quality and reduced shelf life",
      affect: "Fruit disorders like blossom end rot and poor storage quality",
      product: "Foliar: Apply Calcium Chloride @ 5g/L water during fruit development",
      soilDrip: "Soil: Apply Gypsum @ 200kg/ha before planting",
      benefit: "Prevents blossom end rot and improves fruit quality",
      image: "/src/assets/crops/watermelon/calc.jpg",
      productImage: "/src/assets/fertimax-hd.jpg"
    },
    {
      name: "Magnesium Deficiency",
      symptoms: "Interveinal chlorosis in older leaves while veins remain green",
      affect: "Reduced photosynthesis and poor fruit development",
      product: "Foliar: Apply MgSO4 @ 10g/L water during active growth",
      soilDrip: "Soil: Apply Magnesium Sulphate @ 50kg/ha during planting",
      benefit: "Improves chlorophyll formation and fruit development",
      image: "/src/assets/crops/watermelon/magn.jpg",
      productImage: "/src/assets/fertimax-hd.jpg"
    },
    {
      name: "Boron Deficiency",
      symptoms: "Hollow fruits, poor seed development and reduced fruit quality",
      affect: "Poor internal fruit quality with hollow centers and poor pollination",
      product: "Foliar: Apply Borax @ 2g/L water during flowering and fruit development",
      soilDrip: "Soil: Apply Boron @ 5kg/ha before flowering",
      benefit: "Improves pollination, fruit set and internal fruit quality",
      image: "/src/assets/crops/watermelon/boro.jpg",
      productImage: "/src/assets/fertimax-hd.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/crops/watermelon/watermelon.jpeg" 
            alt="Watermelon Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Watermelon Nutrition Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Complete watermelon nutrition solutions for healthy development and premium quality.
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
                  <h2 className="text-4xl font-extrabold text-primary mb-6">Majorsol Watermelon</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Majorsol watermelon provides balanced nutrition with high potassium content for healthy growth, 
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
                    src="/src/assets/fertimax-hd.jpg" 
                    alt="Majorsol Watermelon"
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Watermelon;
