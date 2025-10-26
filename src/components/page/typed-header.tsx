'use client';

import { useState, useEffect, useRef } from 'react';

interface TypedHeaderProps {
  name: string;
}

export function TypedHeader({ name }: TypedHeaderProps) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseDuration = 1500;

  const handleType = () => {
    const i = loopNum % 1; // For now, we only have one word: name
    const fullText = name;

    setText(current => {
        const updatedText = isDeleting
        ? fullText.substring(0, current.length - 1)
        : fullText.substring(0, current.length + 1);

        return updatedText;
    });


    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono text-primary min-h-[60px] md:min-h-[72px]">
      {text}
      <span className="animate-ping">|</span>
    </h1>
  );
}