import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isExternal = project.link.startsWith('http');
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="font-mono">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <Image
          src={project.image.imageUrl}
          alt={project.image.description}
          width={600}
          height={400}
          className="rounded-lg object-cover aspect-[3/2]"
          data-ai-hint={project.image.imageHint}
        />
      </CardContent>
      <CardFooter>
        {isExternal ? (
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 group">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        ) : (
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 group">
            <Link href={project.link}>
              View Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}