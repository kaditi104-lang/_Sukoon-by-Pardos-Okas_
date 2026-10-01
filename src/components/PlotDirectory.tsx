import React, { useState, useMemo } from 'react';
import { Search, Download, Check, ArrowRight } from 'lucide-react';
import { PLOTS_DATA } from '../data/plotsData';
import { PlotItem } from '../types';

interface PlotDirectoryProps {
  onSelectPlot?: (plotNo: string, sqft: string, est: string) => void;
}

export const PlotDirectory: React.FC<PlotDirectoryProps> = ({ onSelectPlot }) => {
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredPlots = useMemo(() => {
    return PLOTS_DATA.filter((item) => {
      // 1. Search Query
      const q = search.trim().toLowerCase();
      const matchSearch =
        !q || item.plot.toLowerCase().includes(q) || item.sno.toString() === q;

      // 2. Category Filter
      let matchCat = true;
      const sqm = item.sqm;
      if (filterCategory === '128') {
        matchCat = sqm >= 127 && sqm <= 134;
      } else if (filterCategory === '140') {
        matchCat = sqm >= 135 && sqm <= 149;
      } else if (filterCategory === '160') {
        matchCat = sqm >= 150 && sqm <= 165;
      } else if (filterCategory === '172') {
        matchCat = sqm >= 166 && sqm <= 180;
      } else if (filterCategory === '192') {
        matchCat = sqm >= 181 && sqm <= 199;
      } else if (filterCategory === '200plus') {
        matchCat = sqm >= 200;
      }

      return matchSearch && matchCat;
    });
  }, [search, filterCategory]);

  const formatCurrency = (val: number) => {
    if (val >= 10000000) return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹ ${(val / 100000).toFixed(2)} Lakh`;
    return `₹ ${val.toLocaleString('en-IN')}`;
  };

  const handleExportCSV = () => {
    const headers = [
      'Plot No',
      'Area (Sq. Mtr)',
      'Area (Sq. Yd)',
      'Area (Sq. Ft)',
      'Rate per Sq.Ft',
      'Base Price (INR)',
      'Est. Total Price (INR)',
      'Maintenance Deposit (INR)',
    ];

    const rows = PLOTS_DATA.map((p) => [
      p.plot,
      p.sqm,
      p.sqyd,
      p.sqft,
      10400,
      p.basePrice,
      p.estimatedTotal,
      p.maintenance,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Sukoon_192_Plots_PriceList_10400.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEnquirePlot = (plot: PlotItem) => {
    if (onSelectPlot) {
      onSelectPlot(plot.plot, plot.sqft.toFixed(0), formatCurrency(plot.estimatedTotal));
    } else {
      const contactSec = document.getElementById('contact');
      if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="plots-directory" className="py-24 px-4 bg-[#0e131a] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-400 mb-2">
            Complete Inventory Directory
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">192 Plots</span> Directory
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Search, filter, and inspect every individual plot in Sukoon. Live prices recalculated at <strong>₹10,400 / sq. ft.</strong>
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="relative flex-1 min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by plot number (e.g. P-01, P-45)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-amber-500/20 bg-slate-900/80 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Chips */}
          <div className="flex items-center gap-2 flex-wrap">
            {[
              { label: 'All Sizes (192)', key: 'all' },
              { label: '~128 sq.m', key: '128' },
              { label: '~140 sq.m', key: '140' },
              { label: '~160 sq.m', key: '160' },
              { label: '~172 sq.m', key: '172' },
              { label: '~192 sq.m', key: '192' },
              { label: '200+ sq.m', key: '200plus' },
            ].map((chip) => (
              <button
                key={chip.key}
                onClick={() => setFilterCategory(chip.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filterCategory === chip.key
                    ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                    : 'border border-white/10 bg-slate-900/60 text-slate-300 hover:border-amber-500/40'
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>

          <button
            onClick={handleExportCSV}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-500/30 bg-slate-900/70 text-amber-300 hover:bg-amber-500/10 transition-all shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV Sheet</span>
          </button>
        </div>

        {/* Count Bar */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-3 px-1">
          <span>
            Showing <strong className="text-white">{filteredPlots.length}</strong> of {PLOTS_DATA.length} plots (Rate: ₹10,400 / sq. ft.)
          </span>
          <span>RERA Registered • Ready for Possession</span>
        </div>

        {/* Plots Table */}
        <div className="rounded-2xl border border-amber-500/20 bg-slate-900/60 backdrop-blur-xl overflow-hidden shadow-2xl max-h-[580px] overflow-y-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="sticky top-0 z-10 bg-[#121822] border-b border-amber-500/30 text-amber-200 uppercase text-[11px] font-bold tracking-wider">
              <tr>
                <th className="py-4 px-4 sm:px-6">Plot No.</th>
                <th className="py-4 px-4">Area (Sq. M.)</th>
                <th className="py-4 px-4">Area (Sq. Yd.)</th>
                <th className="py-4 px-4">Area (Sq. Ft.)</th>
                <th className="py-4 px-4">Base Price (@ ₹10,400)</th>
                <th className="py-4 px-4">Est. Total Price</th>
                <th className="py-4 px-4 sm:px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {filteredPlots.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-12 text-slate-400">
                    No plots found matching "{search}".
                  </td>
                </tr>
              ) : (
                filteredPlots.map((plot) => (
                  <tr key={plot.sno} className="hover:bg-amber-500/5 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-amber-300 font-serif text-sm sm:text-base">
                      {plot.plot}
                    </td>
                    <td className="py-3.5 px-4">{plot.sqm.toFixed(2)}</td>
                    <td className="py-3.5 px-4">{plot.sqyd.toFixed(2)}</td>
                    <td className="py-3.5 px-4 font-semibold text-white">
                      {plot.sqft.toFixed(1)}
                    </td>
                    <td className="py-3.5 px-4 text-amber-200 font-medium">
                      {formatCurrency(plot.basePrice)}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-white">
                      {formatCurrency(plot.estimatedTotal)}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-right">
                      <button
                        onClick={() => handleEnquirePlot(plot)}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-amber-500/40 text-amber-300 hover:bg-amber-400 hover:text-slate-950 transition-all"
                      >
                        Enquire Plot
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
