'use client';

import React, { useEffect, useState } from 'react';
import { Github } from 'lucide-react';
import styles from './floating-icons.module.css';

interface Icon {
  id: number;
  component: React.ReactNode;
  style: React.CSSProperties;
}

const icons = [
  (props: any) => <Github {...props} />,
  (props: any) => ( // Python
    <svg {...props} viewBox="0 0 32 32">
      <path fill="#3776AB" d="M29.2,21.75c0,3.3-2.29,5.29-5.44,5.29s-4.81-1.63-4.81-4.81V13.1c0-2.3,1.55-3.52,3.52-3.52s3.23,1.13,3.23,3.23V25.3a.5.5,0,0,1-1,0V13.1c0-1.74-.94-2.29-2.23-2.29s-2.52.83-2.52,2.85v9.13c0,2.69,1.74,3.81,3.81,3.81s4.44-1.3,4.44-4.29V13.1a.5.5,0,0,1,1,0Z"/>
      <path fill="#FFD43B" d="M12.92,13.1c0-2.3,1.55-3.52,3.52-3.52s3.23,1.13,3.23,3.23V25.3a.5.5,0,0,1-1,0V13.1c0-1.74-.94-2.29-2.23-2.29s-2.52.83-2.52,2.85v9.13c0,2.69,1.74,3.81,3.81,3.81s4.44-1.3,4.44-4.29V13.1a.5.5,0,0,1,1,0V21.75c0,3.3-2.29,5.29-5.44,5.29s-4.81-1.63-4.81-4.81V13.1Z" transform="translate(-9.92)"/>
      <circle fill="#3776AB" cx="22.25" cy="6.25" r="1.5" />
      <circle fill="#FFD43B" cx="9.75" cy="6.25" r="1.5" />
    </svg>
  ),
  (props: any) => ( // React
    <svg {...props} viewBox="-11.5 -10.23174 23 20.46348">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  (props: any) => ( // Javascript
    <svg {...props} viewBox="0 0 32 32">
        <path fill="#F7DF1E" d="M0 0h32v32H0z"/>
        <path d="M24.23 25.04l-2.07-11.54h-3.4l1.72 9.61-4.63-2.85-3.15 4.93h8.53zM13.25 13.5h-3.38l1.65 9.17-4.51-2.8-3.15 4.93h8.39z"/>
    </svg>
  ),
  (props: any) => ( // Node.js
    <svg {...props} viewBox="0 0 24 24">
      <path fill="#339933" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.04 15.65v-3.79l-2.32.96v-1.62l3.8-1.55h.01v6h-1.49zm5.06-2.58l-2.45 1.35v1.27l3.99-2.2v-1.4l-3.99-2.2v1.27l2.45 1.35v.36z"/>
    </svg>
  ),
  (props: any) => ( // Docker
    <svg {...props} viewBox="0 0 24 24">
      <path fill="#2496ED" d="M22.1 9.42c-.67-2.6-2.8-4.6-5.4-5.3L12 2.8 7.3 4.12C4.7 4.8 2.6 6.82 1.9 9.42H1.5v4.16h.4c.7 2.6 2.8 4.6 5.4 5.3l4.7 1.32 4.7-1.32c2.6-.7 4.7-2.7 5.4-5.3h.4V9.42h-.4zM15 12.5h-2v-2h2v2zm3 0h-2v-2h2v2zm-6 0H9v-2h3v2zm-5-5H5v2H3v-2H2V9h2V7h1v2h2v1.5z"/>
    </svg>
  ),
  (props: any) => ( // C++
    <svg {...props} viewBox="0 0 24 24">
        <path fill="#00599C" d="M13.5 12.5h-3v-3h3v3zm-4-4v8h8v-8h-8zm11.5 5.5v-2h-2v-2h2v-2h2v2h2v2h-2v2h-2zm-2.5 4.5v-2h-2v-2h2v-2h2v2h2v2h-2v2h-2zM3 3h10v2H5v8H3V3z"/>
    </svg>
  )
];

const createIcon = (): Icon => {
  const IconComponent = icons[Math.floor(Math.random() * icons.length)];
  const size = Math.random() * 40 + 20; // 20px to 60px
  const duration = Math.random() * 10 + 15; // 15s to 25s
  const delay = Math.random() * -duration;

  return {
    id: Math.random(),
    component: <IconComponent />,
    style: {
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    },
  };
};

export function FloatingIcons() {
  const [iconList, setIconList] = useState<Icon[]>([]);

  useEffect(() => {
    const generatedIcons = Array.from({ length: 20 }, createIcon);
    setIconList(generatedIcons);
  }, []);

  return (
    <div className={styles.iconsContainer}>
      {iconList.map(icon => (
        <div key={icon.id} className={styles.icon} style={icon.style}>
          {icon.component}
        </div>
      ))}
    </div>
  );
}