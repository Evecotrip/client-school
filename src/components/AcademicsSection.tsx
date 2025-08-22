import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Beaker,
  Palette,
  Calculator,
  Globe,
  Music,
} from "lucide-react";
import AdmissionForm from "@/components/AdmissionForm";

const AcademicsSection = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Primary Education",
      description:
        "Foundation years focused on core skills development and creative learning.",
      subjects: ["English", "Mathematics", "Science", "Social Studies"],
      color: "bg-primary",
    },
    {
      icon: Beaker,
      title: "Secondary Education",
      description:
        "Advanced curriculum preparing students for higher education and careers.",
      subjects: ["Physics", "Chemistry", "Biology", "Computer Science"],
      color: "bg-secondary",
    },
    {
      icon: Calculator,
      title: "STEM Programs",
      description:
        "Specialized focus on Science, Technology, Engineering, and Mathematics.",
      subjects: ["Robotics", "Coding", "Engineering", "Data Science"],
      color: "bg-accent",
    },
  ];

  const extracurricular = [
    {
      icon: Palette,
      name: "Visual Arts",
      description: "Painting, drawing, and digital art",
    },
    {
      icon: Music,
      name: "Sports",
      description: "Team games, athletics, and physical education",
    },
    {
      icon: Globe,
      name: "Languages",
      description: "Spanish, French, and Mandarin",
    },
    {
      icon: GraduationCap,
      name: "Debate Club",
      description: "Public speaking and argumentation",
    },
  ];

  return (
    <section id="academics" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Academic{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive curriculum is designed to challenge minds, inspire
            creativity, and prepare students for success in an ever-evolving
            world.
          </p>
        </div>

        {/* Main Programs */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="card-educational group hover:scale-105"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 ${program.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <program.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  {program.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {program.description}
                </p>

                <div className="space-y-2 mb-6">
                  {program.subjects.map((subject, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground">{subject}</span>
                    </div>
                  ))}
                </div>

                <AdmissionForm course={program.title}>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    Apply for {program.title}
                  </Button>
                </AdmissionForm>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Extracurricular Activities */}
        <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
              Beyond the Classroom
            </h3>
            <p className="text-lg text-muted-foreground">
              Explore your passions and develop new skills through our diverse
              extracurricular programs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {extracurricular.map((activity, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <activity.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">
                  {activity.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
