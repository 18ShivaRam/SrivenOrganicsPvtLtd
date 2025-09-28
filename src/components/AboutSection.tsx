import { Button } from '@/components/ui/button';
import aboutCompany from '@/assets/about-company.jpg';
import { Link } from 'react-router-dom';

export const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              About Sriven Organics Limited
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Leading the Agricultural Revolution Since 1969
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sriven Organics Ltd. was founded by Mr. Yempati Vijaya Bhaskar Reddy  and Mr. Samba Shiva Reddy in 1969. We are in the business of manufacturing of micronutrients and other customized nutritional products for plants and animals. We started our activity by manufacturing a small range of mineral feed additives for animals & birds and then diversified into mineral additives for agriculture use.
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