import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface SwapFormData {
  transactionHash: string;
  solanaAddress: string;
}

export default function SwapForm() {
  const [formData, setFormData] = useState<SwapFormData>({
    transactionHash: '',
    solanaAddress: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Here you would typically make an API call to your backend
      const response = await fetch('/api/swap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit swap request');
      }

      // Clear form after successful submission
      setFormData({ transactionHash: '', solanaAddress: '' });
      alert('Swap request submitted successfully');
    } catch (err) {
      setError('Failed to submit swap request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto bg-[#1A1B1F] p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Token Swap Form</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="transactionHash" className="block text-sm font-medium mb-2">
            Tron USDT Transaction Hash
          </label>
          <input
            id="transactionHash"
            type="text"
            value={formData.transactionHash}
            onChange={(e) => setFormData(prev => ({ ...prev, transactionHash: e.target.value }))}
            className="w-full px-4 py-2 bg-[#0A0B0F] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B2C] focus:border-transparent"
            required
            placeholder="Enter transaction hash"
          />
        </div>

        <div>
          <label htmlFor="solanaAddress" className="block text-sm font-medium mb-2">
            Solana Wallet Address
          </label>
          <input
            id="solanaAddress"
            type="text"
            value={formData.solanaAddress}
            onChange={(e) => setFormData(prev => ({ ...prev, solanaAddress: e.target.value }))}
            className="w-full px-4 py-2 bg-[#0A0B0F] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B2C] focus:border-transparent"
            required
            placeholder="Enter Solana wallet address"
          />
        </div>

        {error && (
          <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg">
            <AlertCircle size={16} />
            <span className="text-sm">{error}</span>
          </div>
        )}

        <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-4">
          <p className="text-yellow-500 text-sm">
            Please verify your Solana wallet address carefully. Transactions cannot be reversed once processed.
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#FF6B2C] text-white py-3 rounded-lg font-semibold hover:bg-[#FF8B4C] transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Processing...' : 'Submit Swap Request'}
        </button>
      </form>
    </div>
  );
}