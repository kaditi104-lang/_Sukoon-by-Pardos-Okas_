import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  initialPlotNo?: string;
  initialNotes?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialPlotNo = '', initialNotes = '' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [size, setSize] = useState('1508 sqft (~168 sqyd)');
  const [plotNo, setPlotNo] = useState(initialPlotNo);
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState(initialNotes);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPlotNo) setPlotNo(initialPlotNo);
    if (initialNotes) setNotes(initialNotes);
  }, [initialPlotNo, initialNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    let waMsg = `Hi Bandhan Realty, I am interested in *Sukoon by Pardos Okas* (Sushant Golf City, Lucknow).\n`;
    waMsg += `Name: ${name}\n`;
    waMsg += `Phone: ${phone}\n`;
    if (plotNo) waMsg += `Specific Plot: ${plotNo}\n`;
    waMsg += `Preferred Size: ${size}\n`;
    if (date) waMsg += `Visit Date: ${date}\n`;
    waMsg += `Rate: Rs. 10,400 / sq. ft.\n`;
    if (notes) waMsg += `Notes: ${notes}\n`;

    const encoded = encodeURIComponent(waMsg);
    const waUrl = `https://wa.me/919140943615?text=${encoded}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setSubmitted(false);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-[#0e131a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-400 mb-2">
            Direct Developer & Advisory Access
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Schedule Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">VIP Site Visit</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Experience Sukoon firsthand. Speak directly with Bandhan Realty advisors for personalized plot walk-throughs and priority allotment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Advisory Information Card */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl border border-amber-500/20 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between shadow-2xl">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400">
                Sole Marketing Advisory
              </span>
              <h3 className="font-serif text-3xl font-black text-white mt-1 mb-4">
                Bandhan Realty
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                Authorized advisory representative for <strong>Sukoon by Pardos Okas</strong>. Providing complete transparency, on-site guided visits, title documentation, and bank loan approvals.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="tel:9140943615"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 hover:scale-105 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call: +91 91409 43615</span>
                </a>

                <a
                  href="https://wa.me/919140943615?text=Hi%20Bandhan%20Realty%2C%20I%20am%20interested%20in%20visiting%20Sukoon%20plots%20at%20Rs.10400%2Fsqft."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs text-slate-400 space-y-1">
              <div><strong>RERA Registration:</strong> UPRERAPRJ642597/02/2026</div>
              <div><strong>Project:</strong> Sukoon by Pardos Okas, Sushant Golf City, Lucknow</div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl border border-amber-500/20 bg-slate-900/60 backdrop-blur-xl shadow-2xl">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Book a Guided Plot Walk-through
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill in your details below and our team will coordinate a private vehicle site tour.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-950/60 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Mobile Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-950/60 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Preferred Plot Size
                  </label>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-950/60 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400"
                  >
                    <option value="1378 sqft (~153 sqyd)">1,378 sq. ft. (~153 sq.yd)</option>
                    <option value="1508 sqft (~168 sqyd)">1,508 sq. ft. (~168 sq.yd)</option>
                    <option value="1744 sqft (~194 sqyd)">1,744 sq. ft. (~194 sq.yd)</option>
                    <option value="2152+ sqft (Palatial)">2,152+ sq. ft. (Palatial)</option>
                    <option value="custom">Specific Plot / Custom</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Specific Plot No. (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. P-45"
                    value={plotNo}
                    onChange={(e) => setPlotNo(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-950/60 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-950/60 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Questions / Special Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us if you require corner facing, immediate loan pre-approval, or specific orientation..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-950/60 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Connecting to WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit & Connect with Advisor</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
