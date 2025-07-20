import { Button } from "@/components/ui/button";
import { MapPin, Plane, Users, Calendar } from "lucide-react";

const RoadmapSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cream to-warm-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Your Voice - Our Roadmap
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help us build the future of remote work. Share your ideas and vote on features 
            that matter most to the nomad community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-light rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-orange-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Location Finder</h3>
            <p className="text-sm text-muted-foreground">AI-powered destination matching</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Plane className="w-8 h-8 text-blue" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Travel Planner</h3>
            <p className="text-sm text-muted-foreground">Seamless trip coordination</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Meetup Groups</h3>
            <p className="text-sm text-muted-foreground">Local nomad communities</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-purple" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Event Calendar</h3>
            <p className="text-sm text-muted-foreground">Never miss nomad events</p>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-orange-primary hover:bg-orange-primary/90 text-white px-8"
          >
            Submit Your Ideas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;