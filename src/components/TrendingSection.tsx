import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Star, Globe, Coffee } from "lucide-react";

const TrendingSection = () => {
  const trendingItems = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Digital Nomad Visas",
      subtitle: "Latest updates",
      color: "bg-blue-light",
      textColor: "text-blue"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Co-working Spaces",
      subtitle: "Trending locations",
      color: "bg-orange-light",
      textColor: "text-orange-primary"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Top Destinations",
      subtitle: "This month",
      color: "bg-green-light",
      textColor: "text-green"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Cost of Living",
      subtitle: "Best value cities",
      color: "bg-purple-light",
      textColor: "text-purple"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What's Trending
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends in the digital nomad world
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingItems.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center`}>
                    <div className={item.textColor}>
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;