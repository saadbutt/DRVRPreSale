import React from 'react';
import { Logo } from './Logo';
import { Twitter, MessageCircle, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-md border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo />
            <p className="text-gray-400 text-sm">Revolutionizing drive-to-earn</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Send size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} DRVR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}