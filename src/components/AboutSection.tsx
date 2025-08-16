import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, BookOpen, Trophy } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Excellence in Education",
      description:
        "Committed to providing world-class education with innovative teaching methodologies.",
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description:
        "Our dedicated teachers bring years of expertise and passion to inspire young minds.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description:
        "Well-rounded programs that combine academic rigor with creative and practical learning.",
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description:
        "Consistent track record of academic achievements and successful student outcomes.",
    },
  ];

  return (
    <section id="know-us" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Know Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Institution
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 25 years, Al Imran Group of Institutions "JJ High School"
            has been at the forefront of educational excellence, shaping the
            minds of tomorrow's leaders through innovative learning experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-heading font-bold text-foreground mb-6">
              Our Mission & Vision
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              At Al Imran Group of Institutions "JJ High School", we believe in
              nurturing not just academic excellence but also character
              development, creativity, and critical thinking. Our holistic
              approach ensures students are prepared for the challenges of
              tomorrow.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We strive to create an inclusive environment where every student
              can discover their unique talents and reach their full potential
              through personalized learning pathways.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">
                  State-of-the-art facilities
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground font-medium">
                  Personalized learning approach
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground font-medium">
                  Global perspective with local values
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-educational">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
