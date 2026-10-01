import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { MasterPlan } from './components/MasterPlan';
import { Pricing } from './components/Pricing';
import { Calculator } from './components/Calculator';
import { PlotDirectory } from './components/PlotDirectory';
import { Specifications } from './components/Specifications';
import { Amenities } from './components/Amenities';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingDock } from './components/FloatingDock';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedPlotNo, setSelectedPlotNo] = useState<string>('');
  const [customNotes, setCustomNotes] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('sukoon-theme') as 'dark' | 'light' | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('sukoon-theme', next);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleSelectPlot = (plotNo: string, sqft: string, est: string) => {
    setSelectedPlotNo(plotNo);
    setCustomNotes(`Enquiring about Plot ${plotNo} (${sqft} sq.ft. @ ₹10,400/sq.ft. Est: ${est}). Please share payment terms.`);
    showToast(`Plot ${plotNo} selected! Scroll to contact form.`);
    const contactSec = document.getElementById('contact');
    if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApplyEstimate = (area: number, totalFormatted: string) => {
    setSelectedPlotNo(`Custom ${area} sq.ft.`);
    setCustomNotes(`Custom Budget Plan: Calculated for ${area} sq.ft. @ ₹10,400/sq.ft. Total Est: ${totalFormatted}. Please share available plot numbers.`);
    showToast(`Custom estimation transferred to booking form!`);
    const contactSec = document.getElementById('contact');
    if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-[#fcfbf8] text-slate-800' : 'bg-[#0a0d12] text-slate-100'} transition-colors duration-300`}>
      <AnnouncementBar />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Highlights />
        <MasterPlan />
        <Pricing onSelectPlot={handleSelectPlot} />
        <Calculator onApplyEstimate={handleApplyEstimate} />
        <PlotDirectory onSelectPlot={handleSelectPlot} />
        <Specifications />
        <Amenities />
        <Gallery />
        <Location />
        <FAQ />
        <Contact initialPlotNo={selectedPlotNo} initialNotes={customNotes} />
      </main>

      <Footer />
      <FloatingDock />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 right-6 z-50 px-5 py-3 rounded-2xl border border-amber-400/60 bg-slate-900/95 backdrop-blur-xl shadow-2xl text-amber-200 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-bounce">
          <span>✨</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default App;
