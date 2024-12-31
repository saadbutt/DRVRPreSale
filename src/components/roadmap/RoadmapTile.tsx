import React from 'react';
import { ArrowRight } from 'lucide-react';

interface RoadmapTileProps {
  date: string;
  title: string;
  showArrow?: boolean;
}

export function RoadmapTile({ date, title, showArrow = true }: RoadmapTileProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700 hover:border-orange-500 transition-colors group flex-1">
        <p className="text-orange-500 font-medium mb-2 opacity-80 group-hover:opacity-100">{date}</p>
        <h3 className="text-xl font-semibold text-white group-hover:text-orange-500 transition-colors">{title}</h3>
      </div>
      {showArrow && (
        <div className="flex-shrink-0">
          <ArrowRight size={24} className="text-orange-500" />
        </div>
      )}
    </div>
  );
}