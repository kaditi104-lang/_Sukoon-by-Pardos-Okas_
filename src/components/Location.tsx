import React from 'react';
import { Hospital, ShoppingBag, Laptop, Trophy, GraduationCap, Plane, MapPin, ExternalLink } from 'lucide-react';

export const Location: React.FC = () => {
  const landmarks = [
    { icon: Hospital, name: 'Medanta Super-Specialty Hospital', time: '3 Mins (~2.1 km)' },
    { icon: ShoppingBag, name: 'Lulu Mall Lucknow (UP’s Largest Mall)', time: '5 Mins (~3.4 km)' },
    { icon: Laptop, name: 'HCL IT City & SEZ Tech Hub', time: '4 Mins (~2.8 km)' },
    { icon: Trophy, name: 'Ekana Stadium & Phoenix Palassio', time: '6 Mins (~4.5 km)' },
    { icon: GraduationCap, name: 'GD Goenka & Delhi Public School (DPS)', time: '5 - 7 Mins' },
    { icon: Plane, name: 'CCS International Airport', time: '18 Mins via Shaheed Path' },
  ];

  return (
    <section id="location" className="py-24 px-4 bg-[#0e131a] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-400 mb-2">
            Unbeatable Location
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">Connectivity</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Located in Sector H, Sushant Golf City, Lucknow. Enjoy unmatched access to health, entertainment, business, and transit corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Landmark List */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-slate-900/80 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Sector H, Opp. Celebrity Meadows
                  </h4>
                  <p className="text-xs text-slate-300">
                    Adjacent to Sector A4, Sushant Golf City, Sultanpur Road / Shaheed Path, Lucknow
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {landmarks.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-amber-500/20 bg-slate-900/60 backdrop-blur-md flex items-center justify-between hover:border-amber-400/50 hover:translate-x-1 transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-300 shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">{item.name}</span>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 shrink-0">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Map */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-amber-500/30 bg-slate-900/80 shadow-2xl p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14247.90562372579!2d80.98822369999999!3d26.7766341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3a123456789%3A0xabcdef0123456789!2sSushant%20Golf%20City%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Sukoon Sushant Golf City Map"
              className="rounded-2xl"
            />
            <div className="flex items-center justify-between mt-4 px-2">
              <span className="text-xs text-slate-400">Sector H, Sushant Golf City, Lucknow</span>
              <a
                href="https://maps.google.com/?q=Sushant+Golf+City+Lucknow"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
