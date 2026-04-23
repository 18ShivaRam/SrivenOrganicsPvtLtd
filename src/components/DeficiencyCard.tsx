import React from 'react';
import { Card } from '@/components/ui/card';

interface DeficiencyCardProps {
  name: string;
  symptoms: string;
  affect: string;
  benefit: string;
  product: string;
  soilDrip: string;
  image: string;
  productImage: string;
}

export const DeficiencyCard: React.FC<DeficiencyCardProps> = ({
  name,
  symptoms,
  affect,
  benefit,
  product,
  soilDrip,
  image,
  productImage
}) => {
  return (
    <Card className="overflow-hidden bg-white/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8">
        {/* Left Side: Image and Deficiency Details (approx 2/3 width) */}
        <div className="lg:col-span-8 space-y-8 flex flex-col">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Image & Title Container */}
            <div className="md:w-1/2 space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg group transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <img 
                  src={image} 
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-extrabold text-primary leading-tight tracking-tight border-b-2 border-primary/10 pb-2">
                {name}
              </h3>
            </div>

            {/* Symptoms & Impact Column */}
            <div className="md:w-1/2 space-y-8 py-2">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-primary uppercase tracking-[0.2em] flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Symptoms
                </h4>
                <p className="text-muted-foreground leading-relaxed text-[15px] font-medium pl-5 border-l-2 border-primary/20 italic">
                  {symptoms}
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-destructive/80 uppercase tracking-[0.2em] flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive" />
                  Impact on Crop
                </h4>
                <p className="text-muted-foreground leading-relaxed text-[15px] font-medium pl-5 border-l-2 border-destructive/20 italic">
                  {affect}
                </p>
              </div>
            </div>
          </div>

          {/* Key Benefit section fills the bottom-left space */}
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 shadow-sm mt-auto relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-110 transition-transform duration-300">
              <span className="text-4xl">✨</span>
            </div>
            <div className="relative z-10">
              <h4 className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
                <span className="p-1 bg-primary/10 rounded-lg">⭐</span>
                Key Benefit of Management
              </h4>
              <p className="text-[15px] text-primary/80 font-semibold italic leading-relaxed">
                {benefit}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Product & Application Sidebar (approx 1/3 width) */}
        <div className="lg:col-span-4">
          <div className="bg-gradient-to-br from-white to-primary/5 rounded-3xl p-6 border border-primary/10 shadow-xl h-full flex flex-col">
            <div className="text-center mb-6 relative">
              <div className="relative inline-block group cursor-help">
                <img 
                  src={productImage} 
                  alt="Recommended Product"
                  className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain mx-auto drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-3"
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-[10px] font-black text-white px-4 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 whitespace-nowrap tracking-wider">
                  RECOMMENDED SOLUTION
                </div>
              </div>
            </div>

            <div className="space-y-4 mt-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-primary/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h5 className="text-xs font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="p-1.5 bg-primary/10 rounded-lg text-xs">💧</span>
                  Foliar Application
                </h5>
                <p className="text-[13px] text-muted-foreground font-medium leading-relaxed">{product}</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-accent/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h5 className="text-xs font-bold text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="p-1.5 bg-accent/10 rounded-lg text-xs">🌱</span>
                  Soil/Drip Application
                </h5>
                <p className="text-[13px] text-muted-foreground font-medium leading-relaxed">{soilDrip}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};


