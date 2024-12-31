import React from 'react';

interface StarProps {
  size?: number;
  top: string;
  left: string;
  delay?: number;
}

export function Star({ size = 1, top, left, delay = 0 }: StarProps) {
  return (
    <div
      className="absolute bg-white rounded-full animate-twinkle"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top,
        left,
        animationDelay: `${delay}s`,
      }}
    />
  );
}