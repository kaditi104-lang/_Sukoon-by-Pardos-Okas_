import React from 'react';
import { Palmtree, Mic, Activity, Dumbbell, Baby, Flower2, Footprints, Armchair } from 'lucide-react';

export const Amenities: React.FC = () => {
  const amenityItems = [
    { icon: Palmtree, name: 'Central Green Lawn', sub: 'Expansive open grass for celebrations' },
    { icon: Mic, name: 'Open Air Amphitheatre', sub: 'Cultural events & open-sky gatherings' },
    { icon: Activity, name: 'Regulation Badminton Court', sub: 'Dedicated outdoor sports facility' },
    { icon: Dumbbell, name: 'Outdoor Fitness Gym', sub: 'Health and wellness stations' },
    { icon: Baby, name: 'Children’s Play Area', sub: 'Safe equipment and rubberized base' },
    { icon: Flower2, name: 'Aromatic Herb Garden', sub: 'Healing botanical plants & blooms' },
    { icon: Footprints, name: 'Walking & Jogging Track', sub: 'Shaded pedestrian fitness trail' },
    { icon: Armchair, name: 'Senior Leisure Gazebo', sub: 'Peaceful shaded relaxation pavilion' },
  ];

  return (
    <section id="amenities" className="py-24 px-4 bg-[#0e131a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-400 mb-2">
            Holistic Tranquility
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">Amenities</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Immerse yourself in nature, active recreation, and restorative community spaces surrounded by open green vistas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Media Stack */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl overflow-hidden border border-amber-500/20 shadow-xl group">
              <img
                src="/assets/images/site-4-pergola.jpg"
                alt="Pergola Garden and Seating"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-slate-900/90 text-xs font-semibold text-amber-200">
                Architectural Pergola & Manicured Floral Garden
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-amber-500/20 shadow-xl group">
              <img
                src="/assets/images/site-1-park.jpg"
                alt="Central Park Area with Seating"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-slate-900/90 text-xs font-semibold text-amber-200">
                Expansive Central Park with Community Seated Pavilions
              </div>
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {amenityItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-amber-500/20 bg-slate-900/60 backdrop-blur-md flex items-center gap-4 hover:border-amber-400/50 hover:translate-x-1 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">{item.name}</h4>
                    <p className="text-xs text-slate-400">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Footer */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-white/10 px-2">
              <div>
                <div className="font-serif text-3xl font-extrabold text-amber-300">192</div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Units</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-extrabold text-amber-300">11.5</div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Pristine Acres</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-extrabold text-emerald-400">40%+</div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Green Open Area</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
