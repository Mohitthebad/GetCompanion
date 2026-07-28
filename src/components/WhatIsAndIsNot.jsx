import React from 'react';

export default function WhatIsAndIsNot() {
  return (
    <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-black-bg text-white border-y border-black-border">
      <div className="max-w-container-max mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-center mb-stack-lg reveal text-white font-black">
          What Get Companion Is—and What It Is Not
        </h2>
        <div className="grid md:grid-cols-2 gap-stack-md reveal">
          
          {/* What It Is Card */}
          <div className="bg-black-card p-8 md:p-10 rounded-xxl border-2 border-secondary shadow-lg">
            <div className="flex items-center gap-3 mb-6 text-secondary">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
              <h3 className="font-headline-md text-headline-md font-extrabold text-white">What It Is</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 font-body-md text-slate-300">
                <span className="text-secondary font-bold min-w-[120px]">Companionship:</span>
                <span>Pure human presence and active listening.</span>
              </li>
              <li className="flex gap-3 font-body-md text-slate-300">
                <span className="text-secondary font-bold min-w-[120px]">Neutrality:</span>
                <span>A third-party perspective without emotional bias.</span>
              </li>
              <li className="flex gap-3 font-body-md text-slate-300">
                <span className="text-secondary font-bold min-w-[120px]">Emotional Vent:</span>
                <span>A safe pressure-valve for your daily thoughts.</span>
              </li>
            </ul>
          </div>

          {/* What It Is Not Card */}
          <div className="bg-black-card p-8 md:p-10 rounded-xxl border-2 border-primary shadow-lg">
            <div className="flex items-center gap-3 mb-6 text-primary">
              <span className="material-symbols-outlined text-3xl">cancel</span>
              <h3 className="font-headline-md text-headline-md font-extrabold text-white">What It Is Not</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 font-body-md text-slate-300">
                <span className="text-primary font-bold min-w-[120px]">Not Therapy:</span>
                <span>We do not diagnose, treat, or provide medical advice.</span>
              </li>
              <li className="flex gap-3 font-body-md text-slate-300">
                <span className="text-primary font-bold min-w-[120px]">Not Dating:</span>
                <span>Connections are strictly platonic and professional.</span>
              </li>
              <li className="flex gap-3 font-body-md text-slate-300">
                <span className="text-primary font-bold min-w-[120px]">Not Crisis Care:</span>
                <span>Not for medical emergencies or suicidal ideation.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
