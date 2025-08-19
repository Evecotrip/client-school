import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Users, CheckCircle } from "lucide-react";
import AdmissionForm from "@/components/AdmissionForm";

const AdmissionSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Application Form",
      description:
        "Complete our online application with required documents and personal information.",
    },
    {
      icon: Calendar,
      title: "Entrance Assessment",
      description:
        "Schedule and attend our comprehensive entrance evaluation and interview.",
    },
    {
      icon: Users,
      title: "Family Interview",
      description:
        "Meet with our admission team to discuss your educational goals and expectations.",
    },
    {
      icon: CheckCircle,
      title: "Enrollment",
      description:
        "Receive your acceptance letter and complete the enrollment process.",
    },
  ];

  const requirements = [
    "Completed application form",
    "Birth certificate",
    "Previous academic records",
    "Health and immunization records",
    "Two passport-size photographs",
    "Application fee payment",
  ];

  return (
    <section id="admission" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Start Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards excellence. Our admission process is
            designed to understand your child's unique potential and ensure the
            perfect fit for our educational community.
          </p>
        </div>

        {/* Admission Process */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="card-educational text-center group">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  {step.title}
                </h3>

                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Requirements */}
          <div>
            <h3 className="text-3xl font-heading font-bold text-foreground mb-8">
              Admission Requirements
            </h3>

            <div className="space-y-4 mb-8">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <span className="text-foreground">{requirement}</span>
                </div>
              ))}
            </div>

            <AdmissionForm>
              <Button className="btn-hero">Apply for Admission</Button>
            </AdmissionForm>
          </div>

          {/* Important Dates */}
          <div>
            <h3 className="text-3xl font-heading font-bold text-foreground mb-8">
              Important Dates
            </h3>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-foreground">
                    Application Opens
                  </span>
                  <span className="text-primary font-bold">January 15</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Online applications become available
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-foreground">
                    Application Deadline
                  </span>
                  <span className="text-accent font-bold">March 30</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Last date to submit complete applications
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-foreground">
                    Entrance Assessment
                  </span>
                  <span className="text-secondary font-bold">April 15-30</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Assessment and interview period
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-foreground">
                    Results Announcement
                  </span>
                  <span className="text-primary font-bold">May 15</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Admission results and enrollment information
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
