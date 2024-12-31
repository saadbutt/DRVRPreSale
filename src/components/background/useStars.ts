import { useMemo } from 'react';

interface Star {
  id: string;
  size: number;
  top: string;
  left: string;
  delay: number;
}

export function useStars(count: number = 50): Star[] {
  return useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: `star-${i}`,
      size: Math.random() * 2 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
    })), [count]
  );
}