import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: "Enhancing Plant Growth with Organic Liquid Fertilizers in Hydroponics: A Journey into Sustainable Agriculture",
    excerpt: "The realm of agriculture is undergoing a profound transformation, driven by an unwavering commitment to...",
    date: "25 Dec",
    image: "https://www.ariesagro.com/wp-content/uploads/2023/12/vertical-plant-cultivation-organic-gardening-1.jpg",
  },
  {
    id: 2,
    title: "Maximizing Plant Health and Disease Resistance with Micronutrient Mixture Fertilizer",
    excerpt: "In the quest for agricultural excellence, farmers strive to cultivate healthy, productive crops that yield...",
    date: "22 Nov",
    image: "https://www.ariesagro.com/wp-content/uploads/2023/11/66.jpg",
  },
  {
    id: 3,
    title: "Colors of Freedom: Sriven Organics's Independence Day Celebration",
    excerpt: "Colors of Freedom: Aries Agro's Independence Day Celebration Independence Day in India is more than...",
    date: "5 Sep",
    image: "https://www.ariesagro.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-04-at-2.41.26-PM-1.png",
  },
  {
    id: 4,
    title: "Unlocking the Potential of Agriculture – The Role of Sriven BhuParikshak",
    excerpt: "In today's world, with a growing population and increasing food demand, agriculture plays a critical...",
    date: "7 Jul",
    image: "https://www.ariesagro.com/wp-content/uploads/2023/07/Unlocking-the-Potential-of-Agriculture.png",
  },
  {
    id: 5,
    title: "Sriven Organics listed among the \"Most Recommended Agriculture Solution Providers in India – 2020\"",
    excerpt: "Plants, we all know make their own food under sunlight. The roots, on the other...",
    date: "18 Nov",
    image: "https://www.ariesagro.com/wp-content/uploads/2022/11/blog1.jpg",
  },
  {
    id: 6,
    title: "Endomycorrihza",
    excerpt: "Soil is essential for the maintenance of biodiversity above and below ground. The wealth of...",
    date: "18 Nov",
    image: "https://www.ariesagro.com/wp-content/uploads/2022/11/endomycorrihzafeature.png",
  },
];

export const BlogsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Blogs & Videos
          </h2>
          <p className="text-lg text-muted-foreground">
            Read the blogs, videos and more offered by the Agriculture Experts at Sriven Organics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {blog.date}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
