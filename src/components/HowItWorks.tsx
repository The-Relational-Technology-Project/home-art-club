
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, MapPin, Calendar, Coffee } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Get Invited",
      description: "A current member invites you to join. This creates your first trust connection in the community.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Explore Art Homes", 
      description: "Browse artworks in members' homes near you. See what your neighbors are creating and collecting.",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600"
    },
    {
      icon: Calendar,
      title: "Request a Visit",
      description: "Send a friendly request to visit. Hosts can accept, suggest alternatives, or chat first to get comfortable.",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600"
    },
    {
      icon: Coffee,
      title: "Experience Art Together",
      description: "Visit in small groups, meet the artist, hear the stories. Share tea, conversation, and creative inspiration.",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-8 bg-gradient-to-br from-slate-50/50 to-stone-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to start discovering art in your neighborhood
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-border hover:shadow-clean transition-gentle group">
              <CardContent className="p-8 text-center space-y-6 relative">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${step.bgColor} flex items-center justify-center mx-auto rounded-full group-hover:scale-110 transition-transform`}>
                  <step.icon className={`h-8 w-8 ${step.iconColor}`} />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground italic">
            "It's like visiting a friend's house, but discovering they're secretly an amazing curator."
          </p>
        </div>
      </div>
    </section>
  );
};
