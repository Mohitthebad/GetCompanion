import React, { useState, useEffect, useRef } from 'react';

const COMPANIONS = [
  {
    id: 1,
    name: 'Ananya Sharma',
    role: 'Heartache & Healing Support',
    rating: '5.0',
    sessions: 620,
    avatar: 'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?auto=format&fit=crop&w=200&q=80',
    quote: 'Take a deep breath. Your heartache is real, and you do not have to carry it alone.',
    introMsg: "Namaste. I'm Ananya. I know how heavy an aching heart feels. Take all the time you need—what's been hurting your heart today?",
    themeColor: '#FF8CB7'
  },
  {
    id: 2,
    name: 'Arjun Mehta',
    role: '3 AM Loneliness & Overthinking',
    rating: '4.9',
    sessions: 480,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    quote: 'When the quiet room gets too loud, I am here to sit with you in silence or conversation.',
    introMsg: "Hello friend. I'm Arjun. If you are feeling lonely or can't sleep, I'm right here with open ears.",
    themeColor: '#0066FF'
  },
  {
    id: 3,
    name: 'Meera Kapoor',
    role: 'Gentle Venting & Emotional Support',
    rating: '5.0',
    sessions: 510,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'Cry if you need to, vent if you want to. No judgment, only warm human presence.',
    introMsg: "Welcome. I'm Meera. Take a soft breath. You are safe here to say whatever is on your mind.",
    themeColor: '#FF5500'
  }
];

const COMPANION_RESPONSES = [
  "Thank you for sharing that with me. I hear the pain in your words, and I'm right here with you.",
  "Silent goodbyes and loneliness hurt so deeply. How is your chest and breathing feeling right now?",
  "I completely understand why you feel this way. It's completely valid and human. Take your time.",
  "You don't have to apologize for feeling sad or crying. I am holding space for you.",
  "It takes so much strength to speak about what hurts. I'm listening to every word."
];

export default function ChatModal({ isOpen, onClose, initialTopic = 'heartache', initialPlan = null }) {
  const [step, setStep] = useState(1);
  const [topic, setTopic] = useState(initialTopic);
  const [selectedCompanion, setSelectedCompanion] = useState(COMPANIONS[0]);
  const [chatMode, setChatMode] = useState('chat');
  
  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (initialTopic) setTopic(initialTopic);
  }, [initialTopic]);

  useEffect(() => {
    if (step === 3 && selectedCompanion) {
      setMessages([
        {
          id: 1,
          sender: 'companion',
          text: selectedCompanion.introMsg,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  }, [step, selectedCompanion]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const handleStartSession = (companion) => {
    setSelectedCompanion(companion);
    setStep(3);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: inputVal,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const randomResponse = COMPANION_RESPONSES[Math.floor(Math.random() * COMPANION_RESPONSES.length)];
      const compMsg = {
        id: Date.now() + 1,
        sender: 'companion',
        text: randomResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, compMsg]);
    }, 1400);
  };

  const resetAndClose = () => {
    setStep(1);
    setMessages([]);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black-bg/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-xxl max-w-2xl w-full h-[90vh] max-h-[680px] shadow-2xl flex flex-col overflow-hidden border border-black-border relative">
        
        {/* Header */}
        <div className="px-6 py-4 bg-black-bg text-white border-b border-black-border flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-xl">favorite</span>
            </div>
            <div>
              <h3 className="font-bold text-base text-white">
                {step === 3 ? `Healing Session with ${selectedCompanion.name}` : 'Connect with an Empathetic Listener'}
              </h3>
              <p className="text-xs text-[#0066FF] font-bold">
                {step === 3 ? '100% Confidential & Anonymous' : 'Your first conversation is free'}
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-black-card rounded-full transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Body content based on step */}
        {step === 1 && (
          <div className="p-6 overflow-y-auto flex-1 flex flex-col justify-between bg-slate-50">
            <div>
              <div className="mb-6">
                <span className="text-[#FF5500] font-bold text-xs uppercase tracking-wider">Step 1 of 2</span>
                <h2 className="font-black text-2xl text-black-bg mt-1">What is weighing on your heart today?</h2>
                <p className="text-gray-600 text-sm mt-1 font-medium">Select what you are going through so we can pair you with a gentle listener.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  { id: 'heartache', label: 'Heartache & Silent Goodbyes', icon: 'heart_broken', color: '#FF8CB7' },
                  { id: 'loneliness', label: 'Deep Loneliness & Isolation', icon: 'public', color: '#0066FF' },
                  { id: 'late-night', label: '3 AM Overthinking & Anxiety', icon: 'nightlight', color: '#FFCC00' },
                  { id: 'grief', label: 'Silent Grief & Heavy Feelings', icon: 'sentiment_sad', color: '#FF5500' },
                  { id: 'vent', label: 'Just Need to Vent Freely', icon: 'chat', color: '#FF5500' }
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTopic(t.id)}
                    className={`p-4 rounded-xl border flex items-center gap-3 text-left transition-all ${
                      topic === t.id
                        ? 'border-primary bg-orange-50 text-primary shadow-sm font-bold'
                        : 'border-gray-200 hover:border-[#0066FF] bg-white text-black-bg font-medium'
                    }`}
                  >
                    <span className="material-symbols-outlined" style={{ color: t.color }}>{t.icon}</span>
                    <span className="text-sm font-bold">{t.label}</span>
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <label className="font-bold text-xs uppercase text-gray-500 block mb-2">Format Preference</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setChatMode('chat')}
                    className={`flex-1 py-3 px-4 rounded-xl border flex items-center justify-center gap-2 text-sm font-bold ${
                      chatMode === 'chat'
                        ? 'bg-[#FF5500] text-white border-[#FF5500] shadow-md'
                        : 'bg-white text-black-bg border-gray-200'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">chat</span>
                    <span>Encrypted Text Chat</span>
                  </button>
                  <button
                    onClick={() => setChatMode('voice')}
                    className={`flex-1 py-3 px-4 rounded-xl border flex items-center justify-center gap-2 text-sm font-bold ${
                      chatMode === 'voice'
                        ? 'bg-[#0066FF] text-white border-[#0066FF] shadow-md'
                        : 'bg-white text-black-bg border-gray-200'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">mic</span>
                    <span>Private Voice Session</span>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full bg-[#FF5500] text-white font-black py-4 rounded-full shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Next: Select Empathetic Listener</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="p-6 overflow-y-auto flex-1 flex flex-col justify-between bg-slate-50">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[#0066FF] font-bold text-xs uppercase tracking-wider">Step 2 of 2</span>
                  <h2 className="font-black text-2xl text-black-bg mt-1">Matched Empathetic Listeners</h2>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-[#FF5500] font-bold hover:underline"
                >
                  ← Change Topic
                </button>
              </div>

              <div className="space-y-4">
                {COMPANIONS.map((comp) => (
                  <div
                    key={comp.id}
                    className="bg-white p-5 rounded-xxl border border-gray-200 hover:border-primary transition-all flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={comp.avatar}
                        alt={comp.name}
                        className="w-14 h-14 rounded-full object-cover border-2 shadow-xs"
                        style={{ borderColor: comp.themeColor }}
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-base text-black-bg">{comp.name}</h4>
                          <span className="material-symbols-outlined text-[#0066FF] text-sm">verified</span>
                        </div>
                        <p className="text-xs text-gray-500 font-medium">{comp.role}</p>
                        <p className="text-xs italic text-gray-600 mt-1 max-w-sm">"{comp.quote}"</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleStartSession(comp)}
                      className="w-full sm:w-auto bg-[#FF5500] text-white font-bold text-xs px-6 py-2.5 rounded-full hover:bg-orange-600 transition-all shrink-0 shadow-md shadow-orange-500/20 flex items-center gap-1 justify-center"
                    >
                      <span className="material-symbols-outlined text-sm">favorite</span>
                      <span>Talk Now</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center text-xs text-gray-500 font-medium mt-4">
              🛡️ All sessions are encrypted, private, and 100% judgment-free.
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex-1 flex flex-col bg-slate-100 overflow-hidden">
            {/* Companion bar */}
            <div className="bg-black-bg text-white px-6 py-3 border-b border-black-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={selectedCompanion.avatar}
                    alt={selectedCompanion.name}
                    className="w-10 h-10 rounded-full object-cover border-2"
                    style={{ borderColor: selectedCompanion.themeColor || '#FF5500' }}
                  />
                  <span className="w-3 h-3 bg-[#0066FF] rounded-full absolute bottom-0 right-0 border-2 border-black-bg"></span>
                </div>
                <div>
                  <div className="font-bold text-sm text-white">
                    {selectedCompanion.name}
                  </div>
                  <div className="text-xs text-[#0066FF] font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full animate-pulse"></span>
                    <span>Listening Live</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="text-xs text-white hover:text-primary font-bold border border-black-border px-3 py-1.5 rounded-full bg-black-card"
              >
                Switch Listener
              </button>
            </div>

            {/* Chat messages */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      m.sender === 'user'
                        ? 'bg-[#FF5500] text-white rounded-tr-none shadow-md font-bold'
                        : 'bg-white border border-gray-200 text-black-bg rounded-tl-none shadow-sm font-medium'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{m.text}</p>
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 px-1 font-medium">{m.time}</span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-gray-600 text-xs italic bg-white p-3 rounded-xl border border-gray-200 w-fit">
                  <span className="material-symbols-outlined text-[#FF8CB7] text-sm animate-spin">favorite</span>
                  <span>{selectedCompanion.name} is typing a warm response...</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input area */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200 flex gap-2 items-center">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Share your feelings, vent, or talk about what hurts..."
                className="flex-1 bg-slate-100 border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-primary text-black-bg font-medium"
              />
              <button
                type="submit"
                disabled={!inputVal.trim()}
                className="bg-[#FF5500] disabled:opacity-40 text-white p-3 rounded-full hover:bg-orange-600 transition-all shrink-0 flex items-center justify-center shadow-md shadow-orange-500/30"
              >
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
