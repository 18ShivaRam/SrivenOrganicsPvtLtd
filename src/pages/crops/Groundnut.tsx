import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Groundnut = () => {
  const deficiencies = [
    {
      name: "Nitrogen Deficiency",
      symptoms: "Yellowing of older leaves starting from tips, stunted growth, reduced nodulation, poor pod development",
      affect: "Reduces overall plant vigor, nitrogen fixation efficiency, and significantly impacts pod formation and kernel quality",
      product: "Apply Fertimax at 2-3 gm/liter water. Repeat after 15-20 days.",
      soilDrip: "Apply 5-8 kg Fertimax per acre through drip irrigation at flowering and pod development stages.",
      benefit: "Enhances vegetative growth, improves nodulation, increases pod formation and kernel protein content",
      image: "https://ariesagro.com/wp-content/uploads/2022/11/Nitrogen-deficiency-symptoms.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Phosphorus Deficiency", 
      symptoms: "Dark green to purplish discoloration of leaves, poor root development, delayed flowering, reduced pod set",
      affect: "Severely affects root nodulation, flowering time, pod formation and overall energy metabolism in plants",
      product: "Apply Fertimax at 2-3 gm/liter water during flowering stage. Repeat application after 15 days.",
      soilDrip: "Apply 6-10 kg Fertimax per acre through soil application or drip system during pod development.",
      benefit: "Improves root development, enhances flowering, increases pod set and kernel phosphorus content",
      image: "https://ariesagro.com/wp-content/uploads/2022/11/Phosphorus-deficiency-symptoms.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Potassium Deficiency",
      symptoms: "Yellowing and scorching of leaf margins, weak stems, poor pod filling, reduced oil content in kernels",
      affect: "Reduces water use efficiency, pod quality, oil synthesis and makes plants susceptible to drought stress",
      product: "Apply Fertimax at 2-3 gm/liter water. Focus application during pod filling stage.",
      soilDrip: "Apply 8-12 kg Fertimax per acre through drip irrigation during pod development and maturity stages.",
      benefit: "Improves water uptake, enhances pod filling, increases oil content and kernel quality",
      image: "https://ariesagro.com/wp-content/uploads/2022/11/Potassium-deficiency-symptoms.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Calcium Deficiency",
      symptoms: "Empty pods (pops), poor kernel development, hollow heart in kernels, reduced pod set",
      affect: "Critical for pod development - causes empty pods, poor shell formation and significantly reduces yield quality",
      product: "Apply Fertimax at 3-4 gm/liter water during pod development. Critical for pod filling.",
      soilDrip: "Apply 10-15 kg Fertimax per acre through drip system. Essential during pod development stage.",
      benefit: "Ensures proper pod development, reduces empty pods, improves kernel formation and shell quality",
      image: "https://ariesagro.com/wp-content/uploads/2022/11/Calcium-deficiency-symptoms.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Magnesium Deficiency",
      symptoms: "Interveinal chlorosis in older leaves, yellow streaks between green veins, poor photosynthesis",
      affect: "Reduces chlorophyll formation, photosynthetic efficiency and affects overall plant energy production",
      product: "Apply Fertimax at 2-3 gm/liter water. Focus on older affected leaves during application.",
      soilDrip: "Apply 6-8 kg Fertimax per acre through drip irrigation. Repeat after 20 days if symptoms persist.",
      benefit: "Restores chlorophyll formation, improves photosynthesis and enhances overall plant vigor",
      image: "https://ariesagro.com/wp-content/uploads/2022/11/Magnesium-deficiency-symptoms.jpg",
      productImage: "/src/assets/fertimax-hd.png"
    },
    {
      name: "Iron Deficiency",
      symptoms: "Interveinal chlorosis in young leaves, white or yellow young leaves with green veins, poor nodulation",
      affect: "Severely affects chlorophyll synthesis, nitrogen fixation and reduces overall plant photosynthetic capacity",
      product: "Apply Fertimax at 2-3 gm/liter water. Target young affected leaves during early morning application.",
      soilDrip: "Apply 5-7 kg Fertimax per acre through drip system. Avoid alkaline soil conditions.",
      benefit: "Restores chlorophyll in young leaves, improves nitrogen fixation and enhances overall plant health",
      image: "https://ariesagro.com/wp-content/uploads/2022/11/Iron-deficiency-symptoms.jpg",
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
              Groundnut Nutrition Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete groundnut nutrition solutions for healthy pod development and premium oil quality.
            </p>
          </div>

          {/* Featured Product */}
          <div className="mb-16 mt-16">
            <Card className="p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Majorsol Groundnut</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Majorsol groundnut supplies needed phosphorus and potash in balanced proportion along with secondary & micronutrients. 
                Enhances pod development, improves oil content and increases nodulation efficiency.
              </p>
              <div className="w-48 h-48 mx-auto mb-6">
                <img 
                  src="/src/assets/fertimax-hd.png" 
                  alt="Majorsol Groundnut"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="bg-muted/20 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-2">Contents:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <div>Manganese as Mn: 1.0%</div>
                  <div>Magnesium as Mg: 2.0%</div>
                  <div>Zinc as Zn: 2.5%</div>
                  <div>Sulphur as S: 8.0%</div>
                  <div>Potassium as K2O: 18.0%</div>
                  <div>Phosphorus as P2O5: 12.0%</div>
                  <div>Calcium as Ca: 2.0%</div>
                  <div>Copper as Cu: 1.0%</div>
                  <div>Boron as B: 0.2%</div>
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

export default Groundnut;