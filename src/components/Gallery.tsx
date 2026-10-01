import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [activeModalIdx, setActiveModalIdx] = useState<number | null>(null);

  const images = [
    { src: '/assets/images/site-4-pergola.jpg', title: 'Pergola & Landscaped Garden Pavilion', tag: 'Gardens & Parks', cat: 'gardens' },
    { src: '/assets/images/site-1-park.jpg', title: 'Central Park Seating & Recreation Zone', tag: 'Gardens & Parks', cat: 'gardens' },
    { src: '/assets/images/site-2-roads.jpg', title: 'Paved Internal Roads with LED Lighting', tag: 'Roads & Infrastructure', cat: 'roads' },
    { src: '/assets/images/site-3-trees.jpg', title: 'Tree-Lined Boulevards & Underground Services', tag: 'Roads & Infrastructure', cat: 'roads' },
    { src: '/assets/images/site-5-entrance.jpg', title: 'Township Entrance & High-Rise Boulevard', tag: 'Township Surroundings', cat: 'township' },
    { src: '/assets/images/site-6-avenue.jpg', title: 'Wide Internal Avenue with Play Zone', tag: 'Roads & Infrastructure', cat: 'roads' },
  ];

  const filtered = filter === 'all' ? images : images.filter((img) => img.cat === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIdx !== null) {
      setActiveModalIdx((activeModalIdx - 1 + images.length) % images.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIdx !== null) {
      setActiveModalIdx((activeModalIdx + 1) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-24 px-4 bg-[#0a0d12] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-400 mb-2">
            Authentic Site Progress
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Actual <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">Site Photos</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Witness the ground reality. Paved avenues, LED street lamps, tree plantation, and park development are fully completed.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { label: 'All Photos (6)', cat: 'all' },
            { label: 'Roads & Infrastructure', cat: 'roads' },
            { label: 'Gardens & Parks', cat: 'gardens' },
            { label: 'Township Surroundings', cat: 'township' },
          ].map((item) => (
            <button
              key={item.cat}
              onClick={() => setFilter(item.cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                filter === item.cat
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                  : 'border border-white/10 bg-slate-900/60 text-slate-300 hover:border-amber-500/40'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveModalIdx(images.indexOf(item))}
              className="rounded-3xl overflow-hidden border border-amber-500/20 bg-slate-900/60 shadow-xl relative aspect-[4/3] group cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 mb-1">
                  {item.tag}
                </span>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalIdx !== null && (
        <div
          onClick={() => setActiveModalIdx(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
        >
          <button
            onClick={() => setActiveModalIdx(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
          >
            <img
              src={images[activeModalIdx].src}
              alt={images[activeModalIdx].title}
              className="max-h-[75vh] w-auto rounded-2xl border border-amber-400/40 shadow-2xl object-contain"
            />
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                {images[activeModalIdx].tag}
              </span>
              <p className="text-white font-bold text-base mt-1">
                {images[activeModalIdx].title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
