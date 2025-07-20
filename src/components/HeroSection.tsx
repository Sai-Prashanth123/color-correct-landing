import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beach.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-cream min-h-[80vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Made for those
              <br />
              <span className="text-orange-primary">allergic to cubicle</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md">
              Get the tools, community and resources to work from anywhere in the world. 
              Life's too short for office walls.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-primary hover:bg-orange-primary/90 text-white px-8"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-white"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Remote work paradise" 
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;