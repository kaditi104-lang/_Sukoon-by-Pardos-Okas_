import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-[#06090d] border-t border-white/5 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-white/5 mb-8">
          <div className="flex items-center gap-3">
            <img src="/assets/images/logo.png" alt="Sukoon by Pardos Okas" className="h-10 w-auto" />
            <div>
              <span className="font-serif text-xl font-bold tracking-widest text-amber-200">SUKOON</span>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-slate-500">by Pardos Okas</span>
            </div>
          </div>

          <div className="max-w-xl text-left md:text-right space-y-1">
            <p><strong>UP RERA Registration:</strong> UPRERAPRJ642597/02/2026 | LDA Approved Sanctioned Masterplan</p>
            <p>Completion Certificate Received • 192 Handcrafted Plotted Residences across 11.5 Gated Acres.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 text-[11px]">
          <div>
            Marketed exclusively by <strong>Bandhan Realty</strong> | Direct Helpline:{' '}
            <a href="tel:9140943615" className="text-amber-400 hover:underline">
              +91 91409 43615
            </a>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Sukoon by Pardos Okas. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
