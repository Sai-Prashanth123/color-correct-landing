import { Button } from "@/components/ui/button";
import { Menu, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-teal-light sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-orange-primary">
              <path d="M16 2L20 10L28 10L22 16L24 24L16 20L8 24L10 16L4 10L12 10L16 2Z" fill="currentColor"/>
              <path d="M6 26L16 20L26 26" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-800 leading-tight">NOMADIC</span>
            <span className="text-lg font-bold text-gray-800 leading-tight">TRAILS</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-orange-primary transition-colors font-medium">
            Features
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-primary transition-colors font-medium">
            Roadmap
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-primary transition-colors font-medium">
            Community
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex text-gray-700 hover:text-orange-primary" asChild>
            <Link to="/list-business">
              <MapPin className="h-4 w-4 mr-2" />
              List Your Business
            </Link>
          </Button>
          <Button className="bg-orange-primary hover:bg-orange-primary/90 text-white px-6">
            Start My Trail
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