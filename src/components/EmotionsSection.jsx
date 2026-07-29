import React from 'react';
import { motion } from 'framer-motion';

export default function EmotionsSection({ onSelectTopic }) {
  const emotions = [
    {
      id: 'heartache',
      tag: 'Stage 1 • Dil Ka Dard',
      title: 'Heartache & Silent Goodbyes',
      subtitle: 'Jab kisi ki yaad bohot heavy lagti hai',
      description: 'Chahe unke texts miss kar rahe ho, silent breakup process karna ho, ya bas koi sunne wala chahiye jo keh sake—"Aapka dil zaroor heal hoga."',
      icon: 'favorite',
      accentColor: 'from-rose-500 to-pink-500',
      badgeBg: 'bg-rose-50 border-rose-200 text-rose-600',
      pill: 'Heavy Heart'
    },
    {
      id: 'loneliness',
      tag: 'Stage 1 • Akelepan Ka Ehsaas',
      title: 'Surrounded, Yet Feeling Alone',
      subtitle: 'Jab sab ke beech hokar bhi akele lagta hai',
      description: 'Bheed me ho par lagta hai koi samajhta nahi. Connect karo ek caring listener se jo sach me pooche—"Aaj aapka din kaisa raha?"',
      icon: 'public',
      accentColor: 'from-blue-500 to-indigo-500',
      badgeBg: 'bg-blue-50 border-blue-200 text-blue-600',
      pill: 'Deep Loneliness'
    },
    {
      id: 'emotional-vent',
      tag: 'Stage 1 • Daba Hua Shor',
      title: 'Holding Back Tears & Unsaid Words',
      subtitle: 'Bina kisi judgment ke khulkar keh do',
      description: 'Wo batein jo aap doston, family ya office me nahi share kar sakte. Yahan aakar bina kisi dar ke apna dil halka karo.',
      icon: 'spa',
      accentColor: 'from-amber-500 to-orange-500',
      badgeBg: 'bg-amber-50 border-amber-200 text-amber-600',
      pill: 'Bottled Feelings'
    }
  ];

  return (
    <section id="emotions" className="py-20 px-6 max-w-7xl mx-auto relative">
      {/* Step Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-xs font-extrabold uppercase tracking-widest mb-4">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
          Step 1: Pehle Apni Emotions Keh Do
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Jo dil me daba ke rakha hai, pehle use bahar nikalne do.
        </h2>
        <p className="mt-4 text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          Pehle kisi cheez ko fix karne ki zaroorat nahi hai. Aapki feelings valid hain. 
          No clinical judgment, no toxic positivity—bas khulkar dil ki baat.
        </p>
      </div>

      {/* Grid of Clean Emotion Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
        {emotions.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            onClick={() => onSelectTopic(item.id)}
            className="group relative bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-rose-300 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            {/* Soft background glow on hover */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-rose-100 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.accentColor} text-white shadow-md shadow-rose-500/10`}>
                  <span className="material-symbols-outlined text-2xl block">{item.icon}</span>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${item.badgeBg}`}>
                  {item.pill}
                </span>
              </div>

              {/* Card Content */}
              <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-rose-600 transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-4">
                {item.subtitle}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                {item.description}
              </p>
            </div>

            {/* Action Footer */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-rose-600 text-sm font-bold">
              <span>Is feeling ke bare me baat karo</span>
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
