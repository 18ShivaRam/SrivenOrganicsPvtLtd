import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Coffee = () => {
  const products = [
    "Magnesium Sulphate",
    "Potassium Sulphate",
    "Nutri Iron EDTA",
    "NutriZinc EDTA",
    "Manganese Sulphate",
    "Boron EDTA",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/20">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Coffee Nutrition
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Coffee plants require specific micronutrients for optimal bean development, flavor enhancement, and disease resistance. Our products ensure premium coffee quality and consistent yields.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">+20%</div>
                  <div className="text-sm text-muted-foreground">Bean Quality</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">+15%</div>
                  <div className="text-sm text-muted-foreground">Yield Increase</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://www.ariesagro.com/wp-content/uploads/2022/11/Group-1000005293.png"
                alt="Coffee"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Recommended Products for Coffee
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-3">{product}</h3>
                    <p className="text-muted-foreground mb-4">
                      Specialized nutrition for premium coffee bean development.
                    </p>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Enhance Your Coffee Quality
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Discover our specialized nutrition programs for different coffee varieties and growing regions.
            </p>
            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                Explore Coffee Solutions
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Coffee;
