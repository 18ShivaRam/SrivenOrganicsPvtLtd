const awards = [
  {
    name: "CNBC Emerging India Awards 2012",
    logo: "https://www.ariesagro.com/wp-content/uploads/2022/11/cnbc-awards-logo-2.png",
  },
  {
    name: "ILO",
    logo: "https://www.ariesagro.com/wp-content/uploads/2022/11/ilo.png",
  },
  {
    name: "Dalal Street",
    logo: "https://www.ariesagro.com/wp-content/uploads/2022/11/dalalstret.png",
  },
  {
    name: "Norwegian Accreditation",
    logo: "https://www.ariesagro.com/wp-content/uploads/2022/11/na.png",
  },
  {
    name: "Agro Tech 2010",
    logo: "https://www.ariesagro.com/wp-content/uploads/2022/11/agrotech.png",
  },
  {
    name: "US Department of Agriculture",
    logo: "https://www.ariesagro.com/wp-content/uploads/2022/11/united-1.png",
  },
  {
    name: "Inc. 500",
    logo: "https://www.ariesagro.com/wp-content/uploads/2022/11/Inc-5000.png",
  },
  {
    name: "Incredible India Innovative 100",
    logo: "https://www.ariesagro.com/wp-content/uploads/2022/11/inov.png",
  },
];

export const AwardsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Awards & Recognition
          </h2>
          <p className="text-lg text-muted-foreground">
            Recognized excellence in agricultural innovation and service
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center aspect-square group"
            >
              <img
                src={award.logo}
                alt={award.name}
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};