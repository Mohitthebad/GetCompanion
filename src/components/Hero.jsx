import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenChat }) {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCompanion, setActiveCompanion] = useState(0);
  const audioRef = useRef(null);

  // 3D tilt state for mouse movement
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 12;
    const y = (clientY / innerHeight - 0.5) * -12;
    setTilt({ x, y });
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = async () => {
      try {
        audio.volume = 0.4;
        await audio.play();
        setIsPlaying(true);
        setIsMuted(false);
      } catch (err) {
        setIsMuted(true);
        setIsPlaying(false);
      }
    };

    playAudio();

    const handleFirstInteraction = () => {
      if (audio && audio.paused) {
        audio.play().then(() => {
          setIsPlaying(true);
          setIsMuted(false);
        }).catch(() => {});
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused || isMuted) {
      audio.muted = false;
      audio.play().then(() => {
        setIsMuted(false);
        setIsPlaying(true);
      }).catch((e) => console.log("Audio play error", e));
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  const companions = [
    {
      name: 'Ananya Sharma',
      role: 'Heartache & Healing Listener',
      avatar: 'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?auto=format&fit=crop&w=200&q=80',
      status: 'Available'
    },
    {
      name: 'Arjun Mehta',
      role: '3 AM Loneliness Companion',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      status: 'Online'
    },
    {
      name: 'Meera Kapoor',
      role: 'Gentle Venting Support',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      status: 'Listening'
    }
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative pt-8 pb-20 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Audio element */}
      <audio ref={audioRef} src="/audio.mp3" loop preload="auto" />

      {/* Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-orange-400/20 via-pink-400/15 to-rose-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Clean Typography & 1-Tap Selector */}
        <div className="lg:col-span-7">
          
          {/* Trust Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-600 text-xs font-extrabold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            <span>100% Anonymous & Confidential • Free 1st Session</span>
          </motion.div>

          {/* Clean High-Impact Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-6"
          >
            <span>Dil Toota Hai.</span>
            <span className="block mt-2 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
              Chalo, Khud Se Dobara Milte Hain.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-600 font-medium mb-8 leading-relaxed max-w-xl"
          >
            Dil ki baat, bina kisi judgment ke. 60 seconds me verified listener se connect ho jao.
          </motion.p>

          {/* 1-Tap Interactive Mood Engagement Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-8 p-5 bg-white rounded-3xl border border-slate-200/80 shadow-xl max-w-xl"
          >
            <p className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              <span>Aaj Kaisa Feel Kar Rahe Ho? (Tap To Connect Instantly)</span>
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <button
                onClick={() => onOpenChat('heartache')}
                className="p-3 rounded-2xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 font-extrabold text-xs text-center transition-all active:scale-95 flex flex-col items-center gap-1.5 shadow-2xs"
              >
                <span className="text-lg">💔</span>
                <span>Dil Toota</span>
              </button>

              <button
                onClick={() => onOpenChat('late-night')}
                className="p-3 rounded-2xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 font-extrabold text-xs text-center transition-all active:scale-95 flex flex-col items-center gap-1.5 shadow-2xs"
              >
                <span className="text-lg">🌙</span>
                <span>2 AM Stress</span>
              </button>

              <button
                onClick={() => onOpenChat('loneliness')}
                className="p-3 rounded-2xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 font-extrabold text-xs text-center transition-all active:scale-95 flex flex-col items-center gap-1.5 shadow-2xs"
              >
                <span className="text-lg">🌌</span>
                <span>Akela Lag Raha</span>
              </button>

              <button
                onClick={() => onOpenChat('emotional-vent')}
                className="p-3 rounded-2xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-700 font-extrabold text-xs text-center transition-all active:scale-95 flex flex-col items-center gap-1.5 shadow-2xs"
              >
                <span className="text-lg">🍃</span>
                <span>Vent Karna</span>
              </button>
            </div>
          </motion.div>

          {/* Active Proof Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-center gap-4 p-3 px-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm w-fit"
          >
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                src={companions[0].avatar}
                alt="Ananya"
              />
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                src={companions[1].avatar}
                alt="Arjun"
              />
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                src={companions[2].avatar}
                alt="Meera"
              />
            </div>
            <div className="text-xs">
              <div className="font-black text-slate-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>1,200+ Verified Listeners Active</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Clean Interactive Sanctuary Core */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          <motion.div
            style={{
              transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transformStyle: 'preserve-3d',
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative w-full max-w-[380px] aspect-square flex items-center justify-center"
          >
            
            {/* Outer Orbital Rings */}
            <div className="absolute inset-0 rounded-full border border-rose-200/60 animate-spin-slow pointer-events-none"></div>
            <div className="absolute inset-8 rounded-full border border-orange-200/60 pointer-events-none"></div>

            {/* Central Interactive Core */}
            <motion.div
              onClick={() => onOpenChat('general')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-20 cursor-pointer w-44 h-44 rounded-full bg-gradient-to-br from-orange-500 via-rose-500 to-pink-500 p-1 shadow-2xl shadow-rose-500/30 flex flex-col items-center justify-center text-white text-center group"
            >
              <div className="w-full h-full rounded-full bg-slate-900/90 backdrop-blur-md flex flex-col items-center justify-center p-4 transition-colors group-hover:bg-slate-900/80">
                <span className="material-symbols-outlined text-4xl text-rose-400 mb-1 group-hover:scale-125 transition-transform">
                  favorite
                </span>
                
                <div className="flex items-end gap-1 h-4 mb-2">
                  <span className="w-1 bg-rose-400 h-full animate-bounce rounded-full" style={{ animationDuration: '0.6s' }}></span>
                  <span className="w-1 bg-orange-400 h-2/3 animate-bounce rounded-full" style={{ animationDuration: '0.9s' }}></span>
                  <span className="w-1 bg-amber-400 h-4/5 animate-bounce rounded-full" style={{ animationDuration: '0.5s' }}></span>
                </div>

                <span className="text-xs font-black text-white tracking-wide uppercase">
                  Tap to Connect
                </span>
                <span className="text-[10px] text-slate-300 font-medium mt-0.5">
                  60s Match Time
                </span>
              </div>
            </motion.div>

            {/* Floating Listener 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              onClick={() => { setActiveCompanion(0); onOpenChat(); }}
              className="absolute top-2 left-0 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-rose-100 flex items-center gap-3 cursor-pointer z-30 hover:scale-105 transition-transform"
            >
              <img
                src={companions[0].avatar}
                alt={companions[0].name}
                className="w-9 h-9 rounded-full object-cover border-2 border-rose-400"
              />
              <div className="text-left">
                <p className="text-xs font-black text-slate-900">{companions[0].name}</p>
                <p className="text-[10px] text-rose-500 font-bold">{companions[0].role}</p>
              </div>
            </motion.div>

            {/* Floating Listener 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              onClick={() => { setActiveCompanion(1); onOpenChat(); }}
              className="absolute top-1/3 -right-16 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-indigo-100 flex items-center gap-3 cursor-pointer z-30 hover:scale-105 transition-transform"
            >
              <img
                src={companions[1].avatar}
                alt={companions[1].name}
                className="w-9 h-9 rounded-full object-cover border-2 border-indigo-400"
              />
              <div className="text-left">
                <p className="text-xs font-black text-slate-900">{companions[1].name}</p>
                <p className="text-[10px] text-indigo-500 font-bold">{companions[1].role}</p>
              </div>
            </motion.div>

            {/* Floating Listener 3 */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              onClick={() => { setActiveCompanion(2); onOpenChat(); }}
              className="absolute bottom-2 left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-amber-100 flex items-center gap-3 cursor-pointer z-30 hover:scale-105 transition-transform"
            >
              <img
                src={companions[2].avatar}
                alt={companions[2].name}
                className="w-9 h-9 rounded-full object-cover border-2 border-amber-400"
              />
              <div className="text-left">
                <p className="text-xs font-black text-slate-900">{companions[2].name}</p>
                <p className="text-[10px] text-amber-600 font-bold">{companions[2].role}</p>
              </div>
            </motion.div>

            {/* Wait time badge */}
            <div className="absolute -bottom-4 right-10 bg-slate-900 text-white px-3.5 py-1.5 rounded-full border border-slate-700 text-[11px] font-extrabold flex items-center gap-1.5 shadow-lg z-20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Wait Time: &lt; 30s</span>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Ambient Audio Toggle */}
      <div className="absolute bottom-4 right-4 md:right-8 z-30 flex items-center">
        <button
          onClick={toggleMute}
          className="flex items-center gap-2.5 bg-slate-900 text-white hover:bg-slate-800 px-4 py-2.5 rounded-full border border-slate-700 shadow-xl transition-all active:scale-95"
        >
          {!isMuted && isPlaying ? (
            <span className="material-symbols-outlined text-rose-400 text-lg">volume_up</span>
          ) : (
            <span className="material-symbols-outlined text-slate-400 text-lg">volume_off</span>
          )}
          <span className="text-xs font-extrabold">
            {!isMuted && isPlaying ? 'Ambience Playing' : 'Play Sound'}
          </span>
        </button>
      </div>

    </section>
  );
}
