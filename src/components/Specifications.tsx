import React from 'react';
import { Compass, Shield, Lightbulb, Zap, Droplets, CloudRain, Trees, Lock } from 'lucide-react';

export const Specifications: React.FC = () => {
  const specs = [
    { icon: Compass, title: '45-Meter Wide Approach Road', desc: 'Direct seamless connection from Shaheed Path arterial highway.' },
    { icon: Shield, title: 'Heavy-Duty Paved Internal Roads', desc: '9m and 12m wide internal avenues laid with interlocking pavers.' },
    { icon: Lightbulb, title: 'Footpaths & LED Street Lighting', desc: 'Continuous raised footpaths with energy-saving LED illumination.' },
    { icon: Zap, title: '100% Underground Electrical Network', desc: 'Zero overhead wires; clean concealed modern power feeder.' },
    { icon: Droplets, title: 'Dual Water Supply & STP Sewerage', desc: 'Treated water network with integrated sewage treatment plant.' },
    { icon: CloudRain, title: 'Rainwater Harvesting Network', desc: 'Eco-conscious groundwater recharge pits across the enclave.' },
    { icon: Trees, title: 'Dense Tree-Lined Avenues', desc: 'Landscaped green verges with mature flowering shade trees.' },
    { icon: Lock, title: 'Secured Guarded Entry & Exit', desc: 'Automated boom barriers, visitor log, and 24/7 CCTV surveillance.' },
  ];

  return (
    <section id="specifications" className="py-24 px-4 bg-[#0a0d12] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-400 mb-2">
            Engineered to Perfection
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">Specifications</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Constructed with institutional-grade civil engineering standards ensuring lifelong quality, aesthetics, and eco-sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-amber-500/20 bg-slate-900/60 backdrop-blur-md flex items-start gap-4 hover:border-amber-400/50 hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1.5">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
