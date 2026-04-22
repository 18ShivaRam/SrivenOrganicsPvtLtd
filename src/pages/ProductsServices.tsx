import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProductsServices = () => {
  const productCategories = [
    {
      title: "Micronutrients",
      description: "Micronutrients consist of a fine blend of mineral elements comprising of Zinc (Zn), Copper (Cu), Manganese (Mn), Iron (Fe), Boron (B), Molybdenum (Mo).",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/12/micronutrients-1.jpg",
      products: ["Nutri Vengrowmin Gold", "Nutri Zinc EDTA", "Nutri Iron EDTA", "Nutri Boron EDTA", "Nutri Manganese EDTA"],
      route: "/products/micronutrients"
    },
    {
      title: "Water Soluble NPK",
      description: "A water-soluble fertilizer with an optimum combination of Nitrogen, Phosphorous, Potassium, and Sodium. It is readily soluble in water and is best for drip irrigation and foliar application.",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/12/npk-1.jpg",
      products: ["Nutri Fertimax HD", "Nutri Macrofert 20:20:20", "Nutri Plantex 19:19:19", "Nutri Potassium Sulphate"],
      route: "/products/water-soluble-npk"
    },
    {
      title: "Biostimulants ",
      description: "Checkout a range of highly productive Biostimulants  products that can be used for protecting complete farms and crops from all kinds of threats.",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/12/plant-protection-1.jpg",
      products: ["Nutri Mycin", "Nutri Bio Fungicide", "Nutri Bacterial Control", "Nutri Neem Protectant"],
      route: "/products/plant-protection"
    },
    {
      title: "Organic/Bio Products",
      description: "Bioproducts are products that are made from biomass. The meaning of biomass is any type of organic material that is available on a renewable basis.",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/12/organic-1.jpg",
      products: ["Nutri Haasil", "Nutri Plant Strengthener", "Nutri Soil Pathogen Control", "Nutri Organic Insecticide"],
      route: "/products/organic-bio-products"
    },
    {
      title: "Crop Specific",
      description: "Browse our Crop Specific organic products that are proven to boost the crop production and quality of crops farming.",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/12/crop-specific-1.jpg",
      products: ["Nutri Banana Special", "Nutri Cotton Special", "Nutri Grape Special", "Nutri Mango Special"],
      route: "/products/crop-specific"
    },
    {
      title: "Liquid Fertilizers",
      description: "High-density farming boosts crop yields without increasing the space required for planting. The technique is highly effective in various farming systems.",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/12/high-density-1.jpg",
      products: ["Nutri HD Fertilizers", "Nutri Concentrated NPK", "Nutri Nano Nutrients", "Nutri Precision Formulas"],
      route: "/products/liquid_fertilizers"
    },
    {
      title: "Aqua Culture & Animal Nutrition",
      description: "A range of nutritional and organic products for maintaining the Aquaculture for aqua farming and animal nutritional products to maintain animal health organically.",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/12/aqua-1.jpg",
      products: ["Nutri Fish Feed Supplements", "Nutri Pond Treatment", "Nutri Animal Health", "Nutri Aqua Probiotics"],
      route: "/products/aqua-culture"
    },
    {
      title: "Urban Products",
      description: "A range of Products for Urban Farming, ready to nourish Urban Gardens. We are proud to present our latest products, designed especially keeping in mind the need of Urban farming market.",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/12/urban-1.jpg",
      products: ["Nutri Garden Care Kits", "Nutri Indoor Plants", "Nutri Balcony Farming", "Nutri Terrace Garden"]
    },
    {
      title: "Slow Release Fertilizers (Pastilles)",
      description: "Slow-release fertilizers (SRF) provide a steady supply of plant nutrients over an extended period of time. They contain plant nutrient(s) (mostly nitrogen) in a form that delays their initial availability.",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/12/slow-release-1.jpg",
      products: ["Nutri SRF Pastilles", "Nutri Coated Urea", "Nutri Extended Release", "Nutri Time Release NPK"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://www.ariesagro.com/wp-content/uploads/2022/12/micronutrients-1.jpg" 
              alt="Agricultural Products Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 drop-shadow-2xl">
              Our Range of <span className="text-primary-light">Agricultural Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
              Comprehensive solutions for modern agriculture with innovative products designed to enhance crop productivity and sustainable farming.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-20">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 -mt-32 relative z-20">
            {[
              { value: "150+", label: "Brands", icon: "🏷️" },
              { value: "9M+", label: "Farmers", icon: "👨‍🌾" },
              { value: "1K+", label: "Distributors", icon: "🤝" },
              { value: "03", label: "Manufacturing Units", icon: "🏭" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 text-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-white group">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
                <div className="text-4xl font-black text-primary mb-2 tracking-tight">{stat.value}</div>
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Product Categories */}
          <div className="space-y-32">
            {productCategories.map((category, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:col-span-5 space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                      {category.title}
                    </h2>
                    <div className="h-2 w-24 bg-primary rounded-full" />
                  </div>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                    {category.description}
                  </p>
                  
                  <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 shadow-inner">
                    <h3 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Featured Products
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.products.map((product, productIndex) => (
                        <div key={productIndex} className="flex items-center space-x-3 bg-white/50 p-3 rounded-xl border border-primary/5 group hover:border-primary/20 transition-colors">
                          <span className="text-primary group-hover:scale-125 transition-transform">✨</span>
                          <span className="text-foreground font-semibold text-sm">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link to={category.route}>
                    <Button size="lg" className="bg-primary hover:bg-primary-dark h-14 px-10 rounded-full shadow-lg transition-all hover:scale-105 group">
                      Explore {category.title}
                      <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </Button>
                  </Link>
                </div>

                <div className={`lg:col-span-7 relative group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white group-hover:border-primary/10 transition-colors duration-700">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-12">
                      <p className="text-white text-lg font-medium italic">Premium {category.title} Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Soil Testing</h3>
                  <p className="text-muted-foreground mb-4">Comprehensive soil analysis to determine nutrient requirements and recommendations.</p>
                  <Button variant="outline" size="sm">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Crop Consultation</h3>
                  <p className="text-muted-foreground mb-4">Expert advice on crop selection, nutrition programs, and farming practices.</p>
                  <Button variant="outline" size="sm">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Training Programs</h3>
                  <p className="text-muted-foreground mb-4">Educational programs for farmers on modern agricultural techniques and best practices.</p>
                  <Button variant="outline" size="sm">Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12 mt-20">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Agriculture?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Connect with our experts to discover the best products and services for your specific farming needs.
              </p>
              <div className="flex justify-center">
                <a href="tel:1234567890">
                  <Button size="lg" className="bg-primary hover:bg-primary-dark">
                   <Link to="/contact-us" className="block text-background/80 hover:text-background transition-colors">Contact Our Experts</Link>  
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

export default ProductsServices;
