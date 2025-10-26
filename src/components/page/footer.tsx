import Link from 'next/link';
import { Github, Linkedin, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-secondary">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {year} Shrey Goyal. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon">
            <Link href="https://github.com/itsmeshreyg05" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="https://www.linkedin.com/in/shrey-goyal-98b02128a/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="https://leetcode.com/u/shreyg_05/" target="_blank" rel="noopener noreferrer">
              <Code className="h-5 w-5" />
              <span className="sr-only">LeetCode</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}

