import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How is this different from therapy?',
      a: 'Therapy is clinical, often focuses on diagnosing and treating mental health conditions, and involves medical professional advice. Get Companion is focused on the human need for listening and presence—we offer emotional support through platonic companionship without clinical intervention.'
    },
    {
      q: 'Who are the companions?',
      a: 'Our companions are individuals selected for their high levels of empathy, active listening skills, and diverse life experiences. They undergo background checks and rigorous training to ensure a safe, judgment-free environment.'
    },
    {
      q: 'Is my data private?',
      a: 'Yes. All conversations are end-to-end encrypted and we never share your personal information with third parties. You have full control over your conversation history.'
    },
    {
      q: 'Can I choose my companion?',
      a: 'Absolutely. After your first session, you can save your favorite companions and request sessions directly with them based on availability.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto" id="faq">
      <div className="text-center mb-10 reveal">
        <span className="text-primary font-label-md text-label-md uppercase tracking-wider">Clarifications</span>
        <h2 className="font-headline-lg text-headline-lg mt-1 text-on-surface">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4 reveal">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-xxl border border-outline-variant/20 overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center p-6 text-left font-headline-md text-headline-md text-base text-on-surface hover:bg-surface-container-low/50 transition-colors"
              >
                <span>{faq.q}</span>
                <span
                  className={`material-symbols-outlined text-primary transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-6 font-body-md text-on-surface-variant leading-relaxed animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
