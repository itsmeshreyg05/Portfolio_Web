'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './bubbles.module.css';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
}

const createBubble = (width: number, height: number, id: number): Bubble => {
  const size = Math.random() * 40 + 20;
  return {
    id,
    x: Math.random() * width,
    y: height + size,
    size,
    speedY: Math.random() * 2 + 1,
    speedX: (Math.random() - 0.5) * 2,
  };
};

export function Bubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const nextBubbleId = useRef(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (dimensions.width > 0 && dimensions.height > 0) {
        setBubbles(prev => {
          if (prev.length < 30) {
            return [...prev, createBubble(dimensions.width, dimensions.height, nextBubbleId.current++)];
          }
          return prev;
        });
      }
    }, 500);
    return () => clearInterval(interval);
  }, [dimensions]);

  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      setBubbles(prevBubbles =>
        prevBubbles
          .map(b => ({
            ...b,
            y: b.y - b.speedY,
            x: b.x + b.speedX,
          }))
          .filter(b => b.y > -b.size)
      );
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);


  const handleDoubleClick = (bubbleId: number) => {
    setBubbles((prev) => {
      const originalBubble = prev.find((b) => b.id === bubbleId);
      if (!originalBubble) return prev;

      const burstBubbles: Bubble[] = [];
      for (let i = 0; i < 3; i++) {
        const size = originalBubble.size / 3;
        burstBubbles.push({
          id: nextBubbleId.current++,
          x: originalBubble.x,
          y: originalBubble.y,
          size,
          speedY: (Math.random() * 2 + 1) * (originalBubble.speedY / Math.abs(originalBubble.speedY)),
          speedX: (Math.random() - 0.5) * 4,
        });
      }
      return [...prev.filter((b) => b.id !== bubbleId), ...burstBubbles];
    });
  };

  return (
    <div className={styles.bubblesContainer}>
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className={styles.bubble}
          style={{
            left: bubble.x,
            top: bubble.y,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
          }}
          onDoubleClick={() => handleDoubleClick(bubble.id)}
        />
      ))}
    </div>
  );
}