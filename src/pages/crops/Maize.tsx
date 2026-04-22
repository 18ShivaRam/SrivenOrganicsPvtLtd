import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DeficiencyCard } from '@/components/DeficiencyCard';
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
      image: "/src/assets/crops/maize/nitro.jpg",
      productImage: "/src/assets/fertimax-hd.jpg"
    },
    {
      name: "Phosphorus Deficiency", 
      symptoms: "Purple discoloration on leaves especially in young plants, delayed maturity and poor root development",
      affect: "Poor root development, delayed flowering and reduced grain formation",
      product: "Foliar: Apply DAP @ 20g/L water during early vegetative stage",
      soilDrip: "Soil: Apply SSP @ 60kg/ha as basal application before sowing",
      benefit: "Enhances root development, improves flowering and grain setting",
      image: "/src/assets/crops/maize/phos.jpg",
      productImage: "/src/assets/fertimax-hd.jpg"
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Yellowing and browning of leaf margins, weak stalks prone to lodging",
      affect: "Weak stems leading to lodging, poor grain quality and increased disease susceptibility",
      product: "Foliar: Apply SOP @ 15g/L water during grain filling stage",
      soilDrip: "Soil: Apply MOP @ 40kg/ha during knee-high stage",
      benefit: "Strengthens stalks, improves grain quality and disease resistance",
      image: "/src/assets/crops/maize/pota.jpg",
      productImage: "/src/assets/fertimax-hd.jpg"
    },
    {
      name: "Zinc Deficiency",
      symptoms: "White stripes between leaf veins, stunted growth and delayed maturity",
      affect: "Severely stunted growth, poor ear development and reduced grain yield",
      product: "Foliar: Apply ZnSO4 @ 5g/L water at 4-6 leaf stage",
      soilDrip: "Soil: Apply Zinc Sulphate @ 25kg/ha as basal application",
      benefit: "Promotes normal growth, improves ear formation and grain development",
      image: "/src/assets/crops/maize/zinc.jpg", 
      productImage: "/src/assets/fertimax-hd.jpg"
    },
    {
      name: "Iron Deficiency",
      symptoms: "Young leaves turn yellow with green veins, overall yellowing in severe cases",
      affect: "Reduced photosynthesis leading to poor growth and grain development",
      product: "Foliar: Apply Ferrous Sulphate @ 5g/L water during vegetative growth",
      soilDrip: "Soil: Apply Iron Chelate @ 10kg/ha during active growth",
      benefit: "Restores green color to leaves and improves photosynthesis",
      image: "/src/assets/crops/maize/iron.jpg",
      productImage: "/src/assets/fertimax-hd.jpg"
    },
    {
      name: "Magnesium Deficiency",
      symptoms: "Interveinal chlorosis in older leaves while veins remain green",
      affect: "Reduced photosynthesis and poor grain filling",
      product: "Foliar: Apply MgSO4 @ 10g/L water during grain filling",
      soilDrip: "Soil: Apply Magnesium Sulphate @ 30kg/ha during vegetative growth",
      benefit: "Improves chlorophyll formation and grain filling",
      image: "/src/assets/crops/maize/magn.jpg",
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
            src="/crops/maize/maize.jpeg" 
            alt="Maize Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Maize Nutrition Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Complete maize nutrition solutions for healthy development and premium quality.
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
                  <h2 className="text-4xl font-extrabold text-primary mb-6">Majorsol Maize</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Majorsol maize provides balanced nutrition with high potassium content for healthy growth, 
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
                    alt="Majorsol Maize"
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

export default Maize;
