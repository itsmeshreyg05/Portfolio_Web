import Link from 'next/link';
import { Code2 } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-center">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]" />
            <span className="font-bold bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500 bg-clip-text text-transparent">
              Profile Canvas
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/#about" className="transition-colors hover:text-primary hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              About
            </Link>
            <Link href="/#resume" className="transition-colors hover:text-primary hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              Resume
            </Link>
            <Link href="/projects" className="transition-colors hover:text-primary hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              Projects
            </Link>
            <Link href="/#certifications" className="transition-colors hover:text-primary hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              Certifications
            </Link>
            <Link href="/#extra" className="transition-colors hover:text-primary hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              Extra
            </Link>
            <Link href="/#contact" className="transition-colors hover:text-primary hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              Contact
           </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
