import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import agrominGold from '@/assets/agromin-gold.jpg';
import VENGROW19_19_19 from '@/assets/19_19_19.jpg';
import VENGROW13_0_45 from '@/assets/13_00_45.jpg';
import vengrowCN from '@/assets/vengrowCN.jpg';
import dummy from '@/assets/dummy.png';

const WaterSolubleNPK = () => {
  const products = [
    {
      name: "Vengrow 19:19:19",
      npk: "19:19:19",
      description: "Balanced NPK for all-purpose fertigation and foliar application. It provides equal amounts of Nitrogen, Phosphorus, and Potassium to support all stages of crop development.",
      features: [
        "100% Water Soluble",
        "Balanced formulation for all crops",
        "Free from Sodium and Chlorides",
        "Quickly absorbed by plants"
      ],
      benefits: [
        "Promotes overall plant growth",
        "Increases resistance to diseases and pests",
        "Improves crop quality and yield",
        "Enhances chlorophyll production"
      ],
      crops: "Suitable for all field crops, vegetables, fruits, and flowers.",
      dosage: "Foliar Spray: 2-3 gm/liter of water. Fertigation: 3-5 kg/acre.",
      packSize: "1kg, 5kg, 10kg, 25kg",
      image: VENGROW19_19_19,
    },
    {
      name: "Vengrow 20:20:20",
      npk: "20:20:20",
      description: "High analysis balanced fertilizer for intensive farming. Ideal for high-yielding varieties and greenhouse cultivation where precise nutrition is required.",
      features: [
        "High nutrient concentration",
        "Uniform particle size",
        "Compatible with most pesticides",
        "Neutral pH in solution"
      ],
      benefits: [
        "Boosts vegetative growth significantly",
        "Improves root development",
        "Ensures uniform flowering and fruit set",
        "Maximizes photosynthetic efficiency"
      ],
      crops: "Greenhouse crops, high-value vegetables, and fruit orchards.",
      dosage: "Foliar Spray: 2 gm/liter of water. Fertigation: 2-4 kg/acre.",
      packSize: "1kg, 5kg, 10kg",
      image: dummy,
    },
    {
      name: "Vengrow 13:00:45",
      npk: "13:0:45",
      description: "High potassium formula for fruit development and quality. It contains Potassium Nitrate which is an ideal source of Potassium and Nitrogen for finishing stages.",
      features: [
        "Rich in Nitrate Nitrogen",
        "Low salt index",
        "Highest purity potassium source",
        "Excellent for finishing stages"
      ],
      benefits: [
        "Improves fruit size, color, and sugar content",
        "Enhances shelf life of harvested produce",
        "Increases drought tolerance",
        "Reduces fruit drop and cracking"
      ],
      crops: "Grapes, Citrus, Tomato, Potato, and other fruiting crops.",
      dosage: "Foliar Spray: 3-5 gm/liter of water. Fertigation: 5 kg/acre.",
      packSize: "1kg, 5kg, 10kg, 25kg",
      image: VENGROW13_0_45,
    },
    {
      name: "Vengrow 12:61:00",
      npk: "12:61:0",
      description: "High phosphorus for root development and flowering. Mono Ammonium Phosphorus (MAP) is the best source for phosphorus during early growth and flower initiation.",
      features: [
        "Highest phosphorus content among water solubles",
        "Low pH prevents clogging of emitters",
        "Ammoniacal nitrogen supports P uptake",
        "Fastest phosphorus availability"
      ],
      benefits: [
        "Ensures vigorous root establishment",
        "Promotes early and uniform flowering",
        "Improves energy transfer within the plant",
        "Prevents flower and bud shedding"
      ],
      crops: "Cotton, Groundnut, Pulse crops, and early stage vegetables.",
      dosage: "Foliar Spray: 2-3 gm/liter of water. Fertigation: 3-5 kg/acre.",
      packSize: "1kg, 5kg, 10kg",
      image: dummy,
    },
    {
      name: "Vengrow 00:00:50",
      npk: "00:00:50",
      description: "High nitrogen for vigorous vegetative growth. Ideal for leafy vegetables and early crop stages where rapid foliage development is required.",
      features: [
        "High urea and nitrate nitrogen content",
        "Supports rapid biomass production",
        "Includes essential trace elements",
        "Quick greening effect"
      ],
      benefits: [
        "Accelerates vegetative growth",
        "Produces lush green foliage",
        "Increases leaf size and number",
        "Ideal for recovering from stress"
      ],
      crops: "Tea, Coffee, Leafy vegetables, and early stage Sugarcane.",
      dosage: "Foliar Spray: 2 gm/liter of water. Fertigation: 2-3 kg/acre.",
      packSize: "1kg, 5kg",
      image: dummy,
    },
    {
      name: "Vengrow 28:28:00",
      npk: "28:28:00",
      description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
      features: [
        "Enriched with TE (Trace Elements)",
        "Perfectly balanced nutrient ratio",
        "Stable formulation for long storage",
        "Highly compatible for mixing"
      ],
      benefits: [
        "Prevents hidden micronutrient deficiencies",
        "Ensures steady and balanced growth",
        "Maintains soil and plant health",
        "Cost-effective all-in-one solution"
      ],
      crops: "All crops, particularly useful for maintenance stages.",
      dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
      packSize: "1kg, 5kg, 10kg, 25kg",
      image: dummy,
    },
    {
      name: "Vengrow CN",
      // npk: "",
      description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
      features: [
        "Enriched with TE (Trace Elements)",
        "Perfectly balanced nutrient ratio",
        "Stable formulation for long storage",
        "Highly compatible for mixing"
      ],
      benefits: [
        "Prevents hidden micronutrient deficiencies",
        "Ensures steady and balanced growth",
        "Maintains soil and plant health",
        "Cost-effective all-in-one solution"
      ],
      crops: "All crops, particularly useful for maintenance stages.",
      dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
      packSize: "1kg, 5kg, 10kg, 25kg",
      image: vengrowCN,
    },
     {
      name: "Vengrow NPKS",
      npk: "",
      description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
      features: [
        "Enriched with TE (Trace Elements)",
        "Perfectly balanced nutrient ratio",
        "Stable formulation for long storage",
        "Highly compatible for mixing"
      ],
      benefits: [
        "Prevents hidden micronutrient deficiencies",
        "Ensures steady and balanced growth",
        "Maintains soil and plant health",
        "Cost-effective all-in-one solution"
      ],
      crops: "All crops, particularly useful for maintenance stages.",
      dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
      packSize: "1kg, 5kg, 10kg, 25kg",
      image: dummy,
    },
    //  {
    //   name: "Nutri Agromin Max Foliar Spray",
    //   npk: "15:15:15",
    //   description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
    //   features: [
    //     "Enriched with TE (Trace Elements)",
    //     "Perfectly balanced nutrient ratio",
    //     "Stable formulation for long storage",
    //     "Highly compatible for mixing"
    //   ],
    //   benefits: [
    //     "Prevents hidden micronutrient deficiencies",
    //     "Ensures steady and balanced growth",
    //     "Maintains soil and plant health",
    //     "Cost-effective all-in-one solution"
    //   ],
    //   crops: "All crops, particularly useful for maintenance stages.",
    //   dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
    //   packSize: "1kg, 5kg, 10kg, 25kg",
    //   image: agrominGold,
    // },
    //  {
    //   name: "Nutri Agromin SA",
    //   npk: "15:15:15",
    //   description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
    //   features: [
    //     "Enriched with TE (Trace Elements)",
    //     "Perfectly balanced nutrient ratio",
    //     "Stable formulation for long storage",
    //     "Highly compatible for mixing"
    //   ],
    //   benefits: [
    //     "Prevents hidden micronutrient deficiencies",
    //     "Ensures steady and balanced growth",
    //     "Maintains soil and plant health",
    //     "Cost-effective all-in-one solution"
    //   ],
    //   crops: "All crops, particularly useful for maintenance stages.",
    //   dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
    //   packSize: "1kg, 5kg, 10kg, 25kg",
    //   image: agrominGold,
    // },
    //  {
    //   name: "Nutri ProZinc",
    //   npk: "15:15:15",
    //   description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
    //   features: [
    //     "Enriched with TE (Trace Elements)",
    //     "Perfectly balanced nutrient ratio",
    //     "Stable formulation for long storage",
    //     "Highly compatible for mixing"
    //   ],
    //   benefits: [
    //     "Prevents hidden micronutrient deficiencies",
    //     "Ensures steady and balanced growth",
    //     "Maintains soil and plant health",
    //     "Cost-effective all-in-one solution"
    //   ],
    //   crops: "All crops, particularly useful for maintenance stages.",
    //   dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
    //   packSize: "1kg, 5kg, 10kg, 25kg",
    //   image: agrominGold,
    // },
    //  {
    //   name: "Nutri Agripro",
    //   npk: "15:15:15",
    //   description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
    //   features: [
    //     "Enriched with TE (Trace Elements)",
    //     "Perfectly balanced nutrient ratio",
    //     "Stable formulation for long storage",
    //     "Highly compatible for mixing"
    //   ],
    //   benefits: [
    //     "Prevents hidden micronutrient deficiencies",
    //     "Ensures steady and balanced growth",
    //     "Maintains soil and plant health",
    //     "Cost-effective all-in-one solution"
    //   ],
    //   crops: "All crops, particularly useful for maintenance stages.",
    //   dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
    //   packSize: "1kg, 5kg, 10kg, 25kg",
    //   image: agrominGold,
    // },
    //  {
    //   name: "Nutri Tracemin",
    //   npk: "15:15:15",
    //   description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
    //   features: [
    //     "Enriched with TE (Trace Elements)",
    //     "Perfectly balanced nutrient ratio",
    //     "Stable formulation for long storage",
    //     "Highly compatible for mixing"
    //   ],
    //   benefits: [
    //     "Prevents hidden micronutrient deficiencies",
    //     "Ensures steady and balanced growth",
    //     "Maintains soil and plant health",
    //     "Cost-effective all-in-one solution"
    //   ],
    //   crops: "All crops, particularly useful for maintenance stages.",
    //   dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
    //   packSize: "1kg, 5kg, 10kg, 25kg",
    //   image: agrominGold,
    // },
    //  {
    //   name: "Nutri Chelamin Gold",
    //   npk: "15:15:15",
    //   description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
    //   features: [
    //     "Enriched with TE (Trace Elements)",
    //     "Perfectly balanced nutrient ratio",
    //     "Stable formulation for long storage",
    //     "Highly compatible for mixing"
    //   ],
    //   benefits: [
    //     "Prevents hidden micronutrient deficiencies",
    //     "Ensures steady and balanced growth",
    //     "Maintains soil and plant health",
    //     "Cost-effective all-in-one solution"
    //   ],
    //   crops: "All crops, particularly useful for maintenance stages.",
    //   dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
    //   packSize: "1kg, 5kg, 10kg, 25kg",
    //   image: agrominGold,
    // },
    //  {
    //   name: "Nutri Calpro",
    //   npk: "15:15:15",
    //   description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
    //   features: [
    //     "Enriched with TE (Trace Elements)",
    //     "Perfectly balanced nutrient ratio",
    //     "Stable formulation for long storage",
    //     "Highly compatible for mixing"
    //   ],
    //   benefits: [
    //     "Prevents hidden micronutrient deficiencies",
    //     "Ensures steady and balanced growth",
    //     "Maintains soil and plant health",
    //     "Cost-effective all-in-one solution"
    //   ],
    //   crops: "All crops, particularly useful for maintenance stages.",
    //   dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
    //   packSize: "1kg, 5kg, 10kg, 25kg",
    //   image: agrominGold,
    // },
    //  {
    //   name: "Nutri Chelacop",
    //   npk: "15:15:15",
    //   description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
    //   features: [
    //     "Enriched with TE (Trace Elements)",
    //     "Perfectly balanced nutrient ratio",
    //     "Stable formulation for long storage",
    //     "Highly compatible for mixing"
    //   ],
    //   benefits: [
    //     "Prevents hidden micronutrient deficiencies",
    //     "Ensures steady and balanced growth",
    //     "Maintains soil and plant health",
    //     "Cost-effective all-in-one solution"
    //   ],
    //   crops: "All crops, particularly useful for maintenance stages.",
    //   dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
    //   packSize: "1kg, 5kg, 10kg, 25kg",
    //   image: agrominGold,
    // },
    //   {
    //   name: "Nutri Chelamag",
    //   npk: "15:15:15",
    //   description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
    //   features: [
    //     "Enriched with TE (Trace Elements)",
    //     "Perfectly balanced nutrient ratio",
    //     "Stable formulation for long storage",
    //     "Highly compatible for mixing"
    //   ],
    //   benefits: [
    //     "Prevents hidden micronutrient deficiencies",
    //     "Ensures steady and balanced growth",
    //     "Maintains soil and plant health",
    //     "Cost-effective all-in-one solution"
    //   ],
    //   crops: "All crops, particularly useful for maintenance stages.",
    //   dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
    //   packSize: "1kg, 5kg, 10kg, 25kg",
    //   image: agrominGold,
    // },
    //   {
    //   name: "Nutri Chelacal",
    //   npk: "15:15:15",
    //   description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
    //   features: [
    //     "Enriched with TE (Trace Elements)",
    //     "Perfectly balanced nutrient ratio",
    //     "Stable formulation for long storage",
    //     "Highly compatible for mixing"
    //   ],
    //   benefits: [
    //     "Prevents hidden micronutrient deficiencies",
    //     "Ensures steady and balanced growth",
    //     "Maintains soil and plant health",
    //     "Cost-effective all-in-one solution"
    //   ],
    //   crops: "All crops, particularly useful for maintenance stages.",
    //   dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
    //   packSize: "1kg, 5kg, 10kg, 25kg",
    //   image: agrominGold,
    // },
    //   {
    //   name: "Nutri Chelafer",
    //   npk: "15:15:15",
    //   description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
    //   features: [
    //     "Enriched with TE (Trace Elements)",
    //     "Perfectly balanced nutrient ratio",
    //     "Stable formulation for long storage",
    //     "Highly compatible for mixing"
    //   ],
    //   benefits: [
    //     "Prevents hidden micronutrient deficiencies",
    //     "Ensures steady and balanced growth",
    //     "Maintains soil and plant health",
    //     "Cost-effective all-in-one solution"
    //   ],
    //   crops: "All crops, particularly useful for maintenance stages.",
    //   dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
    //   packSize: "1kg, 5kg, 10kg, 25kg",
    //   image: agrominGold,
    // },
    //   {
    //   name: "Nutri Mobomin",
    //   npk: "15:15:15",
    //   description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
    //   features: [
    //     "Enriched with TE (Trace Elements)",
    //     "Perfectly balanced nutrient ratio",
    //     "Stable formulation for long storage",
    //     "Highly compatible for mixing"
    //   ],
    //   benefits: [
    //     "Prevents hidden micronutrient deficiencies",
    //     "Ensures steady and balanced growth",
    //     "Maintains soil and plant health",
    //     "Cost-effective all-in-one solution"
    //   ],
    //   crops: "All crops, particularly useful for maintenance stages.",
    //   dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
    //   packSize: "1kg, 5kg, 10kg, 25kg",
    //   image: agrominGold,
    // },
    //   {
    //   name: "Nutri Agromin Foliar Spray Liquid",
    //   npk: "15:15:15",
    //   description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
    //   features: [
    //     "Enriched with TE (Trace Elements)",
    //     "Perfectly balanced nutrient ratio",
    //     "Stable formulation for long storage",
    //     "Highly compatible for mixing"
    //   ],
    //   benefits: [
    //     "Prevents hidden micronutrient deficiencies",
    //     "Ensures steady and balanced growth",
    //     "Maintains soil and plant health",
    //     "Cost-effective all-in-one solution"
    //   ],
    //   crops: "All crops, particularly useful for maintenance stages.",
    //   dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
    //   packSize: "1kg, 5kg, 10kg, 25kg",
    //   image: agrominGold,
    // },
    //   {
    //   name: "Nutri ASA Max Granules",
    //   npk: "15:15:15",
    //   description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
    //   features: [
    //     "Enriched with TE (Trace Elements)",
    //     "Perfectly balanced nutrient ratio",
    //     "Stable formulation for long storage",
    //     "Highly compatible for mixing"
    //   ],
    //   benefits: [
    //     "Prevents hidden micronutrient deficiencies",
    //     "Ensures steady and balanced growth",
    //     "Maintains soil and plant health",
    //     "Cost-effective all-in-one solution"
    //   ],
    //   crops: "All crops, particularly useful for maintenance stages.",
    //   dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
    //   packSize: "1kg, 5kg, 10kg, 25kg",
    //   image: agrominGold,
    // },
    //   {
    //   name: "Nutri Agromin Soil+Powder",
    //   npk: "15:15:15",
    //   description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
    //   features: [
    //     "Enriched with TE (Trace Elements)",
    //     "Perfectly balanced nutrient ratio",
    //     "Stable formulation for long storage",
    //     "Highly compatible for mixing"
    //   ],
    //   benefits: [
    //     "Prevents hidden micronutrient deficiencies",
    //     "Ensures steady and balanced growth",
    //     "Maintains soil and plant health",
    //     "Cost-effective all-in-one solution"
    //   ],
    //   crops: "All crops, particularly useful for maintenance stages.",
    //   dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
    //   packSize: "1kg, 5kg, 10kg, 25kg",
    //   image: agrominGold,
    // },
    //   {
    //   name: "Nutri Aries Total",
    //   npk: "15:15:15",
    //   description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
    //   features: [
    //     "Enriched with TE (Trace Elements)",
    //     "Perfectly balanced nutrient ratio",
    //     "Stable formulation for long storage",
    //     "Highly compatible for mixing"
    //   ],
    //   benefits: [
    //     "Prevents hidden micronutrient deficiencies",
    //     "Ensures steady and balanced growth",
    //     "Maintains soil and plant health",
    //     "Cost-effective all-in-one solution"
    //   ],
    //   crops: "All crops, particularly useful for maintenance stages.",
    //   dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
    //   packSize: "1kg, 5kg, 10kg, 25kg",
    //   image: agrominGold,
    // },
    //   {
    //   name: "Nutri Tetrabor Lite",
    //   npk: "15:15:15",
    //   description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
    //   features: [
    //     "Enriched with TE (Trace Elements)",
    //     "Perfectly balanced nutrient ratio",
    //     "Stable formulation for long storage",
    //     "Highly compatible for mixing"
    //   ],
    //   benefits: [
    //     "Prevents hidden micronutrient deficiencies",
    //     "Ensures steady and balanced growth",
    //     "Maintains soil and plant health",
    //     "Cost-effective all-in-one solution"
    //   ],
    //   crops: "All crops, particularly useful for maintenance stages.",
    //   dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
    //   packSize: "1kg, 5kg, 10kg, 25kg",
    //   image: agrominGold,
    // },
    //   {
    //   name: "Nutri Zn-sulf",
    //   npk: "15:15:15",
    //   description: "Balanced nutrition with micronutrients included. A versatile formula that provides all major and minor nutrients in one application.",
    //   features: [
    //     "Enriched with TE (Trace Elements)",
    //     "Perfectly balanced nutrient ratio",
    //     "Stable formulation for long storage",
    //     "Highly compatible for mixing"
    //   ],
    //   benefits: [
    //     "Prevents hidden micronutrient deficiencies",
    //     "Ensures steady and balanced growth",
    //     "Maintains soil and plant health",
    //     "Cost-effective all-in-one solution"
    //   ],
    //   crops: "All crops, particularly useful for maintenance stages.",
    //   dosage: "Foliar Spray: 3 gm/liter of water. Fertigation: 4-5 kg/acre.",
    //   packSize: "1kg, 5kg, 10kg, 25kg",
    //   image: agrominGold,
    // },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src='/assets/hero-2.jpg'
              alt="Water Soluble NPK Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Water Soluble NPK
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Optimum combination of Nitrogen, Phosphorous, and Potassium for maximum crop uptake.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-20">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Application Methods
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Drip irrigation systems
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Foliar spray application
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Hydroponic cultivation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Soil application through irrigation
                </li>
              </ul>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Key Advantages
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  100% water soluble
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Quick nutrient availability
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Uniform nutrient distribution
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  No soil residue accumulation
                </li>
              </ul>
            </Card>
          </div>
          <div className="space-y-16 mb-16">
            {products.map((product, index) => (
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
                badge="VENGROW SERIES"
                extraHeaderInfo={
                  product.npk?.trim() ? (
          <div className="bg-primary/10 px-6 py-3 rounded-2xl border border-primary/20">
            <span className="text-2xl font-black text-primary tracking-tighter">
              {product.npk}
            </span>
            <span className="text-[10px] font-bold text-primary/60 block uppercase tracking-widest text-center mt-1">
              NPK Ratio
            </span>
          </div>
        ) : null
                }
              />
            ))}
          </div>
          
         
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Fertigation Program Design?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our agronomists can design customized fertigation programs for your specific crops and growing conditions.
            </p>
            <Link to="/contact-us">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                 Get Fertigation Program
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WaterSolubleNPK;


