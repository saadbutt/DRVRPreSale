import React from 'react';
import { ArrowDown } from 'lucide-react';

interface RoadmapPhaseProps {
  phase: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export function RoadmapPhase({ phase, title, description, isLast = false }: RoadmapPhaseProps) {
  return (
    <div className="relative flex flex-col items-center">
      <div className="w-full max-w-sm bg-gray-800/30 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500 transition-all group">
        <div>
          <div className="text-orange-500 font-medium text-sm mb-1">{phase}</div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
      
      {!isLast && (
        <div className="my-3">
          <ArrowDown size={20} className="text-orange-500 animate-bounce" />
        </div>
      )}
    </div>
  );
}