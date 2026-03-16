import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import aboutCompany from '@/assets/about-company.jpg';
const AboutUs = () => {
  const milestones = [
    { year: "2016", title: "Foundation", description: "Sriven Organics was founded with small team at humble beginnings" },
    { year: "2018", title: "Agricultural Expansion", description: "Diversified into nutrients for plants with introduction of metal chelates" },
    { year: "2020", title: "Manufacturing Growth", description: "Established first dedicated manufacturing facility" },
    { year: "2021", title: "Innovation Focus", description: "Launched corporate R&D initiatives for sustainable agriculture" },
    { year: "2022", title: "Digital Transformation", description: "Embraced technology to serve farmers better" },
    { year: "2022", title: "Sustainable Future", description: "Committed to eco-friendly and organic agricultural solutions" }
  ];

  const awards = [
    { title: "Excellence in Agriculture", year: "2023", org: "Ministry of Agriculture" },
    { title: "Innovative Product Award", year: "2022", org: "Agri-Tech India" },
    { title: "Sustainable Farming Award", year: "2021", org: "Green India Initiative" },
    { title: "Quality Excellence", year: "2020", org: "Agricultural Chamber" }
  ];

  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "1M+", label: "Farmers Served" },
    { number: "150+", label: "Products" },
    { number: "5+", label: "States Covered" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/20">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                About Sriven Organics
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Sriven Organics was founded with a vision to provide world-class agricultural solutions. We are in the business of manufacturing micronutrients and other customized nutritional products for plants, helping farmers achieve better yields and sustainable farming practices.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutCompany}
                alt="About Sriven Organics"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
          
          <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Company Overview
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Sriven Organics Ltd. was founded by Mr. Yampati Vijaya Bhaskara Reddy  and Mr. Samba Siva Reddy in 2016. We are in the business of manufacturing of micronutrients and other customized nutritional products for plants and animals. We started our activity by manufacturing a small range of mineral feed additives for animals & birds and then diversified into mineral additives for agriculture use.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                In 2016, we diversified into nutrients for plants. We conducted research on compounds that could deliver mineral nutrients to plants more efficiently. This research identified "Metal Chelates".
              </p>
              
         
              
            
            </div>
          </div>
        </div>
      </main>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg">
                  Empowering farmers everywhere, with our versatile range of agricultural solutions, Sriven Organics aims to be a global leader in specialized, sustainable & cost effective agricultural inputs.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg">
                  Build on our stellar legacy as a market leader & expand our unique range of quality products & solutions globally. Continue being recognized as a responsible, robust and profitable business that serves farmers worldwide.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Company Journey */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full lg:w-5/12 ${index % 2 === 1 ? 'text-right' : ''}`}>
                      <Card className="p-6">
                        <CardContent className="p-0">
                          <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
         

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Quality</h3>
                  <p className="text-muted-foreground">
                    We are committed to delivering the highest quality products that meet international standards and exceed farmer expectations.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    Continuous research and development drives our innovation in sustainable agricultural solutions for modern farming challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Sustainability</h3>
                  <p className="text-muted-foreground">
                    Environmental responsibility guides our operations, ensuring sustainable practices that protect our planet for future generations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of farmers who trust Sriven Organics for their agricultural success. Let's grow together towards a sustainable future.
              </p>
              <div className="flex justify-center">
                <a href="tel:1234567890">
                  <Button size="lg" className="bg-primary hover:bg-primary-dark">
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
