import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const allCrops = [
  {
    id: 1,
    name: "Sugarcane",
    slug: "sugarcane",
    image: "https://ariesagro.com/wp-content/uploads/2022/11/sugarcane1.png",
    description: "Comprehensive nutrition solutions for optimal sugarcane growth and yield enhancement."
  },
  {
    id: 2,
    name: "Grape",
    slug: "grape", 
    image: "https://ariesagro.com/wp-content/uploads/2022/11/graps.png",
    description: "Specialized fertilizers and micronutrients for premium grape production."
  },
  {
    id: 3,
    name: "Coffee",
    slug: "coffee",
    image: "https://ariesagro.com/wp-content/uploads/2022/11/Group-1000005293.png",
    description: "Complete nutrition program for coffee plantations and sustainable farming."
  },
  {
    id: 4,
    name: "Cotton",
    slug: "cotton",
    image: "https://ariesagro.com/wp-content/uploads/2022/11/cotton1.png",
    description: "Advanced crop nutrition solutions for high-quality cotton production."
  },
  {
    id: 5,
    name: "Banana",
    slug: "banana",
    image: "https://ariesagro.com/wp-content/uploads/2022/11/banana1.png",
    description: "Tailored nutrition for healthy banana growth and improved fruit quality."
  },
  {
    id: 6,
    name: "Mango",
    slug: "mango",
    image: "https://ariesagro.com/wp-content/uploads/2022/11/mango1.png",
    description: "Specialized fertilizer programs for mango orchards and fruit development."
  },
  {
    id: 7,
    name: "Tomato",
    slug: "tomato",
    image: "https://ariesagro.com/wp-content/uploads/2022/12/tomato-1.jpg",
    description: "Advanced nutrition for healthy tomato fruit development and disease resistance."
  },
  {
    id: 8,
    name: "Wheat",
    slug: "wheat",
    image: "https://ariesagro.com/wp-content/uploads/2022/12/wheat-1.jpg",
    description: "Complete nutrition for high-quality wheat grain production and protein content."
  },
  {
    id: 9,
    name: "Paddy",
    slug: "paddy",
    image: "https://ariesagro.com/wp-content/uploads/2022/12/paddy-1.jpg",
    description: "Specialized nutrients for healthy rice grain production and tillering."
  },
  {
    id: 10,
    name: "Chilli",
    slug: "chilli",
    image: "https://ariesagro.com/wp-content/uploads/2022/12/chilli-1.jpg",
    description: "Premium nutrition for spicy and quality chilli production with enhanced pungency."
  },
  {
    id: 11,
    name: "Cashew Nut",
    slug: "cashew-nut",
    image: "https://ariesagro.com/wp-content/uploads/2022/12/cashew-1.jpg",
    description: "Specialized nutrients for quality cashew nut development and tree health."
  },
  {
    id: 12,
    name: "Pomegranate",
    slug: "pomegranate",
    image: "https://ariesagro.com/wp-content/uploads/2022/11/pomegranate1.png",
    description: "Complete nutrition solutions for pomegranate cultivation and yield optimization."
  },
  {
    id: 13,
    name: "Rose",
    slug: "rose",
    image: "https://ariesagro.com/wp-content/uploads/2022/11/rose1.png",
    description: "Premium fertilizers for rose cultivation and flower quality enhancement."
  },
  {
    id: 14,
    name: "Turmeric",
    slug: "turmeric",
    image: "https://ariesagro.com/wp-content/uploads/2022/11/turmeric1.png",
    description: "Organic nutrition solutions for turmeric farming and curcumin content."
  },
  {
    id: 15,
    name: "Potato",
    slug: "potato",
    image: "https://ariesagro.com/wp-content/uploads/2022/12/potato-1.jpg",
    description: "Balanced nutrition for healthy potato tuber development and storage quality."
  },
  {
    id: 16,
    name: "Cauliflower",
    slug: "cauliflower",
    image: "https://ariesagro.com/wp-content/uploads/2022/12/cauliflower-1.jpg",
    description: "Premium nutrition for quality cauliflower curd development and disease resistance."
  },
  {
    id: 17,
    name: "Citrus",
    slug: "citrus",
    image: "https://ariesagro.com/wp-content/uploads/2022/12/citrus-1.jpg",
    description: "Complete citrus care solutions for healthy trees and premium quality fruits."
  },
  {
    id: 18,
    name: "Maize",
    slug: "maize",
    image: "https://ariesagro.com/wp-content/uploads/2022/12/maize-1.jpg",
    description: "Comprehensive maize nutrition for maximum yield and grain quality."
  },
  {
    id: 19,
    name: "Onion",
    slug: "onion",
    image: "https://ariesagro.com/wp-content/uploads/2022/12/onion-1.jpg",
    description: "Complete onion cultivation solutions for uniform bulbs with excellent storage quality."
  },
  {
    id: 20,
    name: "Ginger",
    slug: "ginger",
    image: "https://ariesagro.com/wp-content/uploads/2022/12/ginger-1.jpg",
    description: "Specialized ginger cultivation solutions for premium quality rhizomes."
  },
  {
    id: 21,
    name: "Watermelon",
    slug: "watermelon",
    image: "https://ariesagro.com/wp-content/uploads/2022/12/watermelon-1.jpg",
    description: "Complete watermelon cultivation solutions for sweet, juicy fruits."
  },
  {
    id: 22,
    name: "Groundnut",
    slug: "groundnut",
    image: "https://ariesagro.com/wp-content/uploads/2022/12/groundnut-1.jpg",
    description: "Comprehensive groundnut cultivation solutions for high-quality pods with excellent oil content."
  },
  {
    id: 23,
    name: "Cocoa",
    slug: "cocoa",
    image: "https://ariesagro.com/wp-content/uploads/2022/12/cocoa-1.jpg",
    description: "Specialized cocoa cultivation solutions for premium chocolate production."
  },
  {
    id: 24,
    name: "Papaya",
    slug: "papaya",
    image: "https://ariesagro.com/wp-content/uploads/2022/12/papaya-1.jpg",
    description: "Complete papaya cultivation solutions for sweet, nutritious fruits."
  }
];

const Crops = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Crop Specific Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Nutrient management is critical in order to increase or maintain crop yields. To meet crop needs throughout a growing season soil fertility must be consistently high. For proper growth and to achieve good yield, plants should receive fertilizers that meet their nutrient requirements because each crop extracts nutrients from the soil at different levels.
            </p>
            <p className="text-lg text-muted-foreground">
              Crop-specific or blended fertilizers are produced based on the specific crop nutrient requirement and provides the required essential nutrients in optimum proportions resulting in improved quality and enhanced yields.
            </p>
          </div>
        </div>
      </section>

      {/* Crops Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Crop Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sriven Organics offers specialized nutrition solutions for a wide range of crops, ensuring optimal growth and maximum yields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCrops.map((crop) => (
              <Card 
                key={crop.id} 
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => navigate(`/crops/${crop.slug}`)}
              >
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/10">
                    <img
                      src={crop.image}
                      alt={crop.name}
                      className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{crop.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {crop.description}
                    </p>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Need Custom Crop Solutions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team of experts can help you develop customized nutrition programs for your specific crops and growing conditions.
          </p>
          <a href="tel:1234567890">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link to="/contact-us" className="block text-background/80 hover:text-background transition-colors">Contact Our Experts</Link>
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Crops;