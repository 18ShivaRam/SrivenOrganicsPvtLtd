import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import seven0 from '@/assets/awards/007.jpeg';
import seven1 from '@/assets/awards/007_1.jpeg';
import one from '@/assets/awards/1.jpeg';
import two from '@/assets/awards/2.jpeg';
import three from '@/assets/awards/3.jpeg';
import four from '@/assets/awards/4.jpeg';
import five from '@/assets/awards/5.jpeg';
import six from '@/assets/awards/6.jpeg';
import seven from '@/assets/awards/7.jpeg';
import eight from '@/assets/awards/8.jpeg';
import ten from '@/assets/awards/10.jpeg';
import eleven from '@/assets/awards/11.jpeg';

const AwardsAndRecognition = () => {
  const vibeImages = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    ten,
    eleven,
   
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/20">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Awards & Recognition
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Sriven Organics, we take pride in celebrating our collective achievements, team spirit, and the journey that has made us who we are today.
            </p>
          </div>

          {/* Gallery Section */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Journey in Pictures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vibeImages.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-80 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AwardsAndRecognition;
