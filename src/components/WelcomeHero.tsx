
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, MapPin, ArrowRight } from "lucide-react";

export const WelcomeHero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Minimal background */}
      <div className="absolute inset-0 gradient-minimal" />
      
      <div className="relative py-20 px-8 text-center space-y-12">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="font-display text-foreground leading-tight">
            Art Lives in
            <span className="block text-art-blue">
              Our Homes
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Discover intimate art experiences in neighborhood homes, curated by a community that values connection.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Button size="lg" className="flex items-center gap-2 text-base px-8 py-4 bg-primary text-primary-foreground hover:bg-warm-gray transition-gentle">
            Join the Club
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8 py-4 border-border hover:bg-muted transition-gentle">
            How It Works
          </Button>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          <Card className="border-border hover:shadow-clean transition-gentle">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-12 h-12 bg-light-gray flex items-center justify-center mx-auto">
                <Heart className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-normal">Trust-Based</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Invitation-only community with vouching system ensures authentic connections
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-clean transition-gentle">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-12 h-12 bg-light-gray flex items-center justify-center mx-auto">
                <MapPin className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-normal">Neighborhood Focus</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Discover art in your community and build relationships with local creators
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-clean transition-gentle">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-12 h-12 bg-light-gray flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-normal">Intimate Experiences</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Small group visits that honor both art and the sacred space of home
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
