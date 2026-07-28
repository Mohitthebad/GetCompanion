import React from 'react';

export default function HumanVsAI({ onOpenChat }) {
  const points = [
    {
      icon: 'heart_broken',
      title: 'Real Emotional Resonance',
      desc: 'Humans understand the ache of a broken promise, a quiet bedroom, and a heavy heart.'
    },
    {
      icon: 'diversity_1',
      title: 'Shared Vulnerability',
      desc: 'There is profound healing in knowing the person listening has also loved, lost, and felt alone.'
    },
    {
      icon: 'waves',
      title: 'Comforting Silence & Tone',
      desc: 'A real human voice offers gentle pauses and genuine warmth that no text-bot can ever mimic.'
    }
  ];

  return (
    <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-white">
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-stack-lg items-center">
        <div className="reveal">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider">Human Soul vs Chatbot</span>
          <h2 className="font-headline-lg text-headline-lg mb-6 mt-1 leading-tight text-black-bg font-black">
            Why Real Human Empathy Matters When Your Heart is Hurting
          </h2>
          <p className="font-body-lg text-gray-600 mb-6 leading-relaxed font-medium">
            In a world flooded with AI chatbots and automated responses, some things cannot be programmed. An AI algorithm can output bullet points, but it cannot feel your heartbreak. It cannot sigh with you, hold a soft silence, or offer real human comfort.
          </p>
          <p className="font-body-lg text-gray-600 mb-8 leading-relaxed font-medium">
            Our companions don't read from a script or offer sterile advice. They listen to the tremor in your voice, validate your tears, and stand by your side until you feel lighter.
          </p>
          <button
            onClick={onOpenChat}
            className="bg-primary text-white font-black text-sm px-8 py-4 rounded-full active:scale-95 hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 inline-flex items-center gap-2"
          >
            <span>Talk to a Real Person Who Cares</span>
            <span className="material-symbols-outlined text-sm">favorite</span>
          </button>
        </div>

        <div className="bg-black-bg rounded-xxl p-8 md:p-12 reveal border border-black-border shadow-xl text-white">
          <div className="space-y-6">
            {points.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black-card flex items-center justify-center text-primary shrink-0 shadow-sm border border-black-border">
                  <span className="material-symbols-outlined">{pt.icon}</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-headline-md text-base mb-1 text-white font-extrabold">
                    {pt.title}
                  </h4>
                  <p className="text-label-md text-slate-400 leading-relaxed font-medium">
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
