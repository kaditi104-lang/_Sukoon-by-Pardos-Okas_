import React, { useState } from 'react';
import { Download, Check, Eye } from 'lucide-react';

export const MasterPlan: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const hotspots = [
    { id: '1', top: '75%', left: '32%', label: 'Grand Entrance Gatehouse & Water Fountain' },
    { id: '2', top: '50%', left: '54%', label: 'Central Botanical Park & Amphitheatre' },
    { id: '3', top: '40%', left: '63%', label: 'Outdoor Sports & Badminton Court' },
    { id: '4', top: '36%', left: '56%', label: 'Wooden Pergola Gardens & Seating' },
    { id: '5', top: '58%', left: '78%', label: 'Tree-Lined Paved Boulevard (9m/12m Roads)' },
    { id: '6', top: '24%', left: '60%', label: 'Direct Access to Sushant Golf City' },
  ];

  return (
    <section id="masterplan" className="py-24 px-4 bg-[#0a0d12] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-400 mb-2">
            Architectural Masterplan
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Crafted for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">Tranquil Living</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            11.5 acres of masterplanned plotted enclave featuring 192 vastu-compliant residential plots, expansive botanical greens, and wide arterial roads.
          </p>
        </div>

        <div className="rounded-3xl border border-amber-500/30 bg-slate-900/60 overflow-hidden shadow-2xl">
          {/* Masterplan Visual with Hotspots */}
          <div className="relative aspect-video w-full bg-black overflow-hidden group">
            <img
              src="/assets/images/masterplan-3d.jpg"
              alt="Sukoon 3D Master Plan Rendering"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Hotspots */}
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                style={{ top: spot.top, left: spot.left }}
                onClick={() => setActiveHotspot(activeHotspot === spot.label ? null : spot.label)}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group/spot"
              >
                <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shadow-lg shadow-amber-400/50 animate-pulse hover:scale-125 transition-transform">
                  {spot.id}
                </div>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-slate-950/95 border border-amber-400/60 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover/spot:opacity-100 transition-opacity pointer-events-none shadow-xl">
                  {spot.label}
                </div>
              </div>
            ))}
          </div>

          {/* Active Hotspot Alert Banner */}
          {activeHotspot && (
            <div className="p-3 bg-amber-500/20 border-t border-amber-500/30 text-amber-200 text-center text-xs font-bold uppercase tracking-wider">
              Selected Landmark: {activeHotspot}
            </div>
          )}

          {/* Legend Grid */}
          <div className="p-6 md:p-8 bg-[#111620] border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hotspots.map((item) => (
              <div key={item.id} className="flex items-center gap-3 text-xs md:text-sm text-slate-300">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center shrink-0">
                  {item.id}
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="p-6 md:p-8 bg-slate-950/80 border-t border-amber-500/20 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                Official Sanctioned Layout Map
              </h4>
              <p className="text-xs text-slate-400">
                Authorized architectural map certified by the competent development authority.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/assets/documents/Approved_Map.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 hover:scale-105 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Approved Map PDF</span>
              </a>
              <a
                href="#plots-directory"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-500/30 bg-slate-900/60 text-amber-200 hover:bg-amber-500/10 transition-all"
              >
                <Eye className="w-4 h-4" />
                <span>Check Available Plots</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
