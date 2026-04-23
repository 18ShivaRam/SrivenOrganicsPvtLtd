import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import agrominGold from '@/assets/agromin-gold.jpg';

const UrbanProducts = () => {
  const products = [
    {
      name: "Nutri Garden Care Kit",
      description: "A complete nutrient and care kit specifically curated for home gardens and balcony plants, providing everything needed for lush greenery.",
      features: ["All-in-one solution", "Easy-to-use packaging", "Safe for home use"],
      benefits: ["Promotes vibrant flowers", "Lush green foliage", "Complete nutrition"],
      crops: "Flowering plants, Ornamental shrubs, and indoor greens.",
      dosage: "As per instructions in the kit.",
      packSize: "Small, Medium, Large Kits",
      image: agrominGold,
    },
    {
      name: "Nutri Indoor Plant Nutrients",
      description: "Specially formulated balanced nutrition for indoor plants, tailored to perform well in low-light and indoor humidity conditions.",
      features: ["No-odor formula", "Stain-free liquid", "Micro-nutrient enriched"],
      benefits: ["Prevents leaf yellowing", "Supports slow-release growth", "Healthy root systems"],
      crops: "Money plants, Snake plants, Peace lilies, and other indoor varieties.",
      dosage: "5 ml per liter of water once a month.",
      packSize: "100ml, 250ml, 500ml",
      image: agrominGold,
    },
    {
      name: "Nutri Balcony Farming Kit",
      description: "Compact and efficient set designed for the urban dweller to cultivate fresh vegetables and herbs in limited balcony spaces.",
      features: ["Space-saving design", "Includes seeds and nutrients", "Beginner friendly"],
      benefits: ["Fresh organic produce", "Educational for kids", "Maximum yield in small pots"],
      crops: "Tomatoes, Chillies, Coriander, and Mint.",
      dosage: "Refer to farming guide included.",
      packSize: "Standard Balcony Kit",
      image: agrominGold,
    },
    {
      name: "Nutri Terrace Garden Soil Mix",
      description: "Optimized substrate blend for terrace gardening and raised beds, providing excellent drainage and aeration for plant roots.",
      features: ["Lightweight formula", "Weed-free substrate", "Pre-fertilized"],
      benefits: ["Reduces terrace load", "Superior root aeration", "Retains moisture longer"],
      crops: "All terrace garden vegetables and fruits.",
      dosage: "Use as a complete potting medium.",
      packSize: "5kg, 10kg, 20kg",
      image: agrominGold,
    },
  ];

  return (
        <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://www.ariesagro.com/wp-content/uploads/2022/12/urban-1.jpg" 
              alt="Urban Products Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Urban Products
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              A range of Products for Urban Farming, ready to nourish Urban Gardens. Designed for small spaces, easy application, and consistent results for urban gardeners.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-20">
          <div className="space-y-16 mb-16">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                description={product.description}
                features={product.features}
                benefits={product.benefits}
                crops={product.crops}
                dosage={product.dosage}
                packSize={product.packSize}
                image={product.image}
                badge="URBAN RANGE"
              />
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need an Urban Garden Plan?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get guidance on setting up balcony and terrace gardens, custom nutrient schedules, and watering plans.
            </p>
            <Link to="/contact-us">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                Talk to Our Team
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UrbanProducts;


