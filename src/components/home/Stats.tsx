import React from 'react';

const stats = [
  { number: '50K+', label: 'Active Drivers' },
  { number: '1M+', label: 'Miles Converted' },
  { number: '100K+', label: 'BTC Rewarded' },
];

export function Stats() {
  return (
    <section className="py-32 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center"
            >
              <h3 className="text-6xl font-bold text-orange-500 mb-3">{stat.number}</h3>
              <p className="text-2xl text-gray-400 font-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}