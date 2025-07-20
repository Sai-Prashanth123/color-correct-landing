import { Button } from "@/components/ui/button";
import communityImage from "@/assets/community-workspace.jpg";

const CommunitySection = () => {
  return (
    <section className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img 
              src={communityImage} 
              alt="Community workspace" 
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Meet Your AI Travel Buddy
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Our intelligent travel companion helps you discover the perfect destinations, 
              find reliable internet speeds, connect with local nomad communities, and 
              navigate visa requirements effortlessly.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
                <span className="text-foreground">Personalized destination recommendations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
                <span className="text-foreground">Real-time internet speed data</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
                <span className="text-foreground">Local community connections</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-orange-primary hover:bg-orange-primary/90 text-white px-8"
            >
              Try Travel Buddy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;