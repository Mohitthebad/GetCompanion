import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HowItWorks({ onOpenChat }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Dil Ki Baat & Feeling Select Karo',
      subtitle: 'Bina kisi form ya survey ke',
      desc: 'Bas bataiye aap kaisa feel kar rahe hain—dil me dard hai, 3 AM overthinking ho rahi hai, ya akelepan ka ehsaas hai.',
      color: '#FF8CB7',
      bgTag: 'bg-pink-50 text-[#D94680] border-pink-200',
      icon: 'favorite',
      preview: (
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1.5 rounded-full bg-pink-100 text-[#D94680] text-xs font-bold">💔 Heartache</span>
          <span className="px-3 py-1.5 rounded-full bg-blue-100 text-[#0066FF] text-xs font-bold">🌙 3 AM Loneliness</span>
          <span className="px-3 py-1.5 rounded-full bg-amber-100 text-[#B38F00] text-xs font-bold">🍃 Silent Venting</span>
        </div>
      )
    },
    {
      num: '02',
      title: 'Instant Matched Empathetic Listener',
      subtitle: 'Real human warmth bas 60 seconds me',
      desc: 'Aapko instant connect kiya jata hai verified, compassionate listener se jo aapke jazbaat samajhta hai.',
      color: '#0066FF',
      bgTag: 'bg-blue-50 text-[#0066FF] border-blue-200',
      icon: 'diversity_3',
      preview: (
        <div className="flex items-center gap-3 mt-4 bg-white p-3 rounded-2xl border border-blue-100 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?auto=format&fit=crop&w=100&q=80"
            alt="Matched Companion"
            className="w-10 h-10 rounded-full object-cover border-2 border-[#0066FF]"
          />
          <div>
            <p className="text-xs font-extrabold text-black-bg">Matched: Ananya S.</p>
            <p className="text-[10px] text-gray-500 font-medium">Ready to listen • Free 1st Session</p>
          </div>
        </div>
      )
    },
    {
      num: '03',
      title: 'Connect via Private Chat ya Voice',
      subtitle: '100% Encrypted & Anonymous',
      desc: 'Aap choose karein ki kaise baat karni hai—anonymous text chat ya private voice call. Poori privacy guarantee.',
      color: '#FFCC00',
      bgTag: 'bg-amber-50 text-[#B38F00] border-amber-200',
      icon: 'lock',
      preview: (
        <div className="flex gap-2 mt-4 text-xs font-bold">
          <div className="flex-1 p-2.5 rounded-xl bg-white border border-amber-200 text-center text-black-bg shadow-2xs">
            💬 Encrypted Text
          </div>
          <div className="flex-1 p-2.5 rounded-xl bg-white border border-amber-200 text-center text-black-bg shadow-2xs">
            🎙️ Private Voice
          </div>
        </div>
      )
    },
    {
      num: '04',
      title: 'Ongoing Support & Sukoon',
      subtitle: 'Aapka safe sanctuary jab bhi zaroorat ho',
      desc: 'Apne favorite listeners ko bookmark karein aur jab bhi raat ko akelapan lage, turant connect karein.',
      color: '#FF5500',
      bgTag: 'bg-orange-50 text-[#FF5500] border-orange-200',
      icon: 'verified',
      preview: (
        <div className="flex items-center justify-between mt-4 p-3 bg-white rounded-2xl border border-orange-100 text-xs font-bold">
          <span className="text-black-bg flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#FF5500] text-sm">bookmark</span>
            Saved Sanctuary Companions
          </span>
          <span className="text-[#FF5500]">Always Here</span>
        </div>
      )
    }
  ];

  return (
    <section className="pt-4 pb-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="how-it-works">
      {/* Header */}
      <div className="text-center mb-6 reveal">
        <span className="text-[#FF5500] font-bold text-xs uppercase tracking-wider">Simple Process</span>
        <h2 className="font-headline-lg text-headline-lg mb-2 mt-1 text-black-bg font-black">
          Companion Kaise Kaam Karta Hai?
        </h2>
        <p className="text-gray-600 font-body-lg font-semibold max-w-xl mx-auto">
          A seamless, respectful 4-step path to feeling understood and valued.
        </p>
      </div>

      {/* Connected Timeline Track Selector Tabs */}
      <div className="relative mb-6 max-w-4xl mx-auto">
        {/* Connecting Line Track */}
        <div className="absolute top-1/2 left-8 right-8 h-1 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
        <div
          className="absolute top-1/2 left-8 h-1 bg-gradient-to-r from-[#FF5500] via-[#FF8CB7] to-[#0066FF] -translate-y-1/2 transition-all duration-500 hidden md:block"
          style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
        ></div>

        {/* Step Nodes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          {steps.map((s, idx) => (
            <button
              key={s.num}
              onClick={() => setActiveStep(idx)}
              onMouseEnter={() => setActiveStep(idx)}
              className={`flex flex-col items-center text-center p-4 rounded-2xl transition-all cursor-pointer ${
                activeStep === idx
                  ? 'bg-white shadow-xl border-2 scale-105'
                  : 'bg-white/60 hover:bg-white border border-gray-200 hover:shadow-md hover:scale-102'
              }`}
              style={{ borderColor: activeStep === idx ? s.color : '#E5E7EB' }}
            >
              <div
                className="w-12 h-12 rounded-full font-black text-sm flex items-center justify-center mb-2 shadow-md text-white transition-transform"
                style={{ backgroundColor: s.color }}
              >
                {s.num}
              </div>
              <span className={`text-xs font-bold tracking-tight ${activeStep === idx ? 'text-black-bg' : 'text-gray-500'}`}>
                {s.title.split(' ')[0]} {s.title.split(' ')[1]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Step Showcase Hero Panel */}
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-white p-8 md:p-12 rounded-[32px] border border-gray-200 shadow-xl grid md:grid-cols-12 gap-8 items-center relative overflow-hidden"
          >
            {/* Left Content Column */}
            <div className="md:col-span-7">
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black mb-4 border ${steps[activeStep].bgTag}`}>
                <span className="material-symbols-outlined text-sm">{steps[activeStep].icon}</span>
                <span>STEP {steps[activeStep].num} • {steps[activeStep].subtitle}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-black-bg mb-4 leading-tight">
                {steps[activeStep].title}
              </h3>

              <p className="text-gray-600 font-medium text-base leading-relaxed mb-6">
                {steps[activeStep].desc}
              </p>

              <button
                onClick={onOpenChat}
                className="bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white font-black text-sm px-8 py-3.5 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-xl transition-all active:scale-95 flex items-center gap-2"
              >
                <span>Take This Step Now</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            {/* Right Interactive Visual Preview Column */}
            <div className="md:col-span-5 bg-slate-50 p-6 rounded-2xl border border-gray-200">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Live Experience Preview</p>
              <div className="font-extrabold text-sm text-black-bg mb-2">
                {steps[activeStep].title}
              </div>
              {steps[activeStep].preview}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}
