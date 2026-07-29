import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EmotionsSection from './components/EmotionsSection';
import AnxietySection from './components/AnxietySection';
import RelaxedSection from './components/RelaxedSection';
import HowItWorks from './components/HowItWorks';
import HumanVsAI from './components/HumanVsAI';
import Safety from './components/Safety';
import Pricing from './components/Pricing';
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
    <div className="min-h-screen bg-slate-50/50 text-slate-900 flex flex-col font-sans selection:bg-rose-500 selection:text-white relative">
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Aurora Mesh Gradient Background */}
      <AuroraBackground />

      {/* Custom Soft Glowing Cursor */}
      <CustomCursor />

      {/* Fixed Navigation Bar */}
      <Header onOpenChat={() => handleOpenChatWithTopic('general')} />

      {/* Main Content Area: Emotions -> Anxiety -> Relaxed Flow */}
      <main className="pt-20 overflow-x-hidden flex-1 relative z-10 space-y-12">
        {/* Welcome Hero */}
        <Hero onOpenChat={() => handleOpenChatWithTopic('general')} />

        {/* Stage 1: Emotions */}
        <EmotionsSection onSelectTopic={handleOpenChatWithTopic} />

        {/* Stage 2: Anxiety */}
        <AnxietySection onSelectTopic={handleOpenChatWithTopic} />

        {/* Stage 3: Relaxed */}
        <RelaxedSection
          onSelectTopic={handleOpenChatWithTopic}
          onOpenChat={() => handleOpenChatWithTopic('general')}
        />

        {/* How It Works */}
        <HowItWorks onOpenChat={() => handleOpenChatWithTopic('general')} />

        {/* Real Human Empathy vs Cold AI */}
        <HumanVsAI onOpenChat={() => handleOpenChatWithTopic('general')} />

        {/* Safety & Privacy Guarantee */}
        <Safety />

        {/* Simple Transparent Pricing */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Final CTA Banner */}
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
