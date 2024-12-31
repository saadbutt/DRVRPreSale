import React from 'react';
import { Star } from './Star';
import { ShootingStar } from './ShootingStar';
import { CircularPatterns } from './CircularPatterns';
import { useStars } from './useStars';
import { useShootingStars } from './useShootingStars';

export function SpaceBackground() {
  const stars = useStars(50);
  const shootingStars = useShootingStars(3);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <CircularPatterns />
      
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}
      
      {shootingStars.map((star) => (
        <ShootingStar key={star.id} {...star} />
      ))}
    </div>
  );
}