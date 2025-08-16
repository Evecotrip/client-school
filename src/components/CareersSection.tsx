import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Briefcase, Users, Heart, Trophy } from 'lucide-react';

const CareersSection = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Mathematics Teacher',
      department: 'Secondary Education',
      type: 'Full-time',
      location: 'On Campus',
      experience: '3-5 years',
      description: 'Join our mathematics department to inspire and educate students in advanced mathematical concepts.',
      requirements: ['Masters in Mathematics/Education', 'Teaching certification', 'Classroom experience']
    },
    {
      id: 2,
      title: 'Science Lab Coordinator',
      department: 'STEM Programs',
      type: 'Full-time',
      location: 'On Campus',
      experience: '2-4 years',
      description: 'Manage and coordinate science laboratory activities and experiments for students.',
      requirements: ['Science degree', 'Lab management experience', 'Safety certification']
    },
    {
      id: 3,
      title: 'Student Counselor',
      department: 'Student Services',
      type: 'Full-time',
      location: 'On Campus',
      experience: '1-3 years',
      description: 'Provide academic and personal guidance to students throughout their educational journey.',
      requirements: ['Psychology/Counseling degree', 'Student counseling experience', 'Communication skills']
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: Trophy,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and career advancement'
    },
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with passionate educators and supportive staff'
    },
    {
      icon: Briefcase,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and generous vacation time'
    }
  ];

  return (
    <section id="careers" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Join Our <span className="bg-gradient-secondary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of an educational community that values excellence, innovation, and the transformative 
            power of teaching. Shape the future by inspiring the next generation of leaders.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="card-educational text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-3">
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Current Openings
          </h3>
          
          <div className="space-y-6">
            {openPositions.map((position) => (
              <Card key={position.id} className="card-educational">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h4 className="text-2xl font-heading font-bold text-foreground">
                          {position.title}
                        </h4>
                        <Badge className="bg-primary text-primary-foreground">
                          {position.type}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {position.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          {position.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {position.experience}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-foreground mb-2">Requirements:</h5>
                        <ul className="space-y-1">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                      <Button className="btn-hero w-full mb-3">
                        Apply Now
                      </Button>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
              Application Process
            </h3>
            <p className="text-lg text-muted-foreground">
              Join our team in four simple steps
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Apply Online', description: 'Submit your application and resume through our portal' },
              { step: '02', title: 'Initial Review', description: 'HR team reviews your qualifications and experience' },
              { step: '03', title: 'Interview', description: 'Meet with the hiring team and department heads' },
              { step: '04', title: 'Welcome Aboard', description: 'Complete onboarding and join our community' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-lg">{item.step}</span>
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;