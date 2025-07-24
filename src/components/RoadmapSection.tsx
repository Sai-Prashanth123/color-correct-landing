import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Send } from "lucide-react";

const RoadmapSection = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/Background+Border+Shadow.png')"
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-white/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Heading - 36px */}
          <h2 className="text-black font-bold mb-6 text-center" style={{ fontSize: '36px' }}>
            Your Voice = Our Roadmap
          </h2>
          
          {/* Subheading - 18px */}
          <p className="text-black mb-12 text-center" style={{ fontSize: '18px' }}>
            Your feedback helps us create better tools for the nomadic community.
          </p>
          
          {/* Feedback Form */}
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-black text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full bg-white/90 border-gray-300 text-black placeholder:text-gray-500"
              />
            </div>
            
            {/* Feedback Textarea */}
            <div>
              <label htmlFor="feedback" className="block text-black text-sm font-medium mb-2">
                What would make your nomadic journey easier?
              </label>
              <Textarea
                id="feedback"
                placeholder="Share your thoughts..."
                rows={6}
                className="w-full bg-white/90 border-gray-300 text-black placeholder:text-gray-500 resize-none"
              />
            </div>
            
            {/* Beta Testing Toggle */}
            <div className="flex items-center space-x-3">
              <Switch 
                id="beta-testing" 
                className="data-[state=checked]:bg-orange-500"
                defaultChecked={true}
              />
              <label htmlFor="beta-testing" className="text-black text-sm font-medium">
                I'd like to join the beta testing program
              </label>
            </div>
            
            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2"
              >
                Submit Feedback
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;