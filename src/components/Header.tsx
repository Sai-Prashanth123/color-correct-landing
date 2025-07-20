import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-primary rounded-full"></div>
          <span className="text-xl font-bold text-foreground">Nomad</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-orange-primary transition-colors">
            Essential Services
          </a>
          <a href="#" className="text-foreground hover:text-orange-primary transition-colors">
            Travel Buddy
          </a>
          <a href="#" className="text-foreground hover:text-orange-primary transition-colors">
            Trending
          </a>
          <a href="#" className="text-foreground hover:text-orange-primary transition-colors">
            Community Trust
          </a>
          <a href="#" className="text-foreground hover:text-orange-primary transition-colors">
            Roadmap
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Log In
          </Button>
          <Button className="bg-orange-primary hover:bg-orange-primary/90">
            Sign Up
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;