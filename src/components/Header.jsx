import React, { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Header({ onOpenChat }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center group transition-transform group-hover:scale-105">
            <Logo className="h-10" />
          </a>
          <span className="hidden lg:inline-block text-xs font-bold text-slate-700 pl-3 border-l border-slate-200 max-w-[150px] leading-tight">
            Human Presence & Healing Platform
          </span>
        </div>

        <nav className="hidden xl:flex items-center gap-7">
          <a
            className="text-sm font-bold text-slate-800 hover:text-orange-600 transition-colors"
            href="#how-it-works"
          >
            How It Works
          </a>
          <a
            className="text-sm font-bold text-slate-800 hover:text-rose-600 transition-colors"
            href="#emotions"
          >
            Moments We Support
          </a>
          <a
            className="text-sm font-bold text-slate-800 hover:text-orange-600 transition-colors"
            href="#safety"
          >
            Safety & Privacy
          </a>
          <a
            className="text-sm font-bold text-slate-800 hover:text-rose-600 transition-colors"
            href="#pricing"
          >
            Plans
          </a>
          <a
            className="text-sm font-bold text-slate-800 hover:text-orange-600 transition-colors"
            href="#faq"
          >
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenChat}
            className="bg-gradient-to-r from-orange-500 to-rose-500 text-white font-black text-sm px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all active:scale-95 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-base">favorite</span>
            <span>Talk Now</span>
          </button>
        </div>
      </div>
    </header>
  );
}
