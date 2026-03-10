import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import agrominGold from '@/assets/agromin-gold.png';
import { Link } from 'react-router-dom';

const OtherProducts = () => {
  const products = [
    {
      name: "Soil pH Adjuster",
      description: "Helps correct soil pH for better nutrient availability.",
      image: agrominGold,
    },
    {
      name: "Water Conditioner",
      description: "Improves irrigation water quality and nutrient compatibility.",
      image: agrominGold,
    },
    {
      name: "Sticker-Spreaders",
      description: "Enhances spray coverage and adhesion for foliar applications.",
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
              Other Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complementary inputs that enhance nutrient efficiency, application performance, and overall crop health.
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
              Unsure Which Additive to Use?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We help select adjuvants and conditioners that improve spray efficacy and nutrient delivery.
            </p>
            <a href="tel:1234567890">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                <Link to="/contact-us" className="block text-background/80 hover:text-background transition-colors">Get Recommendation</Link>
              </Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OtherProducts;
