import React from 'react';
import { RoadmapPhase } from './RoadmapPhase';
import { RoadmapBackground } from './RoadmapBackground';

const roadmapData = [
  {
    phase: 'Phase 1 - January 2024',
    title: 'Token Pre-sale',
    description: 'Launch of our initial token offering with exclusive early investor benefits and community rewards.'
  },
  {
    phase: 'Phase 2 - February 2024',
    title: 'NFT Launch',
    description: 'Introduction of our unique NFT collection, featuring exclusive driver profiles and special perks.'
  },
  {
    phase: 'Phase 3 - End of Q1 2024',
    title: 'DRVR Platform Launch',
    description: 'Release of our comprehensive web and mobile applications, enabling seamless drive-to-earn experiences.'
  },
  {
    phase: 'Phase 4 - Q2 2024',
    title: 'DEX Listing',
    description: 'Strategic listing on decentralized exchanges to enhance token liquidity and accessibility.'
  }
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="relative min-h-screen py-24">
      <RoadmapBackground />
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-orange-500">Roadmap</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Follow our journey as we revolutionize the drive-to-earn ecosystem
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {roadmapData.map((phase, index) => (
            <RoadmapPhase
              key={index}
              {...phase}
              isLast={index === roadmapData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}