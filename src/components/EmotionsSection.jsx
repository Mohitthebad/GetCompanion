import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EmotionsSection({ onSelectTopic }) {
  const [selectedEmotion, setSelectedEmotion] = useState(0);

  const emotions = [
    {
      id: 'heartache',
      iconName: 'favorite',
      pill: 'Heartache & Silent Goodbyes',
      subtitle: 'Dil Ka Dard',
      headline: '"Aisa lagta hai jaise heart me ek heavy stone rakha ho."',
      description: 'Silent breakup ya purani yaadein? Bina kisi judgment ke apna boojh halka karo.',
      quote: '"Ek baatchat se boojh kam hone lagta hai."',
      listener: 'Ananya S.',
      listenerRole: 'Heartache Support Listener',
      avatar: 'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?auto=format&fit=crop&w=150&q=80',
      accentGradient: 'from-rose-500 via-pink-500 to-rose-600',
      bgGlow: 'bg-rose-500/10'
    },
    {
      id: 'loneliness',
      iconName: 'public',
      pill: 'Surrounded, Yet Alone',
      subtitle: 'Akelepan Ka Ehsaas',
      headline: '"Sab aas-paas hain, par koi samajhta nahi."',
      description: 'Bheed me bhi akele feel ho raha hai? Connect karo kisi aise se jo sach me dhyan se sune.',
      quote: '"Yahan aakar lagta hai ki koi sach me sun raha hai."',
      listener: 'Arjun M.',
      listenerRole: 'Loneliness Companion',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
      accentGradient: 'from-blue-500 via-indigo-500 to-blue-600',
      bgGlow: 'bg-blue-500/10'
    },
    {
      id: 'emotional-vent',
      iconName: 'spa',
      pill: 'Holding Back Tears',
      subtitle: 'Daba Hua Shor',
      headline: '"Kuch batein kisi ko nahi batayi ja sakti."',
      description: 'Jo kehne me dar lagta hai—yahan 100% anonymous & safe hokar vent out kar do.',
      quote: '"Keh dene ke baad saans aati hai."',
      listener: 'Meera K.',
      listenerRole: 'Gentle Vent Listener',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      accentGradient: 'from-amber-500 via-orange-500 to-amber-600',
      bgGlow: 'bg-amber-500/10'
    }
  ];

  const current = emotions[selectedEmotion];

  return (
    <section id="emotions" className="py-16 px-6 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-xs font-extrabold uppercase tracking-widest mb-3">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
          Step 1: Start With Emotions
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Jo dil me daba hai,{' '}
          <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
            aaj sab nikalne do.
          </span>
        </h2>
        <p className="mt-2 text-base text-slate-600 font-medium max-w-xl mx-auto">
          Tap an emotion to feel instant validation.
        </p>
      </div>

      {/* Interactive Emotion Pills Selector Bar */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10 max-w-4xl mx-auto reveal">
        {emotions.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setSelectedEmotion(idx)}
            className={`px-6 py-3 rounded-full text-sm font-extrabold transition-all duration-300 flex items-center gap-2 ${
              selectedEmotion === idx
                ? 'bg-slate-900 text-white shadow-xl scale-105 ring-4 ring-rose-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
            }`}
          >
            <span className="material-symbols-outlined text-lg">{item.iconName}</span>
            <span>{item.pill}</span>
          </button>
        ))}
      </div>

      {/* Dynamic Interactive Focus Sanctuary (Replaces Static Grid Cards) */}
      <div className="max-w-5xl mx-auto reveal">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden"
          >
            {/* Ambient Background Blur Glow */}
            <div className={`absolute top-0 right-0 w-80 h-80 ${current.bgGlow} rounded-full blur-3xl pointer-events-none`}></div>

            {/* Left Content Area */}
            <div className="lg:col-span-7 relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-rose-500 mb-2 block">
                {current.subtitle}
              </span>
              
              <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                {current.headline}
              </h3>

              <p className="text-slate-600 font-medium text-base md:text-lg leading-relaxed mb-6">
                {current.description}
              </p>

              {/* Action Button */}
              <button
                onClick={() => onSelectTopic(current.id)}
                className={`bg-gradient-to-r ${current.accentGradient} text-white font-black text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2`}
              >
                <span>Iss Feeling Ke Bare Me Baat Karo</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>

            {/* Right Side: Live Listener Sanctuary Pod */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200/80 relative z-10 flex flex-col justify-between h-full">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={current.avatar}
                  alt={current.listener}
                  className="w-14 h-14 rounded-full object-cover border-2 border-rose-400 shadow-md"
                />
                <div>
                  <h4 className="font-black text-slate-900 text-base">{current.listener}</h4>
                  <p className="text-xs font-bold text-rose-600">{current.listenerRole}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-600 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Online & Ready To Listen
                  </span>
                </div>
              </div>

              <blockquote className="italic text-slate-700 text-sm leading-relaxed bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs mb-4">
                {current.quote}
              </blockquote>

              <div className="flex items-center justify-between text-xs font-bold text-slate-500 pt-2 border-t border-slate-200/60">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-rose-500">lock</span>
                  100% Confidential
                </span>
                <span className="text-rose-600 font-extrabold">Free 1st Session</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
