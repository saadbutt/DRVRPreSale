import React from 'react';
import { Car, ArrowRight, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 scale-105">
            <span className="text-white">Turn </span>
            <span className="text-orange-500">Miles </span>
            <span className="text-white">into</span>
            <br />
            <span className="text-orange-500">Crypto </span>
            <span className="text-white">Rewards</span>
          </h1>

          <div className="flex items-center justify-center gap-20 my-16">
            <div className="relative">
              <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
                <Car size={48} className="text-white" />
              </div>
            </div>

            <ArrowRight size={32} className="text-orange-500 animate-pulse" />

            <div className="relative">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50">
                <DollarSign size={48} className="text-white" />
              </div>
              <div className="absolute -inset-2 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto transform hover:scale-105">
            <p className="text-xl text-white mb-8">
              Transform your daily commute into cryptocurrency rewards. Every mile you drive earns you points that can be converted into various cryptocurrencies.
            </p>

            <Link 
              to="/invest"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105"
            >
              Invest now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}