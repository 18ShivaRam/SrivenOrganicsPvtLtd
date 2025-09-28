import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const productCategories = [
  {
    title: "Aqua Culture & Animal Nutrition",
    description: "A range of nutritional and organic products for maintaining the Aquaculture for aqua farming and animal nutritional products to maintain animal health organically.",
    url: "/fishery-animal-nutrition"
  },
  {
    title: "Crop Specific",
    description: "Browse our Crop Specific organic products that are proven to boost the crop production and quality of crops farming.",
    url: "/crop-specific"
  },
  {
    title: "High Density Inputs",
    description: "High-density farming boosts crop yields without increasing the space required for planting. The technique is highly effective in Bamyan Province, where farmers grow vegetables between their fruit trees.",
    url: "/high-density-inputs"
  },
  {
    title: "Hydromin Range",
    description: "Specialized water-soluble fertilizers designed for modern agricultural needs.",
    url: "/hydromin-range"
  },
  {
    title: "Micronutrients",
    description: "Micronutrients consist of a fine blend of mineral elements comprising of Zinc (Zn), Copper (Cu), Manganese (Mn), Iron (Fe), Boron (B), Molybdenum (Mo).",
    url: "/micronutrients"
  },
  {
    title: "Organic/Bio Products",
    description: "Bioproducts are products that are made from biomass. The meaning of biomass is any type of organic material that is available on a renewable basis. It includes such things as crops and trees, wood and wood wastes, aquatic plants and grasses.",
    url: "/organic-bio-products"
  },
  {
    title: "Other Products",
    description: "Micronutrients consist of a fine blend of mineral elements comprising of Zinc (Zn), Copper (Cu), Manganese (Mn), Iron (Fe), Boron (B), Molybdenum (Mo).",
    url: "/other-products"
  },
  {
    title: "Plant Protection",
    description: "Checkout a range of highly productive plant protection products that can be used for protecting complete farms and crops from all kinds of threats.",
    url: "/plant-protection"
  },
  {
    title: "Slow Release Fertilizers (Pastilles)",
    description: "Slow-release fertilizers (SRF) provide a steady supply of plant nutrients over an extended period of time. They contain plant nutrient(s) (mostly nitrogen) in a form that delays their initial availability.",
    url: "/slow-release-fertilizers-pastilles"
  },
  {
    title: "Urban Products",
    description: "A range of Products for Urban Farming, ready to nourish Urban Gardens. We are proud to present our latest products, designed especially keeping in mind the need of Urban farming market.",
    url: "/urban-products"
  },
  {
    title: "Water Soluble NPK",
    description: "A water-soluble fertilizer with an optimum combination of Nitrogen, Phosphorous, Potassium, and Sodium. It is readily soluble in water and is best for drip irrigation and foliar application of fertilizer.",
    url: "/water-soluble-npk"
  },
];

export const ProductsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Range of
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">
            Agricultural Products
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((category, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 flex-1">
                  {category.description}
                </p>
                <Link to={category.url}>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};