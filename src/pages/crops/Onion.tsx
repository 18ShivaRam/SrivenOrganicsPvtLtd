import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DeficiencyCard } from '@/components/DeficiencyCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import nitroD from '@/assets/nitroD.jpg';
import phosD from '@/assets/phosD.jpg';
import potaD from '@/assets/potaD.jpg';
import calcD from '@/assets/calcD.jpg';
import magnD from '@/assets/magnD.jpg';
import ironD from '@/assets/dummy.png';
import sulpD from '@/assets/sulpD.jpg';
import coppD from '@/assets/coppD.jpg';
import boroD from '@/assets/boroD.jpg';
import zincD from '@/assets/zincD.jpg';


const Onion = () => {
  const deficiencies = [
    {
      name: "Nitrogen Deficiency",
      symptoms: "Yellowing of older leaves, stunted plant growth and small bulb size",
      affect: "Reduced plant vigor, poor bulb development and low yield",
      product: "Foliar: Apply Urea @ 20g/L water during vegetative growth",
      soilDrip: "Soil: Apply Urea @ 80kg/ha in 3-4 splits during growing season",
      benefit: "Promotes healthy vegetative growth and improves bulb size",
      image: "/assets/crops/onion/nitro.jpg",
      productImage: nitroD
    },
    {
      name: "Phosphorus Deficiency", 
      symptoms: "Purple discoloration on leaves especially in young plants, delayed maturity",
      affect: "Poor root development, delayed bulb formation and reduced storage quality",
      product: "Foliar: Apply DAP @ 15g/L water during bulb initiation",
      soilDrip: "Soil: Apply SSP @ 50kg/ha as basal application",
      benefit: "Enhances root development and improves bulb formation",
      image: "/assets/crops/onion/phos.jpg",
      productImage: phosD
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Yellowing and browning of leaf tips and margins, poor bulb quality",
      affect: "Poor bulb quality, reduced storage life and increased susceptibility to diseases",
      product: "Foliar: Apply SOP @ 15g/L water during bulb development",
      soilDrip: "Soil: Apply MOP @ 60kg/ha during bulb enlargement stage",
      benefit: "Improves bulb quality, storage life and disease resistance",
      image: "/assets/crops/onion/pota.jpg",
      productImage: potaD
    },
    {
      name: "Sulfur Deficiency",
      symptoms: "Yellowing of young leaves, reduced bulb pungency and poor flavor development",
      affect: "Poor bulb quality with reduced pungency and flavor affecting market value",
      product: "Foliar: Apply Sulfur @ 5g/L water during bulb development",
      soilDrip: "Soil: Apply Gypsum @ 200kg/ha before planting",
      benefit: "Improves bulb quality, pungency and flavor development",
      image: "/assets/crops/onion/sulp.jpg", 
      productImage: sulpD
    },
    {
      name: "Zinc Deficiency",
      symptoms: "Stunted growth, small leaves with interveinal chlorosis",
      affect: "Reduced plant growth and poor bulb development",
      product: "Foliar: Apply ZnSO4 @ 5g/L water during active growth",
      soilDrip: "Soil: Apply Zinc Sulphate @ 20kg/ha before planting",
      benefit: "Promotes normal growth and improves bulb development",
      image: "/assets/crops/onion/zinc.jpg",
      productImage: zincD
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/crops/onion/onion.jpg" 
            alt="Onion Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Onion Nutrition Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Complete onion nutrition solutions for healthy development and premium quality.
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
                  <h2 className="text-4xl font-extrabold text-primary mb-6">Majorsol Onion</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Majorsol onion provides balanced nutrition with high potassium content for healthy growth, 
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
                    alt="Majorsol Onion"
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

export default Onion;


