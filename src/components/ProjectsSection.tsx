
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string | null;
  liveUrl: string | null;
}

const ProjectsSection: React.FC = () => {
  const featuredProjects: Project[] = [
    {
      id: 1,
      title: 'LMS Document management System',
      description: 'A legal office document and task management system for Ethiopian Airlines',
      tags: ['Next.js', 'ShadeCN', 'React', 'Tailwind', 'TypeScript', '.Net Core', 'MS SQL Server'],
      githubUrl: null,
      liveUrl: null
    },
    {
      id: 2,
      title: 'Bankify',
      description: 'Banking Application with tracking every transaction.',
      tags: ['Next.js', 'Tailwind','.Net Core','MS SQL Server'],
      githubUrl: 'https://github.com/SEWLESEWBIAZEN/Bankiify',
      liveUrl: 'Not Hosted!'
    },
    {
      id: 3,
      title: 'Personal/Portifolio Website',
      description: 'A website to showcase my works, which is the website you are browsing right now.',
      tags: ['React', 'API', 'Tailwind CSS'],
      githubUrl: 'https://github.com/SEWLESEWBIAZEN/minimalist-personal-nook',
      liveUrl: 'https://sewlesewb.netlify.app/'
    }
  ];

  return (
    <section className="section bg-secondary/30" id="projects">
      <div className="container-content">
        <div className="flex justify-between items-center mb-8">
          <h2>Projects</h2>
          <Link to="/projects">
            <Button variant="ghost" className="group text-sm">
              View all projects
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center hover:text-primary transition-colors"
                >
                  <Github size={16} className="mr-1" />
                  Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Demo
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
