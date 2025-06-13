
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MapPin, Clock, Users, ExternalLink, Download, Map } from "lucide-react";

export const VisitPlanner = () => {
  const [viewMode, setViewMode] = useState<"upcoming" | "requests" | "history">("upcoming");

  const upcomingVisits = [
    {
      id: 1,
      host: "Maya Chen",
      artwork: "Urban Solitude Collection",
      date: "March 15, 2024",
      time: "2:00 PM - 4:00 PM",
      address: "Hidden after confirmation",
      neighborhood: "Sunset District",
      groupSize: 3,
      maxSize: 4,
      image: "/placeholder.svg",
      hostImage: "/placeholder.svg",
      notes: "Please bring soft-soled shoes for viewing area",
      confirmed: true
    },
    {
      id: 2,
      host: "Roberto Santos",
      artwork: "Street Stories Photography",
      date: "March 18, 2024", 
      time: "11:00 AM - 12:30 PM",
      address: "Hidden after confirmation",
      neighborhood: "Mission Dolores",
      groupSize: 1,
      maxSize: 2,
      image: "/placeholder.svg",
      hostImage: "/placeholder.svg",
      notes: "One-on-one session to discuss photography technique",
      confirmed: true
    },
    {
      id: 3,
      host: "Sam Rivera",
      artwork: "Botanical Abstracts",
      date: "March 22, 2024",
      time: "3:30 PM - 5:00 PM", 
      address: "Hidden after confirmation",
      neighborhood: "Noe Valley",
      groupSize: 2,
      maxSize: 4,
      image: "/placeholder.svg",
      hostImage: "/placeholder.svg",
      notes: "Tea and conversation included",
      confirmed: false
    }
  ];

  const pendingRequests = [
    {
      id: 1,
      host: "Quinn Parker",
      artwork: "Mixed Media Installation",
      requestDate: "March 10, 2024",
      preferredDate: "March 20, 2024",
      status: "Awaiting response",
      message: "Would love to see your latest work, especially interested in the pieces about urban nature.",
      image: "/placeholder.svg",
      hostImage: "/placeholder.svg"
    }
  ];

  const pastVisits = [
    {
      id: 1,
      host: "Jordan Kim",
      artwork: "Ceramic Vessels",
      date: "February 28, 2024",
      rating: 5,
      reflection: "Incredible experience seeing Jordan's work in their studio space. The way natural light played across the pieces was magical.",
      image: "/placeholder.svg",
      hostImage: "/placeholder.svg"
    },
    {
      id: 2,
      host: "Avery Thompson", 
      artwork: "Identity Fragments",
      date: "February 15, 2024",
      rating: 5,
      reflection: "Avery's mixed media pieces sparked such meaningful conversations about belonging and identity. A truly transformative visit.",
      image: "/placeholder.svg",
      hostImage: "/placeholder.svg"
    }
  ];

  const renderUpcomingVisits = () => (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="outline" className="flex items-center gap-2">
          <Map className="h-4 w-4" />
          View Map Route
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download Itinerary
        </Button>
      </div>

      {/* Visit Cards */}
      <div className="space-y-6">
        {upcomingVisits.map((visit) => (
          <Card key={visit.id} className={`border-border/50 ${visit.confirmed ? 'border-l-4 border-l-emerald-500' : 'border-l-4 border-l-amber-500'}`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={visit.hostImage} alt={visit.host} />
                    <AvatarFallback className="bg-gradient-to-br from-rose-100 to-amber-100">
                      {visit.host.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg font-serif">{visit.artwork}</CardTitle>
                    <p className="text-sm text-muted-foreground">with {visit.host}</p>
                  </div>
                </div>
                <Badge variant={visit.confirmed ? "default" : "secondary"}>
                  {visit.confirmed ? "Confirmed" : "Pending"}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{visit.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{visit.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{visit.neighborhood}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{visit.groupSize}/{visit.maxSize} attendees</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium mb-1">Visit Notes:</p>
                    <p className="text-muted-foreground">{visit.notes}</p>
                  </div>
                  
                  {visit.confirmed && (
                    <div className="text-sm">
                      <p className="font-medium mb-1">Address:</p>
                      <p className="text-muted-foreground">{visit.address}</p>
                      <Button variant="link" size="sm" className="px-0 h-auto">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Open in Maps
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                {visit.confirmed ? (
                  <>
                    <Button variant="outline" className="flex-1">
                      Message Host
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Details
                    </Button>
                  </>
                ) : (
                  <Button variant="outline" className="w-full">
                    Awaiting Confirmation
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderPendingRequests = () => (
    <div className="space-y-6">
      {pendingRequests.map((request) => (
        <Card key={request.id} className="border-border/50 border-l-4 border-l-blue-500">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={request.hostImage} alt={request.host} />
                <AvatarFallback className="bg-gradient-to-br from-rose-100 to-amber-100">
                  {request.host.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg font-serif">{request.artwork}</CardTitle>
                <p className="text-sm text-muted-foreground">Request to {request.host}</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Request sent:</p>
                <p className="text-muted-foreground">{request.requestDate}</p>
              </div>
              <div>
                <p className="font-medium">Preferred date:</p>
                <p className="text-muted-foreground">{request.preferredDate}</p>
              </div>
            </div>

            <div className="bg-muted/30 p-3 rounded-lg">
              <p className="text-sm font-medium mb-1">Your message:</p>
              <p className="text-sm text-muted-foreground italic">"{request.message}"</p>
            </div>

            <div className="flex justify-between items-center">
              <Badge variant="outline">{request.status}</Badge>
              <Button variant="outline" size="sm">
                Send Follow-up
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderVisitHistory = () => (
    <div className="space-y-6">
      {pastVisits.map((visit) => (
        <Card key={visit.id} className="border-border/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={visit.hostImage} alt={visit.host} />
                <AvatarFallback className="bg-gradient-to-br from-rose-100 to-amber-100">
                  {visit.host.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="text-lg font-serif">{visit.artwork}</CardTitle>
                <p className="text-sm text-muted-foreground">with {visit.host}</p>
                <p className="text-xs text-muted-foreground">{visit.date}</p>
              </div>
              <div className="text-right">
                <div className="flex gap-1">
                  {[...Array(visit.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400">★</span>
                  ))}
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">Your reflection:</p>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "{visit.reflection}"
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-serif text-foreground">Visit Planner</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Manage your art viewing experiences and build meaningful connections through shared visits
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="bg-muted p-1 rounded-lg">
          <Button
            variant={viewMode === "upcoming" ? "default" : "ghost"}
            onClick={() => setViewMode("upcoming")}
            className="px-6"
          >
            Upcoming
          </Button>
          <Button
            variant={viewMode === "requests" ? "default" : "ghost"}
            onClick={() => setViewMode("requests")}
            className="px-6"
          >
            Requests
          </Button>
          <Button
            variant={viewMode === "history" ? "default" : "ghost"}
            onClick={() => setViewMode("history")}
            className="px-6"
          >
            History
          </Button>
        </div>
      </div>

      {/* Content */}
      {viewMode === "upcoming" && renderUpcomingVisits()}
      {viewMode === "requests" && renderPendingRequests()}
      {viewMode === "history" && renderVisitHistory()}
    </div>
  );
};
