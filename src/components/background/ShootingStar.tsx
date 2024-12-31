import React from 'react';

interface ShootingStarProps {
  delay?: number;
  duration?: number;
  top: string;
  left: string;
}

export function ShootingStar({ delay = 0, duration = 3, top, left }: ShootingStarProps) {
  return (
    <div
      className="absolute h-[2px] w-20 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-shooting-star"
      style={{
        top,
        left,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
}