import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import Image1 from "@/assets/1.jpeg";
import Image2 from "@/assets/2.jpeg";
import Image3 from "@/assets/3.jpeg";
import Image4 from "@/assets/4.jpeg";
import Image5 from "@/assets/5.jpeg";
import Image6 from "@/assets/6.jpeg";

const GallerySection = () => {
  // Gallery images with imported assets
  const galleryImages = [
    {
      src: Image1,
      id: 1,
      title: "Campus View 1",
      description: "Beautiful campus architecture",
    },
    {
      src: Image2,
      id: 2,
      title: "Academic Building",
      description: "Modern learning facilities",
    },
    {
      src: Image3,
      id: 3,
      title: "Sports Activity",
      description: "Students in action",
    },
    {
      src: Image4,
      id: 4,
      title: "School Event",
      description: "Special celebration moment",
    },
    {
      src: Image5,
      id: 5,
      title: "Campus View 2",
      description: "School grounds and facilities",
    },
    {
      src: Image6,
      id: 6,
      title: "Classroom",
      description: "Interactive learning environment",
    },
  ];

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

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <Card
              key={image.id}
              className="card-educational group overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square bg-gradient-primary/20 overflow-hidden">
                  {/* Image or Placeholder */}
                  {image.src ? (
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        // Show placeholder if image fails to load
                        e.currentTarget.style.display = "none";
                        const placeholder = e.currentTarget
                          .nextElementSibling as HTMLElement;
                        if (placeholder) placeholder.style.display = "flex";
                      }}
                    />
                  ) : null}

                  {/* Fallback placeholder */}
                  <div
                    className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 ${
                      image.src ? "hidden" : "flex"
                    }`}
                  >
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
