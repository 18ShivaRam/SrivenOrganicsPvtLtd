import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import agrominGold from '@/assets/agromin-gold.png';
import NUTRI7PADDY from '@/assets/NUTRI_7_PADDY.jpg';
import vengrowminGold from '@/assets/vengrowminGold.jpeg';
import { Link } from 'react-router-dom';

const Micronutrients = () => {
  const products = [
    {
      name: "Vengrowmin Gold",
      description: "Micronutrient chelate liquid with high concentration of micronutrients along with chelating agent.",
      features: ["Provides essential nutrients to crops", "Increases crop growth", "Partially chelated micronutrients"],
      image: vengrowminGold,
      contents: "Zinc as Zn-EDTA 3%, Manganese as Mn-EDTA 1%, Molybdenum as Mo 0.1%, Copper as Cu-EDTA 1%, Boron as B 1%, Iron as Fe-EDTA 2%"
    },
    {
      name: "Nutri 7 (Soil Application)",
      description: "Essential plant nutrients in ideal predetermined proportions to prevent micronutrient deficiency.",
      features: ["Zinc, Iron, Manganese, Copper, Boron, Molybdenum", "Prevents nutrient deficiency", "For soil application"],
      image: NUTRI7PADDY,
      contents: "Zinc as Zn 5%, Iron as Fe 2%, Manganese as Mn 1%, Boron as B 1%, Copper as Cu 1%, Molybdenum as Mo 0.1%"
    },
    {
      name: "Nutri-Mn",
      description: "Fine light brown colored powder, water soluble, prevents interveinal chlorosis of leaves.",
      features: ["Induces resistance to pests and diseases", "Water soluble", "Prevents chlorosis"],
      image: agrominGold,
      contents: "Nutri-Mn Powder: Mn as Mn EDTA 9%, Nutri-Mn Liquid: Mn as Mn EDTA 8%"
    },
    {
      name: "Nutrimag",
      description: "Fine white powder, 100% water soluble, ensures complete and rapid absorption into the soil.",
      features: ["Increases oil content of crops", "100% water soluble", "Rapid soil absorption"],
    image: agrominGold,
      contents: "Mg as Mg EDTA 6%"
    },
    {
      name: "Nutri Zinc EDTA",
      description: "Chelated zinc formulation for better absorption and utilization by plants.",
      features: ["Prevents zinc deficiency", "Better plant absorption", "Chelated formulation"],
      image: agrominGold,
      contents: "Zinc as Zn-EDTA 12%"
    },
    {
      name: "Nutri Iron EDTA",
      description: "Chelated iron formulation to prevent iron chlorosis and improve plant health.",
      features: ["Prevents iron chlorosis", "Improves photosynthesis", "Quick absorption"],
      image: agrominGold,
      contents: "Iron as Fe-EDTA 12%"
    },
    {
      name: "Nutri Copper EDTA",
      description: "Chelated copper formulation that supports enzyme activity and disease resistance.",
      features: ["Enhances enzyme systems", "Improves plant vigor", "Chelated for better availability"],
      image: agrominGold,
      contents: "Copper as Cu-EDTA 12%"
    },
  ];

  const chelatedNames = ["Vengrowmin Gold", "Nutri 7 (Soil Application)"];
  const customizedNames = ["Nutri-Mn", "Nutrimag"];
  const chelatedProducts = products.filter(p => chelatedNames.includes(p.name));
  const customizedProducts = products.filter(p => customizedNames.includes(p.name));
  const otherProducts = products.filter(
    p => !chelatedNames.includes(p.name) && !customizedNames.includes(p.name)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/20">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Micronutrients
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Micronutrients are essential mineral elements needed in small quantities to unlock healthy growth and yield. Key elements include Zinc (Zn), Copper (Cu), Manganese (Mn), Iron (Fe), Boron (B), and Molybdenum (Mo).
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Why Micronutrients Matter</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Cofactors for enzymes that drive metabolic reactions</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Support photosynthesis and chlorophyll formation</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Cell wall development and membrane integrity</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Disease resistance and stress tolerance</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Nitrogen fixation and sugar transport</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Fruit quality, texture, and overall plant turgidity</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sources and Forms</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Inorganic salts with high water solubility</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Synthetic chelates such as EDTA, DTPA, EDDHA</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Organic complexes and amino/organic acid complexes</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Soil and foliar application options depending on crop stage</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Chelated Micronutrients</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  Iron, manganese, zinc, and copper can oxidize or precipitate in soil. Chelation keeps these metals soluble and mobile by binding them to a ligand, reducing fixation with phosphates and carbonates and improving uptake through roots or leaves.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Higher utilization efficiency at appropriate pH ranges</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Lower application rates with faster plant assimilation</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Compatibility with many pesticides and liquid fertilizers</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Reduced leaching due to adsorption on soil particle surfaces</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customized Micronutrients</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  Crop, soil, and climate conditions vary by region. Customized blends align nutrient ratios to local deficiencies and crop needs, increasing uptake and reducing nutrient loss for cost‑effective, site‑specific nutrition.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Formulated to state/crop recommendations</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Supports precision application programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Focus: Zinc</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>
                  Zinc supports chlorophyll production, photosynthetic activity, nutrient uptake, and protein synthesis. Deficiency often shows as stunted growth and leaf chlorosis. Soil and foliar zinc, especially chelated forms, improve availability and response.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Focus: Boron</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>
                  Boron is vital for cell wall formation, membrane integrity, sugar transport, and reproductive growth. Adequate boron improves fruit set, quality, and structural stability; deficiency reduces flowering and fruiting performance.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Iron Micronutrients</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>
                  Iron is central to chlorophyll synthesis and electron transport. Deficiency causes interveinal chlorosis on young leaves and reduced photosynthesis.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Chelates: Fe‑EDTA (acidic to neutral), Fe‑DTPA (up to moderately alkaline), Fe‑EDDHA (high pH/calcareous soils)</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Apply via soil or foliar; select chelate based on pH for best response</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Copper Micronutrients</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>
                  Copper activates enzyme systems, supports lignin synthesis, and enhances disease resistance and stress tolerance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Available as chelated Cu and inorganic salts; chelation improves plant availability</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Use precise doses; excessive copper can be phytotoxic</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Other Micronutrients</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>
                  Plants require small amounts of multiple micronutrients, and deficiency of any one can limit growth even when others are sufficient.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Main sources: inorganic salts, synthetic chelates, and organic complexes</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />Water‑soluble products are widely used for efficient soil and foliar delivery</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Chelated Micronutrients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chelatedProducts.map((product, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg bg-muted/10 flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Contents:</h4>
                    <p className="text-sm text-muted-foreground mb-3">{product.contents}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Customized Micronutrients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customizedProducts.map((product, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg bg-muted/10 flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Contents:</h4>
                    <p className="text-sm text-muted-foreground mb-3">{product.contents}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Other Micronutrients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProducts.map((product, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg bg-muted/10 flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Contents:</h4>
                    <p className="text-sm text-muted-foreground mb-3">{product.contents}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Custom Micronutrient Solutions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our technical team can formulate custom micronutrient blends based on your specific crop requirements and soil conditions.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground" asChild>
                <Link to="/contact-us" className="block">Contact Technical Team</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:1234567890">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Micronutrients;
