import React from 'react';
import { motion } from 'framer-motion';

export default function RelaxedSection({ onSelectTopic, onOpenChat }) {
  const calmOutcomes = [
    {
      title: 'Sukoon Ki Neend & Quiet Mind',
      subtitle: 'Tension free hokar araam se so jao',
      desc: 'Raat ko baar-baar karwatein badalna band. Apna din khatam karo gentle reassurance aur warmth ke sath.',
      icon: 'bedtime',
      color: 'emerald'
    },
    {
      title: 'Clarity & Emotional Balance',
      subtitle: 'Life ko naye nazariye se dekho',
      desc: 'Jab dimaag ka spiral rukta hai, tab answers khud-ba-khud milne lagte hain. Genuine mental peace experience karo.',
      icon: 'self_improvement',
      color: 'teal'
    },
    {
      title: 'Dil Me Warmth & Nayi Umang',
      subtitle: 'Yaad rakhein, aap akelay nahi hain',
      desc: 'Har conversation ke baad aap lighter, understood aur safe feel karenge. No more carrying heavy weight alone.',
      icon: 'wb_sunny',
      color: 'amber'
    }
  ];

  return (
    <section id="relaxed" className="py-20 px-6 max-w-7xl mx-auto relative">
      {/* Step Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold uppercase tracking-widest mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Step 3: Relaxed Aur At Peace Feel Karo
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Aakhir me, deep calm aur sukoon paayein.
        </h2>
        <p className="mt-4 text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          Yeh aapka final destination hai. Boojh halka hoga, saans aasan hogi, 
          aur aapka dil shaant aur safe feel karega.
        </p>
      </div>

      {/* Grid of Calm Outcomes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
        {calmOutcomes.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="bg-gradient-to-b from-emerald-50/60 to-white rounded-3xl p-8 border border-emerald-100/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="p-3 rounded-2xl bg-emerald-500 text-white w-fit mb-6 shadow-md shadow-emerald-500/20">
                <span className="material-symbols-outlined text-2xl block">{item.icon}</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-4">
                {item.subtitle}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-emerald-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              <span>Guaranteed Peaceful Outcome</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* High-Impact Calm Experience Card */}
      <div className="bg-emerald-900 text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl reveal">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-700/40 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-emerald-300 font-extrabold text-xs uppercase tracking-widest block mb-3">
            Kya Aap Sukoon Paana Chahte Hain?
          </span>
          <h3 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            Aapko yeh sab akele sehne ki zaroorat nahi hai.
          </h3>
          <p className="text-emerald-100 text-base mb-8 font-medium leading-relaxed">
            Abhi ek compassionate listener se connect karein. Start with your emotions, calm your anxiety, and end up completely relaxed.
          </p>
          <button
            onClick={onOpenChat}
            className="bg-white text-emerald-950 hover:bg-emerald-50 font-black text-sm px-9 py-4 rounded-full shadow-xl transition-all active:scale-95 inline-flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-xl text-emerald-600">volunteer_activism</span>
            <span>60 Seconds Me Listener Se Match Hoto</span>
          </button>
        </div>
      </div>
    </section>
  );
}
