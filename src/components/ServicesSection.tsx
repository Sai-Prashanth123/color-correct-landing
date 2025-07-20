import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Users, MapPin, Headphones } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Co-working Spaces",
      description: "Find beautiful spaces to work from anywhere in the world",
      color: "bg-orange-light",
      textColor: "text-orange-primary"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Connect with like-minded digital nomads and remote workers",
      color: "bg-teal-light", 
      textColor: "text-teal"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Travel Planning",
      description: "Plan your next destination with insider tips and guides",
      color: "bg-green-light",
      textColor: "text-green"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Get help whenever you need it, wherever you are",
      color: "bg-purple-light",
      textColor: "text-purple"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Essential Services for Nomads
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to live and work from anywhere, all in one place
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <div className={service.textColor}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;