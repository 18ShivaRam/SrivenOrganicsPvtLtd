import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Equipment = () => {
  const equipmentList = [
    {
      name: "Agriculture Drones",
      description: "Advanced aerial application systems for precise nutrient delivery, crop monitoring, and efficient farming operations.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
      link: "/agriculture-drones"
    },
    {
      name: "Aries Electronic Soil Testing Kit",
      description: "Comprehensive electronic soil analysis equipment for accurate nutrient management and soil health assessment.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      link: "/soil-testing-kits"
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              ARIES AGRO AGRICULTURAL EQUIPMENT
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Advanced agricultural equipment and technology solutions to support modern farming practices and maximize productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {equipmentList.map((equipment, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={equipment.image}
                    alt={equipment.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{equipment.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">{equipment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Equipment Support?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our technical team provides comprehensive support for equipment selection, installation, and maintenance to ensure optimal performance.
            </p>
            <a href="tel:1234567890">
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                Contact Equipment Team
              </Button>
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Equipment;