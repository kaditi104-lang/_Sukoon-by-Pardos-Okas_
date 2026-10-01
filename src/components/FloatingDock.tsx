import React from 'react';
import { Phone, MessageCircle, Calculator, Calendar } from 'lucide-react';

export const FloatingDock: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-3 py-2 rounded-full border border-amber-400/40 bg-[#0a0d12]/90 backdrop-blur-xl shadow-2xl shadow-black/80 flex items-center gap-2">
      <a
        href="tel:9140943615"
        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
        title="Call Sales Helpline"
      >
        <Phone className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Call Now</span>
      </a>

      <a
        href="https://wa.me/919140943615?text=Hi%2C%20I%20am%20interested%20in%20Sukoon%20plots%20at%20Rs.10400%2Fsqft."
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      <a
        href="#calculator"
        className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/10 bg-slate-900/60 text-slate-200 font-semibold text-xs hover:border-amber-400/40 hover:text-amber-300 transition-all"
        title="Plot EMI Calculator"
      >
        <Calculator className="w-3.5 h-3.5 text-amber-400" />
        <span className="hidden md:inline">Calculator</span>
      </a>

      <a
        href="#contact"
        className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/10 bg-slate-900/60 text-slate-200 font-semibold text-xs hover:border-amber-400/40 hover:text-amber-300 transition-all"
        title="Book VIP Site Visit"
      >
        <Calendar className="w-3.5 h-3.5 text-amber-400" />
        <span className="hidden md:inline">Visit</span>
      </a>
    </div>
  );
};
