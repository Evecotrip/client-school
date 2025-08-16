import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

const GallerySection = () => {
  const [currentCategory, setCurrentCategory] = useState("campus");

  const categories = [
    { id: "campus", name: "Campus Life", count: 12 },
    { id: "academics", name: "Academics", count: 8 },
    { id: "sports", name: "Sports & Activities", count: 15 },
    { id: "events", name: "Events", count: 10 },
  ];

  // Placeholder for gallery images - in a real app these would be actual images
  const galleryImages = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `Gallery Image ${i + 1}`,
    category: currentCategory,
    description:
      'Beautiful moments captured at Al Imran Group of Institutions "JJ High School"',
  }));

  return (
    <section id="gallery" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Our{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the vibrant life at Al Imran Group of Institutions "JJ High
            School" through our collection of memorable moments, achievements,
            and the beautiful spaces where learning comes to life.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={currentCategory === category.id ? "default" : "outline"}
              onClick={() => setCurrentCategory(category.id)}
              className={`transition-all duration-300 ${
                currentCategory === category.id
                  ? "bg-gradient-primary text-primary-foreground shadow-medium"
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs bg-background/20 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <Card
              key={image.id}
              className="card-educational group overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square bg-gradient-primary/20 overflow-hidden">
                  {/* Placeholder for image */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Camera className="h-12 w-12 text-primary/40" />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-primary-foreground">
                      <h4 className="font-semibold">{image.title}</h4>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Virtual Tour Section */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-6">
              Take a Virtual Tour
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Experience our campus from the comfort of your home with our
              interactive 360° virtual tour. Explore classrooms, libraries,
              labs, and recreational facilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">Start Virtual Tour</Button>
              <Button variant="outline" className="btn-outline-hero">
                Schedule Campus Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
