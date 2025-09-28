import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Download, Globe, Users } from 'lucide-react';

const Apps = () => {
  const apps = [
    {
      name: "Sriven Crop Advisor",
      description: "AI-powered crop advisory app providing personalized recommendations for fertilizer application, pest management, and harvest timing.",
      features: ["Crop health monitoring", "Weather alerts", "Fertilizer calculator", "Expert consultation"],
      icon: <Smartphone className="h-8 w-8" />,
    },
    {
      name: "Sriven Distributor Portal",
      description: "Comprehensive platform for our distribution partners to manage orders, track inventory, and access marketing materials.",
      features: ["Order management", "Inventory tracking", "Sales analytics", "Marketing resources"],
      icon: <Users className="h-8 w-8" />,
    },
    {
      name: "BhuParikshak Soil Test",
      description: "Digital soil testing and analysis tool that provides instant soil health reports and customized fertilizer recommendations.",
      features: ["Soil testing", "NPK analysis", "pH monitoring", "Recommendations"],
      icon: <Globe className="h-8 w-8" />,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mobile Apps & Digital Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Empowering farmers and partners with cutting-edge digital tools for better agricultural outcomes and streamlined operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {apps.map((app, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <div className="text-primary">
                      {app.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{app.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6">{app.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {app.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto space-y-3">
                    <Button className="w-full bg-primary hover:bg-primary-dark">
                      <Download className="w-4 h-4 mr-2" />
                      Download App
                    </Button>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Custom Digital Solutions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We develop tailored digital solutions for large-scale farming operations and institutional clients. Contact our digital team to discuss your requirements.
            </p>
            <a href="tel:1234567890">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                Contact Digital Team
              </Button>
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Apps;