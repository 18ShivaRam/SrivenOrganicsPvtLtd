import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';
import hero4 from '@/assets/hero-4.jpg';
import hero5 from '@/assets/hero-5.jpg';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "Providing World's best to India & India's best to the world.",
    subtitle: "Sriven Organics Ltd was founded by Mr. Yampati Vijaya Bhaskara Reddy  and Mr. Samba Siva Reddy in 2016.",
    image: hero1,
  },
  {
    id: 2,
    title: "Manufacturing Specialty Crop Nutrients",
    subtitle: "Leading the way in agricultural innovation and crop nutrition solutions.",
    image: hero2,
  },
  {
    id: 3,
    title: "Serving Farmers Everywhere with 1000+ Distributors Across India",
    subtitle: "Building a strong network to reach every farmer in need.",
    image: hero3,
  },
  {
    id: 4,
    title: "Building Leaders in Agriculture",
    subtitle: "Empowering farmers with knowledge and cutting-edge solutions.",
    image: hero4,
  },
  {
    id: 5,
    title: "Award Winning Marketing & Operations Team",
    subtitle: "Recognized excellence in agricultural solutions and service.",
    image: hero5,
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[420px] md:h-[600px] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/20">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20" />
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Latest Project
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>
          <Button 
            size="lg" 
            className="bg-orange hover:bg-orange/90 text-orange-foreground font-semibold px-8 py-6 text-lg"
          >
            <Link to="/about-us" className="block text-background/80 hover:text-background transition-colors">Find Out More</Link>
          </Button>
        </div>
      </div>

      {/* Navigation arrows */}
      <Button
        variant="outline"
        size="icon"
        className="hidden md:inline-flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="hidden md:inline-flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-primary' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};
