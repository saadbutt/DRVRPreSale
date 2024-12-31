import { useState, useEffect, useCallback } from 'react';

interface ShootingStar {
  id: string;
  top: string;
  left: string;
  delay: number;
  duration: number;
}

export function useShootingStars(initialCount: number = 3) {
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  const generateShootingStar = useCallback(() => ({
    id: `shooting-star-${Date.now()}-${Math.random()}`,
    top: `${Math.random() * 50}%`,
    left: `${Math.random() * 30}%`,
    delay: 0,
    duration: 2 + Math.random(),
  }), []);

  useEffect(() => {
    const addShootingStar = () => {
      setShootingStars(prev => {
        const stars = [...prev, generateShootingStar()];
        return stars.slice(-5); // Keep only the last 5 stars
      });
    };

    // Initial stars
    setShootingStars(
      Array.from({ length: initialCount }, generateShootingStar)
    );

    const interval = setInterval(addShootingStar, 2000);
    return () => clearInterval(interval);
  }, [generateShootingStar, initialCount]);

  return shootingStars;
}