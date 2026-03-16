import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import agrominGold from '@/assets/agromin-gold.png';
import { Link } from 'react-router-dom';

const HydrominRange = () => {
  const products = [
    {
      name: "Hydromin 19:19:19",
      description: "Fully water-soluble balanced NPK with micronutrients.",
      image: agrominGold,
    },
    {
      name: "Hydromin 12:61:00",
      description: "High phosphorus soluble for root and early growth.",
      image: agrominGold,
    },
    {
      name: "Hydromin 00:52:34",
      description: "High P and K for flowering and fruiting stages.",
      image: agrominGold,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/20">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Hydromin Range
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized water‑soluble fertilizers formulated for precision fertigation and foliar feeding across crop stages.
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
              Want a Stage-wise Program?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Build a Hydromin schedule for rooting, vegetative, flowering, and fruiting phases.
            </p>
            <a href="tel:1234567890">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                <Link to="/contact-us" className="block text-background/80 hover:text-background transition-colors">Build Schedule</Link>
              </Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HydrominRange;
