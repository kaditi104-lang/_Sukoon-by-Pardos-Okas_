import React from 'react';
import { MapPin, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Background Image with Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero-aerial.jpg"
          alt="Aerial View of Sukoon at Sushant Golf City Lucknow"
          className="w-full h-full object-cover brightness-[0.55] contrast-[1.15] scale-105 animate-[pulse_25s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d12]/70 via-[#0a0d12]/50 to-[#0a0d12]" />
        <div className="absolute inset-0 bg-radial-vignette" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md mb-6">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-200">
            Pardos Okas Presents
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 mb-4 drop-shadow-2xl">
          SUKOON
        </h1>
        <p className="text-lg sm:text-2xl md:text-3xl font-light text-slate-200 tracking-wide mb-3">
          Ultra-Premium Plotted Community in Sushant Golf City
        </p>

        {/* Location Pill */}
        <div className="inline-flex items-center gap-2 text-sm md:text-base text-slate-300 font-medium mb-8">
          <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Sector H, Sushant Golf City, Lucknow • Uttar Pradesh</span>
        </div>

        {/* Rate Highlight Pill (Pure ₹10,400) */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border-2 border-amber-400 bg-slate-900/80 backdrop-blur-xl shadow-[0_0_35px_rgba(212,175,55,0.35)] animate-pulse-glow">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Official Rate:</span>
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-300">₹10,400</span>
            <span className="text-xs sm:text-sm text-slate-300">/ sq. ft. + PLC & charges</span>
          </div>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-1 transition-all"
          >
            <span>Explore 192 Plots</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#calculator"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider border border-amber-500/40 bg-slate-900/50 backdrop-blur-md text-amber-200 hover:bg-amber-500/15 hover:-translate-y-1 transition-all"
          >
            Calculate EMI
          </a>
          <a
            href="https://wa.me/919140943615?text=Hi%2C%20I%20am%20interested%20in%20Sukoon%20by%20Pardos%20Okas%20at%20Rs.10400%2Fsqft.%20Please%20share%20details."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 hover:-translate-y-1 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mb-14 text-xs font-semibold uppercase tracking-wider text-slate-300">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/25 bg-slate-900/40 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            LDA Approved Sanction
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/25 bg-slate-900/40 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            UP RERA: UPRERAPRJ642597/02/2026
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/25 bg-slate-900/40 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            Completion Certificate Received
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/25 bg-slate-900/40 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            Ready for Immediate Possession
          </span>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl border border-amber-500/20 bg-slate-900/60 backdrop-blur-md text-center">
            <div className="font-serif text-3xl md:text-4xl font-black text-amber-300 mb-1">11.5</div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Acres Gated Enclave</div>
          </div>
          <div className="p-5 rounded-2xl border border-amber-500/20 bg-slate-900/60 backdrop-blur-md text-center">
            <div className="font-serif text-3xl md:text-4xl font-black text-amber-300 mb-1">192</div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Exclusive Plots</div>
          </div>
          <div className="p-5 rounded-2xl border border-amber-500/20 bg-slate-900/60 backdrop-blur-md text-center">
            <div className="font-serif text-3xl md:text-4xl font-black text-amber-300 mb-1">45 Mtr</div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Approach Avenue</div>
          </div>
          <div className="p-5 rounded-2xl border border-amber-500/20 bg-slate-900/60 backdrop-blur-md text-center">
            <div className="font-serif text-3xl md:text-4xl font-black text-amber-300 mb-1">₹10,400</div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Official Rate/sq.ft</div>
          </div>
        </div>
      </div>
    </section>
  );
};
