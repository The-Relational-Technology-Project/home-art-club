
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { MapPin, Heart, Eye, Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

export const ArtGallery = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const artworks = [
    {
      id: 1,
      title: "Urban Solitude",
      artist: "Maya Chen",
      host: "Maya Chen",
      location: "Sunset District",
      medium: "Ceramic Sculpture",
      description: "A contemplative piece exploring the quiet moments in city life through organic forms",
      image: "/placeholder.svg",
      hostImage: "/placeholder.svg",
      viewCount: 23,
      hearts: 7,
      tags: ["Contemporary", "Ceramics", "Sculpture"],
      visitPreference: "Small groups (2-4 people)"
    },
    {
      id: 2,
      title: "Street Stories Series",
      artist: "Roberto Santos",
      host: "Roberto Santos", 
      location: "Mission Dolores",
      medium: "Black & White Photography",
      description: "Documentary photography capturing the authentic soul of our neighborhood",
      image: "/placeholder.svg",
      hostImage: "/placeholder.svg",
      viewCount: 45,
      hearts: 12,
      tags: ["Photography", "Documentary", "Street Art"],
      visitPreference: "One-on-one preferred"
    },
    {
      id: 3,
      title: "Identity Fragments",
      artist: "Avery Thompson",
      host: "Avery Thompson",
      location: "Castro Valley", 
      medium: "Mixed Media Collage",
      description: "Layered compositions exploring themes of belonging and cultural identity",
      image: "/placeholder.svg",
      hostImage: "/placeholder.svg",
      viewCount: 31,
      hearts: 9,
      tags: ["Mixed Media", "Identity", "Contemporary"],
      visitPreference: "Open to all group sizes"
    },
    {
      id: 4,
      title: "Botanical Abstracts",
      artist: "Jordan Kim",
      host: "Sam Rivera",
      location: "Noe Valley",
      medium: "Watercolor & Ink",
      description: "Delicate studies of local flora reimagined through abstract interpretation",
      image: "/placeholder.svg", 
      hostImage: "/placeholder.svg",
      viewCount: 18,
      hearts: 5,
      tags: ["Watercolor", "Abstract", "Nature"],
      visitPreference: "Small groups (2-4 people)"
    }
  ];

  const filteredArtworks = artworks.filter(artwork =>
    artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artwork.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artwork.medium.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artwork.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-display text-foreground">Community Art Gallery</h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover original artworks living in homes throughout our trusted community
        </p>
      </div>

      {/* Search and Filters - Mobile Optimized */}
      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search artworks, artists, or mediums..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2 flex-1 sm:flex-none">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          
          {/* View Toggle - Mobile Friendly */}
          <div className="bg-muted p-1 rounded-lg">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="px-3 text-xs"
            >
              Grid
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="px-3 text-xs"
            >
              List
            </Button>
          </div>
        </div>
      </div>

      {/* Artworks Grid/List - Enhanced Mobile */}
      <div className={cn(
        "gap-4 md:gap-6",
        viewMode === "grid" 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
          : "space-y-4 md:space-y-6"
      )}>
        {filteredArtworks.map((artwork) => (
          <Card key={artwork.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-102 border-border/50 overflow-hidden">
            <div className={cn(
              viewMode === "list" ? "flex flex-col sm:flex-row gap-4" : ""
            )}>
              {/* Artwork Image - Mobile Optimized */}
              <div className={cn(
                "relative overflow-hidden bg-muted",
                viewMode === "list" 
                  ? "w-full sm:w-48 aspect-square sm:aspect-square flex-shrink-0" 
                  : "aspect-square"
              )}>
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full p-2">
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Content - Mobile Optimized */}
              <div className="flex-1">
                <CardHeader className="pb-3 p-4 md:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1 flex-1 min-w-0">
                      <CardTitle className="text-lg md:text-xl font-display group-hover:text-primary transition-colors truncate">
                        {artwork.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground truncate">
                        by {artwork.artist}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {artwork.medium}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {artwork.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 p-4 md:p-6 pt-0">
                  <CardDescription className="text-sm leading-relaxed line-clamp-3">
                    {artwork.description}
                  </CardDescription>

                  {/* Host Info - Mobile Friendly */}
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 flex-shrink-0">
                      <AvatarImage src={artwork.hostImage} alt={artwork.host} />
                      <AvatarFallback className="text-xs bg-gradient-to-br from-rose-100 to-amber-100">
                        {artwork.host.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-xs space-y-1 min-w-0 flex-1">
                      <p className="font-medium truncate">Hosted by {artwork.host}</p>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-3 w-3 flex-shrink-0" />
                        <span className="truncate">{artwork.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Visit Preferences - Mobile Optimized */}
                  <div className="text-xs text-muted-foreground">
                    <p className="font-medium mb-1">Visit Preference:</p>
                    <p className="text-xs">{artwork.visitPreference}</p>
                  </div>

                  {/* Stats - Mobile Layout */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{artwork.viewCount}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        <span>{artwork.hearts}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full">Request Visit</Button>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredArtworks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No artworks found matching your search.</p>
          <Button 
            variant="link" 
            onClick={() => setSearchTerm("")}
            className="mt-2"
          >
            Clear search
          </Button>
        </div>
      )}
    </div>
  );
};
