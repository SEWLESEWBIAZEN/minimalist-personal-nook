export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string | null;
    githubUrl: string | null;
    liveUrl: string | null;
    featured: boolean;
  }