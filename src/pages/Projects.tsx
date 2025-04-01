
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'LMS Document management System',
      description: 'A legal office document and task management system for Ethiopian Airlines',
      tags: ['Next.js', 'ShadeCN', 'React', 'Tailwind', 'TypeScript'],
      image:'/images/case-insights.png',
      githubUrl: null,
      liveUrl: null,
      featured: true
    },
    {
      id: 2,
      title: 'Bankify',
      description: 'Banking Application that tracks every records of transaction within the system.',
      tags: ['Next.js', 'Firebase', 'Tailwind'],
      image: '/images/bankify-placeholder-image.png',
      githubUrl: 'https://github.com/SEWLESEWBIAZEN/Bankiify',
      liveUrl: 'Not Hosted!',
      featured: true
    },
    {
      id: 3,
      title: 'Personal/Portifolio website',
      description: 'The wwebsite you are in. Show casing skills, talents and knowledge.',
      tags: ['React','TypeScript', 'vite', 'Tailwind','API'],
      image: '/images/portifolio-website-placeholder-image.png',
      githubUrl: 'https://github.com/SEWLESEWBIAZEN/minimalist-personal-nook',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      description: 'A fully functional online store with cart and checkout features.',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '/placeholder.svg',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      id: 5,
      title: 'Patients Dashboard',
      description: "A dashboard that shows patient's status.",
      tags: ['Next.js','Tailwind','TypeScript', 'API', 'CSS'],
      image: '/images/patients-dashboard-placeholder-image.png',
      githubUrl: 'https://github.com/SEWLESEWBIAZEN/patients-dashboard',
      liveUrl: 'https://patients-dashboard-bice.vercel.app/dashboard',
      featured: false
    },
    {
      id: 6,
      title: 'Expense Tracker Pro',
      description: 'A personal finance tool to track income and expenses.',
      tags: ['Node.js', 'Express.js', 'MongoDB'],
      image: '/placeholder.svg',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    }
  ];

  // Get all unique tags
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort();

  // Filter projects by tag
  const filteredProjects = filter
    ? projects.filter(project => project.tags.includes(filter))
    : projects;

  return (
    <div className="container-content py-16">
      <h1 className="mb-6">Projects</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
        A collection of my work including web applications, design projects, and experiments.
        Each project represents a unique challenge and solution.
      </p>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Button 
          variant={filter === null ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter(null)}
        >
          All
        </Button>
        {allTags.map(tag => (
          <Button 
            key={tag}
            variant={filter === tag ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-48 bg-secondary flex items-center justify-center">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
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
                className="flex items-center hover:text-primary transition-colors"
              >
                <Github size={16} className="mr-1" />
                { project.githubUrl!==null?"Code":"It is private"}
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary transition-colors"
              >
                <ExternalLink size={16} className="mr-1" />
                {project.liveUrl!=null? "Live Demo":"It is Private"}
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No projects found with the selected filter.</p>
          <Button 
            variant="link" 
            onClick={() => setFilter(null)}
            className="mt-2"
          >
            Clear filter
          </Button>
        </div>
      )}
    </div>
  );
};

export default Projects;
