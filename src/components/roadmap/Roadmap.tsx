import React from 'react';
import { RoadmapTile } from './RoadmapTile';

const roadmapItems = [
  {
    date: 'January 2024',
    title: 'Token Pre-sale'
  },
  {
    date: 'February 2024',
    title: 'NFT Launch'
  },
  {
    date: 'End of Q1 2024',
    title: 'DRVR Web and Mobile App Launch'
  },
  {
    date: 'Q2 2024',
    title: 'DEX Listing'
  }
];

export function Roadmap() {
  return (
    <section id="roadmap" className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-orange-500">Roadmap</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Follow our journey as we revolutionize the drive-to-earn ecosystem
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 overflow-x-auto pb-4">
          {roadmapItems.map((item, index) => (
            <RoadmapTile
              key={index}
              date={item.date}
              title={item.title}
              showArrow={index < roadmapItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}