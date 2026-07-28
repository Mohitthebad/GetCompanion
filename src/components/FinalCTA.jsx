import React from 'react';

export default function FinalCTA({ onOpenChat }) {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-black-bg text-white text-center relative overflow-hidden border-t border-black-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      
      <div className="max-w-2xl mx-auto reveal relative z-10">
        <span className="bg-secondary text-white text-xs uppercase px-4 py-1.5 rounded-full font-bold tracking-wider mb-6 inline-block shadow-md">
          Ready to be heard?
        </span>
        <h2 className="font-headline-xl text-headline-xl mb-6 text-white font-black">
          You Do Not Have to Carry Every Thought Alone.
        </h2>
        <p className="font-body-lg mb-10 text-slate-300 max-w-lg mx-auto leading-relaxed font-medium">
          Give your thoughts a place to land. Your first companion is ready to listen right now.
        </p>
        <button
          onClick={onOpenChat}
          className="bg-primary text-white font-black text-base px-10 py-5 rounded-full shadow-2xl shadow-orange-500/40 hover:bg-orange-600 transition-all active:scale-95 inline-flex items-center gap-2"
        >
          <span>Start Your First Free Chat</span>
          <span className="material-symbols-outlined">chat</span>
        </button>
      </div>
    </section>
  );
}
