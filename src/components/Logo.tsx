import React from 'react';
import { Gauge } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Gauge className="w-8 h-8 text-orange-500" />
      <span className="text-2xl font-bold">DRVR</span>
    </div>
  );
}