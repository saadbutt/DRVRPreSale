import React from 'react';
import Section from '../components/Section';
import { Timer, Shield, Zap } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <Section className="md:pt-32">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          About <span className="text-[#FF6B2C]">DRVR</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg text-center max-w-3xl mx-auto mb-16">
          We're revolutionizing the driving experience by connecting blockchain technology 
          with everyday commutes, creating value for drivers worldwide.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#1A1B1F] p-6 md:p-8 rounded-xl">
            <div className="bg-[#FF6B2C] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Timer className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Drive & Earn</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Convert your driving time into valuable cryptocurrency rewards through our 
              innovative tracking system.
            </p>
          </div>
          
          <div className="bg-[#1A1B1F] p-6 md:p-8 rounded-xl">
            <div className="bg-[#FF6B2C] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Secure Platform</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Built on blockchain technology ensuring transparent, secure, and 
              immutable reward tracking.
            </p>
          </div>
          
          <div className="bg-[#1A1B1F] p-6 md:p-8 rounded-xl">
            <div className="bg-[#FF6B2C] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Instant Rewards</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Receive rewards directly to your wallet as you drive, with real-time 
              tracking and instant conversions.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;