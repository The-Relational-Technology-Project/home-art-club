
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, UserPlus, MessageCircle, Shield, Heart, ArrowRight } from "lucide-react";

export const TrustNetwork = () => {
  const [activeTab, setActiveTab] = useState<"network" | "invites" | "vouches">("network");

  const connections = [
    {
      name: "Maya Chen",
      relationship: "Invited by you",
      mutualConnections: 3,
      joinDate: "Mar 2024",
      image: "/placeholder.svg",
      vouch: "Maya brings incredible warmth to every art space she enters. Her ceramic work speaks to the soul.",
      artHosting: true
    },
    {
      name: "Roberto Santos", 
      relationship: "Invited you",
      mutualConnections: 7,
      joinDate: "Jan 2024",
      image: "/placeholder.svg",
      vouch: "Roberto's eye for capturing authentic moments makes him a trusted community member.",
      artHosting: true
    },
    {
      name: "Sam Rivera",
      relationship: "Mutual friend of Maya",
      mutualConnections: 2,
      joinDate: "Apr 2024", 
      image: "/placeholder.svg",
      vouch: "Sam creates the most welcoming spaces for viewing art. A natural curator and host.",
      artHosting: false
    },
    {
      name: "Quinn Parker",
      relationship: "Local pod member", 
      mutualConnections: 5,
      joinDate: "Feb 2024",
      image: "/placeholder.svg",
      vouch: "Quinn's thoughtful approach to community building strengthens our trust network.",
      artHosting: false
    }
  ];

  const invitesReceived = [
    {
      name: "Alex Morrison",
      from: "Maya Chen",
      artCount: 6,
      specialty: "Abstract Painting",
      image: "/placeholder.svg",
      message: "Alex creates stunning abstract works that would be perfect for our community. Their home studio has the most amazing natural light!"
    }
  ];

  const renderNetworkView = () => (
    <div className="space-y-6">
      {/* Trust Circle Overview */}
      <Card className="bg-gradient-to-r from-emerald-50/50 to-blue-50/50 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl font-serif">
            <Shield className="h-5 w-5 text-emerald-600" />
            Your Trust Circle
          </CardTitle>
          <CardDescription>
            The foundation of our community is built on meaningful connections and mutual vouching
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-serif text-foreground">12</div>
              <div className="text-sm text-muted-foreground">Direct Connections</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-serif text-foreground">45</div>
              <div className="text-sm text-muted-foreground">Extended Network</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-serif text-foreground">8</div>
              <div className="text-sm text-muted-foreground">Art Hosts in Circle</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Connection Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {connections.map((connection, index) => (
          <Card key={index} className="hover:shadow-md transition-all duration-300 border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={connection.image} alt={connection.name} />
                  <AvatarFallback className="bg-gradient-to-br from-rose-100 to-amber-100">
                    {connection.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg font-serif">{connection.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{connection.relationship}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {connection.mutualConnections} mutual
                    </Badge>
                    {connection.artHosting && (
                      <Badge variant="secondary" className="text-xs">
                        Art Host
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="bg-muted/30 p-3 rounded-lg">
                <p className="text-sm italic text-muted-foreground leading-relaxed">
                  "{connection.vouch}"
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Joined {connection.joinDate}
                </span>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <MessageCircle className="h-3 w-3" />
                  Message
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderInvitesView = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-serif text-foreground mb-2">Pending Invitations</h2>
        <p className="text-muted-foreground">
          Community members who have been vouched for and are waiting for approval
        </p>
      </div>

      {invitesReceived.map((invite, index) => (
        <Card key={index} className="border-border/50">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={invite.image} alt={invite.name} />
                <AvatarFallback className="bg-gradient-to-br from-rose-100 to-amber-100 text-lg">
                  {invite.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="text-xl font-serif">{invite.name}</CardTitle>
                <p className="text-sm text-muted-foreground">Invited by {invite.from}</p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs">
                    {invite.artCount} artworks
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {invite.specialty}
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-sm italic text-muted-foreground leading-relaxed">
                "{invite.message}"
              </p>
              <p className="text-xs text-muted-foreground mt-2">— {invite.from}</p>
            </div>
            
            <div className="flex gap-3">
              <Button className="flex-1 flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Welcome to Community
              </Button>
              <Button variant="outline" className="flex-1">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderVouchesView = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-serif text-foreground mb-2">Share Your Vouch</h2>
        <p className="text-muted-foreground">
          Know someone who would enrich our art community? Invite them to join.
        </p>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5" />
            Invite Someone Special
          </CardTitle>
          <CardDescription>
            Invitations are a sacred trust. Consider who would both contribute to and benefit from our community.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            Compose Invitation
            <ArrowRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      <div className="bg-muted/30 p-6 rounded-lg">
        <h3 className="font-serif text-lg mb-3">What makes a good community member?</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Genuine appreciation for art and creative expression</li>
          <li>• Respect for intimate spaces and personal boundaries</li>
          <li>• Commitment to building trust and fostering connection</li>
          <li>• Interest in both viewing and potentially hosting art</li>
          <li>• Alignment with our values of care, consent, and community</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-serif text-foreground">Trust Network</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Relationships are the foundation of our community. See your connections and help grow our circle.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="bg-muted p-1 rounded-lg">
          <Button
            variant={activeTab === "network" ? "default" : "ghost"}
            onClick={() => setActiveTab("network")}
            className="px-6"
          >
            My Network
          </Button>
          <Button
            variant={activeTab === "invites" ? "default" : "ghost"}
            onClick={() => setActiveTab("invites")}
            className="px-6"
          >
            Invitations
          </Button>
          <Button
            variant={activeTab === "vouches" ? "default" : "ghost"}
            onClick={() => setActiveTab("vouches")}
            className="px-6"
          >
            Invite Others
          </Button>
        </div>
      </div>

      {/* Content */}
      {activeTab === "network" && renderNetworkView()}
      {activeTab === "invites" && renderInvitesView()}
      {activeTab === "vouches" && renderVouchesView()}
    </div>
  );
};
