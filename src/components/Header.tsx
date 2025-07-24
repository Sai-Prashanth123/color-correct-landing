import { Button } from "@/components/ui/button";
import { Menu, MapPin, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    // Add passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 transition-all duration-300" style={{ paddingTop: '12px', zIndex: 999999, position: 'fixed' }}>
        <div className={`w-full md:mx-auto md:max-w-[1400px] transition-all duration-300 ${isScrolled ? 'bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl' : 'bg-transparent'}`} style={{ height: '74px', zIndex: 999999, position: 'relative' }}>
          <div className="px-4 md:px-6 h-full flex items-center w-full" style={{ zIndex: 999999, position: 'relative' }}>
            
            {/* Desktop Layout */}
            <div className="hidden md:flex items-center w-1/3">
              <Link to="/" className="flex items-center">
                <img 
                  src="/Link → NomadTrails Logo.png" 
                  alt="Nomadic Trails Logo" 
                  className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center justify-center w-1/3">
              <div className="flex items-center space-x-8" style={{ marginLeft: '-30px' }}>
                <a 
                  href="#features" 
                  className="text-black hover:text-orange-primary transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Features
                </a>
                <a 
                  href="#roadmap" 
                  className="text-black hover:text-orange-primary transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Roadmap
                </a>
                <a 
                  href="#community" 
                  className="text-black hover:text-orange-primary transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Community
                </a>
              </div>
            </nav>

            <div className="hidden md:flex items-center justify-end space-x-4 w-1/3">
              <Button variant="ghost" className="text-black hover:text-orange-primary hover:bg-transparent" asChild>
                <Link to="/list-business">
                  <MapPin className="h-4 w-4 mr-2" />
                  List Your Business
                </Link>
              </Button>
              <Button className="bg-orange-primary hover:bg-orange-primary/90 text-white px-6">
                Start My Trail
              </Button>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex items-center justify-start w-full">
              <div className="flex items-center space-x-3">
                <Link to="/" className="flex items-center">
                  <img 
                    src="/Link → NomadTrails Logo.png" 
                    alt="Nomadic Trails Logo" 
                    className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </Link>
                
                <Button variant="ghost" className="text-black hover:text-orange-primary hover:bg-transparent text-sm px-3 py-2" asChild>
                  <Link to="/list-business">
                    <MapPin className="h-4 w-4 mr-1" />
                    List Business
                  </Link>
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-black"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6 text-black" />
                  ) : (
                    <Menu className="h-6 w-6 text-black" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg z-[999998] pt-24">
          <div className="container mx-auto px-6 py-8">
            <nav className="space-y-8">
              <a 
                href="#features" 
                className="block text-2xl font-medium text-black hover:text-orange-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('features');
                }}
              >
                Features
              </a>
              <a 
                href="#roadmap" 
                className="block text-2xl font-medium text-black hover:text-orange-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('roadmap');
                }}
              >
                Roadmap
              </a>
              <a 
                href="#community" 
                className="block text-2xl font-medium text-black hover:text-orange-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('community');
                }}
              >
                Community
              </a>
              
              <div className="pt-8">
                <Button 
                  className="bg-orange-primary hover:bg-orange-primary/90 text-white w-full py-4 text-lg font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start My Trail
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;