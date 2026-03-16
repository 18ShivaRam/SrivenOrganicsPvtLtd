import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { useRef, useEffect } from 'react';

// Full crops list with images and slugs
const crops = [
  {
    name: 'Sugarcane',
    slug: 'sugarcane',
    image:'/crops/sugarcane/sugarcane.jpg',
    // image: 'src/assets/crops/sugarcane/sugarcane.jpg',
  },
  {
    name: 'Grape',
    slug: 'grape',
    image: '/crops/grape/grape.jpg',
  },
  {
    name: 'Coffee',
    slug: 'coffee',
    image: '/crops/coffee/coffee.jpg',
  },
  {
    name: 'Cotton',
    slug: 'cotton',
    image: '/crops/cotton/cotton.jpeg',
  },
  {
    name: 'Pomegranate',
    slug: 'pomegranate',
    image: '/crops/pomegranate/pomegranate.jpg',
  },
  {
    name: 'Mango',
    slug: 'mango',
    image: '/crops/mango/mango.jpg',  
  },
  {
    name: 'Banana',
    slug: 'banana',
    image: '/crops/banana/banana.jpg',
  },
  {
    name: 'Rose',
    slug: 'rose',
    image: '/crops/rose/rose.jpg',
  },
  {
    name: 'Turmeric',
    slug: 'turmeric',
    image: '/crops/turmeric/turmeric.jpg',
  },
];

export const CropsSection = () => {
  const navigate = useNavigate();
  const carouselApiRef = useRef(null);

  useEffect(() => {
    if (!carouselApiRef.current) return;
    const interval = setInterval(() => {
      if (carouselApiRef.current) {
        carouselApiRef.current.scrollNext();
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [carouselApiRef.current]);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Crops We Nourish
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Sriven Organics is your trusted source for diverse crop nourishment products, <br/> 
              such as chelates, micronutrients, and water-soluble fertilizers.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-12">
          <Carousel
            opts={{ align: 'start', slidesToScroll: 2, dragFree: true, loop: true }}
            setApi={api => { carouselApiRef.current = api; }}
          >
            <CarouselPrevious />
            <CarouselNext />
            <CarouselContent className="">
              {crops.map((crop, idx) => (
                <CarouselItem
                  key={crop.slug}
                  className="md:basis-1/2 lg:basis-1/3 px-2"
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
                    <CardContent className="p-0 flex-1 flex flex-col">
                      <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/10">
                        <img
                          src={crop.image}
                          alt={crop.name}
                          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-3">{crop.name}</h3>
                        <Button
                          variant="outline"
                          className="w-full mt-auto"
                          onClick={() => navigate(`/crops/${crop.slug}`)}
                        >
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-dark text-primary-foreground"
            onClick={() => navigate('/crops')}
          >
            Know More
          </Button>
        </div>
      </div>
    </section>
  );
};
