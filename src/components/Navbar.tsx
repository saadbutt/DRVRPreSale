import React from 'react';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-900/50 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <Logo />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">About us</NavLink>
            <NavLink href="#roadmap">Roadmap</NavLink>
          </div>

          <Link 
            to="/invest"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
          >
            Invest now
          </Link>
        </div>
      </div>
    </nav>
  );
}