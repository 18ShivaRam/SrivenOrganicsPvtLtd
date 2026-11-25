import { Button } from '@/components/ui/button';
import aboutCompany from '@/assets/about-company.jpg';
import { Link } from 'react-router-dom';

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              About Sriven Organics Limited
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Leading the Agricultural Revolution Since 2016
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2016 by Mr. Yampati Vijaya Bhaskara Reddy and Mr. Samba Siva Reddy, Sriven Organics Pvt. Ltd. is engaged in the manufacturing of micronutrients and customised nutritional solutions for plants and animals.
The company began its operations with a focused portfolio of mineral feed additives for animals and birds. Over time, we expanded our expertise into agricultural nutrition, diversifying our product portfolio to include mineral-based plant nutrients and customised crop nutrition solutions. Today, we continue to build on this foundation by delivering innovative and reliable nutritional products that contribute to healthier crops, improved agricultural productivity and sustainable farming.
              </p>
              <p>
                In 1975, we diversified into nutrients for plants. We conducted research on compounds that could deliver mineral nutrients to plants more efficiently. This research identified "Metal Chelates".
              </p>
            </div>
            <Button 
              size="lg" 
              className="mt-8 bg-orange hover:bg-orange/90 text-orange-foreground"
            >
              <Link to="/about-us" className="block text-background/80 hover:text-background transition-colors">Know More</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl overflow-hidden">
              <img
                src={aboutCompany}
                alt="Company leadership"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


