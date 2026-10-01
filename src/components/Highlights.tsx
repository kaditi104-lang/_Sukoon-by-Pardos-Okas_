import React from 'react';
import { ShieldCheck, FileCheck, Award, Lock, Home, Sparkles } from 'lucide-react';

export const Highlights: React.FC = () => {
  const highlightsList = [
    {
      icon: ShieldCheck,
      title: 'LDA Approved Project',
      desc: 'Sanctioned by the Lucknow Development Authority with complete layout clearance, clear freehold titles, and 100% legal compliance.',
      badge: '100% Legal Title',
    },
    {
      icon: FileCheck,
      title: 'UP RERA Registered',
      desc: 'Registered under UP RERA Registration No. UPRERAPRJ642597/02/2026 ensuring strict regulatory governance and buyer safety.',
      badge: 'RERA: UPRERAPRJ642597',
    },
    {
      icon: Award,
      title: 'Completion Certificate',
      desc: 'Project infrastructure is 100% developed with official CC received. You can commence construction of your custom villa immediately.',
      badge: 'CC Received',
    },
    {
      icon: Lock,
      title: 'Gated Sanctuary',
      desc: 'Secured grand gated community with RFID boom barriers, 24/7 CCTV surveillance, boundary walls, and professional security guards.',
      badge: '24/7 Monitored',
    },
    {
      icon: Home,
      title: 'Ready for Possession',
      desc: 'Immediate registry and mutation facility. Paved internal avenues, LED street lighting, electricity cables, and sewage systems active.',
      badge: 'Instant Handover',
    },
    {
      icon: Sparkles,
      title: 'Sushant Golf City',
      desc: 'Nestled inside Lucknow’s premier 3,500+ acre mega township featuring an 18-hole golf course, Medanta Hospital, and Lulu Mall.',
      badge: 'Lucknow’s #1 Township',
    },
  ];

  return (
    <section id="highlights" className="py-24 px-4 bg-[#0e131a] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-400 mb-2">
            Why Choose Sukoon
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Uncompromising <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">Legal Safety & Luxury</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Experience absolute peace of mind with 100% sanctioned government approvals, completed infrastructure, and immediate registry assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlightsList.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-amber-500/20 bg-slate-900/60 backdrop-blur-md hover:border-amber-400/60 hover:-translate-y-1.5 transition-all duration-300 shadow-xl group"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-6 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {item.desc}
              </p>
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
