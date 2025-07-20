import { Button } from "@/components/ui/button";
import mountainImage from "@/assets/mountain-cabin.jpg";

const MountainSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-light to-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Join the Community Trust
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Connect with verified nomads, share experiences, and build lasting 
              friendships around the world. Our community-driven platform ensures 
              safe and authentic connections wherever you roam.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Active Nomads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-primary">150+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Co-working Spaces</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-orange-primary hover:bg-orange-primary/90 text-white px-8"
            >
              Join Community
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src={mountainImage} 
              alt="Mountain workspace" 
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MountainSection;