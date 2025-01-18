import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StarryBackground from './components/StarryBackground';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RoadmapPage from './pages/RoadmapPage';
import InvestPage from './pages/InvestPage';

function App() {
  return (
    <div className="bg-[#0A0B0F] text-white relative min-h-screen flex flex-col">
      <StarryBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <section id="home" className="min-h-screen snap-start">
            <HomePage />
          </section>
          <section id="about" className="min-h-screen snap-start">
            <AboutPage />
          </section>

          <section id="invest" className="min-h-screen snap-start">
            <InvestPage />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;