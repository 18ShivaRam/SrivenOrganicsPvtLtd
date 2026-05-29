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


const Potato = () => {
  const deficiencies = [
    {
      name: "Nitrogen Deficiency",
      symptoms: "Yellowing of lower leaves, reduced plant vigor, and smaller tubers.",
      affect: "Stunted growth with reduced foliage and lower tuber yield.",
      product: "Macrofert 20:20:20 5gm/lit",
      soilDrip: "Plantex 20:20:20 5kg/acre",
      benefit: "Promotes vegetative growth and improves tuber development",
      image: "/assets/crops/potato/nitro.png",
      productImage: nitroD
    },
    {
      name: "Phosphorous Deficiency",
      symptoms: "Purple discoloration of leaves, delayed maturity, and poor root development.",
      affect: "Reduced tuber formation and delayed plant maturity.",
      product: "Vengrow 12:61:00 5gm/lit, Fertimax 00:52:34 5-10gm/lit",
      soilDrip: "Plantex 12:61:00 5kg/acre",
      benefit: "Enhances root development and tuber formation",
      image: "/assets/crops/potato/phos.png",
      productImage: phosD
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Brown scorching of leaf margins, reduced tuber quality and storage life.",
      affect: "Poor tuber quality with reduced starch content and storage problems.",
      product: "Fertimax 00:00:50 5gm/lit, Fertimax13:00:45 5-10gm/lit, Fertisol 3-5gm/lit",
      soilDrip: "Plantex 13:00:45 3kg/acre",
      benefit: "Improves tuber quality, starch content and storage life",
      image: "/assets/crops/potato/pota.png",
      productImage: potaD
    },
    {
      name: "Calcium Deficiency",
      symptoms: "Internal brown spot in tubers, poor cell wall development.",
      affect: "Tuber quality deterioration with internal defects.",
      product: "Aquacal-3-4ml/lit, Calcium nitrate 5-10gm/lit, combical-3-5gm/lit, horticab 2-3ml/lit",
      soilDrip: "combical 3 kg/acre",
      benefit: "Prevents internal brown spot and improves tuber quality",
      image: "/assets/crops/potato/calc.png",
      productImage: calcD
    },
    {
      name: "Magnesium Deficiency",
      symptoms: "Interveinal chlorosis starting from older leaves, yellowing between veins.",
      affect: "Reduced photosynthesis and poor tuber development.",
      product: "Magmix 4-5gm/lit, zinc mag 3-5ml/lit, Fertisol 3-5gm/lit",
      soilDrip: "Ferromag 5kg/acre",
      benefit: "Enhances photosynthesis and chlorophyll formation",
      image: "/assets/crops/potato/magn.jpeg",
      productImage: magnD
    },
    {
      name: "Sulphur Deficiency",
      symptoms: "General yellowing of young leaves, reduced protein synthesis.",
      affect: "Poor tuber quality with reduced protein content.",
      product: "Primasulf 3-4ml/lit, fertisol 5gm/lit",
      soilDrip: "fertisol 3kg/acre",
      benefit: "Improves protein synthesis and tuber quality",
      image: "/assets/crops/potato/sulp.png",
      productImage: sulpD
    },
    {
      name: "Boron Deficiency",
      symptoms: "Hollow heart in tubers, cracking of stems and petioles.",
      affect: "Internal tuber defects reducing market quality.",
      product: "Boron 20 1gm/lit, Potabor super-2-3gm/lit",
      soilDrip: "Boron-20 1 kg/acre",
      benefit: "Prevents hollow heart and improves tuber quality",
      image: "/assets/crops/potato/boro.jpg",
      productImage: boroD
    },
    {
      name: "Zinc Deficiency",
      symptoms: "Stunted growth, small leaves with interveinal chlorosis.",
      affect: "Reduced plant vigor and tuber yield.",
      product: "Chelamin plus1-2gm/lit",
      soilDrip: "Chelamin gold 0.5kg/acre",
      benefit: "Promotes enzyme activation and plant growth",
      image: "/assets/crops/potato/nitro.png",
      productImage: zincD
    },
    {
      name: "Iron Deficiency",
      symptoms: "Interveinal chlorosis in young leaves, leaves become pale yellow.",
      affect: "Reduced photosynthesis and plant vigor.",
      product: "Chelafer1.5gm/lit, agrofer-1.5gm/lit",
      soilDrip: "Ferromag 5kg/acre, Ferromix-5kg/acre",
      benefit: "Improves chlorophyll synthesis and photosynthesis",
      image: "/assets/crops/potato/iron.jpg",
      productImage: ironD
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/crops/potato/potato.jpg" 
            alt="Potato Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Potato Nutrition Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Complete potato nutrition solutions for healthy development and premium quality.
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
                  <h2 className="text-4xl font-extrabold text-primary mb-6">Majorsol Potato</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Majorsol potato provides balanced nutrition with high potassium content for healthy growth, 
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
                    alt="Majorsol Potato"
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

export default Potato;


