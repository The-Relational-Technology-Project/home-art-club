
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, UserPlus, MessageCircle, ArrowRight, Mail } from "lucide-react";

export const TrustNetwork = () => {
  const [activeTab, setActiveTab] = useState<"connections" | "invitations" | "invite">("connections");

  const connections = [
    {
      name: "Maya Chen",
      relationship: "You invited Maya",
      joinDate: "Mar 2024",
      image: "/placeholder.svg",
      note: "Maya brings incredible warmth to every art space she enters."
    },
    {
      name: "Roberto Santos", 
      relationship: "Roberto invited you",
      joinDate: "Jan 2024",
      image: "/placeholder.svg",
      note: "Roberto's eye for capturing authentic moments makes him trusted."
    },
    {
      name: "Sam Rivera",
      relationship: "Mutual connection",
      joinDate: "Apr 2024", 
      image: "/placeholder.svg",
      note: "Sam creates the most welcoming spaces for viewing art."
    }
  ];

  const sentInvitations = [
    {
      name: "Alex Morrison",
      email: "alex@example.com",
      status: "Pending",
      sentDate: "2 days ago",
      note: "Invited Alex to join our community of art lovers"
    },
    {
      name: "Jordan Kim",
      email: "jordan@example.com", 
      status: "Accepted",
      sentDate: "1 week ago",
      note: "Jordan accepted and is now part of the community"
    }
  ];

  const renderConnectionsView = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-light text-foreground mb-3">Your Connections</h2>
        <p className="text-muted-foreground font-light">
          People you've invited and who have invited you to the club
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {connections.map((connection, index) => (
          <Card key={index} className="hover:shadow-clean transition-gentle border-border">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={connection.image} alt={connection.name} />
                  <AvatarFallback className="bg-light-gray text-foreground">
                    {connection.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg font-normal">{connection.name}</CardTitle>
                  <p className="text-sm text-muted-foreground font-light">{connection.relationship}</p>
                  <p className="text-xs text-muted-foreground mt-1">Joined {connection.joinDate}</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="bg-muted p-4">
                <p className="text-sm text-muted-foreground font-light italic">
                  "{connection.note}"
                </p>
              </div>
              
              <Button variant="outline" size="sm" className="flex items-center gap-2 transition-gentle">
                <MessageCircle className="h-4 w-4" />
                Message
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderInvitationsView = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-light text-foreground mb-3">Your Invitations</h2>
        <p className="text-muted-foreground font-light">
          Track the invitations you've sent to potential members
        </p>
      </div>

      <div className="space-y-4">
        {sentInvitations.map((invite, index) => (
          <Card key={index} className="border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-light-gray text-foreground">
                      {invite.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-normal">{invite.name}</h3>
                    <p className="text-sm text-muted-foreground font-light">{invite.email}</p>
                    <p className="text-xs text-muted-foreground">Sent {invite.sentDate}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={invite.status === "Accepted" ? "default" : "secondary"}
                    className="mb-2"
                  >
                    {invite.status}
                  </Badge>
                  <p className="text-xs text-muted-foreground font-light">{invite.note}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderInviteView = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-light text-foreground mb-3">Invite Someone</h2>
        <p className="text-muted-foreground font-light">
          Vouch for someone you trust to join our art community
        </p>
      </div>

      <Card className="max-w-md mx-auto border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-normal">
            <UserPlus className="h-5 w-5" />
            Send Invitation
          </CardTitle>
          <CardDescription className="font-light">
            By inviting someone, you're vouching for their character and commitment to our community values.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full flex items-center gap-2 bg-primary text-primary-foreground hover:bg-warm-gray transition-gentle">
            <Mail className="h-4 w-4" />
            Compose Invitation
            <ArrowRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      <div className="max-w-2xl mx-auto bg-muted p-6">
        <h3 className="font-normal text-lg mb-4">What makes a good community member?</h3>
        <ul className="space-y-2 text-sm text-muted-foreground font-light">
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
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="font-display text-foreground">Trust Network</h1>
        <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
          Relationships are the foundation of our community
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="bg-muted p-1">
          <Button
            variant={activeTab === "connections" ? "default" : "ghost"}
            onClick={() => setActiveTab("connections")}
            className="px-6 transition-gentle"
          >
            Connections
          </Button>
          <Button
            variant={activeTab === "invitations" ? "default" : "ghost"}
            onClick={() => setActiveTab("invitations")}
            className="px-6 transition-gentle"
          >
            Invitations
          </Button>
          <Button
            variant={activeTab === "invite" ? "default" : "ghost"}
            onClick={() => setActiveTab("invite")}
            className="px-6 transition-gentle"
          >
            Invite Others
          </Button>
        </div>
      </div>

      {/* Content */}
      {activeTab === "connections" && renderConnectionsView()}
      {activeTab === "invitations" && renderInvitationsView()}
      {activeTab === "invite" && renderInviteView()}
    </div>
  );
};
