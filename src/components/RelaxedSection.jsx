import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RelaxedSection({ onSelectTopic, onOpenChat }) {
  const [activeOutcome, setActiveOutcome] = useState(0);
  const [activeAmbience, setActiveAmbience] = useState('rain');

  const ambiences = [
    { id: 'rain', label: '🌧️ Gentle Rain', text: 'Soft raindrops calming the mind...' },
    { id: 'waves', label: '🌊 Ocean Waves', text: 'Rhythmic waves washing away stress...' },
    { id: 'breeze', label: '🍃 Night Breeze', text: 'Peaceful midnight breeze soothing thoughts...' }
  ];

  const outcomes = [
    {
      id: 'sleep',
      pill: '🌙 Sukoon Ki Neend',
      title: 'Peaceful Sleep & Quiet Mind',
      subtitle: 'Tension free hokar so jao',
      desc: 'No more tossing and turning. Gentle human presence ke sath apna din khatam karo.',
      stat: '98% Sleep Quality Improved',
      icon: 'bedtime',
      gradient: 'from-emerald-600 via-teal-700 to-slate-900'
    },
    {
      id: 'clarity',
      pill: '🧘 Emotional Balance',
      title: 'Clarity & Inner Quietness',
      subtitle: 'Naye nazariye se dekho',
      desc: 'Dimaag ka spiral rukega aur clarity milegi.',
      stat: '100% Judgment Free',
      icon: 'self_improvement',
      gradient: 'from-teal-600 via-emerald-800 to-slate-900'
    },
    {
      id: 'warmth',
      pill: '☀️ Warmth & Relief',
      title: 'Dil Me Warmth & Relief',
      subtitle: 'Aap akelay nahi hain',
      desc: 'Har conversation ke baad lighter & safe feel karoge.',
      stat: 'Instant Relief',
      icon: 'wb_sunny',
      gradient: 'from-emerald-700 via-teal-800 to-slate-900'
    }
  ];

  const current = outcomes[activeOutcome];

  return (
    <section id="relaxed" className="py-16 px-6 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold uppercase tracking-widest mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Step 3: At Peace Feel Karo
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Deep calm aur sukoon paayein.
        </h2>
        <p className="mt-2 text-base text-slate-600 font-medium max-w-xl mx-auto">
          Experience serene transformation and calm soundscapes.
        </p>
      </div>

      {/* Interactive Outcome Selector Bar */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10 max-w-4xl mx-auto reveal">
        {outcomes.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setActiveOutcome(idx)}
            className={`px-6 py-3 rounded-full text-sm font-extrabold transition-all duration-300 flex items-center gap-2 ${
              activeOutcome === idx
                ? 'bg-emerald-700 text-white shadow-xl scale-105 ring-4 ring-emerald-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
            }`}
          >
            <span>{item.pill}</span>
          </button>
        ))}
      </div>

      {/* Interactive Serene Peace Pod */}
      <div className="max-w-5xl mx-auto reveal mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className={`bg-gradient-to-br ${current.gradient} rounded-3xl p-8 md:p-12 text-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden border border-emerald-500/20`}
          >
            {/* Left Content Column */}
            <div className="lg:col-span-7 relative z-10">
              <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md w-fit mb-4 shadow-md">
                <span className="material-symbols-outlined text-3xl block text-white">{current.icon}</span>
              </div>

              <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
                {current.title}
              </h3>
              
              <p className="text-emerald-300 font-bold text-sm uppercase tracking-wider mb-4">
                {current.subtitle}
              </p>

              <p className="text-emerald-100 text-base md:text-lg leading-relaxed mb-6 font-medium">
                {current.desc}
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 backdrop-blur-md text-xs font-black text-white border border-white/20 mb-6">
                <span className="material-symbols-outlined text-sm text-amber-300">verified</span>
                <span>{current.stat}</span>
              </div>
            </div>

            {/* Right Side: Creative Interactive Soundscape & Ambience Sanctuary Player (Replaces Old Circle) */}
            <div className="lg:col-span-5 bg-slate-950/70 backdrop-blur-xl rounded-2xl p-6 border border-white/10 flex flex-col justify-between gap-6 shadow-inner relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Calm Ambience Simulator
                </span>
                <span className="text-[10px] font-bold text-slate-400 bg-white/10 px-2 py-0.5 rounded-full">
                  Live Soundwave
                </span>
              </div>

              {/* Animated Glowing Sound Frequency Waves */}
              <div className="flex items-center justify-center gap-2 h-24 bg-black/40 rounded-xl p-4 border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/20 to-emerald-500/10 animate-pulse pointer-events-none"></div>
                <span className="w-1.5 bg-emerald-400 h-full animate-bounce rounded-full shadow-xs" style={{ animationDuration: '0.9s' }}></span>
                <span className="w-1.5 bg-teal-300 h-3/4 animate-bounce rounded-full shadow-xs" style={{ animationDuration: '0.6s' }}></span>
                <span className="w-1.5 bg-emerald-300 h-full animate-bounce rounded-full shadow-xs" style={{ animationDuration: '1.1s' }}></span>
                <span className="w-1.5 bg-emerald-500 h-1/2 animate-bounce rounded-full shadow-xs" style={{ animationDuration: '0.7s' }}></span>
                <span className="w-1.5 bg-teal-400 h-4/5 animate-bounce rounded-full shadow-xs" style={{ animationDuration: '0.5s' }}></span>
                <span className="w-1.5 bg-emerald-400 h-2/3 animate-bounce rounded-full shadow-xs" style={{ animationDuration: '0.8s' }}></span>
              </div>

              {/* Interactive Ambience Selector Pills */}
              <div className="space-y-2">
                <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                  Select Calming Background Sound:
                </p>
                <div className="grid grid-cols-3 gap-1.5">
                  {ambiences.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => setActiveAmbience(a.id)}
                      className={`py-2 px-2 rounded-xl text-[11px] font-black transition-all active:scale-95 border ${
                        activeAmbience === a.id
                          ? 'bg-emerald-500 text-white border-emerald-400 shadow-md'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10 border-white/10'
                      }`}
                    >
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Message */}
              <p className="text-xs italic text-emerald-200 text-center font-medium">
                "{ambiences.find(a => a.id === activeAmbience)?.text}"
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* High-Impact CTA Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl reveal border border-slate-800">
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-rose-400 font-extrabold text-xs uppercase tracking-widest block mb-3">
            Ready To Experience Sukoon?
          </span>
          <h3 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            Aapko yeh sab akele sehne ki zaroorat nahi hai.
          </h3>
          <p className="text-slate-300 text-base mb-8 font-medium leading-relaxed">
            Connect with a compassionate listener right now. Express emotions, calm your anxiety, and end up completely relaxed.
          </p>
          <button
            onClick={onOpenChat}
            className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-black text-sm px-9 py-4 rounded-full shadow-xl transition-all active:scale-95 inline-flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-xl">volunteer_activism</span>
            <span>60 Seconds Me Listener Se Match Hoto</span>
          </button>
        </div>
      </div>
    </section>
  );
}
