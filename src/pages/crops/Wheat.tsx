import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Wheat = () => {
  const deficiencies = [
    {
      name: "Nitrogen Deficiency",
      symptoms: "Yellowing of older leaves, stunted growth, reduced tillering, poor grain development, low protein content",
      affect: "Severely reduces vegetative growth, tillering, grain yield and overall protein content in grains",
      product: "Apply Fertimax at 2-3 gm/liter water. Repeat after 15-20 days during tillering and flowering.",
      soilDrip: "Apply 5-8 kg Fertimax per acre through drip irrigation during tillering and grain filling stages.",
      benefit: "Enhances vegetative growth, improves tillering, increases grain yield and protein content",
      image: "https://ariesagro.com/wp-content/uploads/2022/11/Nitrogen-deficiency-symptoms.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Phosphorus Deficiency", 
      symptoms: "Dark green to purplish leaf discoloration, poor root development, delayed maturity, reduced grain filling",
      affect: "Critically affects root development, grain formation, energy metabolism and overall crop maturity",
      product: "Apply Fertimax at 2-3 gm/liter water during flowering and grain filling stages.",
      soilDrip: "Apply 6-10 kg Fertimax per acre through soil application during flowering and grain development.",
      benefit: "Improves root development, enhances grain formation, increases grain filling and crop maturity",
      image: "https://ariesagro.com/wp-content/uploads/2022/11/Phosphorus-deficiency-symptoms.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Yellowing and browning of leaf margins, weak stems, poor grain quality, increased lodging susceptibility",
      affect: "Reduces grain quality, stem strength, disease resistance and makes plants more susceptible to lodging",
      product: "Apply Fertimax at 2-3 gm/liter water. Critical during stem elongation and grain filling stages.",
      soilDrip: "Apply 8-12 kg Fertimax per acre through drip irrigation during stem development and grain maturity.",
      benefit: "Improves grain quality, enhances stem strength, increases disease resistance and reduces lodging",
      image: "https://ariesagro.com/wp-content/uploads/2022/11/Potassium-deficiency-symptoms.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Iron Deficiency",
      symptoms: "Interveinal chlorosis in young leaves, white or yellow new growth with green veins, poor vigor",
      affect: "Severely affects chlorophyll synthesis and reduces overall photosynthetic capacity of the plant",
      product: "Apply Fertimax at 2-3 gm/liter water. Target young affected leaves during early morning application.",
      soilDrip: "Apply 5-7 kg Fertimax per acre through drip system. Maintain proper soil pH levels.",
      benefit: "Restores chlorophyll in young leaves, improves photosynthesis and enhances plant health",
      image: "https://ariesagro.com/wp-content/uploads/2022/11/Iron-deficiency-symptoms.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Zinc Deficiency",
      symptoms: "Small leaf size, shortened internodes, poor grain development, white streaks on leaves, reduced yield",
      affect: "Severely affects growth hormones, grain development and overall plant reproductive capacity",
      product: "Apply Fertimax at 2-3 gm/liter water. Critical during early growth and flowering stages.",
      soilDrip: "Apply 6-8 kg Fertimax per acre through drip irrigation during vegetative and reproductive phases.",
      benefit: "Improves growth hormone production, enhances grain development and increases yield",
      image: "https://ariesagro.com/wp-content/uploads/2022/11/Zinc-deficiency-symptoms.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Magnesium Deficiency",
      symptoms: "Interveinal chlorosis in older leaves, yellow stripes between green veins, reduced photosynthesis",
      affect: "Reduces chlorophyll formation, photosynthetic efficiency and affects overall plant energy production",
      product: "Apply Fertimax at 2-3 gm/liter water. Focus on older affected leaves during application.",
      soilDrip: "Apply 6-8 kg Fertimax per acre through drip irrigation. Repeat after 20 days if symptoms persist.",
      benefit: "Restores chlorophyll formation, improves photosynthesis and enhances overall plant vigor",
      image: "https://ariesagro.com/wp-content/uploads/2022/11/Magnesium-deficiency-symptoms.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Wheat Nutrition Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete wheat nutrition solutions for healthy crop growth and premium grain quality with high protein content.
            </p>
          </div>

          {/* Featured Product */}
          <div className="mb-16 mt-16">
            <Card className="p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Majorsol Wheat</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Majorsol wheat provides balanced nutrition with essential micronutrients for healthy crop growth, 
                enhanced tillering, superior grain development and excellent protein content.
              </p>
              <div className="w-48 h-48 mx-auto mb-6">
                <img 
                  src="/src/assets/fertimax-hd.png" 
                  alt="Majorsol Wheat"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="bg-muted/20 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-2">Contents:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <div>Nitrogen as N: 15.0%</div>
                  <div>Phosphorus as P2O5: 20.0%</div>
                  <div>Potassium as K2O: 20.0%</div>
                  <div>Magnesium as Mg: 2.0%</div>
                  <div>Zinc as Zn: 3.0%</div>
                  <div>Iron as Fe: 2.0%</div>
                  <div>Manganese as Mn: 1.0%</div>
                  <div>Copper as Cu: 1.0%</div>
                  <div>Sulphur as S: 8.0%</div>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                Read More
              </Button>
            </Card>
          </div>
          
          {/* Deficiency Management */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Nutrient Deficiency Management
            </h2>
            <div className="space-y-8">
              {deficiencies.map((deficiency, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    <div>
                      <img 
                        src={deficiency.image} 
                        alt={deficiency.name}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-xl font-bold text-foreground mb-4">{deficiency.name}</h3>
                      <div className="space-y-3">
                        <div>
                          <strong className="text-foreground">Symptoms:</strong>
                          <p className="text-muted-foreground">{deficiency.symptoms}</p>
                        </div>
                        <div>
                          <strong className="text-foreground">Affect:</strong>
                          <p className="text-muted-foreground">{deficiency.affect}</p>
                        </div>
                        <div>
                          <strong className="text-foreground">Benefit:</strong>
                          <p className="text-muted-foreground">{deficiency.benefit}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="text-center">
                        <img 
                          src={deficiency.productImage} 
                          alt="Product"
                          className="w-32 h-32 object-contain mx-auto mb-4"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="bg-muted/20 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground mb-2">Foliar Application:</h4>
                          <p className="text-sm text-muted-foreground">{deficiency.product}</p>
                        </div>
                        <div className="bg-muted/20 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground mb-2">Soil/Drip Application:</h4>
                          <p className="text-sm text-muted-foreground">{deficiency.soilDrip}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wheat;