"use client";
import Image from 'next/image';
import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { profile } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { TypedHeader } from './typed-header';
import { TypedBio } from './typed-bio';
import { InteractiveBackground } from './interactive-background';

export function ProfileSection() {
  const [imgError, setImgError] = useState(false);
  return (
    <section id="about" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <InteractiveBackground />
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center space-y-4 text-center lg:items-start lg:text-left">
            <div className="space-y-2">
              <TypedHeader name={profile.name} />
              <TypedBio bio={profile.bio} />
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row flex-wrap">
              <a href={`mailto:${profile.email}`}>
                <Badge variant="secondary" className="gap-2 p-2 transition-colors hover:bg-muted">
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </Badge>
              </a>
              <a href={`tel:${profile.phone}`}>
                <Badge variant="secondary" className="gap-2 p-2 transition-colors hover:bg-muted">
                  <Phone className="h-4 w-4" />
                  {profile.phone}
                </Badge>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={imgError ? '/fallback-profile.svg' : profile.profilePicture.imageUrl}
              alt={profile.profilePicture.description}
              width={400}
              height={400}
              className="rounded-full object-cover shadow-lg aspect-square"
              data-ai-hint={profile.profilePicture.imageHint}
              onError={() => setImgError(true)}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}