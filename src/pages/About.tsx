import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { Features } from '../components/about/Features';
import { Navbar } from '../components/Navbar';

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      <AboutHero />
      <Features />
    </div>
  );
}