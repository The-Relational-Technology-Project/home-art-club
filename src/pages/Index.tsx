
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Heart, Users, Calendar, ArrowRight, Star } from "lucide-react";
import { WelcomeHero } from "@/components/WelcomeHero";
import { ArtGallery } from "@/components/ArtGallery";
import { TrustNetwork } from "@/components/TrustNetwork";
import { VisitPlanner } from "@/components/VisitPlanner";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  const [currentView, setCurrentView] = useState("home");

  const renderView = () => {
    switch (currentView) {
      case "gallery":
        return <ArtGallery />;
      case "network":
        return <TrustNetwork />;
      case "visits":
        return <VisitPlanner />;
      default:
        return (
          <div className="space-y-12">
            <WelcomeHero />
            
            {/* Featured Art Hosts */}
            <section className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-serif text-foreground mb-3">Featured Art Homes</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover intimate spaces where art lives and stories unfold
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Maya Chen",
                    location: "Sunset District",
                    artCount: 12,
                    specialty: "Contemporary Ceramics",
                    image: "/placeholder.svg",
                    vouchers: ["Alex M.", "Jordan K."],
                    description: "A collection of hand-thrown vessels that explore the intersection of utility and beauty"
                  },
                  {
                    name: "Roberto Santos",
                    location: "Mission Dolores",
                    artCount: 8,
                    specialty: "Street Photography", 
                    image: "/placeholder.svg",
                    vouchers: ["Maya C.", "Sam L."],
                    description: "Black and white portraits capturing the soul of our neighborhood"
                  },
                  {
                    name: "Avery Thompson",
                    location: "Castro Valley",
                    artCount: 15,
                    specialty: "Mixed Media Collage",
                    image: "/placeholder.svg", 
                    vouchers: ["Roberto S.", "Quinn P."],
                    description: "Layered compositions that tell stories of identity and belonging"
                  }
                ].map((host, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={host.image} alt={host.name} />
                          <AvatarFallback className="bg-gradient-to-br from-rose-100 to-amber-100">
                            {host.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg font-serif">{host.name}</CardTitle>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {host.location}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="secondary" className="text-xs">
                          {host.artCount} pieces
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {host.specialty}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <CardDescription className="text-sm leading-relaxed">
                        {host.description}
                      </CardDescription>
                      
                      <div className="space-y-2">
                        <p className="text-xs text-muted-foreground">Vouched by:</p>
                        <div className="flex gap-1">
                          {host.vouchers.map((voucher, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {voucher}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full group-hover:bg-primary/90 transition-colors">
                        Request Visit
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Trust & Community Stats */}
            <section className="bg-gradient-to-r from-rose-50/50 to-amber-50/50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif text-foreground mb-3">Building Trust Together</h2>
                <p className="text-lg text-muted-foreground">
                  Our community grows through meaningful connections and shared experiences
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <div className="bg-rose-100 p-3 rounded-full">
                      <Users className="h-6 w-6 text-rose-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-serif text-foreground">127</div>
                  <div className="text-sm text-muted-foreground">Trusted Members</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <Heart className="h-6 w-6 text-amber-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-serif text-foreground">43</div>
                  <div className="text-sm text-muted-foreground">Art Homes</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Calendar className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-serif text-foreground">312</div>
                  <div className="text-sm text-muted-foreground">Visits This Month</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <div className="bg-indigo-100 p-3 rounded-full">
                      <Star className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-serif text-foreground">4.9</div>
                  <div className="text-sm text-muted-foreground">Community Rating</div>
                </div>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      <main className="container mx-auto px-4 py-8">
        {renderView()}
      </main>
    </div>
  );
};

export default Index;
