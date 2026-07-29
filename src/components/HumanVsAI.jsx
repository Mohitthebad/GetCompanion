import React from 'react';

export default function HumanVsAI({ onOpenChat }) {
  const points = [
    {
      icon: 'favorite',
      title: 'Real Empathy & Heart',
      desc: 'AI algorithm bullet points de sakta hai, par aapka breakup ya akelapan feel nahi kar sakta.'
    },
    {
      icon: 'record_voice_over',
      title: 'Real Human Voice',
      desc: 'Koi robotic script ya sterile advice nahi—bas ek warm insani aawaz.'
    },
    {
      icon: 'lock',
      title: '100% Safe & Confidential',
      desc: 'Zero judgment, zero identity disclosure. Poori privacy.'
    }
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-xs font-extrabold uppercase tracking-widest mb-3">
            Human Empathy vs AI Chatbots
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
            AI Robot vs Real Human Warmth
          </h2>
          <p className="text-base text-slate-600 font-medium mb-6 leading-relaxed max-w-lg">
            AI chatbots text generate kar sakte hain, par aapke dil ka dard nahi samajh sakte. Our listeners are real humans who genuinely care.
          </p>
          <button
            onClick={onOpenChat}
            className="bg-gradient-to-r from-orange-500 to-rose-500 text-white font-black text-sm px-8 py-3.5 rounded-full active:scale-95 hover:shadow-lg hover:shadow-orange-500/25 transition-all inline-flex items-center gap-2"
          >
            <span>Talk to a Real Person Who Cares</span>
            <span className="material-symbols-outlined text-base">favorite</span>
          </button>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 md:p-10 reveal border border-slate-800 shadow-xl text-white">
          <div className="space-y-6">
            {points.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-rose-400 shrink-0 border border-white/10 shadow-xs">
                  <span className="material-symbols-outlined text-xl">{pt.icon}</span>
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-white mb-1">
                    {pt.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
