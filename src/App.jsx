import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Recognition from './components/Recognition';
import BentoGrid from './components/BentoGrid';
import WhatIsAndIsNot from './components/WhatIsAndIsNot';
import HowItWorks from './components/HowItWorks';
import Safety from './components/Safety';
import Moments from './components/Moments';
import Pricing from './components/Pricing';
import HumanVsAI from './components/HumanVsAI';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import ChatModal from './components/ChatModal';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import AuroraBackground from './components/AuroraBackground';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeTopic, setActiveTopic] = useState('general');
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleOpenChatWithTopic = (topic = 'general') => {
    setActiveTopic(topic);
    setIsChatOpen(true);
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-body-md selection:bg-primary selection:text-white relative">
      {/* Loading Screen with Broken Heart -> Whole Heart Animation */}
      <LoadingScreen />

      {/* Aurora Mesh Gradient Background with Floating Particles */}
      <AuroraBackground />

      {/* Custom Soft Glowing Cursor */}
      <CustomCursor />

      {/* Fixed Navigation Bar */}
      <Header onOpenChat={() => handleOpenChatWithTopic('general')} />

      {/* Main Content Area */}
      <main className="pt-20 overflow-x-hidden flex-1 relative z-10">
        <Hero onOpenChat={() => handleOpenChatWithTopic('general')} />
        <Recognition />
        <BentoGrid onSelectTopic={handleOpenChatWithTopic} />
        <WhatIsAndIsNot />
        <HowItWorks onOpenChat={() => handleOpenChatWithTopic('general')} />
        <Safety />
        <Moments onSelectTopic={handleOpenChatWithTopic} />
        <Pricing onSelectPlan={handleSelectPlan} />
        <HumanVsAI onOpenChat={() => handleOpenChatWithTopic('general')} />
        <Testimonials />
        <FAQ />
        <FinalCTA onOpenChat={() => handleOpenChatWithTopic('general')} />
      </main>

      {/* Footer */}
      <Footer onOpenChat={() => handleOpenChatWithTopic('general')} />

      {/* Mobile Fixed Navigation */}
      <MobileNav onOpenChat={() => handleOpenChatWithTopic('general')} />

      {/* Interactive Chat & Companion Session Modal */}
      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        initialTopic={activeTopic}
        initialPlan={selectedPlan}
      />
    </div>
  );
}
