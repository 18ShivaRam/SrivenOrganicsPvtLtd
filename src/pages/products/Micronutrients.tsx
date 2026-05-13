import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductCard } from '@/components/ProductCard';
import agrominGold from '@/assets/agromin-gold.jpg';
import NUTRI7PADDY from '@/assets/NutriZincEDTA.jpg';
import NUTRIMAG from '@/assets/Nutrimag.jpg';
import NUTRIZINC from '@/assets/nutrilink.jpg';
import NUTRICOPPER from '@/assets/nutricopper.jpg';
import vengrowminGold from '@/assets/vengrowminGold.jpeg';
import { Link } from 'react-router-dom';

const Micronutrients = () => {
  const products = [
    {
      name: "Vengrowmin Gold",
      description: "Micronutrient chelate liquid with high concentration of micronutrients along with chelating agent.",
      features: ["Provides essential nutrients to crops", "Increases crop growth", "Partially chelated micronutrients"],
      benefits: ["Prevents nutrient deficiencies", "Improves yield quality", "Better stress tolerance"],
      crops: "All field crops, fruits, and vegetables.",
      dosage: "Foliar: 2-3 ml/L, Fertigation: 1-2 L/acre.",
      packSize: "250ml, 500ml, 1L, 5L",
      image: vengrowminGold,
      contents: "Zinc as Zn-EDTA 3%, Manganese as Mn-EDTA 1%, Molybdenum as Mo 0.1%, Copper as Cu-EDTA 1%, Boron as B 1%, Iron as Fe-EDTA 2%"
    },
    {
      name: "Nutri 7 (soil Application)",
      description: "Essential plant nutrients in ideal predetermined proportions to prevent micronutrient deficiency.",
      features: ["Zinc, Iron, Manganese, Copper, Boron, Molybdenum", "Prevents nutrient deficiency", "For soil application"],
      benefits: ["Enhances vegetative growth", "Improves fruit set and quality", "Boosts overall plant vigor"],
      crops: "Leafy vegetables, Fruit crops, and Orchards.",
      dosage: "Soil: 5-10 kg/acre, Foliar: 2-3 gm/L.",
      packSize: "1kg, 5kg, 10kg, 25kg",
      image: NUTRI7PADDY,
      contents: "Zinc as Zn 5%, Iron as Fe 2%, Manganese as Mn 1%, Boron as B 1%, Copper as Cu 1%, Molybdenum as Mo 0.1%"
    },
    // {
    //   name: "Nutri Chelamin Gold",
    //   description: "Advanced agricultural drones for precision spraying and crop monitoring. Optimized for efficient micronutrient application.",
    //   features: ["Precision spraying technology", "High-efficiency coverage", "Reduced chemical waste"],
    //   benefits: ["Uniform application", "Covers large areas quickly", "Minimizes labor costs"],
    //   crops: "All large-scale field crops.",
    //   dosage: "As per spray program requirements.",
    //   packSize: "Standard Drone Unit",
    //   image: vengrowminGold,
    //   contents: "Precision Spray System"
    // },
    // {
    //   name: "Nutri Calpro",
    //   description: "Professional grade micronutrient mix for intensive cultivation and high-yield agricultural systems.",
    //   features: ["Comprehensive nutrient profile", "Highly stable formulation", "Excellent compatibility"],
    //   benefits: ["Maximizes genetic potential", "Improves nutrient uptake efficiency", "Stronger root systems"],
    //   crops: "High-value cash crops and greenhouse crops.",
    //   dosage: "Foliar: 2.5 gm/L, Soil: 4 kg/acre.",
    //   packSize: "1kg, 5kg, 10kg",
    //   image: NUTRI7PADDY,
    //   contents: "Multi-nutrient complex"
    // },
    // {
    //   name: "Nutri Chelacop",
    //   description: "High-performance liquid micronutrient chelate for rapid foliar absorption and immediate deficiency correction.",
    //   features: ["Fast-acting formula", "No sediment formation", "Safe for all plant tissues"],
    //   benefits: ["Quick greening effect", "Corrects deficiencies within days", "Improves flowering"],
    //   crops: "Vegetables, Fruits, and Ornamental plants.",
    //   dosage: "2-3 ml per liter of water.",
    //   packSize: "250ml, 500ml, 1L, 5L",
    //   image: vengrowminGold,
    //   contents: "Chelated Multi-micronutrients"
    // },
    // {
    //   name: "Nutri Chelamag",
    //   description: "Premium micronutrient chelate liquid with high concentration of essential elements for superior crop performance.",
    //   features: ["Gold standard chelation", "Maximum nutrient availability", "pH balanced for stability"],
    //   benefits: ["Highest yield increase", "Superior fruit quality", "Enhanced shelf life"],
    //   crops: "All commercial crops.",
    //   dosage: "2 ml/L for foliar application.",
    //   packSize: "500ml, 1L, 5L",
    //   image: vengrowminGold,
    //   contents: "Zinc, Iron, Manganese, Boron, Copper, Molybdenum"
    // },
    // {
    //   name: "Nutri Chelacal",
    //   description: "Maximum strength micronutrient formula for extreme deficiency conditions and high-demand growth stages.",
    //   features: ["Ultra-concentrated elements", "Superior wetting agents", "Rain-fast technology"],
    //   benefits: ["Overcomes severe stress", "Boosts yield in poor soils", "Supports peak metabolic activity"],
    //   crops: "Cotton, Sugarcane, Chilli, and Fruit crops.",
    //   dosage: "1-2 gm/L of water.",
    //   packSize: "500gm, 1kg",
    //   image: vengrowminGold,
    //   contents: "Concentrated Multi-micronutrients"
    // },
    // {
    //   name: "Nutri Chelafer",
    //   description: "Specialized soil application micronutrient mix for long-term nutrient availability and soil health improvement.",
    //   features: ["Slow-release properties", "Soil structure friendly", "Leach resistant"],
    //   benefits: ["Continuous nutrient supply", "Builds soil fertility", "Reduces application frequency"],
    //   crops: "Paddy, Wheat, Sugarcane, and Plantation crops.",
    //   dosage: "10 kg/acre at sowing or transplanting.",
    //   packSize: "10kg, 25kg, 50kg",
    //   image: NUTRI7PADDY,
    //   contents: "Zinc, Iron, Manganese, Boron, Copper"
    // },
    // {
    //   name: "Nutri Chelamin plus",
    //   description: "Versatile powder formulation for both soil application and fertigation systems.",
    //   features: ["100% water soluble powder", "Easy to mix and apply", "High purity ingredients"],
    //   benefits: ["Flexible application methods", "Cost-effective for large areas", "No clogging in drip lines"],
    //   crops: "All fertigated and soil-grown crops.",
    //   dosage: "3-5 kg/acre through soil or drip.",
    //   packSize: "1kg, 5kg, 10kg",
    //   image: vengrowminGold,
    //   contents: "Multi-micronutrient powder"
    // },

    ///////////////////////////////
    // CUSTOMIZED PRODUCTS - COMMENTED OUT FOR NOW
    // {
    //   name: "Nutri Agromin Gold",
    //   description: "Balanced micronutrient formulation designed for specific regional soil profiles and crop requirements.",
    //   features: ["Regional specific formulation", "Optimal nutrient ratios", "Highly affordable"],
    //   benefits: ["Targeted deficiency correction", "Reliable performance", "High return on investment"],
    //   crops: "Cereals, Pulses, and Oilseeds.",
    //   dosage: "5 kg/acre soil application.",
    //   packSize: "5kg, 10kg",
    //   image: NUTRI7PADDY,
    //   contents: "Essential micronutrient mix"
    // },
    // {
    //   name: "Nutri Agromin Max Foliar Spray",
    //   description: "Anti-oxidant enriched micronutrient formula to protect crops from oxidative stress and environmental extremes.",
    //   features: ["Unique anti-stress factors", "Protective chelation", "Immune boosting properties"],
    //   benefits: ["Heat and cold tolerance", "Reduces fruit drop under stress", "Maintains greenness"],
    //   crops: "Sensitive horticultural crops and fruits.",
    //   dosage: "2 ml/L foliar spray.",
    //   packSize: "500ml, 1L",
    //   image: vengrowminGold,
    //   contents: "Micronutrients + Bio-stimulants"
    // },
    // {
    //   name: "Nutri Agripro",
    //   description: "High-purity chelated zinc formulation for efficient correction of zinc deficiency in all crops.",
    //   features: ["12% Zinc EDTA", "Full chelation", "Immediate plant uptake"],
    //   benefits: ["Corrects 'Khaira' disease in paddy", "Increases leaf size and internodes", "Essential for auxin synthesis"],
    //   crops: "Paddy, Maize, Citrus, and Cotton.",
    //   dosage: "0.5 - 1.0 gm/L foliar, 500gm/acre drip.",
    //   packSize: "100gm, 250gm, 500gm, 1kg",
    //   image: NUTRIZINC,
    //   contents: "Zinc as Zn-EDTA 12%"
    // },
    // {
    //   name: "Nutri Tracemin",
    //   description: "Advanced micronutrient blend specifically formulated for hydroponics and high-tech aquaculture-based systems.",
    //   features: ["Purity grade ingredients", "No heavy metal contaminants", "Stable in nutrient solutions"],
    //   benefits: ["Perfect for soilless culture", "Balanced for fast-growing systems", "Ensures crystal clear solutions"],
    //   crops: "Hydroponic vegetables, Herbs, and Aquaponics.",
    //   dosage: "As per system EC/pH requirements.",
    //   packSize: "1kg, 5kg",
    //   image: vengrowminGold,
    //   contents: "Full spectrum micronutrients"
    // },
    // {
    //   name: "Nutri Mobomin",
    //   description: "Performance booster for aquatic environments and water-based nutrient delivery systems.",
    //   features: ["Water quality enhancers", "Instant solubility", "Biologically active elements"],
    //   benefits: ["Stimulates beneficial growth", "Improves nutrient absorption", "Maintains system balance"],
    //   crops: "Aquatic plants and Fertigated crops.",
    //   dosage: "1-2 L per 10,000 L water.",
    //   packSize: "1L, 5L",
    //   image: NUTRI7PADDY,
    //   contents: "Micronutrients + Vitalizers"
    // },
    // {
    //   name: "Nutri Agromin Foliar Spray Liquid",
    //   description: "Specialized calcium-rich micronutrient formulation for aquatic systems and calcium-demanding crops.",
    //   features: ["Highly soluble Calcium", "Boron enriched", "Cell wall strengthener"],
    //   benefits: ["Prevents blossom end rot", "Improves fruit firmness", "Reduces physiological disorders"],
    //   crops: "Tomato, Chilli, Apple, and Grapes.",
    //   dosage: "3-5 ml/L foliar spray.",
    //   packSize: "500ml, 1L",
    //   image: vengrowminGold,
    //   contents: "Calcium + Boron + Micronutrients"
    // },
    // {
    //   name: "Nutri Agromin Soil+Powder",
    //   description: "Essential micronutrient supplement designed for livestock and aquaculture feed enrichment.",
    //   features: ["Feed grade safety", "Highly bio-available", "Palatability enhancers"],
    //   benefits: ["Improves weight gain", "Boosts immunity", "Better feed conversion ratio"],
    //   crops: "Livestock and Aquaculture (Fish/Prawn).",
    //   dosage: "5-10 gm per kg of feed.",
    //   packSize: "1kg, 5kg, 25kg",
    //   image: vengrowminGold,
    //   contents: "Animal grade micronutrient mix"
    // },
    //   {
    //   name: "Nutri Aries Total",
    //   description: "A complete nutritional solution covering all 13 essential plant nutrients in one product.",
    //   features: ["Comprehensive NPK + TE", "Single-window nutrition", "Fully soluble"],
    //   benefits: ["Simplifies fertilization", "No need for multiple mixes", "Balanced crop development"],
    //   crops: "Greenhouse crops and High-intensity farming.",
    //   dosage: "5 kg/acre drip application.",
    //   packSize: "5kg, 10kg, 25kg",
    //   image: NUTRI7PADDY,
    //   contents: "NPK + All Micronutrients"
    // },
    ///////////////////////////
  
    // {
    //   name: "Nutri Agromin SA",
    //   description: "Magnesium EDTA chelate for efficient magnesium delivery, essential for chlorophyll production.",
    //   features: ["6% Magnesium EDTA", "100% water soluble", "Non-clogging formula"],
    //   benefits: ["Boosts photosynthesis", "Prevents leaf yellowing", "Increases oil content in seeds"],
    //   crops: "Oilseeds, Pulses, and Fruit crops.",
    //   dosage: "1 gm/L foliar, 1 kg/acre soil.",
    //   packSize: "250gm, 500gm, 1kg",
    //   image: NUTRIMAG,
    //   contents: "Mg as Mg EDTA 6%"
    // },
    // {
    //   name: "Nutri ASA Max Granules",
    //   description: "Enhanced multi-micronutrient formula with added amino acids for superior stress recovery.",
    //   features: ["Amino acid chelated", "Stress-relief technology", "Organic base"],
    //   benefits: ["Faster recovery from damage", "Natural growth stimulation", "Organic matter enrichment"],
    //   crops: "All crops, especially after stress periods.",
    //   dosage: "2 ml/L foliar spray.",
    //   packSize: "500ml, 1L",
    //   image: NUTRI7PADDY,
    //   contents: "Micronutrients + Amino Acids"
    // },
    // {
    //   name: "Nutri Tetrabor Lite",
    //   description: "Water conditioner and nutrient stabilizer for improved spray efficiency and nutrient uptake.",
    //   features: ["pH buffering action", "Hard water softener", "Spreader-sticker properties"],
    //   benefits: ["Better pesticide performance", "Reduced nutrient runoff", "Consistent spray results"],
    //   crops: "All crops during spray applications.",
    //   dosage: "1 ml/L of spray solution.",
    //   packSize: "250ml, 500ml, 1L",
    //   image: NUTRI7PADDY,
    //   contents: "Adjuvants + Micronutrients"
    // },
    {
      name: "Nutri Zinc EDTA",
      description: "Mineral supplement for shell development in aquaculture and mineral enrichment in crops.",
      features: ["Rich in trace minerals", "Supports calcification", "Natural mineral source"],
      benefits: ["Stronger shells in prawns", "Reduces mineral deficiencies", "Improved crop resilience"],
      crops: "Aquaculture and Mineral-heavy crops.",
      dosage: "10-20 kg/acre pond application.",
      packSize: "10kg, 25kg",
      image: NUTRI7PADDY,
      contents: "Marine mineral complex"
    },
    // {
    //   name: "Ferromix",
    //   description: "Zinc-heavy micronutrient formulation for high zinc demand crops and soil conditions.",
    //   features: ["High Zinc concentration", "Synergistic elements", "Liquid formulation"],
    //   benefits: ["Overcomes severe Zn deficiency", "Stimulates enzyme systems", "Improved grain filling"],
    //   crops: "Maize, Paddy, and Sugarcane.",
    //   dosage: "2 ml/L foliar spray.",
    //   packSize: "500ml, 1L, 5L",
    //   image: NUTRI7PADDY,
    //   contents: "Zinc + Multi-micronutrients"
    // },
    // {
    //   name: "Zincbor",
    //   description: "Traditional soil health restorer enriched with essential micronutrients for sustainable farming.",
    //   features: ["Natural soil conditioner", "Micro-element enriched", "Sustainable formula"],
    //   benefits: ["Restores soil vitality", "Improves microbial activity", "Balanced nutrient release"],
    //   crops: "Field crops and Plantation crops.",
    //   dosage: "50-100 kg/acre soil application.",
    //   packSize: "50kg bag",
    //   image: NUTRI7PADDY,
    //   contents: "Soil minerals + Micronutrients"
    // },
    // {
    //   name: "Boromag",
    //   description: "High-density water-soluble fertilizer for peak phosphorus and potassium requirement stages.",
    //   features: ["0% Nitrogen, 52% P, 34% K", "Ultra-pure crystals", "Acidic pH"],
    //   benefits: ["Strong root initiation", "Uniform flowering", "Disease resistance"],
    //   crops: "Fruits, Vegetables, and Flowers.",
    //   dosage: "3-5 kg/acre through drip.",
    //   packSize: "1kg, 5kg, 25kg",
    //   image: NUTRI7PADDY,
    //   contents: "P 52% + K 34%"
    // },
    // {
    //   name: "Mn-Sulf",
    //   description: "Protective micronutrient formulation that acts as a shield against environmental and biological stresses.",
    //   features: ["Immune boosting technology", "Protective film formation", "Trace element support"],
    //   benefits: ["Reduced pest incidence", "Stronger plant defense", "Vigorous growth"],
    //   crops: "Vegetables and Fruit orchards.",
    //   dosage: "2.5 gm/L foliar spray.",
    //   packSize: "500gm, 1kg",
    //   image: NUTRI7PADDY,
    //   contents: "Defense-boosting Micronutrients"
    // },
    // {
    //   name: "Ferromag",
    //   description: "The 'Best-in-Class' all-purpose micronutrient formulation for general agricultural excellence.",
    //   features: ["Premium nutrient balance", "Proven track record", "Maximum purity"],
    //   benefits: ["Guaranteed yield increase", "Universal crop safety", "Top-tier quality produce"],
    //   crops: "All agricultural and horticultural crops.",
    //   dosage: "2 gm/L foliar, 4 kg/acre soil.",
    //   packSize: "1kg, 5kg, 10kg",
    //   image: NUTRI7PADDY,
    //   contents: "Premium Multi-micronutrient mix"
    // },
    // {
    //   name: "Potabor Super",
    //   description: "Liquid phosphorus-rich formulation with trace elements for early growth and energy transfer.",
    //   features: ["Liquid Phosphorus source", "Enhanced mobility", "Fast assimilation"],
    //   benefits: ["Rapid root establishment", "Energy boost for plants", "Uniform growth"],
    //   crops: "Seedlings and Transplanted crops.",
    //   dosage: "3-5 ml/L foliar or drench.",
    //   packSize: "500ml, 1L",
    //   image: NUTRI7PADDY,
    //   contents: "P + Micronutrients"
    // },
    // {
    //   name: "Boron-20",
    //   description: "Highly mobile liquid potassium formulation for finishing stages and fruit quality enhancement.",
    //   features: ["Potassium enriched", "Trace element support", "Liquid convenience"],
    //   benefits: ["Bigger and sweeter fruits", "Better color development", "Drought tolerance"],
    //   crops: "Grapes, Banana, Citrus, and Pomegranate.",
    //   dosage: "3-5 ml/L foliar application.",
    //   packSize: "1L, 5L",
    //   image: NUTRI7PADDY,
    //   contents: "K + Micronutrients"
    // },
    // {
    //   name: "Zincmag",
    //   description: "Granulated micronutrient formulation for easy application and uniform distribution in the field.",
    //   features: ["Uniform granules", "Dust-free application", "Long-lasting effect"],
    //   benefits: ["Easy to spread with seeds/fertilisers", "Reduces application losses", "Steady nutrient release"],
    //   crops: "Paddy, Wheat, and Sugarcane.",
    //   dosage: "10 kg/acre soil application.",
    //   packSize: "10kg, 25kg",
    //   image: NUTRI7PADDY,
    //   contents: "Multi-micronutrient granules"
    // },
    ////////////

    // {
    //   name: "Nutri-Mn",
    //   description: "Fine light brown colored powder, water soluble, prevents interveinal chlorosis of leaves.",
    //   features: ["Induces resistance to pests and diseases", "Water soluble", "Prevents chlorosis"],
    //   benefits: ["Essential for nitrogen metabolism", "Supports enzyme systems", "Improves photosynthesis"],
    //   crops: "Citrus, Cereals, and Sugar beet.",
    //   dosage: "1 gm/L foliar, 500gm/acre drip.",
    //   packSize: "250gm, 500gm, 1kg",
    //   image: agrominGold,
    //   contents: "Nutri-Mn Powder: Mn as Mn EDTA 9%, Nutri-Mn Liquid: Mn as Mn EDTA 8%"
    // },
    // {
    //   name: "Nutri Iron EDTA",
    //   description: "Chelated iron formulation to prevent iron chlorosis and improve plant health.",
    //   features: ["Prevents iron chlorosis", "Improves photosynthesis", "Quick absorption"],
    //   benefits: ["Greenness restorer", "Better electron transport", "High stability in soil"],
    //   crops: "Fruits, Vegetables, and Ornamentals.",
    //   dosage: "0.5 - 1 gm/L foliar spray.",
    //   packSize: "100gm, 250gm, 500gm, 1kg",
    //   image: agrominGold,
    //   contents: "Iron as Fe-EDTA 12%"
    // },
    // {
    //   name: "Nutri Copper",
    //   description: "Chelated copper formulation that supports enzyme activity and disease resistance.",
    //   features: ["Enhances enzyme systems", "Improves plant vigor", "Chelated for better availability"],
    //   benefits: ["Stronger cell walls", "Fungal disease resistance", "Better lignin synthesis"],
    //   crops: "Cereals, Citrus, and Grapes.",
    //   dosage: "0.5 gm/L foliar application.",
    //   packSize: "100gm, 250gm, 500gm",
    //   image: NUTRICOPPER,
    //   contents: "Copper as Cu 24%"
    // },
  ];

  const chelatedNames = ["Vengrowmin Gold","Nutri 7 (soil Application)"]; 
    // "Chelamin plusAgromin Soil+Powder","Agronaa","Antox","Nutri Zinc EDTA","Aquablend Forte","Aquaboost","Aquacal","Aquacan","Aquagold (Feed Supplement)","Nutrimag","Aquamin plus","Aquarite","Aquashell","Aquazin Plus","Aries Bhusatva","Aries Fertimax HD 00:52:34","Aries Kawachh","Aries Sarvottam","Aries Total","Ariphos","Aripotash","ASA Max Granules";
  // const customizedNames = ['Nutri Agromin Gold','Nutri Agromin Max Foliar Spray','Nutri Agripro','Nutri Tracemin','Nutri Mobomin',"Nutri Agromin Foliar Spray Liquid",'Nutri Agromin Soil+Powder','Nutri Aries Total'];
  const chelatedProducts = products.filter(p => chelatedNames.includes(p.name));
  // const customizedProducts = products.filter(p => customizedNames.includes(p.name));
  const otherProducts = products.filter(
    p => !chelatedNames.includes(p.name)
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src='/assets/hero-2.jpg'
              alt="Micronutrients Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Micronutrients
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Essential mineral elements needed in small quantities to unlock healthy growth and maximum yield.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader className="p-0">
                <div className="p-6">
                  <CardTitle className="text-2xl font-bold text-primary">Why Micronutrients Matter</CardTitle>
                </div>
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
              <CardHeader className="p-0">
                <div className="p-6">
                  <CardTitle className="text-2xl font-bold text-primary">Sources and Forms</CardTitle>
                </div>
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
              <CardHeader className="p-0">
                <div className="p-6">
                  <CardTitle className="text-2xl font-bold text-primary">Chelated Micronutrients</CardTitle>
                </div>
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
            {/* <Card>
              <CardHeader className="p-0">
                <div className="p-6">
                  <CardTitle className="text-2xl font-bold text-primary">Customized Micronutrients</CardTitle>
                </div>
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
            </Card> */}
          </div>

          <div className="mb-16">
            <Tabs defaultValue="chelated" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="bg-primary/5 p-1 rounded-2xl border border-primary/10 h-auto">
                  <TabsTrigger value="chelated" className="rounded-xl px-8 py-3 text-sm font-black uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300">
                    Chelated
                  </TabsTrigger>
                  {/* <TabsTrigger value="customized" className="rounded-xl px-8 py-3 text-sm font-black uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300">
                    Customized
                  </TabsTrigger> */}
                  <TabsTrigger value="other" className="rounded-xl px-8 py-3 text-sm font-black uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300">
                    Other
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="chelated" className="space-y-12">
                {chelatedProducts.map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    description={product.description}
                    features={product.features}
                    benefits={product.benefits}
                    crops={product.crops}
                    dosage={product.dosage}
                    packSize={product.packSize}
                    image={product.image}
                    contents={product.contents}
                    badge="CHELATED RANGE"
                  />
                ))}
              </TabsContent>

              {/* <TabsContent value="customized" className="space-y-12">
                {customizedProducts.map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    description={product.description}
                    features={product.features}
                    benefits={product.benefits}
                    crops={product.crops}
                    dosage={product.dosage}
                    packSize={product.packSize}
                    image={product.image}
                    contents={product.contents}
                    badge="CUSTOMIZED RANGE"
                  />
                ))}
              </TabsContent> */}

              <TabsContent value="other" className="space-y-12">
                {otherProducts.map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    description={product.description}
                    features={product.features}
                    benefits={product.benefits}
                    crops={product.crops}
                    dosage={product.dosage}
                    packSize={product.packSize}
                    image={product.image}
                    contents={product.contents}
                    badge="MICRONUTRIENTS"
                  />
                ))}
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Soil Analysis?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our experts provide comprehensive soil testing and personalized micronutrient recommendations.
            </p>
            <Link to="/contact-us">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                Get Expert Advice
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Micronutrients;


