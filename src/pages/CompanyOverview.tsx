import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const CompanyOverview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/20">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Company Overview
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2016 by Mr. Yampati Vijaya Bhaskara Reddy and Mr. Samba Siva Reddy, Sriven Organics Pvt. Ltd. is engaged in the manufacturing of micronutrients and customised nutritional solutions for plants and animals.
The company began its operations with a focused portfolio of mineral feed additives for animals and birds. Over time, we expanded our expertise into agricultural nutrition, diversifying our product portfolio to include mineral-based plant nutrients and customised crop nutrition solutions. Today, we continue to build on this foundation by delivering innovative and reliable nutritional products that contribute to healthier crops, improved agricultural productivity and sustainable farming.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                In 1975, we diversified into nutrients for plants. We conducted research on compounds that could deliver mineral nutrients to plants more efficiently. This research identified "Metal Chelates".
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                To provide world-class agricultural solutions that enhance crop productivity while maintaining environmental sustainability.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Our Vision</h2>
              <p className="text-muted-foreground mb-6">
                To be the leading provider of innovative agricultural nutrients and solutions globally, empowering farmers to achieve better yields and sustainable farming practices.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Key Milestones</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>1969: Company founded by Mr. Yampati Vijaya Bhaskara Reddy  and Mr. Samba Siva Reddy</li>
                <li>1975: Diversified into plant nutrients and introduced Metal Chelates</li>
                <li>1986: Founded Indian Micro-Fertilizers Manufacturers Association (IMMA)</li>
                <li>2020: Expanded product portfolio with innovative agricultural solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompanyOverview;


