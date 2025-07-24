import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 py-16 md:py-32 pb-0 relative z-10 flex items-start min-h-screen">
        <div className="text-left mt-20 md:mt-28">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-bold font-['Onest'] text-black leading-tight">
              Made for those
              <br />
              <span className="text-orange-primary">allergic to cubicle</span>
            </h1>
            
            <p className="text-[16px] md:text-[18px] font-normal font-['Onest'] text-black max-w-2xl">
              Feito para quem é alérgico a escritórios
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-orange-primary hover:bg-orange-primary/90 text-white w-full sm:w-[188px] h-[50px] text-base font-semibold"
              >
                Start my trail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;