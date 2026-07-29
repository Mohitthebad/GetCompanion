import React from 'react';

export default function Pricing({ onSelectPlan }) {
  const listeners = [
    {
      id: 'listener-1',
      name: 'Nisha R',
      tagline: 'Active listening',
      rating: '5.0/5',
      exp: '1 yrs+',
      avatar: 'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?auto=format&fit=crop&w=200&q=80',
      status: 'Online',
      chatRate: '₹10',
      callRate: '₹15',
      videoRate: '₹20'
    },
    {
      id: 'listener-2',
      name: 'Tara S',
      tagline: 'Held With Compassion',
      rating: '5.0/5',
      exp: '2 yrs+',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      status: 'Online',
      chatRate: '₹10',
      callRate: '₹15',
      videoRate: '₹20'
    },
    {
      id: 'listener-3',
      name: 'Sarika P',
      tagline: 'A Friend Who Listens',
      rating: '5.0/5',
      exp: '1 yrs+',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      status: 'Online',
      chatRate: '₹10',
      callRate: '₹15',
      videoRate: '₹20'
    },
    {
      id: 'listener-4',
      name: 'Kaira B',
      tagline: 'Comfort in Companionship',
      rating: '5.0/5',
      exp: '2 yrs+',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      status: 'Online',
      chatRate: '₹10',
      callRate: '₹15',
      videoRate: '₹20'
    },
    {
      id: 'listener-5',
      name: 'Siya A',
      tagline: 'Listening With Heart',
      rating: '5.0/5',
      exp: '3 yrs+',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      status: 'Online',
      chatRate: '₹10',
      callRate: '₹15',
      videoRate: '₹20'
    },
    {
      id: 'listener-6',
      name: 'Meera B',
      tagline: 'Empathetic conversation',
      rating: '4.9/5',
      exp: '6 yrs+',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      status: 'Online',
      chatRate: '₹10',
      callRate: '₹15',
      videoRate: '₹20'
    }
  ];

  const handleStartTalk = (listener, mode) => {
    if (onSelectPlan) {
      onSelectPlan({ ...listener, mode });
    }
  };

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto" id="pricing">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-xs font-extrabold uppercase tracking-widest mb-3">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
          Verified Companions & Transparent Rates
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Choose a listener & start instantly.
        </h2>
        <p className="mt-2 text-base text-slate-600 font-medium max-w-xl mx-auto">
          Connect via Chat, Audio Call, or Video Call. 100% anonymous & safe.
        </p>
      </div>

      {/* Grid of Listener Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
        {listeners.map((l) => (
          <div
            key={l.id}
            className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Profile Header */}
            <div className="flex items-start gap-3.5 mb-5">
              <img
                src={l.avatar}
                alt={l.name}
                className="w-16 h-16 rounded-full object-cover shrink-0 border border-slate-100 shadow-sm"
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <h3 className="font-black text-base text-slate-900 truncate">
                    {l.name}
                  </h3>
                  <span className="shrink-0 bg-emerald-50 text-emerald-600 border border-emerald-200/80 text-[10px] font-black px-2 py-0.5 rounded-md flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {l.status}
                  </span>
                </div>

                <p className="text-xs font-medium text-slate-500 truncate mb-1">
                  {l.tagline}
                </p>

                <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
                  <div className="flex text-amber-400 text-xs">
                    ★★★★★
                  </div>
                  <span>{l.rating}</span>
                  <span className="text-slate-400 font-normal">|</span>
                  <span className="text-slate-500 font-medium">{l.exp}</span>
                </div>
              </div>
            </div>

            {/* Bottom 3 Action Pills with Vector Material Icons */}
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => handleStartTalk(l, 'chat')}
                className="py-2 px-2.5 rounded-full border border-amber-300/80 bg-amber-50/50 hover:bg-amber-100 text-slate-900 font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-2xs"
              >
                <span className="material-symbols-outlined text-[15px] text-amber-600 font-bold">chat_bubble</span>
                <span>{l.chatRate}</span>
              </button>

              <button
                onClick={() => handleStartTalk(l, 'audio')}
                className="py-2 px-2.5 rounded-full border border-blue-300/80 bg-blue-50/50 hover:bg-blue-100 text-slate-900 font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-2xs"
              >
                <span className="material-symbols-outlined text-[15px] text-blue-600 font-bold">call</span>
                <span>{l.callRate}</span>
              </button>

              <button
                onClick={() => handleStartTalk(l, 'video')}
                className="py-2 px-2.5 rounded-full border border-pink-300/80 bg-pink-50/50 hover:bg-pink-100 text-slate-900 font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-2xs"
              >
                <span className="material-symbols-outlined text-[15px] text-pink-600 font-bold">videocam</span>
                <span>{l.videoRate}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
