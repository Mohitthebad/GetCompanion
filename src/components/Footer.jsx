import React from 'react';
import Logo from './Logo';

export default function Footer({ onOpenChat }) {
  return (
    <footer className="bg-white text-slate-800 border-t border-slate-200  ">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 justify-between">
        <div className="max-w-xs">
          <div className="mb-4">
            <Logo className="h-9" isDark={false} />
          </div>
          <p className="text-slate-600 mb-4 text-sm font-medium leading-relaxed">
            © {new Date().getFullYear()} Get Companion. Your Sanctuary for Mental Wellness & Human Presence.
          </p>
          <p className="text-xs text-slate-500">
            Platonic human connection platform. Not medical therapy or crisis service.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          <div className="flex flex-col gap-2.5">
            <span className="font-extrabold text-slate-900 mb-1 uppercase tracking-wider text-xs">Company</span>
            <a className="text-slate-600 hover:text-rose-600 transition-colors font-medium" href="#">
              Our Story
            </a>
            <a className="text-slate-600 hover:text-rose-600 transition-colors font-medium" href="#">
              Contact
            </a>
            <a className="text-slate-600 hover:text-rose-600 transition-colors font-medium" href="#">
              Categories
            </a>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-extrabold text-slate-900 mb-1 uppercase tracking-wider text-xs">Support</span>
            <a className="text-slate-600 hover:text-rose-600 transition-colors font-medium" href="#safety">
              Safety Center
            </a>
            <a className="text-slate-600 hover:text-rose-600 transition-colors font-medium" href="#">
              Privacy Policy
            </a>
            <a className="text-slate-600 hover:text-rose-600 transition-colors font-medium" href="#">
              Terms of Service
            </a>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-extrabold text-slate-900 mb-1 uppercase tracking-wider text-xs">Connect</span>
            <a className="text-slate-600 hover:text-rose-600 transition-colors font-medium" href="#">
              Instagram
            </a>
            <a className="text-slate-600 hover:text-rose-600 transition-colors font-medium" href="#">
              Twitter
            </a>
            <button
              onClick={onOpenChat}
              className="text-left font-extrabold text-rose-600 hover:text-rose-700 mt-2 flex items-center gap-1"
            >
              <span>Start Free Chat</span>
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </button>

            <div className="flex items-center gap-2.5 p-2 border border-slate-200 rounded-xl w-fit bg-slate-50 mt-2">
              <a
                href="https://play.fabulousmedia.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FabulousMedia"
                className="flex items-center justify-center bg-white p-1 rounded-md opacity-80 transition-all hover:opacity-100"
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
                  alt="FabulousMedia"
                  className="h-3 w-auto block"
                />
              </a>

              <div className="w-[1px] h-3 bg-slate-300"></div>

              <a
                href="https://gocommercially.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GoCommercially"
                className="flex items-center justify-center bg-white p-1 rounded-md opacity-80 transition-all hover:opacity-100"
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
                  alt="GoCommercially"
                  className="h-3 w-auto block"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
