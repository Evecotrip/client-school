import FloatingNavbar from "@/components/FloatingNavbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AcademicsSection from "@/components/AcademicsSection";
import AdmissionSection from "@/components/AdmissionSection";
import GallerySection from "@/components/GallerySection";
import BlogsSection from "@/components/BlogsSection";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import HeaderLine from "@/components/HeaderLine";
import Logo from "@/assets/left-header-logo.jpg"; // Assuming you have a logo image

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingNavbar />
      <HeroSection />
      <AboutSection />
      <AcademicsSection />
      <AdmissionSection />
      <GallerySection />
      <ContactSection />
      <CareersSection />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
              <img src={Logo} alt="Logo" className="w-8 h-8 rounded-lg" />
            </div>
            <span className="font-heading font-bold text-2xl">
              Al Imran Group of Institutions "JJ High School"
            </span>
          </div>
          <p className="text-primary-foreground/80 mb-4">
            Nurturing minds, building futures, creating leaders of tomorrow.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Al Imran Group of Institutions "JJ High School". All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
