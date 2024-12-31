import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SpaceBackground } from '../components/background/SpaceBackground';
import { Copy, Check } from 'lucide-react';

export function Invest() {
  const [copied, setCopied] = useState(false);
  const walletAddress = "0x1234567890abcdef1234567890abcdef12345678";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#060911] text-white">
      <SpaceBackground />
      <Navbar />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Join the <span className="text-orange-500">Pre-sale</span>
              </h1>
              <p className="text-xl text-white">
                Participate in our pre-sale by sending USDT, USDC, or SOL
              </p>
            </div>

            <div className="bg-gray-800/80 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Wallet Address</h2>
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg">
                    <code className="flex-1 font-mono text-orange-500">{walletAddress}</code>
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check size={16} className="text-green-500" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={16} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Accepted Tokens</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>USDT (Tether)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>USDC (USD Coin)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>SOL (Solana)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                  <p className="text-sm text-orange-200">
                    Important: Please ensure you're sending tokens on the correct network. 
                    Sending tokens on the wrong network may result in loss of funds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}