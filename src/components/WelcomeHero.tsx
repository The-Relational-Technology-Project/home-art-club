
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, MapPin, ArrowRight } from "lucide-react";

export const WelcomeHero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/30 via-amber-50/20 to-emerald-50/30 rounded-3xl" />
      
      <div className="relative py-16 px-8 text-center space-y-8">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-foreground leading-tight">
            Art Lives in
            <span className="block text-transparent bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text">
              Our Homes
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Where trust meets creativity. Discover intimate art experiences in neighborhood homes, 
            curated by a community that values connection over commerce.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Button size="lg" className="flex items-center gap-2 text-lg px-8 py-3">
            Join Our Circle
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3">
            How It Works
          </Button>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          <Card className="border-border/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6 text-center space-y-3">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold">Trust-Based</h3>
              <p className="text-sm text-muted-foreground">
                Invitation-only community with vouching system ensures authentic connections
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6 text-center space-y-3">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold">Neighborhood Focus</h3>
              <p className="text-sm text-muted-foreground">
                Discover art in your community and build relationships with local creators
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold">Intimate Experiences</h3>
              <p className="text-sm text-muted-foreground">
                Small group visits that honor both art and the sacred space of home
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
