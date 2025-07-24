import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Home, FileCheck, Plane, Smartphone, FileText, Check, DollarSign, Users, Shield, Bus, Bell, MapPin, ChevronDown, Coffee } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative" style={{ minHeight: '100vh' }}>
        <img 
          src="/Group 1171276529.jpg" 
          alt="Hero background" 
          className="w-full h-screen object-cover block"
        />
        <div className="absolute inset-0 z-10">
          <Header />
          <HeroSection />
        </div>
      </div>
      
              {/* New Services Section with gradient background */}
        <section id="features" className="relative w-full min-h-screen bg-gradient-to-b from-[#FDD384] to-white" >
          <div className="container mx-auto px-4 md:px-10 relative z-0 flex flex-col items-center justify-start pt-8 sm:pt-12 md:pt-16 lg:pt-32 min-h-screen text-center">
            <h2 className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] font-bold font-['Onest'] text-black mb-2 sm:mb-3 md:mb-4 px-4">
                Essential Services for Nomads
              </h2>
              
            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal font-['Onest'] text-black max-w-2xl text-center mx-auto mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-4">
                Everything you need to work from anywhere, all in one place.
              </p>
              
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-12 mt-2 sm:mt-4 md:mt-8 w-full max-w-6xl px-4">
                <Card className="border-0 shadow-lg w-full max-w-[350px] sm:max-w-[400px] lg:w-[502px] h-auto lg:h-[334px] bg-[#EDAD68] rounded-2xl">
                  <CardContent className="p-4 sm:p-6 md:p-8 text-left h-full flex flex-col justify-start">
                    {/* Icon */}
                    <div className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-[#C07F38] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                      <Monitor className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold font-['Onest'] text-black mb-2 sm:mb-3 md:mb-4">
                      Coworking Finder
                    </h3>
                    
                    {/* Description */}
                    <p className="text-black mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base leading-relaxed">
                      Discover productive workspaces with reliable internet and great coffee worldwide.
                    </p>
                    
                    {/* Button */}
                    <div className="mt-auto">
                      <Button variant="ghost" className="text-black font-bold text-xs sm:text-sm md:text-base p-0 hover:bg-transparent">
                        Find workspaces →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <img 
                  src="/coworkin man.png" 
                  alt="Coworking man" 
                  className="w-full max-w-[250px] sm:max-w-[300px] lg:max-w-none lg:w-auto h-auto max-h-[200px] sm:max-h-[250px] lg:max-h-[320px] object-contain"
                />
              </div>
          </div>
        </section>

        {/* Coliving Spaces Section */}
        <section className="relative w-full min-h-screen bg-gradient-to-b from-white to-[#FDF0CB] mb-0 pb-0">
          <div className="container mx-auto px-4 md:px-10 relative z-0 flex flex-col items-center justify-start pt-8 sm:pt-16 md:pt-24 lg:pt-38 min-h-screen text-center mb-0 pb-0">
            
            {/* Coliving Card Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-12 w-full max-w-6xl px-4">
              <div className="order-2 lg:order-1">
                <img 
                  src="/Group 1171276523.png" 
                  alt="Coliving house with nomad" 
                  className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[532px] h-auto object-contain"
                />
              </div>
              
              <Card className="order-1 lg:order-2 border-0 shadow-lg bg-[#E7C65B] rounded-2xl w-full max-w-[350px] sm:max-w-[400px] lg:w-[502px] h-auto lg:h-[348px]">
                <CardContent className="p-4 sm:p-6 md:p-8 text-left h-full flex flex-col justify-start">
                  {/* Icon */}
                  <div className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                    <Home className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold font-['Onest'] text-black mb-2 sm:mb-3 md:mb-4">
                    Coliving Spaces
                  </h3>
                  
                  {/* Description */}
                  <p className="text-black mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base leading-relaxed">
                    Find the perfect coliving space with fast WiFi and a community of like-minded nomads.
                  </p>
                  
                  {/* Button */}
                  <div className="mt-auto">
                    <Button variant="ghost" className="text-black font-bold text-xs sm:text-sm md:text-base p-0 hover:bg-transparent">
                      Find spaces →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Visa Help Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-12 mt-8 sm:mt-12 md:mt-16 lg:mt-32 w-full max-w-6xl px-4">
              <Card className="border-0 shadow-lg bg-[#3EBFB1] rounded-2xl w-full max-w-[350px] sm:max-w-[400px] lg:w-[502px] h-auto lg:h-[348px]">
                <CardContent className="p-4 sm:p-6 md:p-8 text-left h-full flex flex-col justify-start">
                  {/* Icon */}
                  <div className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-[#2E9A8F] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                    <FileCheck className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold font-['Onest'] text-black mb-2 sm:mb-3 md:mb-4">
                    Visa Help
                  </h3>
                  
                  {/* Description */}
                  <p className="text-black mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base leading-relaxed">
                    Navigate visa requirements with our comprehensive database and application guides.
                  </p>
                  
                  {/* Button */}
                  <div className="mt-auto">
                    <Button variant="ghost" className="text-black font-bold text-xs sm:text-sm md:text-base p-0 hover:bg-transparent">
                      Check requirements →
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <img 
                src="/Group 1171276531.png" 
                alt="Nomad with visa document" 
                className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[510px] h-auto object-contain"
              />
            </div>
            
            {/* Additional Services Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12 md:mt-16 lg:mt-32 w-full max-w-6xl px-4">
              {/* Smart Flight Search Card */}
              <Card className="border-0 shadow-lg bg-[#E1718B] rounded-2xl w-full h-auto">
                <CardContent className="p-3 sm:p-4 md:p-6 text-left h-full flex flex-col justify-start">
                  {/* Icon */}
                  <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-[#D15A78] rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                    <Plane className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold font-['Onest'] text-black mb-2 md:mb-3">
                    Smart Flight Search
                  </h3>
                  
                  {/* Description */}
                  <p className="text-black mb-3 sm:mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">
                    Find the best flight deals with flexible dates perfect for digital nomads.
                  </p>
                  
                  {/* Button */}
                  <div className="mt-auto">
                    <Button variant="ghost" className="text-black font-bold text-xs md:text-sm p-0 hover:bg-transparent">
                      Explore flights →
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* E-SIM Options Card */}
              <Card className="border-0 shadow-lg bg-[#8BA365] rounded-2xl w-full h-auto">
                <CardContent className="p-3 sm:p-4 md:p-6 text-left h-full flex flex-col justify-start">
                  {/* Icon */}
                  <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-[#7A9052] rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                    <Smartphone className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold font-['Onest'] text-black mb-2 md:mb-3">
                    E-SIM Options
                  </h3>
                  
                  {/* Description */}
                  <p className="text-black mb-3 sm:mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">
                    Stay connected with affordable data plans that work in multiple countries.
                  </p>
                  
                  {/* Button */}
                  <div className="mt-auto">
                    <Button variant="ghost" className="text-black font-bold text-xs md:text-sm p-0 hover:bg-transparent">
                      Compare plans →
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* PDF Trip Planner Card */}
              <Card className="border-0 shadow-lg bg-[#807BDD] rounded-2xl w-full h-auto sm:col-span-2 lg:col-span-1">
                <CardContent className="p-3 sm:p-4 md:p-6 text-left h-full flex flex-col justify-start">
                  {/* Icon */}
                  <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-[#7068CA] rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                    <FileText className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold font-['Onest'] text-black mb-2 md:mb-3">
                    PDF Trip Planner
                  </h3>
                  
                  {/* Description */}
                  <p className="text-black mb-3 sm:mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">
                    Generate detailed itineraries with local insights, emergency contacts, and must-visit spots.
                  </p>
                  
                  {/* Button */}
                  <div className="mt-auto">
                    <Button variant="ghost" className="text-black font-bold text-xs md:text-sm p-0 hover:bg-transparent">
                      Create plan →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Co-working Bunch Image Section */}
        <div className="w-full" style={{ marginTop: '-20px' }}>
          <img 
            src="/co-working bunch.jpg" 
            alt="Co-working bunch" 
            className="w-full h-auto object-cover block"
            style={{ display: 'block', margin: '0', padding: '0', verticalAlign: 'top' }}
          />
        </div>

                 {/* AI Travel Buddy Section */}
         <section 
           className="relative w-full min-h-screen bg-gradient-to-b from-[#FFFCF8] to-[#F7CC84]"
           style={{ paddingBottom: '10px' }}
         >
           <div className="container mx-auto px-4 md:px-10 relative z-0 flex flex-col items-center justify-start pt-8 sm:pt-12 md:pt-16 lg:pt-26 min-h-screen">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-16 max-w-7xl w-full">
              {/* Left Content */}
              <div className="flex-1 text-left order-2 lg:order-1">
                <h2 className="text-[24px] sm:text-[28px] md:text-[30px] lg:text-[33px] font-bold font-['Onest'] text-gray-800 mb-4 sm:mb-5 md:mb-6 leading-tight">
                  Meet Your AI Travel Buddy
                </h2>
                
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal font-['Onest'] text-gray-600 mb-6 sm:mb-7 md:mb-8 leading-relaxed">
                  Get personalized recommendations, instant answers to your travel questions, and help planning your perfect nomadic journey.
                </p>
                
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 md:mb-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 sm:w-6 h-5 sm:h-6 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 sm:w-4 h-3 sm:h-4 text-black" />
                    </div>
                    <span className="text-gray-700 text-[13px] sm:text-[14px] md:text-[16px] font-['Onest']">
                      Visa requirement checks for your nationality
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-5 sm:w-6 h-5 sm:h-6 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 sm:w-4 h-3 sm:h-4 text-black" />
                    </div>
                    <span className="text-gray-700 text-[13px] sm:text-[14px] md:text-[16px] font-['Onest']">
                      Cost of living comparisons between destinations
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-5 sm:w-6 h-5 sm:h-6 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 sm:w-4 h-3 sm:h-4 text-grey-700" />
                    </div>
                    <span className="text-gray-700 text-[13px] sm:text-[14px] md:text-[16px] font-['Onest']">
                      Weather-based travel recommendations
                    </span>
                  </div>
                </div>
                
                <Button 
                  className="bg-[#FA982F] hover:bg-[#E8851B] text-white font-semibold text-[14px] sm:text-[16px] md:text-[18px] font-['Onest'] rounded-lg w-full sm:w-auto px-6 sm:px-8 md:px-12 py-3 sm:py-4"
                >
                  Chat Now
                </Button>
              </div>
              
              {/* Right Image */}
              <div className="flex-shrink-0 order-1 lg:order-2">
                <img 
                  src="/robot.png" 
                  alt="AI Travel Buddy Robot" 
                  className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[381px] h-auto object-contain mx-auto"
                />
              </div>
            </div>

             {/* What's Brewing Section */}
             <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-32 text-center max-w-7xl w-full px-4">
               {/* Coming Soon Badge */}
               <div className="inline-block bg-[#F7CB80] text-[#8B4513] px-3 sm:px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium mb-4 sm:mb-6 md:mb-8">
                 Coming Soon
               </div>
               
               {/* Main Heading */}
               <h2 className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] font-bold font-['Onest'] text-gray-800 mb-2 sm:mb-3 md:mb-4 flex items-center justify-center gap-2 md:gap-3 flex-wrap">
                 What's Brewing
                 <Coffee className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-[#8B4513]" />
               </h2>
               
               {/* Subheading */}
               <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-normal font-['Onest'] text-gray-600 mb-6 sm:mb-8 md:mb-10 lg:mb-16 max-w-3xl mx-auto px-4">
                 We're constantly developing new features to make your nomadic journey smoother.
               </p>
               
               {/* Cards Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                 {/* Budget Planner Card */}
                 <Card className="border-0 shadow-lg bg-[#3EBFB1] rounded-2xl w-full h-auto">
                   <CardContent className="p-3 sm:p-4 md:p-6 text-left h-full flex flex-col">
                     {/* Icon */}
                     <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                       <DollarSign className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                     </div>
                     
                     {/* Title */}
                     <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold font-['Onest'] text-gray-800 mb-2 md:mb-3">
                       Budget Planner
                     </h3>
                     
                     {/* Description */}
                     <p className="text-gray-700 text-xs md:text-sm mb-3 sm:mb-4 md:mb-6 leading-relaxed flex-grow">
                       Track your expenses across different currencies and get insights on your spending habits.
                     </p>
                     
                     {/* Button */}
                     <Button className="bg-white bg-opacity-20 text-gray-800 font-medium text-xs md:text-sm px-2 sm:px-3 md:px-4 py-2 hover:bg-white hover:bg-opacity-30 rounded-lg w-fit border-0">
                       <Bell className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" />
                       Notify Me
                     </Button>
                   </CardContent>
                 </Card>
                 
                 {/* Nomad Match Card */}
                 <Card className="border-0 shadow-lg bg-[#EDAD68] rounded-2xl w-full h-auto">
                   <CardContent className="p-3 sm:p-4 md:p-6 text-left h-full flex flex-col">
                     {/* Icon */}
                     <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                       <Users className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                     </div>
                     
                     {/* Title */}
                     <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold font-['Onest'] text-gray-800 mb-2 md:mb-3">
                       Nomad Match
                     </h3>
                     
                     {/* Description */}
                     <p className="text-gray-700 text-xs md:text-sm mb-3 sm:mb-4 md:mb-6 leading-relaxed flex-grow">
                       Find travel companions with similar interests, work styles, and destination preferences.
                     </p>
                     
                     {/* Button */}
                     <Button className="bg-white bg-opacity-20 text-gray-800 font-medium text-xs md:text-sm px-2 sm:px-3 md:px-4 py-2 hover:bg-white hover:bg-opacity-30 rounded-lg w-fit border-0">
                       <Bell className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" />
                       Notify Me
                     </Button>
                   </CardContent>
                 </Card>
                 
                 {/* Visa Alerts Card */}
                 <Card className="border-0 shadow-lg bg-[#E7C65B] rounded-2xl w-full h-auto">
                   <CardContent className="p-3 sm:p-4 md:p-6 text-left h-full flex flex-col">
                     {/* Icon */}
                     <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                       <Shield className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                     </div>
                     
                     {/* Title */}
                     <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold font-['Onest'] text-gray-800 mb-2 md:mb-3">
                       Visa Alerts
                     </h3>
                     
                     {/* Description */}
                     <p className="text-gray-700 text-xs md:text-sm mb-3 sm:mb-4 md:mb-6 leading-relaxed flex-grow">
                       Get notified about visa expiration dates and new visa opportunities for digital nomads.
                     </p>
                     
                     {/* Button */}
                     <Button className="bg-white bg-opacity-20 text-gray-800 font-medium text-xs md:text-sm px-2 sm:px-3 md:px-4 py-2 hover:bg-white hover:bg-opacity-30 rounded-lg w-fit border-0">
                       <Bell className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" />
                       Notify Me
                     </Button>
                   </CardContent>
                 </Card>
                 
                 {/* Transport Hack Card */}
                 <Card className="border-0 shadow-lg bg-[#807BDD] rounded-2xl w-full h-auto">
                   <CardContent className="p-3 sm:p-4 md:p-6 text-left h-full flex flex-col">
                     {/* Icon */}
                     <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                       <Bus className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                     </div>
                     
                     {/* Title */}
                     <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold font-['Onest'] text-black mb-2 md:mb-3">
                       Transport Hack
                     </h3>
                     
                     {/* Description */}
                     <p className="text-black text-xs md:text-sm mb-3 sm:mb-4 md:mb-6 leading-relaxed flex-grow">
                       Discover local transportation secrets and save money while exploring new destinations.
                     </p>
                     
                     {/* Button */}
                     <Button className="bg-white bg-opacity-20 text-black font-medium text-xs md:text-sm px-2 sm:px-3 md:px-4 py-2 hover:bg-white hover:bg-opacity-30 rounded-lg w-fit border-0">
                       <Bell className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" />
                       Notify Me
                     </Button>
                   </CardContent>
                 </Card>
               </div>
             </div>
           </div>
         </section>

         {/* Co-living Bunch Image Section */}
         <div className="relative w-full">
           <img 
             src="/co-living bunch.jpg" 
             alt="Co-living bunch" 
             className="w-full h-auto object-cover block"
             style={{ marginTop: '-1px' }}
           />
         </div>

         {/* Community Section */}
         <section id="community" className="relative w-full min-h-screen bg-[#FFFFFF]" style={{ marginTop: '-1px' }}>
           <div className="container mx-auto px-4 md:px-10 relative z-0 flex flex-col items-center justify-start pt-6 sm:pt-8 md:pt-12 min-h-screen">
             {/* Main Heading */}
             <h2 className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] font-bold font-['Onest'] text-gray-800 mb-2 sm:mb-3 md:mb-4 text-center">
               Join the Community Trail
             </h2>
             
             {/* Subheading */}
             <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-normal font-['Onest'] text-gray-600 mb-6 sm:mb-8 md:mb-10 text-center max-w-3xl px-4">
               Connect with fellow nomads, share experiences, and discover hidden gems around the world.
             </p>
             
             {/* Content Layout */}
             <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8 max-w-7xl w-full">
               {/* Left - Map Image */}
               <div className="flex-shrink-0 order-2 lg:order-1 w-full lg:w-auto">
                 <img 
                   src="/map.jpg" 
                   alt="Community map with nomad characters" 
                   className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[624px] h-auto object-cover rounded-2xl mx-auto"
                 />
               </div>
               
               {/* Right - Find Your Tribe */}
               <div className="flex-1 max-w-full lg:max-w-md order-1 lg:order-2 w-full">
                 <h3 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-bold font-['Onest'] text-gray-800 mb-3 sm:mb-4 md:mb-6 text-center lg:text-left">
                   Find Your Tribe
                 </h3>
                 
                 {/* Interest Selection */}
                 <div className="mb-3 sm:mb-4 md:mb-6">
                   <p className="text-[12px] sm:text-[14px] md:text-[16px] font-medium font-['Onest'] text-gray-700 mb-2 sm:mb-3 md:mb-4 text-center lg:text-left">
                     I'm interested in:
                   </p>
                   
                   <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start">
                     <Button className="bg-[#FA982F] hover:bg-[#E8851B] text-white px-2 sm:px-3 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium">
                       All
                     </Button>
                     <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-2 sm:px-3 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium">
                       Local Meetups
                     </Button>
                     <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-2 sm:px-3 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium">
                       Skill Sharing
                     </Button>
                     <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-2 sm:px-3 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium">
                       LGBTQ+ Friendly
                     </Button>
                     <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-2 sm:px-3 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium">
                       Travel Journals
                     </Button>
                   </div>
                 </div>
                 
                 {/* Current Region */}
                 <div className="mb-3 sm:mb-4 md:mb-6">
                   <p className="text-[12px] sm:text-[14px] md:text-[16px] font-medium font-['Onest'] text-gray-700 mb-2 sm:mb-3 md:mb-4 text-center lg:text-left">
                     Current region:
                   </p>
                   
                   <div className="relative">
                     <Button variant="outline" className="w-full justify-between border-gray-300 text-gray-700 hover:bg-gray-50 px-3 md:px-4 py-2 md:py-3 rounded-lg text-xs md:text-sm font-medium">
                       <div className="flex items-center">
                         <MapPin className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" />
                         Southeast Asia
                       </div>
                       <ChevronDown className="w-3 md:w-4 h-3 md:h-4" />
                     </Button>
                   </div>
                 </div>
                 
                 {/* Explore Community Button */}
                 <Button className="bg-[#FA982F] hover:bg-[#E8851B] text-white w-full py-2 md:py-3 text-[12px] sm:text-[14px] md:text-[16px] font-semibold font-['Onest'] rounded-lg">
                   Explore Community
                 </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Feedback Section with Background Image */}
        <div id="roadmap" className="relative w-full" style={{ marginTop: '-1px' }}>
          {/* Background Image */}
          <img 
            src="/Group 1171276518.jpg" 
            alt="Additional community image" 
            className="w-full h-auto object-cover block"
            style={{ display: 'block', margin: '0', padding: '0', verticalAlign: 'top' }}
          />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 md:pb-20">
            <div className="container mx-auto px-4 md:px-10 relative z-0 flex flex-col items-center justify-center">
              {/* Main Heading */}
              <h2 className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] font-bold font-['Onest'] text-black mb-2 sm:mb-3 md:mb-4 text-center">
                Your Voice = Our Roadmap
              </h2>
              
              {/* Subheading */}
              <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-normal font-['Onest'] text-black mb-6 sm:mb-8 md:mb-10 text-center max-w-2xl px-4">
                Your feedback helps us create better tools for the nomadic community.
              </p>
              
              {/* Feedback Form */}
              <div className="w-full max-w-md px-4">
                {/* Email Input */}
                <div className="mb-3 sm:mb-4 md:mb-6">
                  <label htmlFor="email" className="block text-black text-xs md:text-sm font-medium font-['Onest'] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg text-black placeholder-gray-500 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#FA982F] focus:border-transparent"
                  />
                </div>
                
                {/* Feedback Text Area */}
                <div className="mb-3 sm:mb-4 md:mb-6">
                  <label htmlFor="feedback" className="block text-black text-xs md:text-sm font-medium font-['Onest'] mb-2">
                    What would make your nomadic journey easier?
                  </label>
                  <textarea
                    id="feedback"
                    rows={3}
                    placeholder="Share your thoughts..."
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg text-black placeholder-gray-500 text-sm md:text-base resize-none focus:outline-none focus:ring-2 focus:ring-[#FA982F] focus:border-transparent"
                  />
                </div>
                
                {/* Beta Testing Toggle */}
                <div className="mb-4 sm:mb-6 md:mb-8 flex items-center">
                  <input
                    type="checkbox"
                    id="beta"
                    className="w-4 md:w-5 h-4 md:h-5 text-[#FA982F] bg-white border-gray-300 rounded focus:ring-[#FA982F] focus:ring-2"
                  />
                  <label htmlFor="beta" className="ml-2 md:ml-3 text-black text-xs md:text-sm font-['Onest']">
                    I'd like to join the beta testing program
                  </label>
                </div>
                
                {/* Submit Button */}
                <Button className="bg-[#FA982F] hover:bg-[#E8851B] text-white w-full py-2 md:py-3 text-[12px] sm:text-[14px] md:text-[16px] font-semibold font-['Onest'] rounded-lg">
                  Submit Feedback
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Snow Image Section */}
        <div className="w-full" style={{ marginTop: '-1px' }}>
          <img 
            src="/snow.jpg" 
            alt="Snow landscape" 
            className="w-full h-auto object-cover block"
            style={{ display: 'block', margin: '0', padding: '0', verticalAlign: 'top' }}
          />
        </div>

        {/* Footer Section */}
        <footer className="w-full bg-[#F5F1E8] py-6 sm:py-8 md:py-12" style={{ marginTop: '-1px' }}>
          <div className="container mx-auto px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Left - Brand Section */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start">
                  <img 
                    src="/Link → NomadTrails Logo.png" 
                    alt="Nomadic Trails Logo" 
                    className="h-8 sm:h-10 md:h-12 w-auto"
                  />
                </div>
                <p className="text-black text-xs md:text-sm font-['Onest'] max-w-xs mx-auto md:mx-0">
                  Empowering digital nomads with the tools and community they need to thrive anywhere in the world.
                </p>
              </div>

              {/* Middle - Quick Links */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4 text-center md:text-left">
                <h3 className="text-black font-semibold font-['Onest'] text-sm md:text-base">Quick Links</h3>
                <ul className="space-y-1 md:space-y-2">
                  <li><a href="#" className="text-black text-xs md:text-sm font-['Onest'] hover:text-[#FA982F] transition-colors">Features</a></li>
                  <li><a href="#" className="text-black text-xs md:text-sm font-['Onest'] hover:text-[#FA982F] transition-colors">Concierge</a></li>
                  <li><a href="#" className="text-black text-xs md:text-sm font-['Onest'] hover:text-[#FA982F] transition-colors">Community</a></li>
                </ul>
              </div>

              {/* Right - Contact */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4 text-center md:text-left">
                <h3 className="text-black font-semibold font-['Onest'] text-sm md:text-base">Contact</h3>
                <p className="text-black text-xs md:text-sm font-['Onest']">hello@explorenomad.com</p>
                <div className="flex space-x-3 justify-center md:justify-start">
                  <a href="#" className="text-black hover:text-[#FA982F] transition-colors">
                    <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-black hover:text-[#FA982F] transition-colors">
                    <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-black hover:text-[#FA982F] transition-colors">
                    <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-300 mt-4 sm:mt-6 md:mt-8 pt-3 sm:pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <p className="text-black text-xs md:text-sm font-['Onest']">© 2025 Nomadic Trails. All rights reserved.</p>
              <p className="text-black text-xs md:text-sm font-['Onest'] mt-2 md:mt-0">Made with love for the modern nomad</p>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default Index;
