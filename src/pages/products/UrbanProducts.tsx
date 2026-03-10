import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import agrominGold from '@/assets/agromin-gold.png';
import { Link } from 'react-router-dom';

const UrbanProducts = () => {
  const products = [
    {
      name: "Garden Care Kit",
      description: "Complete nutrient and care kit for home gardens and balcony plants.",
      image: agrominGold,
    },
    {
      name: "Indoor Plant Nutrients",
      description: "Balanced nutrition for indoor plants tailored for low-light conditions.",
      image: agrominGold,
    },
    {
      name: "Balcony Farming Kit",
      description: "Compact set designed for balcony vegetable and herb cultivation.",
      image: agrominGold,
    },
    {
      name: "Terrace Garden Soil Mix",
      description: "Optimized substrate blend for terrace gardening and raised beds.",
      image: agrominGold,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Urban Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A range of Products for Urban Farming, ready to nourish Urban Gardens. Designed for small spaces, easy application, and consistent results for urban gardeners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
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
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need an Urban Garden Plan?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get guidance on setting up balcony and terrace gardens, custom nutrient schedules, and watering plans.
            </p>
            <a href="tel:1234567890">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                <Link to="/contact-us" className="block text-background/80 hover:text-background transition-colors">Talk to Our Team</Link>
              </Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UrbanProducts;
