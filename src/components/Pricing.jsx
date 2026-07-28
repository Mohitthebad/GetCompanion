import React, { useState } from 'react';

export default function Pricing({ onSelectPlan }) {
  const [selectedPlanId, setSelectedPlanId] = useState('pack-2');

  const plans = [
    {
      id: 'pack-1',
      tag: 'First Step',
      price: '₹149',
      desc: 'Single 30-minute introductory conversation.',
      popular: false
    },
    {
      id: 'pack-2',
      tag: 'Continue Talking',
      price: '₹499',
      desc: '5-conversation pack (30 mins each). Most popular.',
      popular: true
    },
    {
      id: 'pack-3',
      tag: 'Weekly Rhythm',
      price: '₹899',
      desc: '10-conversation pack. Ideal for consistent venting.',
      popular: false
    },
    {
      id: 'pack-4',
      tag: 'Sanctuary Monthly',
      price: '₹1,499',
      desc: 'Unlimited 20-min daily vent sessions. Maximum support.',
      popular: false
    }
  ];

  const handleChoose = (plan) => {
    setSelectedPlanId(plan.id);
    if (onSelectPlan) {
      onSelectPlan(plan);
    }
  };

  return (
    <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-slate-50" id="pricing">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-primary font-bold text-xs uppercase tracking-wider">Flexible Options</span>
          <h2 className="font-headline-lg text-headline-lg mb-4 mt-1 text-black-bg font-black">Recharge with a Plan</h2>
          <p className="text-gray-600 font-body-lg font-medium">Choose the rhythm of connection that fits your life.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {plans.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => handleChoose(plan)}
                className={`pricing-card p-8 rounded-xxl flex flex-col h-full cursor-pointer transition-all ${
                  plan.popular
                    ? 'bg-black-bg text-white shadow-2xl border-2 border-primary relative'
                    : 'bg-white text-black-bg shadow-sm border border-gray-200 hover:border-secondary'
                } ${isSelected && !plan.popular ? 'ring-2 ring-primary bg-orange-50/20' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white font-black text-xs px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}
                <h3 className={`font-bold text-xs uppercase tracking-wider mb-2 ${plan.popular ? 'text-secondary' : 'text-primary'}`}>{plan.tag}</h3>
                <div className="text-headline-lg font-black mb-4">{plan.price}</div>
                <p className={`font-body-md mb-6 flex-grow font-medium ${plan.popular ? 'text-slate-300' : 'text-gray-600'}`}>{plan.desc}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChoose(plan);
                  }}
                  className={`w-full font-bold text-sm py-3 rounded-full transition-all ${
                    plan.popular || isSelected
                      ? 'bg-primary text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600'
                      : 'border-2 border-secondary text-secondary hover:bg-blue-50'
                  }`}
                >
                  {isSelected ? 'Selected' : 'Choose Pack'}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center reveal">
          <button
            onClick={() => onSelectPlan && onSelectPlan(plans[1])}
            className="text-black-bg font-bold text-sm inline-flex items-center gap-2 hover:text-primary transition-colors"
          >
            <span>View All Conversation Plans</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
