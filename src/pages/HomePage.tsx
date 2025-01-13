import React from 'react';
import Section from '../components/Section';
import { Car, DollarSign } from 'lucide-react';

const HomePage = () => {
  const scrollToInvest = () => {
    const element = document.getElementById('invest');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section className="pt-32 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8">
          Turn <span className="text-[#FF6B2C]">Miles</span> into<br />
          <span className="text-[#FF6B2C]">Crypto</span> Rewards
        </h1>
        <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12">
          Transform your daily commute into cryptocurrency rewards. Every mile you
          drive earns you points that can be converted into various cryptocurrencies.
        </p>
        <div className="flex justify-center space-x-8 md:space-x-12 mb-12 md:mb-16">
          <div className="bg-[#FF6B2C] rounded-full p-4 md:p-6">
            <Car size={24} className="text-white md:w-8 md:h-8" />
          </div>
          <div className="text-[#FF6B2C] text-2xl md:text-4xl font-bold flex items-center">→</div>
          <div className="bg-green-500 rounded-full p-4 md:p-6">
            <DollarSign size={24} className="text-white md:w-8 md:h-8" />
          </div>
        </div>
        <button
          onClick={scrollToInvest}
          className="inline-block bg-[#FF6B2C] text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-[#FF8B4C] transition-colors"
        >
          Invest now
        </button>
      </div>
    </Section>
  );
};

export default HomePage;