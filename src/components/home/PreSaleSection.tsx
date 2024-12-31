import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function PreSaleSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join the <span className="text-orange-500">Pre-sale</span>
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Be among the first to invest in the future of drive-to-earn
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-800/80 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold">How to Participate</h3>
            <p className="text-white">
              Participate in our pre-sale by sending USDT, USDC, or SOL to our secure wallet address.
            </p>
            <Link 
              to="/invest"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105"
            >
              View Wallet Address
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}