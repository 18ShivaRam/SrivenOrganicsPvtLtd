import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const CompanyOverview = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Company Overview
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Sriven Organics Ltd. was founded by Mr. Yempati Vijaya Bhaskar Reddy  and Mr. Samba Shiva Reddy in 2016. We are in the business of manufacturing of micronutrients and other customized nutritional products for plants and animals. We started our activity by manufacturing a small range of mineral feed additives for animals & birds and then diversified into mineral additives for agriculture use.
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
                <li>1969: Company founded by Mr. Yempati Vijaya Bhaskar Reddy  and Mr. Samba Shiva Reddy</li>
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