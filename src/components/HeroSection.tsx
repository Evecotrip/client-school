import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/school-hero.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={'Al Imran Group of Institutions "JJ High School" Campus'}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
            Nurturing Future
            <span className="block bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Leaders
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Where education meets excellence. Discover a learning environment
            rooted in Islamic values, designed to unlock your child’s potential
            and prepare them for tomorrow’s challenges.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button className="btn-hero group">
              Explore Programs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              className="bg-background/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/30 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-primary-foreground">
            <div className="animate-float">
              <div className="text-3xl md:text-4xl font-bold">3000+</div>
              <div className="text-primary-foreground/80">Students</div>
            </div>
            <div className="animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="text-3xl md:text-4xl font-bold">93+</div>
              <div className="text-primary-foreground/80">Teachers</div>
            </div>
            <div className="animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-3xl md:text-4xl font-bold">98%</div>
              <div className="text-primary-foreground/80">Success Rate</div>
            </div>
            <div className="animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="text-3xl md:text-4xl font-bold">15+</div>
              <div className="text-primary-foreground/80">Years</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
