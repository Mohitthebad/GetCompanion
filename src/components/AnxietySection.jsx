import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AnxietySection({ onSelectTopic }) {
  const [activeTrigger, setActiveTrigger] = useState(0);

  const triggers = [
    {
      id: 'late-night',
      label: '🌙 2 AM Overthinking',
      title: 'Late Night Racing Thoughts',
      subtitle: 'Duniya so rahi hai par dimaag me shor hai',
      desc: 'Purani yaadein replay ho rahi hain? Ek listener aapke sath 2 AM awake hai.',
      badge: '2 AM Support',
      freq: 'High Noise',
      waveColor: 'text-amber-400',
      bgTag: 'bg-amber-500/20 text-amber-300 border-amber-500/40'
    },
    {
      id: 'racing-thoughts',
      label: '🧠 Racing Mind',
      title: 'Mental Overwhelm & Anxiety',
      subtitle: 'Hazar sawal ek sath dimaag me chal rahe hain',
      desc: 'Dimaag ka shor kam karte hain, ek calm breath ke sath.',
      badge: 'Panic Relief',
      freq: 'Medium Noise',
      waveColor: 'text-indigo-400',
      bgTag: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
    },
    {
      id: 'life-transitions',
      label: '🧭 Future Tension',
      title: 'Uncertainty & Life Shift Fear',
      subtitle: 'Jobs, relationships ya future ka dar',
      desc: 'Future ki worry untangle karo listener ke saath.',
      badge: 'Future Relief',
      freq: 'Slowing Down',
      waveColor: 'text-sky-400',
      bgTag: 'bg-sky-500/20 text-sky-300 border-sky-500/40'
    }
  ];

  const current = triggers[activeTrigger];

  return (
    <section id="anxiety" className="py-16 px-6 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs font-extrabold uppercase tracking-widest mb-3">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
          Step 2: Overthinking Calm Karo
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Racing anxiety ko untangle karo.
        </h2>
        <p className="mt-2 text-base text-slate-600 font-medium max-w-xl mx-auto">
          Choose an anxiety trigger to calm your mind.
        </p>
      </div>

      {/* Interactive Trigger Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10 max-w-4xl mx-auto reveal">
        {triggers.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setActiveTrigger(idx)}
            className={`px-6 py-3 rounded-full text-sm font-extrabold transition-all duration-300 flex items-center gap-2 ${
              activeTrigger === idx
                ? 'bg-indigo-600 text-white shadow-xl scale-105 ring-4 ring-indigo-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
            }`}
          >
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Main Interactive Overthinking Console (Replaces Grid Cards) */}
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-indigo-900/50 reveal">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10"
          >
            {/* Left Console Content */}
            <div className="lg:col-span-7">
              <span className={`inline-flex items-center gap-2 text-xs font-black px-3 py-1 rounded-full border mb-4 ${current.bgTag}`}>
                <span className="material-symbols-outlined text-sm">graphic_eq</span>
                <span>{current.badge} • {current.freq}</span>
              </span>

              <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
                {current.title}
              </h3>
              
              <p className="text-indigo-200 font-bold text-sm uppercase tracking-wider mb-4">
                {current.subtitle}
              </p>

              <p className="text-slate-300 text-base leading-relaxed mb-8 font-medium">
                {current.desc}
              </p>

              <button
                onClick={() => onSelectTopic(current.id)}
                className="bg-indigo-500 hover:bg-indigo-400 text-white font-extrabold text-sm px-8 py-4 rounded-full shadow-lg shadow-indigo-500/25 transition-all active:scale-95 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">graphic_eq</span>
                <span>Iss Anxiety Ko Calm Karo Now</span>
              </button>
            </div>

            {/* Right Side: Interactive Mind De-escalation Wave Regulator */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-between h-full gap-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold text-slate-300">Live Sound Wave Frequency</span>
                  <span className="text-xs font-extrabold text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Listener Online
                  </span>
                </div>

                {/* Animated Equalizer Waves */}
                <div className="flex items-center justify-center gap-1.5 h-20 bg-slate-950/60 rounded-xl p-4 border border-white/5">
                  <span className="w-1.5 bg-indigo-400 h-full animate-bounce rounded-full" style={{ animationDuration: '0.6s' }}></span>
                  <span className="w-1.5 bg-indigo-500 h-2/3 animate-bounce rounded-full" style={{ animationDuration: '0.8s' }}></span>
                  <span className="w-1.5 bg-rose-400 h-4/5 animate-bounce rounded-full" style={{ animationDuration: '0.5s' }}></span>
                  <span className="w-1.5 bg-amber-400 h-1/2 animate-bounce rounded-full" style={{ animationDuration: '0.9s' }}></span>
                  <span className="w-1.5 bg-emerald-400 h-full animate-bounce rounded-full" style={{ animationDuration: '0.7s' }}></span>
                  <span className="w-1.5 bg-indigo-400 h-3/4 animate-bounce rounded-full" style={{ animationDuration: '0.4s' }}></span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 bg-white/10 rounded-xl text-indigo-200 flex items-start gap-2">
                  <span className="material-symbols-outlined text-sm text-amber-400">warning</span>
                  <span><strong>Mind State:</strong> Thoughts spiraling rapidly.</span>
                </div>
                <div className="p-3 bg-emerald-500/20 border border-emerald-400/30 rounded-xl text-white flex items-start gap-2">
                  <span className="material-symbols-outlined text-sm text-emerald-400">check_circle</span>
                  <span><strong>Outcome:</strong> 10 mins me breathing normal, racing thoughts quiet down.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
