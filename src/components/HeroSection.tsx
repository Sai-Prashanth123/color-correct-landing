import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 py-8 sm:py-12 md:py-16 lg:py-32 pb-0 relative z-10 flex items-start min-h-screen">
        <div className="text-left mt-16 sm:mt-20 md:mt-24 lg:mt-28">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <h1 className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] font-bold font-['Onest'] text-black leading-tight">
              Made for those
              <br />
              <span className="text-orange-primary">allergic to cubicle</span>
            </h1>
            
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal font-['Onest'] text-black max-w-2xl">
              Feito para quem é alérgico a escritórios
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button 
                size="lg" 
                className="bg-orange-primary hover:bg-orange-primary/90 text-white w-full sm:w-[188px] h-[44px] sm:h-[50px] text-sm sm:text-base font-semibold"
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