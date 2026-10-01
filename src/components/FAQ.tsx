import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the current official price rate of plots at Sukoon?',
      a: 'The revised rate for Sukoon is ₹10,400 / sq. ft. (+ PLC and statutory development charges). Plot sizes start from ~1,378 sq.ft. (153.11 sq.yd) priced around ~₹1.43 Cr* base value up to 2,152+ sq.ft. palatial plots.',
    },
    {
      q: 'Is the project legally approved by LDA and RERA registered?',
      a: 'Yes, absolutely. The project is 100% sanctioned by the Lucknow Development Authority (LDA) with clear freehold titles. It is registered with UP RERA under Registration No. UPRERAPRJ642597/02/2026. Completion certificates (CC) have also been received.',
    },
    {
      q: 'Can I begin villa construction immediately after purchase?',
      a: 'Yes! Sukoon is Ready for Immediate Possession. Paved roads, electricity lines, pressurized water connections, and sewage lines are already active. You can register your deed, obtain instant mutation, and commence construction immediately.',
    },
    {
      q: 'Are home and plot loans available from major banks?',
      a: 'Yes. Due to complete LDA sanction and clear documentation, Sukoon is pre-approved for residential plot loans by leading financial institutions including State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, and Bank of Baroda with up to 75-80% loan assistance.',
    },
    {
      q: 'What plot sizes and configurations are available?',
      a: 'Sukoon offers 192 plots across various configurations: ~128 sq.m (1,378 sq.ft), ~140 sq.m (1,508 sq.ft), ~160 sq.m (1,744 sq.ft), ~172 sq.m, and palatial plots exceeding 200 sq.m (2,152+ sq.ft). Corner and park-facing plots are also available on request.',
    },
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-[#0a0d12] relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-400 mb-2">
            Clarified Answers
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">Questions</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6" />
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border transition-all overflow-hidden ${
                openIdx === idx
                  ? 'border-amber-400/80 bg-slate-900/90 shadow-xl'
                  : 'border-white/10 bg-slate-900/50 hover:border-amber-500/30'
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-400 shrink-0 transition-transform ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
