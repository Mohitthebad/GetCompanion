import React from 'react';
import { motion } from 'framer-motion';

export default function AnxietySection({ onSelectTopic }) {
  const anxietyTriggers = [
    {
      id: 'late-night',
      title: 'Late Night Overthinking (2 AM)',
      subtitle: 'Jab duniya so rahi ho par dimaag me shor ho',
      desc: 'Purani batein replay ho rahi hain ya kal ki tension sata rahi hai? Ek caring human listener aapke sath awake hai.',
      icon: 'bedtime',
      tag: '2 AM Thoughts',
      color: 'amber'
    },
    {
      id: 'racing-thoughts',
      title: 'Racing Mind & Anxiety',
      subtitle: 'Jab hazar sawal ek sath dimaag me chalte hain',
      desc: 'Anxiety jab focus karna namumkin bana de, tab hum saath milkar dimaag ka shor kam karte hain, step by step.',
      icon: 'psychology',
      tag: 'Mental Overwhelm',
      color: 'indigo'
    },
    {
      id: 'life-transitions',
      title: 'Future Ki Tension & Uncertainty',
      subtitle: 'Jobs, relationships ya life shifts ka dar',
      desc: 'Aane wale kal ka dar ya heavy heart? Apni worry kisi aise ke sath share karo jo bina judgment ke dhyan se sune.',
      icon: 'explore',
      tag: 'Future Worry',
      color: 'sky'
    }
  ];

  return (
    <section id="anxiety" className="py-20 px-6 max-w-7xl mx-auto relative">
      {/* Step Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs font-extrabold uppercase tracking-widest mb-4">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
          Step 2: Dimaag Ki Overthinking Calm Karo
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Next, apni racing anxiety ko untangle karo.
        </h2>
        <p className="mt-4 text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          Jab aapki feelings express ho jati hain, tab overthinking halki hone lagti hai. 
          Aaiye dimaag ke iss shor ko calm karte hain.
        </p>
      </div>

      {/* Main Interactive Anxiety De-escalation Feature Banner */}
      <div className="mb-12 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-indigo-900/50 reveal">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7">
            <span className="text-indigo-400 font-extrabold text-xs uppercase tracking-widest block mb-2">
              Anxiety Relief Strategy
            </span>
            <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-4">
              "Mera dimaag off nahi ho raha, aur samajh nahi aa raha kya karoon."
            </h3>
            <p className="text-slate-300 text-base leading-relaxed mb-6 font-medium">
              Raat ke 2 baje poori life fix karne ki zaroorat nahi hai. Bas ek grounding conversation chahiye taaki dimaag shaant ho sake.
            </p>
            <button
              onClick={() => onSelectTopic('late-night')}
              className="bg-indigo-500 hover:bg-indigo-400 text-white font-extrabold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-indigo-500/25 transition-all active:scale-95 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">graphic_eq</span>
              <span>Meri Overthinking Calm Karo</span>
            </button>
          </div>

          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-300">Live Anxiety De-escalation</span>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white/10 rounded-xl p-3 text-xs text-indigo-200 flex items-start gap-2">
                <span className="material-symbols-outlined text-sm text-indigo-400">forum</span>
                <span><strong>Pehle:</strong> "Bohot tension lag rahi hai, neend nahi aa rahi."</span>
              </div>
              <div className="bg-indigo-500/20 border border-indigo-400/30 rounded-xl p-3 text-xs text-white flex items-start gap-2">
                <span className="material-symbols-outlined text-sm text-emerald-400">check_circle</span>
                <span><strong>10 Mins Baad:</strong> Breathing normal, heavy thoughts gone, quiet mind.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Anxiety Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
        {anxietyTriggers.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            onClick={() => onSelectTopic(item.id)}
            className="group relative bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-indigo-300 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                  <span className="material-symbols-outlined text-2xl block">{item.icon}</span>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-4">
                {item.subtitle}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-indigo-600 text-sm font-bold">
              <span>Iss anxiety ko shaant karo</span>
              <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
