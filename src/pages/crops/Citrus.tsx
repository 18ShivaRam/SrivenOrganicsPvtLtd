import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DeficiencyCard } from '@/components/DeficiencyCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Citrus = () => {
  const deficiencies = [
    {
      name: "Nitrogen Deficiency",
      symptoms: "Older leaves turn yellow starting from the tips and edges, reduced vigor and small pale fruits",
      affect: "Reduces tree growth, flowering and fruit production. Fruits become small with poor quality",
      product: "Drip: Apply Fertimax Gold 19:19:19 @ 25g/plant every 15 days",
      soilDrip: "Soil: Apply Urea @ 100g/plant in 2 splits during growing season",
      benefit: "Promotes healthy vegetative growth, improves fruit size and quality",
      image: "/src/assets/crops/citrus/nitro.jpg",
      productImage: "/src/assets/fertimax-hd.jpg"
    },
    {
      name: "Phosphorus Deficiency", 
      symptoms: "Dark green leaves with purplish discoloration, reduced flowering and poor root development",
      affect: "Delayed flowering, poor fruit set and reduced root growth affecting nutrient uptake",
      product: "Foliar: Apply DAP @ 10g/L water during flowering stage",
      soilDrip: "Soil: Apply SSP @ 150g/plant before flowering season",
      benefit: "Enhances root development, improves flowering and fruit setting",
      image: "/src/assets/crops/citrus/phos.jpg",
      productImage: "/src/assets/fertimax-hd.jpg"
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Yellowing and browning of leaf margins, small fruits with thick rinds and low juice content",
      affect: "Poor fruit quality, reduced juice content and increased susceptibility to diseases",
      product: "Foliar: Apply SOP @ 15g/L water during fruit development",
      soilDrip: "Drip: Apply MOP @ 50g/plant during fruit development stage",
      benefit: "Improves fruit quality, juice content and disease resistance",
      image: "/src/assets/crops/citrus/pota.jpg",
      productImage: "/src/assets/fertimax-hd.jpg"
    },
    {
      name: "Iron Deficiency",
      symptoms: "Young leaves turn yellow with green veins (interveinal chlorosis), stunted growth",
      affect: "Reduced photosynthesis leading to poor growth and fruit development",
      product: "Foliar: Apply Ferrous Sulphate @ 5g/L water every 15 days",
      soilDrip: "Soil: Apply Iron Chelate @ 25g/plant during active growth",
      benefit: "Restores green color to leaves and improves photosynthesis",
      image: "/src/assets/crops/citrus/iron.jpg", 
      productImage: "/src/assets/fertimax-hd.jpg"
    },
    {
      name: "Zinc Deficiency",
      symptoms: "Small leaves with interveinal chlorosis, shoot dieback and reduced fruit size",
      affect: "Poor shoot development, small fruits and reduced yield",
      product: "Foliar: Apply ZnSO4 @ 5g/L water every 20 days",
      soilDrip: "Soil: Apply Zinc Sulphate @ 50g/plant before new flush",
      benefit: "Promotes normal leaf development and improves fruit size",
      image: "/src/assets/crops/citrus/zinc.jpg",
      productImage: "/src/assets/fertimax-hd.jpg"
    },
    {
      name: "Magnesium Deficiency",
      symptoms: "Yellowing between veins in older leaves while veins remain green, premature leaf drop",
      affect: "Reduced photosynthesis and premature defoliation affecting tree health",
      product: "Foliar: Apply MgSO4 @ 10g/L water during active growth",
      soilDrip: "Soil: Apply Magnesium Sulphate @ 75g/plant annually",
      benefit: "Improves chlorophyll formation and photosynthesis efficiency",
      image: "/src/assets/crops/citrus/magn.jpg",
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
            src="/crops/citrus/citrus.jpg" 
            alt="Citrus Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Citrus Nutrition Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Complete citrus nutrition solutions for healthy development and premium quality.
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
                  <h2 className="text-4xl font-extrabold text-primary mb-6">Majorsol Citrus</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Majorsol citrus provides balanced nutrition with high potassium content for healthy growth, 
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
                    alt="Majorsol Citrus"
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

export default Citrus;
