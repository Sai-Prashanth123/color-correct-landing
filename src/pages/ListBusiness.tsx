import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Star, Users, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ListBusiness = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Background Image */}
      <div className="relative" style={{ minHeight: '100vh' }}>
        <img 
          src="/listing.jpg" 
          alt="List your business background" 
          className="w-full h-auto block"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-10" style={{ marginTop: '-120px' }}>
          <h1 className="text-[64px] font-bold font-['Onest'] text-white mb-6 leading-tight">
            List Your Business
          </h1>
          <p className="text-[24px] font-normal font-['Onest'] text-white max-w-4xl">
            Join the Nomadic Trails network and connect with digital nomads.
          </p>
        </div>
      </div>

      {/* White Background Section */}
      <section className="w-full bg-white py-20">
        <div className="container mx-auto px-10 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* Section 1: Business Information */}
              <Card className="shadow-sm border">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">Section 1: Business Information</CardTitle>
                  <CardDescription className="text-gray-600">Tell us about your business</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessName" className="text-sm font-medium text-gray-700">
                      Business Name *
                    </Label>
                    <Input id="businessName" placeholder="Enter your business name" className="w-full" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-sm font-medium text-gray-700">
                      Business Category *
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="coworking">Co-working Space</SelectItem>
                        <SelectItem value="accommodation">Accommodation</SelectItem>
                        <SelectItem value="cafe">Cafe & Restaurant</SelectItem>
                        <SelectItem value="service">Professional Service</SelectItem>
                        <SelectItem value="fitness">Fitness & Wellness</SelectItem>
                        <SelectItem value="transport">Transportation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                      Short Description *
                    </Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe your business (max 500 characters)"
                      rows={4}
                      className="w-full"
                    />
                    <p className="text-xs text-gray-500">0/500 characters</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-sm font-medium text-gray-700">
                      Website URL (Optional)
                    </Label>
                    <Input id="website" placeholder="https://your-website.com" className="w-full" />
                  </div>
                </CardContent>
              </Card>

              {/* Section 2: Location Details */}
              <Card className="shadow-sm border">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">Section 2: Location Details</CardTitle>
                  <CardDescription className="text-gray-600">Where is your business located?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-sm font-medium text-gray-700">
                      Country *
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="es">Spain</SelectItem>
                        <SelectItem value="it">Italy</SelectItem>
                        <SelectItem value="pt">Portugal</SelectItem>
                        <SelectItem value="mx">Mexico</SelectItem>
                        <SelectItem value="br">Brazil</SelectItem>
                        <SelectItem value="th">Thailand</SelectItem>
                        <SelectItem value="sg">Singapore</SelectItem>
                        <SelectItem value="jp">Japan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-medium text-gray-700">
                      City *
                    </Label>
                    <Input id="city" placeholder="Enter city name" className="w-full" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                      Street Address *
                    </Label>
                    <Input id="address" placeholder="Enter street address" className="w-full" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number (Optional)
                    </Label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" className="w-full" />
                  </div>
                </CardContent>
              </Card>

              {/* Section 3: Contact Info */}
              <Card className="shadow-sm border">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">Section 3: Contact Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Contact Email *
                    </Label>
                    <Input id="email" type="email" placeholder="contact@yourbusiness.com" className="w-full" />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-sm font-medium text-gray-700">
                      Social Media Links (Optional)
                    </Label>
                    
                    <div className="space-y-2">
                      <Label htmlFor="instagram" className="text-xs text-gray-600">Instagram</Label>
                      <Input id="instagram" placeholder="https://instagram.com/yourbusiness" className="w-full" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="facebook" className="text-xs text-gray-600">Facebook</Label>
                      <Input id="facebook" placeholder="https://facebook.com/yourbusiness" className="w-full" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="twitter" className="text-xs text-gray-600">Twitter</Label>
                      <Input id="twitter" placeholder="https://twitter.com/yourbusiness" className="w-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 4: Upload Photos */}
              <Card className="shadow-sm border">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">Section 4: Upload Photos</CardTitle>
                  <CardDescription className="text-gray-600">Show visitors what your space looks like (up to 5 photos)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                    <div className="space-y-4">
                      <div className="mx-auto w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-2">Drag & drop photos here or click to browse</p>
                        <p className="text-xs text-gray-500">JPG or PNG format only, up to 5 photos</p>
                      </div>
                      <Button className="bg-orange-primary hover:bg-orange-primary/90 text-white">
                        Choose Files
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 5: Agreement */}
              <Card className="shadow-sm border">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">Section 5: Agreement</CardTitle>
                  <CardDescription className="text-gray-600">Please confirm the following to complete your listing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <input 
                        type="checkbox" 
                        id="represent" 
                        className="mt-1 w-4 h-4 text-orange-primary border-gray-300 rounded focus:ring-orange-primary" 
                      />
                      <label htmlFor="represent" className="text-sm text-gray-700">
                        I confirm that I own or represent this business and have the authority to list it on Nomadic Trails.
                      </label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <input 
                        type="checkbox" 
                        id="terms" 
                        className="mt-1 w-4 h-4 text-orange-primary border-gray-300 rounded focus:ring-orange-primary" 
                      />
                      <label htmlFor="terms" className="text-sm text-gray-700">
                        I agree to Nomadic Trails' <a href="#" className="text-orange-primary underline">Terms of Service</a> and <a href="#" className="text-orange-primary underline">Privacy Policy</a>.
                      </label>
                    </div>
                  </div>

                  <Button className="w-full bg-orange-primary hover:bg-orange-primary/90 text-white py-3 text-lg font-semibold">
                    Submit My Business
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Info */}
            <div className="space-y-8">
              {/* Why List With Us */}
              <Card className="shadow-sm border">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">Why List With Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="h-4 w-4 text-orange-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Reach Digital Nomads</h4>
                      <p className="text-xs text-gray-600">Connect with a growing community of remote workers and location-independent professionals.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="h-4 w-4 text-orange-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Boost Visibility</h4>
                      <p className="text-xs text-gray-600">Get featured in our trusted listings and increase your business exposure.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <TrendingUp className="h-4 w-4 text-orange-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Direct Communication</h4>
                      <p className="text-xs text-gray-600">Engage directly with potential customers through our platform.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <TrendingUp className="h-4 w-4 text-orange-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Growth Insights</h4>
                      <p className="text-xs text-gray-600">Access analytics and insights to help grow your business.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="shadow-sm border">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">How long does approval take?</h4>
                    <p className="text-xs text-gray-600">Most listings are reviewed and approved within 24-48 hours.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Can I edit my listing later?</h4>
                    <p className="text-xs text-gray-600">Yes, you can update your business information anytime through your dashboard.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Is it free to list?</h4>
                    <p className="text-xs text-gray-600">Yes, basic listings are completely free. Premium features are available for upgrade.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#F5F1E8] py-12" style={{ marginTop: '-1px' }}>
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left - Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center">
                <img 
                  src="/Link → NomadTrails Logo.png" 
                  alt="Nomadic Trails Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-black text-sm font-['Onest'] max-w-xs">
                Empowering digital nomads with the tools and community they need to thrive anywhere in the world.
              </p>
            </div>

            {/* Middle - Quick Links */}
            <div className="space-y-4">
              <h3 className="text-black font-semibold font-['Onest']">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-black text-sm font-['Onest'] hover:text-[#FA982F] transition-colors">Features</a></li>
                <li><a href="#" className="text-black text-sm font-['Onest'] hover:text-[#FA982F] transition-colors">Concierge</a></li>
                <li><a href="#" className="text-black text-sm font-['Onest'] hover:text-[#FA982F] transition-colors">Community</a></li>
              </ul>
            </div>

            {/* Right - Contact */}
            <div className="space-y-4">
              <h3 className="text-black font-semibold font-['Onest']">Contact</h3>
              <p className="text-black text-sm font-['Onest']">hello@explorenomad.com</p>
              <div className="flex space-x-3">
                <a href="#" className="text-black hover:text-[#FA982F] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-black hover:text-[#FA982F] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-black hover:text-[#FA982F] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-black text-sm font-['Onest']">© 2025 Nomadic Trails. All rights reserved.</p>
            <p className="text-black text-sm font-['Onest'] mt-2 md:mt-0">Made with love for the modern nomad</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default ListBusiness;