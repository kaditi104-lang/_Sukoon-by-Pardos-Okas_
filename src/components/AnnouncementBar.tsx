import React from 'react';
import { Phone, FileText } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#0d1217] via-[#1c1605] to-[#0d1217] border-b border-gold-500/30 text-xs md:text-sm py-2 px-4 text-amber-100/90 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider">
            Official Notice
          </span>
          <span>
            Limited Plots at Sushant Golf City • Revised Rate: <strong className="text-amber-300 font-bold">₹10,400 / sq. ft.</strong> • Ready for Immediate Possession
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <a href="tel:9140943615" className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>+91 91409 43615</span>
          </a>
          <a href="/assets/documents/Approved_Map.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Approved Layout PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};
