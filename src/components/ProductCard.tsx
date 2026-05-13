import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  name: string;
  description?: string;
  features?: string[];
  benefits?: string[];
  crops?: string;
  dosage?: string;
  packSize?: string;
  image: string;
  badge?: string;
  extraHeaderInfo?: React.ReactNode;
  contents?: string;
  simple?: boolean;
}

export const ProductCard = ({
  name,
  description,
  features = [],
  benefits = [],
  crops,
  dosage,
  packSize,
  image,
  badge,
  extraHeaderInfo,
  contents,
  simple = false
}: ProductCardProps) => {
  if (simple) {
    return (
      <Card className="overflow-hidden border-none shadow-xl bg-white/80 backdrop-blur-md hover:shadow-2xl transition-all duration-500">
        <div className="p-8 flex flex-col items-center text-center">
          <div className="relative group w-full max-w-sm aspect-square mb-6">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
            />
            {badge && (
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-[10px] font-black text-white px-4 py-1.5 rounded-full shadow-lg tracking-wider whitespace-nowrap">
                {badge}
              </div>
            )}
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-primary tracking-tight">
            {name}
          </h2>
          <div className="h-1.5 w-16 bg-primary rounded-full mt-2" />
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden border-none shadow-xl bg-white/80 backdrop-blur-md hover:shadow-2xl transition-all duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Side: Product Image */}
        <div className="lg:col-span-4 bg-white flex items-center justify-center p-8 lg:p-12 border-r border-primary/5">
          <div className="relative group w-full aspect-square">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
            />
            {badge && (
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-[10px] font-black text-white px-4 py-1.5 rounded-full shadow-lg tracking-wider whitespace-nowrap">
                {badge}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Product Details with Tabs */}
        <div className="lg:col-span-8 p-8 lg:p-12 flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-2 tracking-tight">
                {name}
              </h2>
              <div className="h-1.5 w-20 bg-primary rounded-full" />
            </div>
            {extraHeaderInfo}
          </div>

          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start bg-transparent border-b border-primary/10 rounded-none h-auto p-0 mb-8 overflow-x-auto overflow-y-hidden scrollbar-hide">
              <TabsTrigger 
                value="description" 
                className="rounded-none border-b-2 border-transparent px-6 py-3 text-sm font-bold uppercase tracking-widest data-[state=active]:border-primary data-[state=active]:text-primary bg-transparent"
              >
                Description
              </TabsTrigger>
              {features.length > 0 && (
                <TabsTrigger 
                  value="features" 
                  className="rounded-none border-b-2 border-transparent px-6 py-3 text-sm font-bold uppercase tracking-widest data-[state=active]:border-primary data-[state=active]:text-primary bg-transparent"
                >
                  Features
                </TabsTrigger>
              )}
              {benefits.length > 0 && (
                <TabsTrigger 
                  value="benefits" 
                  className="rounded-none border-b-2 border-transparent px-6 py-3 text-sm font-bold uppercase tracking-widest data-[state=active]:border-primary data-[state=active]:text-primary bg-transparent"
                >
                  Benefits
                </TabsTrigger>
              )}
              {(crops || dosage || contents) && (
                <TabsTrigger 
                  value="application" 
                  className="rounded-none border-b-2 border-transparent px-6 py-3 text-sm font-bold uppercase tracking-widest data-[state=active]:border-primary data-[state=active]:text-primary bg-transparent"
                >
                  Application
                </TabsTrigger>
              )}
              {packSize && (
                <TabsTrigger 
                  value="packsize" 
                  className="rounded-none border-b-2 border-transparent px-6 py-3 text-sm font-bold uppercase tracking-widest data-[state=active]:border-primary data-[state=active]:text-primary bg-transparent"
                >
                  Pack Size
                </TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="description" className="mt-0 outline-none">
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                {description}
              </p>
            </TabsContent>

            {features.length > 0 && (
              <TabsContent value="features" className="mt-0 outline-none">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 bg-primary/5 p-4 rounded-xl border border-primary/10">
                      <span className="text-primary text-xl">⚡</span>
                      <span className="text-foreground font-bold text-sm leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            )}

            {benefits.length > 0 && (
              <TabsContent value="benefits" className="mt-0 outline-none">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-3 bg-accent/5 p-4 rounded-xl border border-accent/10">
                      <span className="text-accent text-xl">✨</span>
                      <span className="text-foreground font-bold text-sm leading-tight">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            )}

            {(crops || dosage || contents) && (
              <TabsContent value="application" className="mt-0 outline-none">
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                  <div className="flex flex-col space-y-4">
                    {contents && (
                      <div>
                        <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          Contents:
                        </h4>
                        <p className="text-muted-foreground font-semibold italic pl-3.5 border-l-2 border-primary/20">
                          {contents}
                        </p>
                      </div>
                    )}
                    {crops && (
                      <div>
                        <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          Recommended Crops:
                        </h4>
                        <p className="text-muted-foreground font-semibold italic pl-3.5 border-l-2 border-primary/20">
                          {crops}
                        </p>
                      </div>
                    )}
                    {dosage && (
                      <div>
                        <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          Dosage & Usage:
                        </h4>
                        <p className="text-muted-foreground font-semibold italic pl-3.5 border-l-2 border-primary/20">
                          {dosage}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            )}

            {packSize && (
              <TabsContent value="packsize" className="mt-0 outline-none">
                <div className="flex flex-wrap gap-3">
                  {packSize.split(',').map((size, idx) => (
                    <div key={idx} className="px-6 py-3 bg-white border-2 border-primary/10 rounded-2xl shadow-sm hover:border-primary hover:text-primary transition-all duration-300 font-black text-lg">
                      {size.trim()}
                    </div>
                  ))}
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </div>
    </Card>
  );
};


