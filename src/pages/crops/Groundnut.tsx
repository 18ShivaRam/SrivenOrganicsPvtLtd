import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DeficiencyCard } from '@/components/DeficiencyCard';

const Groundnut = () => {
  const deficiencies = [
    {
      name: "Nitrogen Deficiency",
      symptoms: "Yellowing of older leaves starting from tips, stunted growth, reduced nodulation, poor pod development",
      affect: "Reduces overall plant vigor, nitrogen fixation efficiency, and significantly impacts pod formation and kernel quality",
      product: "Apply Fertimax at 2-3 gm/liter water. Repeat after 15-20 days.",
      soilDrip: "Apply 5-8 kg Fertimax per acre through drip irrigation at flowering and pod development stages.",
      benefit: "Enhances vegetative growth, improves nodulation, increases pod formation and kernel protein content",
      image: "/assets/crops/grape/nitro.jpg",
      productImage: "/assets/fertimax-hd.jpg"
    },
    {
      name: "Phosphorus Deficiency", 
      symptoms: "Dark green to purplish discoloration of leaves, poor root development, delayed flowering, reduced pod set",
      affect: "Severely affects root nodulation, flowering time, pod formation and overall energy metabolism in plants",
      product: "Apply Fertimax at 2-3 gm/liter water during flowering stage. Repeat application after 15 days.",
      soilDrip: "Apply 6-10 kg Fertimax per acre through soil application or drip system during pod development.",
      benefit: "Improves root development, enhances flowering, increases pod set and kernel phosphorus content",
      image: "/assets/crops/grape/phos.jpg",
      productImage: "/assets/fertimax-hd.jpg"
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Yellowing and scorching of leaf margins, weak stems, poor pod filling, reduced oil content in kernels",
      affect: "Reduces water use efficiency, pod quality, oil synthesis and makes plants susceptible to drought stress",
      product: "Apply Fertimax at 2-3 gm/liter water. Focus application during pod filling stage.",
      soilDrip: "Apply 8-12 kg Fertimax per acre through drip irrigation during pod development and maturity stages.",
      benefit: "Improves water uptake, enhances pod filling, increases oil content and kernel quality",
      image: "/assets/crops/grape/pota.jpg",
      productImage: "/assets/fertimax-hd.jpg"
    },
    {
      name: "Calcium Deficiency",
      symptoms: "Empty pods (pops), poor kernel development, hollow heart in kernels, reduced pod set",
      affect: "Critical for pod development - causes empty pods, poor shell formation and significantly reduces yield quality",
      product: "Apply Fertimax at 3-4 gm/liter water during pod development. Critical for pod filling.",
      soilDrip: "Apply 10-15 kg Fertimax per acre through drip system. Essential during pod development stage.",
      benefit: "Ensures proper pod development, reduces empty pods, improves kernel formation and shell quality",
      image: "/assets/crops/grape/calc.jpg",
      productImage: "/assets/fertimax-hd.jpg"
    },
    {
      name: "Magnesium Deficiency",
      symptoms: "Interveinal chlorosis in older leaves, yellow streaks between green veins, poor photosynthesis",
      affect: "Reduces chlorophyll formation, photosynthetic efficiency and affects overall plant energy production",
      product: "Apply Fertimax at 2-3 gm/liter water. Focus on older affected leaves during application.",
      soilDrip: "Apply 6-8 kg Fertimax per acre through drip irrigation. Repeat after 20 days if symptoms persist.",
      benefit: "Restores chlorophyll formation, improves photosynthesis and enhances overall plant vigor",
      image: "/assets/crops/grape/magn.jpg",
      productImage: "/assets/fertimax-hd.jpg"
    },
    {
      name: "Iron Deficiency",
      symptoms: "Interveinal chlorosis in young leaves, white or yellow young leaves with green veins, poor nodulation",
      affect: "Severely affects chlorophyll synthesis, nitrogen fixation and reduces overall plant photosynthetic capacity",
      product: "Apply Fertimax at 2-3 gm/liter water. Target young affected leaves during early morning application.",
      soilDrip: "Apply 5-7 kg Fertimax per acre through drip system. Avoid alkaline soil conditions.",
      benefit: "Restores chlorophyll in young leaves, improves nitrogen fixation and enhances overall plant health",
      image: "/assets/crops/grape/iron.jpg",
      productImage: "/assets/fertimax-hd.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/crops/groundnut/groundnut.jpg" 
            alt="Groundnut Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Groundnut Nutrition Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Complete groundnut nutrition solutions for healthy development and premium quality.
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
                  <h2 className="text-4xl font-extrabold text-primary mb-6">Majorsol Groundnut</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Majorsol groundnut provides balanced nutrition with high potassium content for healthy growth, 
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
                    alt="Majorsol Groundnut"
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

export default Groundnut;


