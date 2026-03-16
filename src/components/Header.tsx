import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
// import logo from '@/assets/sriven-logo.png';
import logo from '@/assets/sriven-logo.jpg';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileCropsOpen, setMobileCropsOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-0 pb-0 -mb-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Sriven Organics" className="block h-18  sm:h-16 md:h-24 w-auto" />
          </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <Button variant="ghost" className="flex items-center">
                Products & Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              <div className="absolute top-full left-0 w-64 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  {/* <Link to="/products-services" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">All Products & Services</Link> */}
                  <Link to="/micronutrients" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">Micronutrients</Link>
                  <Link to="/water-soluble-npk" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">Water Soluble NPK</Link>
                  <Link to="/organic-bio-products" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">Organic/Bio Products</Link>
                  <Link to="/plant-protection" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">Biostimulants </Link>
                  <Link to="/urban-products" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">Urban Products</Link>
                  <Link to="/slow-release-fertilizers-pastilles" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">Slow Release Fertilizers</Link>
                  <Link to="/crop-specific" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">Crop Specific</Link>
                  <Link to="/liquid_fertilizers" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">Liquid Fertilizers</Link>
                  <Link to="/hydromin-range" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">Hydromin Range</Link>
                  <Link to="/fishery-animal-nutrition" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">Aqua Culture & Animal Nutrition</Link>
                  <Link to="/other-products" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded">Other Products</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Button variant="ghost" className="flex items-center">
                Crops
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              <div className="absolute top-full left-0 w-[800px] bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-2">
                    <Link to="/crops" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded font-semibold">All Crops</Link>
                    <Link to="/crops/banana" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Banana</Link>
                    <Link to="/crops/cashew-nut" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Cashew Nut</Link>
                    <Link to="/crops/cauliflower" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Cauliflower</Link>
                    <Link to="/crops/chilli" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Chilli</Link>
                    <Link to="/crops/citrus" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Citrus</Link>
                    <Link to="/crops/cocoa" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Cocoa</Link>
                    <Link to="/crops/coffee" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Coffee</Link>
                    <Link to="/crops/cotton" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Cotton</Link>
                    <Link to="/crops/ginger" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Ginger</Link>
                    <Link to="/crops/grape" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Grape</Link>
                    <Link to="/crops/groundnut" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Groundnut</Link>
                    <Link to="/crops/maize" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Maize</Link>
                    <Link to="/crops/mango" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Mango</Link>
                    <Link to="/crops/onion" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Onion</Link>
                    <Link to="/crops/paddy" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Paddy</Link>
                    <Link to="/crops/papaya" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Papaya</Link>
                    <Link to="/crops/pomegranate" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Pomegranate</Link>
                    <Link to="/crops/potato" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Potato</Link>
                    <Link to="/crops/rose" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Rose</Link>
                    <Link to="/crops/sugarcane" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Sugarcane</Link>
                    <Link to="/crops/tomato" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Tomato</Link>
                    <Link to="/crops/turmeric" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Turmeric</Link>
                    <Link to="/crops/watermelon" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Watermelon</Link>
                    <Link to="/crops/wheat" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded">Wheat</Link>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/about-us">
              <Button variant="ghost">About Us</Button>
            </Link>
            <Link to="/equipment">
              <Button variant="ghost">Equipment</Button>
            </Link>
            <Link to="/contact-us">
              <Button variant="ghost">Contact Us</Button>
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-1 pt-4">
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2">
                  <span>Products & Services</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-4 space-y-1">
                  {/* <Link to="/products-services"><Button variant="ghost" className="justify-start w-full px-3 py-2 text-sm">All Products & Services</Button></Link> */}
                  <Link to="/micronutrients"><Button variant="ghost" className="justify-start w-full px-3 py-2 text-sm">Micronutrients</Button></Link>
                  <Link to="/water-soluble-npk"><Button variant="ghost" className="justify-start w-full px-3 py-2 text-sm">Water Soluble NPK</Button></Link>
                  <Link to="/organic-bio-products"><Button variant="ghost" className="justify-start w-full px-3 py-2 text-sm">Organic/Bio Products</Button></Link>
                  <Link to="/plant-protection"><Button variant="ghost" className="justify-start w-full px-3 py-2 text-sm">Biostimulants </Button></Link>
                  <Link to="/urban-products"><Button variant="ghost" className="justify-start w-full px-3 py-2 text-sm">Urban Products</Button></Link>
                  <Link to="/slow-release-fertilizers-pastilles"><Button variant="ghost" className="justify-start w-full px-3 py-2 text-sm">Slow Release Fertilizers</Button></Link>
                  <Link to="/crop-specific"><Button variant="ghost" className="justify-start w-full px-3 py-2 text-sm">Crop Specific</Button></Link>
                  <Link to="/liquid_fertilizers"><Button variant="ghost" className="justify-start w-full px-3 py-2 text-sm">Liquid Fertilizers</Button></Link>
                  <Link to="/hydromin-range"><Button variant="ghost" className="justify-start w-full px-3 py-2 text-sm">Hydromin Range</Button></Link>
                  <Link to="/fishery-animal-nutrition"><Button variant="ghost" className="justify-start w-full px-3 py-2 text-sm">Aqua Culture & Animal Nutrition</Button></Link>
                  <Link to="/other-products"><Button variant="ghost" className="justify-start w-full px-3 py-2 text-sm">Other Products</Button></Link>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2">
                  <span>Crops</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-4 space-y-1">
                  <Link to="/crops"><Button variant="ghost" className="justify-start w-full px-3 py-2 text-sm font-semibold">All Crops</Button></Link>
                  <Link to="/crops/banana"><Button variant="ghost" className="justify-start w-full px-3 py-2 text-sm">Banana</Button></Link>
                  <Link to="/crops/cashew-nut"><Button variant="ghost" className="justify-start w-full px-3 py-2 text-sm">Cashew Nut</Button></Link>
                  <Link to="/crops/cotton"><Button variant="ghost" className="justify-start w-full px-3 py-2 text-sm">Cotton</Button></Link>
                  <Link to="/crops/grape"><Button variant="ghost" className="justify-start w-full px-3 py-2 text-sm">Grape</Button></Link>
                  <Link to="/crops/mango"><Button variant="ghost" className="justify-start w-full px-3 py-2 text-sm">Mango</Button></Link>
                </CollapsibleContent>
              </Collapsible>
              <Link to="/about-us"><Button variant="ghost" className="justify-start w-full px-3 py-2">About Us</Button></Link>
              <Link to="/equipment"><Button variant="ghost" className="justify-start w-full px-3 py-2">Equipment</Button></Link>
              <Link to="/contact-us"><Button variant="ghost" className="justify-start w-full px-3 py-2">Contact Us</Button></Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
