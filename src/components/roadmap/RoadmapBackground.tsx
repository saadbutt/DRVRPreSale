import React from 'react';

export function RoadmapBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Circular patterns */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-[800px] h-[800px] opacity-20">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border border-orange-500/20 rounded-full"
              style={{
                transform: `scale(${(i + 1) * 0.2})`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Glowing dots */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-orange-500/50 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900/95" />
    </div>
  );
}