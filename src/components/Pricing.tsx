import React from 'react';
import { Check, ArrowRight, IndianRupee } from 'lucide-react';

interface PricingProps {
  onSelectPlot?: (plotName: string, sqft: string, est: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlot }) => {
  const plotPlans = [
    {
      size: '1,378',
      sub: 'sq. ft. (~153.11 sq.yd / ~128 sqm)',
      price: '~₹1.43 Cr*',
      baseNote: 'Base Value @ ₹10,400/sq.ft',
      popular: false,
      features: [
        'Perfect for 3-4 BHK Bespoke Villa',
        '9-meter wide paved front road',
        'Concealed underground utilities',
        'Immediate possession & registry',
      ],
    },
    {
      size: '1,508',
      sub: 'sq. ft. (~167.55 sq.yd / ~140 sqm)',
      price: '~₹1.57 Cr*',
      baseNote: 'Base Value @ ₹10,400/sq.ft',
      popular: true,
      features: [
        'Ideal for 4 BHK Luxury Duplex Villa',
        'Park Facing & Corner plots available',
        'Spacious private lawn & dual parking',
        'SBI & HDFC Bank loan pre-approved',
      ],
    },
    {
      size: '1,744',
      sub: 'sq. ft. (~193.77 sq.yd / ~162 sqm)',
      price: '~₹1.81 Cr*',
      baseNote: 'Base Value @ ₹10,400/sq.ft',
      popular: false,
      features: [
        'Signature 5 BHK Villa with Private Pool',
        'Extra-wide front road frontage',
        'Terrace garden & staff quarters layout',
        'Instant registration & mutation',
      ],
    },
    {
      size: '2,152+',
      sub: 'sq. ft. (~239+ sq.yd / ~200+ sqm)',
      price: '~₹2.24 Cr*',
      baseNote: 'Base Value @ ₹10,400/sq.ft',
      popular: false,
      features: [
        'Palatial Grand Estate for Multi-Gen',
        'Prime corner location overlooking park',
        'Custom architectural blueprint support',
        'Highest investment appreciation rate',
      ],
    },
  ];

  const handleEnquire = (size: string, price: string) => {
    if (onSelectPlot) {
      onSelectPlot(`${size} sq.ft Villa`, size, price);
    } else {
      const contactSec = document.getElementById('contact');
      if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 px-4 bg-[#0e131a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-400 mb-2">
            Transparent Value & Investment
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Pricing <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">Details</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Freehold residential plots in Sushant Golf City, Lucknow. Zero encumbrance with immediate construction permission.
          </p>
        </div>

        {/* Central Rate Banner */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-4 px-10 py-5 rounded-full border-2 border-amber-400 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-amber-500/20">
            <IndianRupee className="w-8 h-8 text-amber-400" />
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-300">₹10,400</span>
              <span className="text-sm sm:text-base text-slate-300 ml-2">/ sq. ft. + PLC & applicable charges</span>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plotPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'border-amber-400 bg-gradient-to-b from-slate-900/90 to-[#121924] shadow-2xl shadow-amber-500/20 lg:-translate-y-3'
                  : 'border-amber-500/20 bg-slate-900/60 backdrop-blur-md hover:border-amber-400/50 hover:-translate-y-1'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 text-[10px] font-black uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <div className="font-serif text-4xl font-extrabold text-white mb-1">
                  {plan.size}
                </div>
                <div className="text-xs text-slate-400 mb-6">
                  {plan.sub}
                </div>

                <div className="font-serif text-2xl font-bold text-amber-400 mb-1">
                  {plan.price}
                </div>
                <div className="text-[11px] text-slate-400 mb-6 pb-4 border-b border-white/5">
                  {plan.baseNote}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleEnquire(plan.size, plan.price)}
                className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 hover:scale-105'
                    : 'border border-amber-500/30 text-amber-300 hover:bg-amber-500/10'
                }`}
              >
                <span>Enquire This Size</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 max-w-xl mx-auto">
          *Approximate base price calculations. Actual final figures vary depending on specific Corner / Park-facing PLC, registry stamp duty, and connection deposits.
        </p>
      </div>
    </section>
  );
};
