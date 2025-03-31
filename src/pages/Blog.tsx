
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Building a Modern Portfolio with React and Tailwind',
      excerpt: 'Learn how to create a stunning portfolio website using React and Tailwind CSS. This step-by-step guide will help you showcase your work effectively.',
      date: 'Apr 12, 2023',
      readTime: '5 min read',
      tags: ['React', 'Tailwind', 'Portfolio'],
      slug: 'building-modern-portfolio'
    },
    {
      id: 2,
      title: 'The Power of TypeScript in Frontend Development',
      excerpt: 'Discover how TypeScript can improve your frontend development workflow. Learn about type safety, better tooling, and increased productivity.',
      date: 'Mar 24, 2023',
      readTime: '7 min read',
      tags: ['TypeScript', 'Frontend', 'Development'],
      slug: 'power-of-typescript'
    },
    {
      id: 3,
      title: 'Optimizing React Performance',
      excerpt: 'Tips and tricks to make your React applications faster and more efficient. Learn about memoization, lazy loading, and state management optimization.',
      date: 'Feb 10, 2023',
      readTime: '6 min read',
      tags: ['React', 'Performance', 'Optimization'],
      slug: 'optimizing-react-performance'
    },
    {
      id: 4,
      title: 'Introduction to State Management in React',
      excerpt: 'An overview of different state management approaches in React applications, from useState and useContext to Redux and Zustand.',
      date: 'Jan 15, 2023',
      readTime: '8 min read',
      tags: ['React', 'State Management', 'Redux'],
      slug: 'state-management-react'
    },
    {
      id: 5,
      title: 'Creating Accessible Web Applications',
      excerpt: 'Why accessibility matters and how to build inclusive web applications that everyone can use regardless of disabilities.',
      date: 'Dec 05, 2022',
      readTime: '9 min read',
      tags: ['Accessibility', 'Web Development', 'a11y'],
      slug: 'accessible-web-applications'
    },
    {
      id: 6,
      title: 'The Future of Frontend Development',
      excerpt: 'Exploring upcoming trends and technologies that will shape the future of frontend development in the next few years.',
      date: 'Nov 20, 2022',
      readTime: '5 min read',
      tags: ['Frontend', 'Trends', 'Web Development'],
      slug: 'future-of-frontend'
    }
  ];

  // Get all unique tags
  const allTags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  ).sort();

  // Filter posts by search term and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  return (
    <div className="container-content py-16">
      <h1 className="mb-6">Blog</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
        I write about web development, design, and technology.
        Here you'll find tutorials, tips, and my thoughts on the latest trends.
      </p>
      
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search articles..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={selectedTag === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTag(null)}
          >
            All
          </Button>
          {allTags.map(tag => (
            <Button 
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.id}>
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="flex items-center text-xs">
                  <Calendar size={14} className="mr-1" />
                  {post.date} · {post.readTime}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1 mt-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedTag(tag);
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto text-sm text-primary hover:bg-transparent hover:underline">
                  Read article
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      
      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No articles found matching your search criteria.</p>
          <Button 
            variant="link" 
            onClick={() => {
              setSearchTerm('');
              setSelectedTag(null);
            }}
            className="mt-2"
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default Blog;
