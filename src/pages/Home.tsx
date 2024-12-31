import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/home/Hero';
import { AboutSection } from '../components/home/AboutSection';
import { RoadmapSection } from '../components/roadmap/RoadmapSection';
import { PreSaleSection } from '../components/home/PreSaleSection';
import { SpaceBackground } from '../components/background/SpaceBackground';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-[#060911] text-white overflow-hidden">
      <SpaceBackground />
      <Navbar />
      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>
        <AboutSection />
        <RoadmapSection />
        <PreSaleSection />
      </main>
      <Footer />
    </div>
  );
}