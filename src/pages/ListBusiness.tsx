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
      
      {/* Hero Section */}
      <section className="bg-teal-light py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            List Your Business on Nomadic Trails
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses connecting with digital nomads and remote workers worldwide. 
            Showcase your services and become part of the nomadic community.
          </p>
          <div className="flex justify-center space-x-8 text-gray-600">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-orange-primary" />
              <span>50K+ Active Nomads</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-2 text-orange-primary" />
              <span>Trusted Reviews</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-orange-primary" />
              <span>Grow Your Business</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Business Information</CardTitle>
                <CardDescription>
                  Tell us about your business and how it serves the nomadic community
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input id="businessName" placeholder="Your Business Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="location" placeholder="City, Country" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe your business and what makes it special for nomads..."
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" placeholder="https://yourbusiness.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Contact Email</Label>
                    <Input id="email" type="email" placeholder="contact@yourbusiness.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amenities">Amenities & Features</Label>
                  <Textarea 
                    id="amenities" 
                    placeholder="WiFi speed, workspace setup, nomad-friendly features..."
                    rows={3}
                  />
                </div>

                <Button className="w-full bg-orange-primary hover:bg-orange-primary/90 text-white">
                  Submit Business Listing
                </Button>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Why List With Us?</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-orange-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Reach Global Nomads</h4>
                      <p className="text-gray-600">Connect with 50,000+ active digital nomads and remote workers worldwide.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="h-6 w-6 text-teal-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Build Trust & Credibility</h4>
                      <p className="text-gray-600">Get verified reviews and ratings from the nomad community.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-purple-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Grow Your Revenue</h4>
                      <p className="text-gray-600">Increase bookings and sales from the growing remote work market.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-orange-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Local Expertise</h4>
                      <p className="text-gray-600">Share your local knowledge and become a trusted nomad resource.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-teal-light/50 border-0">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">💡 Pro Tip</h4>
                  <p className="text-gray-600 text-sm">
                    Businesses that mention specific amenities like "100+ Mbps WiFi", "Quiet zones", 
                    or "Nomad discounts" get 3x more inquiries from our community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ListBusiness;