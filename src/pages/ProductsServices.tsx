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
      products: ["Vengrowmin Gold", "Nutri Zinc EDTA", "Nutri Iron EDTA", "Boron EDTA", "Manganese EDTA"],
      route: "/products/micronutrients"
    },
    {
      title: "Water Soluble NPK",
      description: "A water-soluble fertilizer with an optimum combination of Nitrogen, Phosphorous, Potassium, and Sodium. It is readily soluble in water and is best for drip irrigation and foliar application.",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/12/npk-1.jpg",
      products: ["Fertimax HD", "Macrofert 20:20:20", "Plantex 19:19:19", "Potassium Sulphate"],
      route: "/products/water-soluble-npk"
    },
    {
      title: "Biostimulants ",
      description: "Checkout a range of highly productive Biostimulants  products that can be used for protecting complete farms and crops from all kinds of threats.",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/12/plant-protection-1.jpg",
      products: ["Mycin", "Bio Fungicide", "Bacterial Control", "Neem Protectant"],
      route: "/products/plant-protection"
    },
    {
      title: "Organic/Bio Products",
      description: "Bioproducts are products that are made from biomass. The meaning of biomass is any type of organic material that is available on a renewable basis.",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/12/organic-1.jpg",
      products: ["Haasil", "Plant Strengthener", "Soil Pathogen Control", "Organic Insecticide"],
      route: "/products/organic-bio-products"
    },
    {
      title: "Crop Specific",
      description: "Browse our Crop Specific organic products that are proven to boost the crop production and quality of crops farming.",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/12/crop-specific-1.jpg",
      products: ["Banana Special", "Cotton Special", "Grape Special", "Mango Special"],
      route: "/products/crop-specific"
    },
    {
      title: "Liquid Fertilizers",
      description: "High-density farming boosts crop yields without increasing the space required for planting. The technique is highly effective in various farming systems.",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/12/high-density-1.jpg",
      products: ["HD Fertilizers", "Concentrated NPK", "Nano Nutrients", "Precision Formulas"],
      route: "/products/high-density-inputs"
    },
    {
      title: "Aqua Culture & Animal Nutrition",
      description: "A range of nutritional and organic products for maintaining the Aquaculture for aqua farming and animal nutritional products to maintain animal health organically.",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/12/aqua-1.jpg",
      products: ["Fish Feed Supplements", "Pond Treatment", "Animal Health", "Aqua Probiotics"],
      route: "/products/aqua-culture"
    },
    {
      title: "Urban Products",
      description: "A range of Products for Urban Farming, ready to nourish Urban Gardens. We are proud to present our latest products, designed especially keeping in mind the need of Urban farming market.",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/12/urban-1.jpg",
      products: ["Garden Care Kits", "Indoor Plants", "Balcony Farming", "Terrace Garden"]
    },
    {
      title: "Slow Release Fertilizers (Pastilles)",
      description: "Slow-release fertilizers (SRF) provide a steady supply of plant nutrients over an extended period of time. They contain plant nutrient(s) (mostly nitrogen) in a form that delays their initial availability.",
      image: "https://www.ariesagro.com/wp-content/uploads/2022/12/slow-release-1.jpg",
      products: ["SRF Pastilles", "Coated Urea", "Extended Release", "Time Release NPK"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Range of Agricultural Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions for modern agriculture with innovative products designed to enhance crop productivity, soil health, and sustainable farming practices.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-primary/5 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">150</div>
              <div className="text-sm text-muted-foreground">Brands</div>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">9M</div>
              <div className="text-sm text-muted-foreground">Farmers</div>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">1K</div>
              <div className="text-sm text-muted-foreground">Distributors</div>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">03</div>  
              <div className="text-sm text-muted-foreground">Manufacturing Units</div>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-3">Featured Products:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {category.products.map((product, productIndex) => (
                        <div key={productIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link to={category.route}>
                    <Button size="lg" className="bg-primary hover:bg-primary-dark">
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
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