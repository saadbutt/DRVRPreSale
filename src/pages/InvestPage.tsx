import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy, AlertCircle } from 'lucide-react';
import Section from '../components/Section';

interface WalletAddress {
  name: string;
  address: string;
}

interface FormData {
  solanaAddress: string;
  transactionHash: string;
}

const walletAddresses: WalletAddress[] = [
  { name: 'Solana (SOL)', address: 'EVxPcgCiJsc3p1gZHX24KasQZBY8mrvvMqa59eUMWEiS' },
  { name: 'Ethereum (ETH)', address: '0x265340ca52e762Dc440d53756d958e29aC9cC903' },
  { name: 'Tron USDT (TRC-20)', address: 'TUuQtVAMQ4s5CauFY2f3gkqopoddeC8F4J' }
];

const InvestPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    solanaAddress: '',
    transactionHash: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleViewWallet = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setShowModal(true);
  };

  const copyToClipboard = async (address: string) => {
    await navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('https://api.drvrtoken.com/api/submit-wallet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit wallet information');
      }

      setSuccess(true);
      setFormData({ solanaAddress: '', transactionHash: '' });
    } catch (err) {
      setError('Failed to submit wallet information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Section className="md:pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
            Invest in the Future of<br />
            <span className="text-[#FF6B2C]">Drive-to-Earn</span>
          </h1>
          
          <p className="text-gray-400 text-center text-lg mb-12">
            Join the revolution in cryptocurrency rewards for drivers.
            Secure your position in the future of mobility-based earnings.
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleViewWallet}
              disabled={loading}
              className="bg-[#FF6B2C] text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-[#FF8B4C] transition-colors disabled:opacity-50 flex items-center space-x-2"
            >
              {loading ? 'Loading...' : 'View Wallet Addresses'}
            </button>
          </div>
        </div>
      </Section>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-[#1A1B1F] rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Investment Wallets</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="mb-6">
                <div className="bg-[#0A0B0F] p-4 rounded-lg space-y-2 text-sm">
                  <p className="text-gray-300">
                    <span className="text-[#FF6B2C]">Note:</span> Minimum investment $10,000 USD in USDT tokens
                  </p>
                  <p className="text-gray-300">
                    Please verify wallet addresses carefully before sending funds
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {walletAddresses.map(({ name, address }) => (
                  <div key={name} className="bg-[#0A0B0F] p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">{name}</h3>
                      <button
                        onClick={() => copyToClipboard(address)}
                        className="text-[#FF6B2C] hover:text-[#FF8B4C] flex items-center space-x-2 px-2 py-0.5 rounded-lg bg-[#FF6B2C]/10"
                      >
                        {copiedAddress === address ? (
                          <Check size={14} />
                        ) : (
                          <Copy size={14} />
                        )}
                        <span className="text-xs">
                          {copiedAddress === address ? 'Copied!' : 'Copy'}
                        </span>
                      </button>
                    </div>
                    <p className="text-gray-400 font-mono text-xs break-all bg-black/30 p-2 mt-1 rounded">
                      {address}
                    </p>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="solanaAddress" className="block text-sm font-medium mb-1">
                    Enter your Solana wallet address to receive DRVR tokens
                  </label>
                  <input
                    id="solanaAddress"
                    type="text"
                    value={formData.solanaAddress}
                    onChange={(e) => setFormData(prev => ({ ...prev, solanaAddress: e.target.value }))}
                    className="w-full px-3 py-2 bg-[#0A0B0F] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B2C] focus:border-transparent"
                    required
                    placeholder="Enter Solana wallet address"
                  />
                </div>

                <div>
                  <label htmlFor="transactionHash" className="block text-sm font-medium mb-1">
                    Enter your proof of investment (transaction hash)
                  </label>
                  <input
                    id="transactionHash"
                    type="text"
                    value={formData.transactionHash}
                    onChange={(e) => setFormData(prev => ({ ...prev, transactionHash: e.target.value }))}
                    className="w-full px-3 py-2 bg-[#0A0B0F] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B2C] focus:border-transparent"
                    required
                    placeholder="Enter transaction hash"
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg">
                    <AlertCircle size={16} />
                    <span className="text-sm">{error}</span>
                  </div>
                )}

                {success && (
                  <div className="flex items-center gap-2 text-green-500 bg-green-500/10 p-3 rounded-lg">
                    <Check size={16} />
                    <span className="text-sm">Wallet information submitted successfully!</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF6B2C] text-white py-3 rounded-lg font-semibold hover:bg-[#FF8B4C] transition-colors disabled:opacity-50 text-sm"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Wallet Information'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InvestPage;