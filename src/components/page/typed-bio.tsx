'use client';

import { useState, useEffect } from 'react';

interface TypedBioProps {
  bio: string;
}

export function TypedBio({ bio }: TypedBioProps) {
  const [typedBio, setTypedBio] = useState('');

  useEffect(() => {
    if (typedBio.length < bio.length) {
      const timeoutId = setTimeout(() => {
        setTypedBio(bio.slice(0, typedBio.length + 1));
      }, 10);
      return () => clearTimeout(timeoutId);
    }
  }, [typedBio, bio]);

  return (
    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed min-h-[160px]">
      {typedBio}
    </p>
  );
}
