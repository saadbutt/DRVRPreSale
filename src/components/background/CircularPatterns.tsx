import React from 'react';

export function CircularPatterns() {
  return (
    <div className="absolute inset-0">
      {/* Large circles on the right */}
      <div className="absolute -right-1/4 top-0 w-[800px] h-[800px]">
        {[...Array(6)].map((_, i) => (
          <div
            key={`circle-right-${i}`}
            className="absolute inset-0 border border-orange-500/10 rounded-full"
            style={{
              transform: `scale(${(i + 1) * 0.15})`,
            }}
          />
        ))}
      </div>

      {/* Medium circles on the left */}
      <div className="absolute -left-1/4 bottom-0 w-[600px] h-[600px]">
        {[...Array(4)].map((_, i) => (
          <div
            key={`circle-left-${i}`}
            className="absolute inset-0 border border-orange-500/10 rounded-full"
            style={{
              transform: `scale(${(i + 1) * 0.2})`,
            }}
          />
        ))}
      </div>

      {/* Small circles in the center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
        {[...Array(3)].map((_, i) => (
          <div
            key={`circle-center-${i}`}
            className="absolute inset-0 border border-orange-500/5 rounded-full"
            style={{
              transform: `scale(${(i + 1) * 0.25})`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900/95" />
    </div>
  );
}