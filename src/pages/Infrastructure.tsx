import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import advance1 from '@/assets/infra/advance1.png'; 
import advance from '@/assets/infra/advance.jpeg';
import RD from '@/assets/infra/R&D.jpeg';
import RD1 from '@/assets/infra/R&D1.jpeg';
import quality from '@/assets/infra/quality.jpeg';
import quality1 from '@/assets/infra/quality1.jpeg';
import sustain from '@/assets/infra/sustain.jpeg';
import sustain1 from '@/assets/infra/sustain1.png';
import it from '@/assets/infra/it.png';
import it1 from '@/assets/infra/it1.jpeg';



const Infrastructure = () => {
  const infrastructureSections = [
    {
      title: "Advanced Manufacturing Facilities",
      description: "Our advanced manufacturing facilities are equipped with the latest technologies to ensure precision, scalability, and exceptional quality across all our product lines.",
      subsections: [
        {
          title: "State-of-the-Art Machinery",
          content: "Utilize cutting-edge equipment and automated production systems that enable us to maintain consistent product quality while efficiently meeting the demands of our growing customer base."
        },
        {
          title: "End-to-End Production",
          content: "Our facilities are designed to handle various manufacturing processes, from raw material processing to final product packaging, all under one roof for seamless operations."
        },
        {
          title: "Scalable Capacity",
          content: "Our infrastructure allows us to scale production as needed, ensuring we can meet increasing market demands without compromising on quality or delivery timelines."
        }
      ],
      image1: advance1,
      image2: advance,
      image1Alt: "Advanced Manufacturing Facilities",
      image2Alt: "Manufacturing Interior"
    },
    {
      title: "R&D Labs",
      description: "Our R&D labs are equipped with the latest analytical and experimental technologies, serving as the hub for innovation and product development.",
      subsections: [
        {
          title: "Expert Research Team",
          content: "Our team of experienced scientists and researchers work tirelessly to develop new and improved agricultural solutions for modern farming challenges."
        },
        {
          title: "Comprehensive Testing",
          content: "Conduct extensive testing on soil health, plant nutrition, and product efficacy to ensure our solutions deliver optimal results for farmers."
        },
        {
          title: "Continuous Innovation",
          content: "We continuously invest in research to stay at the forefront of agricultural innovation, ensuring our products meet the evolving needs of modern farming."
        }
      ],
      image1: RD,
      image2: RD1,
      image1Alt: "R&D Labs",
      image2Alt: "Research Scientists at Work"
    },
    {
      title: "Quality Assurance",
      description: "Our commitment to quality is integral to our infrastructure, with comprehensive systems in place to guarantee that every product meets the highest standards of excellence.",
      subsections: [
        {
          title: "Laboratory Testing",
          content: "Employ rigorous testing protocols for raw materials and finished products, ensuring purity, potency, and safety."
        },
        {
          title: "Process Monitoring",
          content: "Utilize real-time monitoring systems to maintain consistency and quality throughout the manufacturing lifecycle."
        },
        {
          title: "Regulatory Compliance",
          content: "Adhere to stringent industry regulations and standards, ensuring that all products are compliant and meet safety requirements."
        }
      ],
      image1: quality,
      image2: quality1,
      image1Alt: "Quality Assurance Lab",
      image2Alt: "Precision Testing Equipment"
    },
    {
      title: "Sustainability",
      description: "Sustainability is a core value at Sriven Organics, reflected in our infrastructure and operational practices.",
      subsections: [
        {
          title: "Energy Efficiency",
          content: "Implement energy-efficient manufacturing processes and infrastructure to reduce our carbon footprint and environmental impact."
        },
        {
          title: "Waste Management",
          content: "Practice responsible waste management and recycling programs to minimize environmental impact from our operations."
        },
        {
          title: "Green Practices",
          content: "Our facilities incorporate green building practices, and we continuously explore ways to reduce our environmental footprint while maintaining the highest product quality standards."
        }
      ],
      image1: sustain,
      image2: sustain1,
      image1Alt: "Sustainable Facility",
      image2Alt: "Eco-Friendly Plant"
    },
    {
      title: "IT & Data Management",
      description: "We support our complex manufacturing and R&D operations with sophisticated IT and data management systems, ensuring efficiency and accuracy across all processes.",
      subsections: [
        {
          title: "Real-Time Monitoring",
          content: "Our advanced technology infrastructure enables real-time monitoring of production, inventory management, and quality control data."
        },
        {
          title: "Robust Software Solutions",
          content: "Utilize robust software solutions to streamline our operations, enhance decision-making, and maintain seamless communication across all departments."
        },
        {
          title: "Data Security",
          content: "Implement comprehensive data security measures to protect our intellectual property, operational data, and sensitive information."
        }
      ],
      image1: it,
      image2: it1,
      image1Alt: "IT Server Room",
      image2Alt: "Operations Control Room"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/20">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Infrastructure
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              At Sriven Organics, our cutting-edge infrastructure is pivotal to our leadership in the manufacturing of micronutrients, bioproducts, nanotechnology solutions, and organic products. We are dedicated to maintaining an innovative, efficient, and sustainable operational framework that supports our commitment to excellence and environmental stewardship.
            </p>
          </div>
          
          {/* Infrastructure Sections */}
          <div className="space-y-20 mb-20">
            {infrastructureSections.map((section, index) => (
              <div key={index}>
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{section.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <img
                    src={section.image1}
                    alt={section.image1Alt}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src={section.image2}
                    alt={section.image2Alt}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-8">
                  {section.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold text-primary mb-3">{subsection.title}</h3>
                      <p className="text-muted-foreground">{subsection.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Experience Our Infrastructure
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover how Sriven Organics' advanced infrastructure drives our commitment to innovation, quality, and sustainability. Contact us today to learn more about our capabilities and how we can support your business needs.
              </p>
              <div className="flex justify-center">
                <a href="/contact-us">
                  <Button size="lg" className="bg-primary hover:bg-primary-dark">
                    Contact Us
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

export default Infrastructure;
