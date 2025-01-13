import React from 'react';
import { Timer, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0B0F] py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Timer className="text-[#FF6B2C] w-8 h-8" />
              <span className="ml-2 text-2xl font-bold">DRVR</span>
            </div>
            <p className="text-gray-400 text-sm">
              Revolutionizing the driving experience through blockchain technology and cryptocurrency rewards.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} 
                className="text-gray-400 hover:text-white w-fit">About Us</button>
              <button onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white w-fit">Roadmap</button>
              <a href="https://drvr.gitbook.io/drvr/drvr-token/release-rate" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white w-fit">Whitepaper</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-[#FF6B2C] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6B2C] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6B2C] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6B2C] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Contact: hello@drvr.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} DRVR. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;