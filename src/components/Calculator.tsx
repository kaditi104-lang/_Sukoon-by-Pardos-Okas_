import React, { useState } from 'react';
import { Calculator as CalcIcon, CheckCircle2 } from 'lucide-react';
import { RATE_PER_SQFT } from '../data/plotsData';

interface CalculatorProps {
  onApplyEstimate?: (area: number, totalFormatted: string) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onApplyEstimate }) => {
  const [area, setArea] = useState<number>(1508);
  const [plcFactor, setPlcFactor] = useState<number>(0);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [tenureYears, setTenureYears] = useState<number>(15);

  const sqyd = (area / 9).toFixed(1);
  const basePrice = area * RATE_PER_SQFT;
  const plcAmount = basePrice * plcFactor;
  const otherCharges = basePrice * 0.05; // 5% standard development/meter connection
  const totalPrice = basePrice + plcAmount + otherCharges;

  const downPaymentAmount = totalPrice * (downPaymentPercent / 100);
  const loanPrincipal = totalPrice - downPaymentAmount;

  // Monthly EMI: P * r * (1+r)^n / ((1+r)^n - 1)
  const annualInterest = 0.085; // 8.5%
  const monthlyRate = annualInterest / 12;
  const totalMonths = tenureYears * 12;
  const emi =
    (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const formatINR = (val: number) => {
    if (val >= 10000000) return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹ ${(val / 100000).toFixed(2)} Lakh`;
    return `₹ ${Math.round(val).toLocaleString('en-IN')}`;
  };

  const handleApply = () => {
    if (onApplyEstimate) {
      onApplyEstimate(area, formatINR(totalPrice));
    } else {
      const contactSec = document.getElementById('contact');
      if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="py-24 px-4 bg-[#0a0d12] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-400 mb-2">
            Personalized Financing Tool
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Plot Budget & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">EMI Calculator</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Calculate your acquisition budget and estimated bank EMI in real time based on the official rate of <strong>₹10,400 / sq. ft.</strong>
          </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl border border-amber-500/20 bg-slate-900/60 backdrop-blur-xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Area Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-slate-200">Plot Area:</span>
                <span className="text-base font-bold text-amber-300">
                  {area.toLocaleString()} sq. ft. <span className="text-xs text-slate-400 font-normal">(~{sqyd} sq.yd)</span>
                </span>
              </div>
              <input
                type="range"
                min="1200"
                max="3000"
                step="50"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 rounded-lg bg-slate-800 accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-2">
                <span>1,200 sq.ft. (~133 sq.yd)</span>
                <span>2,100 sq.ft. (~233 sq.yd)</span>
                <span>3,000 sq.ft. (~333 sq.yd)</span>
              </div>
            </div>

            {/* PLC Options */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-3">
                Location Preference (PLC):
              </label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {[
                  { label: 'Standard (0% PLC)', val: 0 },
                  { label: 'Corner Plot (+10%)', val: 0.1 },
                  { label: 'Park Facing (+10%)', val: 0.1 },
                  { label: 'Corner + Park (+15%)', val: 0.15 },
                ].map((item, idx) => (
                  <label
                    key={idx}
                    className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                      plcFactor === item.val
                        ? 'border-amber-400 bg-amber-500/10 text-amber-200'
                        : 'border-white/10 bg-slate-950/40 text-slate-300 hover:border-amber-500/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="plc"
                      checked={plcFactor === item.val}
                      onChange={() => setPlcFactor(item.val)}
                      className="accent-amber-400"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Down Payment Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-slate-200">Down Payment (%):</span>
                <span className="text-base font-bold text-amber-300">{downPaymentPercent}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 rounded-lg bg-slate-800 accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-2">
                <span>10% (Min Down Payment)</span>
                <span>20% (Standard)</span>
                <span>50%</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-slate-200">Loan Tenure:</span>
                <span className="text-base font-bold text-amber-300">{tenureYears} Years</span>
              </div>
              <input
                type="range"
                min="5"
                max="25"
                step="1"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 rounded-lg bg-slate-800 accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-2">
                <span>5 Years</span>
                <span>15 Years</span>
                <span>25 Years</span>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 p-8 rounded-2xl border border-amber-500/30 bg-[#121822] space-y-6 text-center">
            <div className="border-b border-white/10 pb-4">
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                Base Plot Value (@ ₹10,400/sq.ft)
              </div>
              <div className="font-serif text-2xl font-bold text-white">
                {formatINR(basePrice)}
              </div>
            </div>

            <div className="border-b border-white/10 pb-4">
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                PLC Amount
              </div>
              <div className="text-sm font-semibold text-slate-300">
                {plcAmount > 0 ? `+ ${formatINR(plcAmount)}` : 'None (Included)'}
              </div>
            </div>

            <div className="border-b border-white/10 pb-4">
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                Estimated Total Outlay
              </div>
              <div className="font-serif text-3xl font-extrabold text-amber-300">
                {formatINR(totalPrice)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-b border-white/10 pb-4 text-left">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400">Down Payment</div>
                <div className="text-sm font-bold text-slate-200 mt-1">{formatINR(downPaymentAmount)}</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400">Loan Amount</div>
                <div className="text-sm font-bold text-slate-200 mt-1">{formatINR(loanPrincipal)}</div>
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                Estimated Monthly EMI (@ 8.5% p.a.)
              </div>
              <div className="font-serif text-3xl font-black text-emerald-400">
                {formatINR(emi)} <span className="text-xs text-slate-400 font-sans">/ month</span>
              </div>
            </div>

            <button
              onClick={handleApply}
              className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 hover:scale-105 transition-all"
            >
              Transfer Estimate to Booking Form
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
