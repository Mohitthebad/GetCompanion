import React from 'react';

export default function MobileNav({ onOpenChat }) {
  return (
    <nav className="fixed bottom-0 w-full z-50 bg-black-bg/95 backdrop-blur-lg flex justify-around items-center px-6 py-3.5 md:hidden shadow-2xl rounded-t-2xl border-t border-black-border">
      <a
        className="text-white flex items-center gap-2 hover:bg-black-card p-2 rounded-full transition-colors"
        href="#"
      >
        <span className="material-symbols-outlined text-secondary" data-weight="fill">
          home
        </span>
        <span className="font-bold text-xs">Home</span>
      </a>

      <button
        onClick={onOpenChat}
        className="bg-primary text-white rounded-full px-6 py-2.5 flex items-center gap-2 active:scale-95 duration-200 shadow-md shadow-orange-500/30 font-bold"
      >
        <span className="material-symbols-outlined text-sm">chat_bubble</span>
        <span className="font-bold text-xs">Start Now</span>
      </button>
    </nav>
  );
}
