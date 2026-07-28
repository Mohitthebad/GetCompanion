import React, { useState } from 'react';

export default function Safety() {
  const [showModal, setShowModal] = useState(false);

  const pillars = [
    {
      icon: 'verified_user',
      title: 'Verified Companions',
      desc: 'Extensive background checks and empathy screening for every member.'
    },
    {
      icon: 'lock',
      title: 'Confidentiality',
      desc: 'End-to-end encrypted conversations. Your story stays between you.'
    },
    {
      icon: 'psychology',
      title: 'Judgment-Free',
      desc: 'A strict policy ensuring every companion provides radical acceptance.'
    },
    {
      icon: 'tune',
      title: 'Full Control',
      desc: 'You choose the duration, the format, and when to end the session.'
    }
  ];

  return (
    <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-black-bg text-white border-y border-black-border" id="safety">
      <div className="max-w-container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-stack-lg items-center mb-6 reveal">
          <div>
            <div className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase mb-2 bg-black-card border border-black-border px-3 py-1.5 rounded-full w-fit">
              <span className="material-symbols-outlined text-base text-secondary">shield</span>
              <span>PRIVACY & SECURITY</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg mb-6 leading-tight text-white font-black">
              Before You Open Up, You Deserve to Feel Safe.
            </h2>
            <p className="font-body-lg text-slate-300 mb-8 leading-relaxed font-medium">
              Safety isn't just a feature; it's our foundation. Every interaction is designed with your dignity, anonymity, and privacy as the absolute priority.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="text-secondary font-extrabold underline underline-offset-4 decoration-2 hover:text-blue-400 transition-colors inline-flex items-center gap-1"
            >
              <span>Explore Our Safety Standards</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="bg-black-card p-6 rounded-xxl border border-black-border hover:border-secondary transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-primary mb-3 text-2xl">
                  {item.icon}
                </span>
                <h4 className="font-headline-md text-headline-md text-base mb-2 text-white font-bold">
                  {item.title}
                </h4>
                <p className="text-label-sm font-label-sm text-slate-400 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-black-bg text-white rounded-xxl max-w-lg w-full p-8 shadow-2xl relative border border-black-border">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-black-card"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="flex items-center gap-3 mb-4 text-primary">
              <span className="material-symbols-outlined text-3xl">verified_user</span>
              <h3 className="font-headline-md text-headline-md font-extrabold text-white">Safety Standards</h3>
            </div>
            <div className="space-y-4 text-slate-300 text-body-md font-medium">
              <p>
                <strong className="text-white">1. Comprehensive Vetting:</strong> All companions complete identity verification, criminal background checks, and standard interview screenings.
              </p>
              <p>
                <strong className="text-white">2. Zero Data Retention:</strong> Transcripts are deleted after session completion. We store zero audio recordings.
              </p>
              <p>
                <strong className="text-white">3. Instant Escalation Protocol:</strong> If a safety concern arises, emergency resources are accessible with one click.
              </p>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full bg-primary text-white font-bold py-3 rounded-full hover:bg-orange-600 shadow-lg shadow-orange-500/20"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
