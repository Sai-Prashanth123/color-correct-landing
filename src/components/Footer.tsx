import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-primary rounded-full"></div>
              <span className="text-xl font-bold">Nomad</span>
            </div>
            <p className="text-background/70">
              Empowering digital nomads to work from anywhere with the tools, 
              community, and resources they need to thrive.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-orange-primary transition-colors">Co-working Spaces</a></li>
              <li><a href="#" className="hover:text-orange-primary transition-colors">Travel Planning</a></li>
              <li><a href="#" className="hover:text-orange-primary transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-orange-primary transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-orange-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-background/70 text-sm">
              Get the latest nomad tips and destination guides
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button className="bg-orange-primary hover:bg-orange-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-background/20">
          <p className="text-background/70 text-sm">
            © 2024 Nomad. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-background/70 hover:text-orange-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/70 hover:text-orange-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/70 hover:text-orange-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/70 hover:text-orange-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;