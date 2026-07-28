import React from 'react';
import { motion } from 'framer-motion';

export default function BentoGrid({ onSelectTopic }) {
  const topics = [
    {
      id: 'heartache',
      title: 'Heartache & Silent Goodbyes',
      icon: 'favorite',
      description: 'When you miss their texts, want to process why things ended, or just need a comforting voice to remind you that your heart will heal.',
      badgeColor: 'bg-pink-50 border-pink-200 text-[#D94680]',
      iconColor: 'text-[#FF8CB7]',
      btnHover: 'hover:border-[#FF8CB7]'
    },
    {
      id: 'loneliness',
      title: 'Deep Loneliness & Isolation',
      icon: 'public',
      description: 'When you are surrounded by people but feel completely invisible. Talk to someone who genuinely cares about how your day went.',
      badgeColor: 'bg-blue-50 border-blue-200 text-[#0066FF]',
      iconColor: 'text-[#0066FF]',
      btnHover: 'hover:border-[#0066FF]'
    },
    {
      id: 'late-night',
      title: 'Late Night Overthinking (2 AM)',
      icon: 'wb_sunny',
      description: 'When the world is quiet but your mind is racing with memories and anxiety. A warm listener is awake to keep you company.',
      badgeColor: 'bg-amber-50 border-amber-200 text-[#B38F00]',
      iconColor: 'text-[#FFCC00]',
      btnHover: 'hover:border-[#FFCC00]'
    },
    {
      id: 'emotional-vent',
      title: 'Silent Grief & Heavy Heart',
      icon: 'spa',
      description: 'When you are carrying tears or unsaid feelings you cannot share with friends or family. Vent freely without judgment.',
      badgeColor: 'bg-orange-50 border-orange-200 text-[#FF5500]',
      iconColor: 'text-[#FF5500]',
      btnHover: 'hover:border-[#FF5500]'
    }
  ];

  return (
    <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="mb-stack-lg reveal">
        <span className="text-[#FF5500] font-bold text-xs uppercase tracking-wider">Empathetic Support</span>
        <h2 className="font-headline-lg text-headline-lg text-black-bg font-black mt-1">
          A Safe Space for the Emotions You Keep Bottled Inside
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
        {topics.slice(0, 3).map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            onClick={() => onSelectTopic(item.id)}
            className={`tilt-card group bg-white p-8 rounded-xxl shadow-sm border border-gray-200 ${item.btnHover} cursor-pointer flex flex-col justify-between`}
          >
            <div>
              <span className={`material-symbols-outlined ${item.iconColor} text-4xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </span>
              <h3 className="font-headline-md text-headline-md mb-2 text-black-bg font-extrabold">{item.title}</h3>
              <p className="font-body-md text-gray-600 font-medium leading-relaxed">{item.description}</p>
            </div>
            <div className={`mt-6 flex items-center ${item.iconColor} font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity`}>
              <span>Talk about your heart</span>
              <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span>
            </div>
          </motion.div>
        ))}

        {/* Feature Banner using Orange & Pink palette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 bg-gradient-to-br from-black-bg via-black-card to-black-bg text-white p-8 rounded-xxl flex flex-col justify-between shadow-xl border border-black-border relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF8CB7] animate-ping"></span>
              <span className="text-[#FF8CB7] text-xs font-black uppercase tracking-wider">Human Empathy First</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-white font-extrabold">
              Whatever you are feeling right now, your pain is valid.
            </h3>
            <p className="font-body-lg text-slate-300 max-w-xl font-medium leading-relaxed">
              No clinical diagnosis, no textbook advice, no toxic positivity. Just warm human presence, active listening, and genuine emotional validation.
            </p>
          </div>
          <button
            onClick={() => onSelectTopic('heartache')}
            className="btn-glow relative z-10 bg-[#FF5500] text-white font-black text-sm px-8 py-3.5 rounded-full mt-stack-md transition-all active:scale-95 shadow-lg shadow-orange-500/20 w-fit flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">favorite</span>
            <span>Talk to Someone Who Cares</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={() => onSelectTopic(topics[3].id)}
          className={`tilt-card group bg-white p-8 rounded-xxl shadow-sm border border-gray-200 ${topics[3].btnHover} cursor-pointer flex flex-col justify-between`}
        >
          <div>
            <span className={`material-symbols-outlined ${topics[3].iconColor} text-4xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {topics[3].icon}
            </span>
            <h3 className="font-headline-md text-headline-md mb-2 text-black-bg font-extrabold">{topics[3].title}</h3>
            <p className="font-body-md text-gray-600 font-medium leading-relaxed">{topics[3].description}</p>
          </div>
          <div className={`mt-6 flex items-center ${topics[3].iconColor} font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity`}>
            <span>Talk about this</span>
            <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
