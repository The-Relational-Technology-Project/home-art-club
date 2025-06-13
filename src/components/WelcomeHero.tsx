
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, MapPin, ArrowRight } from "lucide-react";

export const WelcomeHero = () => {
  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleJoinClub = () => {
    // For now, we'll just scroll to the featured homes section
    const element = document.getElementById('featured-homes');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Warm background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-rose-50/20 to-orange-50/30" />
      
      <div className="relative py-20 px-8 text-center space-y-12">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="font-display text-foreground leading-tight">
            Art Lives in
            <span className="block text-art-blue">
              Our Homes
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Step into your neighbors' homes and discover intimate art experiences. 
            Where creativity meets community, one living room at a time.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Button 
            size="lg" 
            className="flex items-center gap-2 text-base px-8 py-4 bg-primary text-primary-foreground hover:bg-warm-gray transition-gentle"
            onClick={handleJoinClub}
          >
            Join the Club
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-base px-8 py-4 border-border hover:bg-muted transition-gentle"
            onClick={scrollToHowItWorks}
          >
            How It Works
          </Button>
        </div>

        {/* Feature cards with warmer copy */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          <Card className="border-border hover:shadow-clean transition-gentle hover:bg-amber-50/30">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-12 h-12 bg-amber-100 flex items-center justify-center mx-auto rounded-full">
                <Heart className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="text-lg font-normal">Built on Trust</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Join through a friend's invitation. Every member vouches for the next, creating genuine community bonds.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-clean transition-gentle hover:bg-rose-50/30">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-12 h-12 bg-rose-100 flex items-center justify-center mx-auto rounded-full">
                <MapPin className="h-6 w-6 text-rose-700" />
              </div>
              <h3 className="text-lg font-normal">Your Neighborhood</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Discover the artists living right around the corner. Local creativity, local connections.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-clean transition-gentle hover:bg-emerald-50/30">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center mx-auto rounded-full">
                <Users className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="text-lg font-normal">Intimate Visits</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Small groups, meaningful conversations. Art in the comfort of someone's living room.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
