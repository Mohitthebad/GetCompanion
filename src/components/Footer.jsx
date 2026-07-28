import React from 'react';
import Logo from './Logo';

export default function Footer({ onOpenChat }) {
  return (
    <footer className="bg-black-bg text-slate-300 border-t border-black-border">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col md:flex-row gap-stack-md justify-between">
        <div className="max-w-xs">
          <div className="mb-4">
            <Logo className="h-9" isDark={true} />
          </div>
          <p className="font-body-md text-slate-400 mb-4 text-sm font-medium">
            © {new Date().getFullYear()} Get Companion. Your Sanctuary for Mental Wellness & Human Presence.
          </p>
          <p className="text-xs text-slate-500">
            Platonic human connection platform. Not medical therapy or crisis service.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-stack-md text-sm">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-white mb-2 uppercase tracking-wider text-xs">Company</span>
            <a className="text-slate-400 hover:text-primary transition-colors font-medium" href="#">
              Our Story
            </a>
            <a className="text-slate-400 hover:text-primary transition-colors font-medium" href="#">
              Contact
            </a>
            <a className="text-slate-400 hover:text-primary transition-colors font-medium" href="#">
              Categories
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-bold text-white mb-2 uppercase tracking-wider text-xs">Support</span>
            <a className="text-slate-400 hover:text-secondary transition-colors font-medium" href="#safety">
              Safety Center
            </a>
            <a className="text-slate-400 hover:text-secondary transition-colors font-medium" href="#">
              Privacy Policy
            </a>
            <a className="text-slate-400 hover:text-secondary transition-colors font-medium" href="#">
              Terms of Service
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-bold text-white mb-2 uppercase tracking-wider text-xs">Connect</span>
            <a className="text-slate-400 hover:text-primary transition-colors font-medium" href="#">
              Instagram
            </a>
            <a className="text-slate-400 hover:text-primary transition-colors font-medium" href="#">
              Twitter
            </a>
            <button
              onClick={onOpenChat}
              className="text-left font-bold text-primary hover:underline mt-2 flex items-center gap-1"
            >
              <span>Start Free Chat</span>
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </button>
            <div className="flex items-center gap-[8px] md:gap-[10px] p-[6px_10px] md:p-[8px_12px] border border-black/10 rounded-[10px] w-fit bg-black/5 backdrop-blur-[10px]">
            <a
              href="https://play.fabulousmedia.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FabulousMedia"
              className="flex items-center justify-center bg-[#fff] p-[4px] rounded-[6px] opacity-60 transition-all duration-300 ease-out hover:opacity-100 hover:-translate-y-[2px] hover:shadow-[0_0_15px_rgba(253,181,20,0.5)]"
            >
              <img
                src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
                alt="FabulousMedia"
                className="h-[10px] md:h-[12px] w-auto block"
              />
            </a>

            <div className="w-[1px] h-[12px] bg-black/10"></div>

            <a
              href="https://gocommercially.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GoCommercially"
              className="flex items-center justify-center bg-[#fff] p-[4px] rounded-[6px] opacity-60 transition-all duration-300 ease-out hover:opacity-100 hover:-translate-y-[2px] hover:shadow-[0_0_15px_rgba(253,181,20,0.5)]"
            >
              <img
                src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
                alt="GoCommercially"
                className="h-[10px] md:h-[12px] w-auto block"
              />
            </a>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
