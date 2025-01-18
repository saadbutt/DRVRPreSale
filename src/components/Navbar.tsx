import React, { useState } from 'react';
import { Timer, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-[#0A0B0F]/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection('home')} className="flex items-center">
            <Timer className="text-[#FF6B2C] w-8 h-8" />
            <span className="ml-2 text-2xl font-bold">DRVR</span>
          </button>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About Us
            </button>
            <a 
              href="https://drvr.gitbook.io/drvr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Whitepaper
            </a>
            <button 
              onClick={() => scrollToSection('invest')}
              className="bg-[#FF6B2C] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#FF8B4C] transition-colors"
            >
              Invest Now
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col items-center space-y-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="w-full text-center text-gray-300 hover:text-white transition-colors py-2"
            >
              About Us
            </button>
            <a 
              href="https://drvr.gitbook.io/drvr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-gray-300 hover:text-white transition-colors py-2"
            >
              Whitepaper
            </a>
            <button 
              onClick={() => scrollToSection('invest')}
              className="w-full bg-[#FF6B2C] text-white py-3 rounded-full font-semibold hover:bg-[#FF8B4C] transition-colors"
            >
              Invest Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;