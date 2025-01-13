import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const RoadmapItem = ({ phase, date, title, description }: {
  phase: string;
  date: string;
  title: string;
  description: string;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#1A1B1F] p-6 md:p-8 rounded-xl mb-8 relative"
    >
      <div className="text-[#FF6B2C] text-sm md:text-base font-semibold mb-2">{phase} - {date}</div>
      <h3 className="text-xl md:text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm md:text-base">{description}</p>
    </motion.div>
  );
};

const RoadmapPage = () => {
  return (
    <div className="pt-20">
      <Section className="md:pt-32">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Our Roadmap
        </h1>
        <p className="text-gray-400 text-base md:text-lg text-center max-w-3xl mx-auto mb-16">
          Follow our journey as we revolutionize the drive-to-earn ecosystem
        </p>
        
        <div className="max-w-3xl mx-auto">
          <RoadmapItem 
            phase="Phase 1"
            date="January 2025"
            title="Token Pre-sale"
            description="Launch of our initial token offering with exclusive early investor benefits and community rewards."
          />
          <RoadmapItem 
            phase="Phase 2"
            date="February 2025"
            title="NFT Launch"
            description="Introduction of our unique NFT collection, featuring exclusive driver profiles and special perks."
          />
          <RoadmapItem 
            phase="Phase 3"
            date="End of Q1 2025"
            title="DRVR Platform Launch"
            description="Release of our comprehensive web and mobile applications, enabling seamless drive-to-earn experiences."
          />
          <RoadmapItem 
            phase="Phase 4"
            date="Q2 2025"
            title="DEX Listing"
            description="Strategic listing on decentralized exchanges to enhance token liquidity and accessibility."
          />
        </div>
      </Section>
    </div>
  );
};

export default RoadmapPage;