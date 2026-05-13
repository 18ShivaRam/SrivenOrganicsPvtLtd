import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
// import logo from '@/assets/sriven-logo.png';
import logo from '@/assets/sriven-logo.png';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Sriven Organics" className="block h-16 w-auto" />
            {/* <p className="text-background/80 mb-6">
              Leading agricultural solutions provider since 1969, serving farmers worldwide with innovative products and services.
            </p> */}
            <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      {/* <h3 className="font-semibold text-foreground mb-2">Phone</h3> */}
                      <p className="text-muted-foreground">
                        +91-22-XXXX-XXXX<br />
                        {/* +91-22-XXXX-XXXX */}
                      </p>
                    </div>
                  </div>
                  <br />
            <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      {/* <h3 className="font-semibold text-foreground mb-2">Email</h3> */}
                      <p className="text-muted-foreground">
                      srivenorganicspvtltd@gmail.com<br />
                      {/* support@srivenorganics.com */}
                      </p>
                    </div>
                  </div>
                  <br/>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      {/* <h3 className="font-semibold text-foreground mb-2">Head Office</h3> */}
                      <p className="text-muted-foreground">
                        
                        <a
    href="https://www.google.com/maps/dir//Flat+no+502,+Sriven+Organics+Pvt+Ltd,+Classic+Arcade,+Plot+no.492,+Road+No.+3%2F2,+Mathrusree+Nagar,+Hafeezpet,+Hyderabad,+Telangana+500049/@17.4948645,78.3625025,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb93dda9d4a76f:0xc9a6d4ed85d6bf05!2m2!1d78.3672661!2d17.4948645?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className=" hover:text-primary transition-colors"
  >Sriven Organics Pvt Ltd</a>
                        {/* Flat no 502, Classic Arcade, Plot no.492, Road No. 3/2, Mathrusree Nagar, Hafeezpet, Hyderabad, Telangana 500049, India. */}
                      </p>
                    </div>
                  </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <div className="space-y-3">
              <Link to="/products/micronutrients" className="block text-background/80 hover:text-background transition-colors">Micronutrients</Link>
              <Link to="/products/water-soluble-npk" className="block text-background/80 hover:text-background transition-colors">Water Soluble NPK</Link>
              <Link to="/products/organic-bio-products" className="block text-background/80 hover:text-background transition-colors">Organic Products</Link>
              <Link to="/products/biostimulants" className="block text-background/80 hover:text-background transition-colors">Biostimulants </Link>
              <Link to="/products/urban-products" className="block text-background/80 hover:text-background transition-colors">Urban Products</Link>
            </div>
          </div>

          {/* Crops */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Crops</h3>
            <div className="space-y-3">
              <Link to="/crops/sugarcane" className="block text-background/80 hover:text-background transition-colors">Sugarcane</Link>
              <Link to="/crops/grape" className="block text-background/80 hover:text-background transition-colors">Grape</Link>
              <Link to="/crops/coffee" className="block text-background/80 hover:text-background transition-colors">Coffee</Link>
              <Link to="/crops/cotton" className="block text-background/80 hover:text-background transition-colors">Cotton</Link>
              <Link to="/crops" className="block text-background/80 hover:text-background transition-colors">View All Crops</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <div className="space-y-3">
              <Link to="/about-us" className="block text-background/80 hover:text-background transition-colors">About Us</Link>
              <Link to="/contact-us" className="block text-background/80 hover:text-background transition-colors">Contact Us</Link>
              <Link to="/equipment" className="block text-background/80 hover:text-background transition-colors">Equipment</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/80">
            © 2024 Sriven Organics Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};


