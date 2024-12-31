import React from 'react';
import { Shield, Coins, Globe } from 'lucide-react';
import { TrendingUp } from 'lucide-react';

const features = [
  {
    title: 'Decentralized Platform',
    description: 'Fully decentralized system ensuring transparency and user ownership of data.',
    Icon: Globe
  },
  {
    title: 'Secure Mining',
    description: 'Advanced encryption and blockchain technology to secure your earnings.',
    Icon: Shield
  },
  {
    title: 'Instant Rewards',
    description: 'Earn cryptocurrency rewards in real-time as you drive.',
    Icon: Coins
  }
];

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="flex flex-col items-start max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Unleash the Power of Driving with{' '}
              <span className="text-orange-500">DRVR</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl">
              The FIRST and ONLY Drive-to-earn App is entirely decentralized, 
              introducing a self-sustaining ecosystem from the moment you mint your miners
            </p>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20">
            <TrendingUp size={400} className="text-orange-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.Icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}