import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DeficiencyCard } from '@/components/DeficiencyCard';
import { Card } from '@/components/ui/card';

import nitroD from '@/assets/nitroD.jpg';
import phosD from '@/assets/phosD.jpg';
import potaD from '@/assets/potaD.jpg';
import calcD from '@/assets/calcD.jpg';
import magnD from '@/assets/magnD.jpg';
import ironD from '@/assets/dummy.png';
import sulpD from '@/assets/sulpD.jpg';
import coppD from '@/assets/coppD.jpg';
import boroD from '@/assets/boroD.jpg';
import molyD from '@/assets/molyD.jpg';
import zincD from '@/assets/zincD.jpg';
import { ZoomIn } from 'lucide-react';


const Coffee = () => {
  const deficiencies = [
    {
      name: "Nitrogen Deficiency",
      symptoms: "Yellowing of older leaves, reduced growth, smaller coffee beans, pale green appearance",
      affect: "Reduces vegetative growth, flowering, and overall bean size and quality",
      product: "Apply Fertimax at 2-3 gm/liter water during flush and growth periods.",
      soilDrip: "Apply 5-8 kg Fertimax per acre through drip irrigation during active growth stages.",
      benefit: "Enhances vegetative growth, improves flowering, and increases bean size",
      image: "/assets/crops/coffee/nitro.jpg",
      productImage: nitroD
    },
    {
      name: "Phosphorus Deficiency", 
      symptoms: "Stunted root growth, dark green or purplish leaves, delayed maturity, poor bean set",
      affect: "Impairs root development and energy transfer, leading to lower yields and quality",
      product: "Apply Fertimax at 2-3 gm/liter water during early growth. Repeat after 15 days.",
      soilDrip: "Apply 6-10 kg Fertimax per acre through soil application during root development.",
      benefit: "Promotes strong root systems, enhances energy transfer, and improves bean quality",
      image: "/assets/crops/coffee/phos.jpg",
      productImage: phosD
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Browning of leaf margins, weak stems, small and light beans, increased disease susceptibility",
      affect: "Reduces bean weight, quality, and plant resistance to drought and disease",
      product: "Apply Fertimax at 2-3 gm/liter water during bean development stages.",
      soilDrip: "Apply 8-12 kg Fertimax per acre through drip irrigation during bean filling and maturity.",
      benefit: "Increases bean weight and quality, improves water use efficiency and disease resistance",
      image: "/assets/crops/coffee/pota.jpg",
      productImage: potaD
    },
    {
      name: "Magnesium Deficiency",
      symptoms: "Interveinal chlorosis in older leaves, reduced photosynthesis, yellowing between veins",
      affect: "Decreases chlorophyll production and overall plant energy, leading to poor yields",
      product: "Apply Fertimax at 2-3 gm/liter water. Focus on older affected leaves.",
      soilDrip: "Apply 6-8 kg Fertimax per acre through drip irrigation. Repeat if symptoms persist.",
      benefit: "Restores chlorophyll levels, improves photosynthesis, and boosts plant vigor",
      image: "/assets/crops/coffee/magn.jpg",
      productImage: magnD
    },
    {
      name: "Zinc Deficiency",
      symptoms: "Small and narrow leaves, shortened internodes (rosetting), poor bean formation",
      affect: "Restricts growth hormones and reduces overall bean production and quality",
      product: "Apply Fertimax at 2-3 gm/liter water. Critical during early growth and flowering.",
      soilDrip: "Apply 6-8 kg Fertimax per acre through drip irrigation during vegetative phases.",
      benefit: "Optimizes growth hormones, enhances bean development, and increases yields",
      image: "/assets/crops/coffee/zinc.jpg",
      productImage: zincD
    },
    {
      name: "Boron Deficiency",
      symptoms: "Death of growing tips, deformed leaves, poor fruit set, hollow beans",
      affect: "Critically impacts cell wall formation and reproductive success, reducing yield",
      product: "Apply Fertimax at 1-2 gm/liter water during flowering and fruit set stages.",
      soilDrip: "Apply 2-4 kg Fertimax per acre through soil application during early flowering.",
      benefit: "Improves cell wall integrity, enhances fruit set, and ensures solid bean development",
      image: "/assets/crops/coffee/boro.jpg",
      productImage: boroD
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/crops/coffee/coffee.jpg" 
            alt="Coffee Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Coffee Nutrition Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Premium nutrition for optimal coffee bean development and superior flavor.
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
                  <h2 className="text-4xl font-extrabold text-primary mb-6">Majorsol Coffee</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Majorsol coffee provides balanced nutrition with high potassium content for healthy growth, 
                    enhanced development, and superior bean quality.
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
                    alt="Majorsol Coffee"
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

export default Coffee;


