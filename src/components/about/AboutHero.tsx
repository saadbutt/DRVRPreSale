import React from 'react';
import { TrendingUp } from 'lucide-react';

export function AboutHero() {
  return (
    <div className="relative overflow-hidden py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Unleash the Power of Driving with{' '}
            <span className="text-orange-500">DRVR</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            The FIRST and ONLY Drive-to-earn App is entirely decentralized, 
            introducing a self-sustaining ecosystem from the moment you mint your miners
          </p>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20">
        <TrendingUp size={400} className="text-orange-500" />
      </div>
    </div>
  );
}