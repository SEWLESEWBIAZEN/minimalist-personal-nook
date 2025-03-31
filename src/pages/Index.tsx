import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

const Index: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen bg-secondary/20 relative">
        <div className="container-content text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h1 className="mb-4 animate-slide-in">
              Hi, I'm <span className="text-primary">Your Name</span>.
              <br />
              I build things for the web.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl animate-slide-in" style={{animationDelay: "100ms"}}>
              I'm a developer specializing in building exceptional digital experiences.
              Currently, I'm focused on creating accessible, human-centered products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-in" style={{animationDelay: "200ms"}}>
              <Link to="/projects">
                <Button size="lg">
                  View my work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" onClick={scrollToAbout}>
                Learn more
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
};

export default Index;
