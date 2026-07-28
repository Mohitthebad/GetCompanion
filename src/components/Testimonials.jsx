import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      quote:
        "After a sudden 3-year relationship ended, my apartment felt so painfully quiet. I didn't want to burden my friends again. My companion listened to me cry for an hour without judgment. It was the first night I could sleep peacefully.",
      author: 'Aarav K.',
      role: 'Heartache Support Client',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
    },
    {
      quote:
        "Living alone in a new city made 2 AM anxiety unbearable. Having a companion available to just talk about my feelings and keep me company saved me from overwhelming loneliness.",
      author: 'Riya M.',
      role: 'Late Night Venting Client',
      avatar: 'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?auto=format&fit=crop&w=200&q=80'
    },
    {
      quote:
        "I was tired of AI apps giving generic advice. Having a real person validate my pain, listen to my story, and tell me 'it's okay to feel hurt' made all the difference in my healing.",
      author: 'Siddharth V.',
      role: 'Emotional Comfort Client',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-slate-50 border-y border-gray-200 overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-12 reveal">
          <span className="text-primary font-bold text-xs uppercase tracking-wider">Real Emotional Healing</span>
          <h2 className="font-headline-lg text-headline-lg text-black-bg mt-1 font-black">Stories from Hearts We Helped Hearten</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xxl border border-gray-200 italic text-gray-700 font-body-lg relative flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <span className="text-primary/20 text-6xl font-serif leading-none block mb-2">“</span>
                <p className="not-italic font-body-md text-gray-700 mb-6 leading-relaxed font-medium">
                  "{rev.quote}"
                </p>
              </div>
              <div className="not-italic font-label-md text-black-bg border-t border-gray-100 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-11 h-11 rounded-full object-cover border-2 border-primary/20 shadow-xs"
                  />
                  <div>
                    <div className="font-extrabold text-black-bg">{rev.author}</div>
                    <div className="text-xs text-primary font-bold">{rev.role}</div>
                  </div>
                </div>
                <div className="flex text-amber-500 text-sm">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
