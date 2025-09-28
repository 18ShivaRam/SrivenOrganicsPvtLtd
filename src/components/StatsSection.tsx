import { Award, Sprout, Truck, Factory } from 'lucide-react';

const stats = [
  {
    icon: Award,
    number: "133",
    label: "brands",
  },
  {
    icon: Sprout,
    number: "9M",
    label: "Farmers",
  },
  {
    icon: Truck,
    number: "10K",
    label: "Distributors",
  },
  {
    icon: Factory,
    number: "06",
    label: "Manufacturing Units",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium capitalize">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};