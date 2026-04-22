import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DeficiencyCard } from '@/components/DeficiencyCard';

const Sugarcane = () => {
  const deficiencies = [
    {
      name: "Nitrogen Deficiency",
      symptoms: "Yellowing of older leaves, stunted growth, reduced tiller formation, poor cane development",
      affect: "Severely reduces vegetative growth, tiller formation, cane yield and overall sugar content",
      product: "Apply Fertimax at 2-3 gm/liter water. Repeat after 15-20 days during active growth periods.",
      soilDrip: "Apply 5-8 kg Fertimax per acre through drip irrigation during tillering and grand growth phases.",
      benefit: "Enhances vegetative growth, improves tiller formation, increases cane yield and sugar content",
      image: "/src/assets/crops/sugarcane/nitro-1.jpg",
      productImage: "/src/assets/nutrimag.jpg"
    },
    {
      name: "Phosphorus Deficiency", 
      symptoms: "Dark green to purplish leaf discoloration, poor root development, delayed growth, reduced sugar accumulation",
      affect: "Critically affects root development, energy metabolism, sugar formation and overall cane quality",
      product: "Apply Fertimax at 2-3 gm/liter water during early growth and maturity stages.",
      soilDrip: "Apply 6-10 kg Fertimax per acre through soil application during root development and maturity phases.",
      benefit: "Improves root development, enhances sugar formation, increases cane quality and maturity",
      image: "/src/assets/crops/sugarcane/phos-1.jpg",
      productImage: "/src/assets/fertimax-hd.jpg"
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Yellowing and browning of leaf margins, poor cane quality, reduced sugar content, weak stems",
      affect: "Reduces sugar content, cane quality, disease resistance and makes plants more susceptible to lodging",
      product: "Apply Fertimax at 2-3 gm/liter water. Critical during cane formation and maturity stages.",
      soilDrip: "Apply 8-12 kg Fertimax per acre through drip irrigation during cane development and maturity.",
      benefit: "Improves sugar content, enhances cane quality, increases disease resistance and stem strength",
      image: "/src/assets/crops/sugarcane/pota-1.jpg",
      productImage: "/src/assets/fertimax-hd.jpg"
    },
    {
      name: "Calcium Deficiency",
      symptoms: "The leaves become necrotic at the leaf tip and along leaf margins",
      affect:  "Premature death of older leaves",
      product: "Apply Fertimax at 2-3 gm/liter water. Target young affected leaves during early morning application.",
      soilDrip: "Apply 5-7 kg Fertimax per acre through drip system. Maintain proper soil pH levels.",
      benefit: "Restores chlorophyll in young leaves, improves photosynthesis and enhances plant health",
      image: "/src/assets/crops/sugarcane/cal.jpg",
      productImage: "/src/assets/fertimax-hd.jpg"
    },
    {
      name: "Sulphur Deficiency",
      symptoms: "The leaves become chlorotic and yellow in colour.",
      affect: "The leaves are narrow and short,reduces the sucrose content.",
      product: "Apply Fertimax at 2-3 gm/liter water. Critical during early growth and tillering stages.",
      soilDrip: "Apply 6-8 kg Fertimax per acre through drip irrigation during vegetative and cane formation phases.",
      benefit: "Improves growth hormone production, enhances cane development and increases yield",
      image: "/src/assets/crops/sugarcane/sul.jpg",
      productImage: "/src/assets/fertimax-hd.jpg"
    },
    {
      name: "Magnesium Deficiency",
      symptoms: "Interveinal chlorosis in older leaves, yellow stripes between green veins, reduced photosynthesis",
      affect: "Reduces chlorophyll formation, photosynthetic efficiency and affects overall plant energy production",
      product: "Apply Fertimax at 2-3 gm/liter water. Focus on older affected leaves during application.",
      soilDrip: "Apply 6-8 kg Fertimax per acre through drip irrigation. Repeat after 20 days if symptoms persist.",
      benefit: "Restores chlorophyll formation, improves photosynthesis and enhances overall plant vigor",
      image: "/src/assets/crops/sugarcane/mag.jpg",
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
            src="/crops/sugarcane/sugarcane.jpg" 
            alt="Sugarcane Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Sugarcane Nutrition Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Complete sugarcane nutrition solutions for healthy cane development and premium sugar content.
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
                  <h2 className="text-4xl font-extrabold text-primary mb-6">Majorsol Sugarcane</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Majorsol sugarcane provides balanced nutrition with high potassium content for healthy cane growth, 
                    enhanced tillering, superior cane development and excellent sugar content.
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
                    alt="Majorsol Sugarcane"
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

export default Sugarcane;
