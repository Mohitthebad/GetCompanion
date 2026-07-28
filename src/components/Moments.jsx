import React from 'react';
import { motion } from 'framer-motion';

export default function Moments({ onSelectTopic }) {
  const cards = [
    {
      topic: 'relocating',
      title: 'Relocating & New Beginnings',
      desc: "In a new city where you don't know anyone yet, and just want to talk about your day.",
      alt: 'Indian person in new city',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
    },
    {
      topic: 'late-night',
      title: 'Late Night Anxiety',
      desc: "When it's 2 AM and memories won't let you sleep. Someone is here to sit with you.",
      alt: 'Indian man in late night room',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80'
    },
    {
      topic: 'life-transitions',
      title: 'Silent Goodbyes & Transitions',
      desc: 'Navigating a heavy heart after someone walked away, or processing a major life shift out loud.',
      alt: 'Indian woman in thoughtful moment',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-stack-lg px-margin-mobile md:px-margin-desktop overflow-hidden bg-white" id="moments">
      <div className="max-w-container-max mx-auto reveal">
        <div className="text-center mb-12">
          <span className="text-[#0066FF] font-bold text-xs uppercase tracking-wider">Real Moments</span>
          <h2 className="font-headline-lg text-headline-lg text-black-bg mt-1 font-black">
            Moments When a Companion Makes a Difference
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              onClick={() => onSelectTopic(card.topic)}
              className="tilt-card bg-white p-8 rounded-xxl shadow-sm border border-gray-200 hover:border-primary hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-60 w-full rounded-2xl mb-6 overflow-hidden bg-gray-100 relative">
                  <img
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    alt={card.alt}
                    src={card.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="font-headline-md text-headline-md mb-3 text-black-bg font-extrabold">
                  {card.title}
                </h3>
                <p className="font-body-md text-gray-600 font-medium leading-relaxed mb-4">{card.desc}</p>
              </div>

              <div className="flex items-center text-[#FF5500] font-bold text-sm">
                <span>Connect for this moment</span>
                <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
