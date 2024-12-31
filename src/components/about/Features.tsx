import React from 'react';
import { Shield, Coins, Globe } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
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

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}