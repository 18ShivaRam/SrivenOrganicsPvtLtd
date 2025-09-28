import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CompanyOverview from "./pages/CompanyOverview";
import ContactUs from "./pages/ContactUs";
import Equipment from "./pages/Equipment";
import Apps from "./pages/Apps";
import Crops from "./pages/Crops";
import ProductsServices from "./pages/ProductsServices";
import AboutUs from "./pages/AboutUs";
import Sugarcane from "./pages/crops/Sugarcane";
import Grape from "./pages/crops/Grape";
import Coffee from "./pages/crops/Coffee";
import Cotton from "./pages/crops/Cotton";
import Pomegranate from "./pages/crops/Pomegranate";
import Mango from "./pages/crops/Mango";
import Banana from "./pages/crops/Banana";
import Rose from "./pages/crops/Rose";
import Turmeric from "./pages/crops/Turmeric";
import Chilli from "./pages/crops/Chilli";
import CashewNut from "./pages/crops/CashewNut";
import Tomato from "./pages/crops/Tomato";
import Wheat from "./pages/crops/Wheat";
import Paddy from "./pages/crops/Paddy";
import Potato from "./pages/crops/Potato";
import Cauliflower from "./pages/crops/Cauliflower";
import Citrus from "./pages/crops/Citrus";
import Maize from "./pages/crops/Maize";
import Onion from "./pages/crops/Onion";
import Ginger from "./pages/crops/Ginger";
import Watermelon from "./pages/crops/Watermelon";
import Groundnut from "./pages/crops/Groundnut";
import Cocoa from "./pages/crops/Cocoa";
import Papaya from "./pages/crops/Papaya";
import Micronutrients from "./pages/products/Micronutrients";
import WaterSolubleNPK from "./pages/products/WaterSolubleNPK";
import OrganicProducts from "./pages/products/OrganicProducts";
import PlantProtection from "./pages/products/PlantProtection";
import UrbanProducts from "./pages/products/UrbanProducts";
import SlowReleaseFertilizers from "./pages/products/SlowReleaseFertilizers";
import CropSpecific from "./pages/products/CropSpecific";
import HighDensityInputs from "./pages/products/HighDensityInputs";
import HydrominRange from "./pages/products/HydrominRange";
import AquaCulture from "./pages/products/AquaCulture";
import OtherProducts from "./pages/products/OtherProducts";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
            <Route path="/company-overview" element={<CompanyOverview />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products-services" element={<ProductsServices />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/crops" element={<Crops />} />
          
          {/* Crop Pages */}
          <Route path="/crops/sugarcane" element={<Sugarcane />} />
          <Route path="/crops/grape" element={<Grape />} />
          <Route path="/crops/coffee" element={<Coffee />} />
          <Route path="/crops/cotton" element={<Cotton />} />
          <Route path="/crops/pomegranate" element={<Pomegranate />} />
          <Route path="/crops/mango" element={<Mango />} />
          <Route path="/crops/banana" element={<Banana />} />
          <Route path="/crops/rose" element={<Rose />} />
          <Route path="/crops/turmeric" element={<Turmeric />} />
          <Route path="/crops/chilli" element={<Chilli />} />
          <Route path="/crops/cashew-nut" element={<CashewNut />} />
          <Route path="/crops/tomato" element={<Tomato />} />
          <Route path="/crops/wheat" element={<Wheat />} />
          <Route path="/crops/paddy" element={<Paddy />} />
          <Route path="/crops/potato" element={<Potato />} />
          <Route path="/crops/cauliflower" element={<Cauliflower />} />
          <Route path="/crops/citrus" element={<Citrus />} />
          <Route path="/crops/maize" element={<Maize />} />
          <Route path="/crops/onion" element={<Onion />} />
          <Route path="/crops/ginger" element={<Ginger />} />
          <Route path="/crops/watermelon" element={<Watermelon />} />
          <Route path="/crops/groundnut" element={<Groundnut />} />
          <Route path="/crops/cocoa" element={<Cocoa />} />
          <Route path="/crops/papaya" element={<Papaya />} />
          
          {/* Product Pages */}
          <Route path="/micronutrients" element={<Micronutrients />} />
          <Route path="/water-soluble-npk" element={<WaterSolubleNPK />} />
          <Route path="/organic-bio-products" element={<OrganicProducts />} />
          <Route path="/plant-protection" element={<PlantProtection />} />
          <Route path="/urban-products" element={<UrbanProducts />} />
          <Route path="/slow-release-fertilizers-pastilles" element={<SlowReleaseFertilizers />} />
          <Route path="/crop-specific" element={<CropSpecific />} />
          <Route path="/high-density-inputs" element={<HighDensityInputs />} />
          <Route path="/hydromin-range" element={<HydrominRange />} />
          <Route path="/fishery-animal-nutrition" element={<AquaCulture />} />
          <Route path="/other-products" element={<OtherProducts />} />
          
          {/* Product Pages with /products/ prefix */}
          <Route path="/products/micronutrients" element={<Micronutrients />} />
          <Route path="/products/water-soluble-npk" element={<WaterSolubleNPK />} />
          <Route path="/products/organic-bio-products" element={<OrganicProducts />} />
          <Route path="/products/plant-protection" element={<PlantProtection />} />
          <Route path="/products/urban-products" element={<UrbanProducts />} />
          <Route path="/products/slow-release-fertilizers-pastilles" element={<SlowReleaseFertilizers />} />
          <Route path="/products/crop-specific" element={<CropSpecific />} />
          <Route path="/products/high-density-inputs" element={<HighDensityInputs />} />
          <Route path="/products/hydromin-range" element={<HydrominRange />} />
          <Route path="/products/aqua-culture" element={<AquaCulture />} />
          <Route path="/products/other-products" element={<OtherProducts />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
