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
    const x = (clientX / innerWidth - 0.5) * 16;
    const y = (clientY / innerHeight - 0.5) * -16;
    setTilt({ x, y });
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = async () => {
      try {
        audio.volume = 0.5;
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
      status: 'Available',
      quote: '"I know how quiet rooms feel late at night. Let\'s talk."',
      color: '#FF8CB7'
    },
    {
      name: 'Arjun Mehta',
      role: '3 AM Loneliness Companion',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      status: 'Online',
      quote: '"No heavy expectations. Just warm, supportive human company."',
      color: '#0066FF'
    },
    {
      name: 'Meera Kapoor',
      role: 'Gentle Venting Support',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      status: 'Listening',
      quote: '"Vent freely. Your feelings are 100% valid here."',
      color: '#FF5500'
    }
  ];

  const wordsPart1 = ["Dil", "Toota", "Hai."];
  const wordsPart2 = ["Chalo,", "Khud", "Se", "Dobara", "Milte", "Hai."];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative pt-6 pb-20 px-margin-mobile md:px-margin-desktop overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-[#FDFBF7]"
    >
      {/* Audio element for /audio.mp3 */}
      <audio ref={audioRef} src="/audio.mp3" loop preload="auto" />

      {/* Animated Floating 3D Background Icons */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-10 pointer-events-none opacity-20 text-[#FF8CB7] hidden lg:block"
      >
        <span className="material-symbols-outlined text-5xl">favorite</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 right-12 pointer-events-none opacity-20 text-[#0066FF] hidden lg:block"
      >
        <span className="material-symbols-outlined text-5xl">forum</span>
      </motion.div>

      {/* Ambient Light Accents */}
      <div className="absolute top-0 right-1/4 w-[550px] h-[550px] bg-gradient-to-br from-orange-400/20 via-pink-400/15 to-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-container-max mx-auto grid lg:grid-cols-12 gap-12 items-center pt-6 relative z-10">
        
        {/* Left Column: Word-by-Word Motion Reveal */}
        <div className="lg:col-span-7">
          
          {/* Main Headline with Blur-to-Clear Word-by-Word Motion */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black-bg tracking-tight leading-[1.14] mb-6">
            <span className="inline-flex flex-wrap gap-x-3">
              {wordsPart1.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>

            <span className="block mt-2 font-black bg-gradient-to-r from-[#FF5500] via-[#FF7700] to-[#0066FF] bg-clip-text text-transparent">
              <span className="inline-flex flex-wrap gap-x-3">
                {wordsPart2.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
            className="text-lg md:text-xl text-gray-700 font-semibold mb-8 leading-relaxed max-w-xl"
          >
            Silent breakups, heavy heart ya late night overthinking? Jab 3 AM pe rooms shaant aur dimaag loud ho jata hai—connect karo verified listeners ke sath jo bina kisi judgment ke aapki baat sunte hain.
          </motion.p>

          {/* Primary Magnetic Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-10"
          >
            <button
              onClick={onOpenChat}
              className="btn-glow bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white font-black text-lg px-8 py-4 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-2xl hover:shadow-orange-500/40 active:scale-95 transition-all flex items-center justify-center gap-3 group"
            >
              <span>Kisi Se Dil Ki Baat Karo</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                favorite
              </span>
            </button>
          </motion.div>

          {/* Live Online Listeners Proof Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex items-center gap-4 p-3.5 bg-white/90 rounded-2xl border border-gray-100 shadow-sm backdrop-blur-md w-fit"
          >
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?auto=format&fit=crop&w=120&q=80"
                alt="Ananya"
              />
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80"
                alt="Arjun"
              />
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                alt="Meera"
              />
            </div>
            <div className="text-xs">
              <div className="font-extrabold text-black-bg flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>1,200+ Verified Listeners Active</span>
              </div>
              <p className="text-gray-500 font-medium">Free 1st session • 100% Anonymous</p>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Interactive Live Sanctuary Orbit & Audio Waveform Feature */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          <motion.div
            style={{
              transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transformStyle: 'preserve-3d',
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative w-full max-w-[420px] aspect-square flex items-center justify-center"
          >
            
            {/* Outer Glowing Orbital Rings */}
            <div className="absolute inset-0 rounded-full border border-orange-200/50 animate-spin-slow pointer-events-none"></div>
            <div className="absolute inset-8 rounded-full border border-pink-200/60 animate-reverse-spin pointer-events-none"></div>
            <div className="absolute inset-16 rounded-full border border-blue-200/40 pointer-events-none"></div>

            {/* Central Interactive Sanctuary Core Pulse */}
            <motion.div
              onClick={onOpenChat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-20 cursor-pointer w-44 h-44 rounded-full bg-gradient-to-tr from-[#FF5500] via-[#FF7700] to-[#FF8CB7] p-1 shadow-2xl shadow-orange-500/30 flex flex-col items-center justify-center text-white text-center group"
            >
              <div className="w-full h-full rounded-full bg-black-bg/90 backdrop-blur-md flex flex-col items-center justify-center p-4 transition-colors group-hover:bg-black-bg/80">
                {/* Heart Pulse Icon */}
                <span className="material-symbols-outlined text-4xl text-[#FF5500] mb-1 group-hover:scale-125 transition-transform">
                  favorite
                </span>
                
                {/* Live Soundwave Audio Bar Animation */}
                <div className="flex items-end gap-1 h-5 mb-2">
                  <span className="w-1 bg-[#FF8CB7] h-full animate-bounce rounded-full" style={{ animationDuration: '0.6s' }}></span>
                  <span className="w-1 bg-[#0066FF] h-2/3 animate-bounce rounded-full" style={{ animationDuration: '0.9s' }}></span>
                  <span className="w-1 bg-[#FFCC00] h-4/5 animate-bounce rounded-full" style={{ animationDuration: '0.5s' }}></span>
                  <span className="w-1 bg-[#FF5500] h-full animate-bounce rounded-full" style={{ animationDuration: '0.7s' }}></span>
                </div>

                <span className="text-xs font-black text-white tracking-wide uppercase">
                  Tap to Connect Live
                </span>
                <span className="text-[10px] text-gray-400 font-medium mt-0.5">
                  100% Anonymous
                </span>
              </div>
            </motion.div>

            {/* Orbiting Companion 1 (Ananya - Top Left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              onClick={() => { setActiveCompanion(0); onOpenChat(); }}
              className="absolute top-2 left-0 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-pink-100 flex items-center gap-3 cursor-pointer z-30 hover:scale-105 transition-transform"
            >
              <img
                src={companions[0].avatar}
                alt={companions[0].name}
                className="w-10 h-10 rounded-full object-cover border-2 border-[#FF8CB7]"
              />
              <div className="text-left">
                <p className="text-xs font-extrabold text-black-bg">{companions[0].name}</p>
                <p className="text-[10px] text-[#D94680] font-bold">{companions[0].role}</p>
              </div>
            </motion.div>

            {/* Orbiting Companion 2 (Arjun - Right Center) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              onClick={() => { setActiveCompanion(1); onOpenChat(); }}
              className="absolute top-1/3 -right-20 md:-right-28 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-blue-100 flex items-center gap-3 cursor-pointer z-30 hover:scale-105 transition-transform"
            >
              <img
                src={companions[1].avatar}
                alt={companions[1].name}
                className="w-10 h-10 rounded-full object-cover border-2 border-[#0066FF]"
              />
              <div className="text-left">
                <p className="text-xs font-extrabold text-black-bg">{companions[1].name}</p>
                <p className="text-[10px] text-[#0066FF] font-bold">{companions[1].role}</p>
              </div>
            </motion.div>

            {/* Orbiting Companion 3 (Meera - Bottom Left) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              onClick={() => { setActiveCompanion(2); onOpenChat(); }}
              className="absolute bottom-2 left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-orange-100 flex items-center gap-3 cursor-pointer z-30 hover:scale-105 transition-transform"
            >
              <img
                src={companions[2].avatar}
                alt={companions[2].name}
                className="w-10 h-10 rounded-full object-cover border-2 border-[#FF5500]"
              />
              <div className="text-left">
                <p className="text-xs font-extrabold text-black-bg">{companions[2].name}</p>
                <p className="text-[10px] text-[#FF5500] font-bold">{companions[2].role}</p>
              </div>
            </motion.div>

            {/* Floating Live Response Time Pill */}
            <div className="absolute -bottom-4 right-10 bg-black-bg/90 text-white backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black-border text-[11px] font-bold flex items-center gap-1.5 shadow-lg z-20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Avg Wait Time: &lt; 30 Seconds</span>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Mute Button */}
      <div className="absolute bottom-4 right-4 md:right-8 z-30 flex items-center">
        <button
          onClick={toggleMute}
          title={isMuted || !isPlaying ? "Click to play ambient audio" : "Click to mute ambient audio"}
          className="group flex items-center gap-2.5 bg-black-bg/90 backdrop-blur-md text-white hover:bg-black-bg px-4 py-2.5 rounded-full border border-black-border shadow-xl hover:border-primary transition-all active:scale-95"
        >
          {!isMuted && isPlaying ? (
            <div className="flex items-end gap-0.5 h-4 px-0.5">
              <span className="w-1 bg-[#FF8CB7] h-full animate-bounce rounded-full" style={{ animationDuration: '0.6s' }}></span>
              <span className="w-1 bg-[#0066FF] h-2/3 animate-bounce rounded-full" style={{ animationDuration: '0.9s' }}></span>
              <span className="w-1 bg-[#FF5500] h-4/5 animate-bounce rounded-full" style={{ animationDuration: '0.4s' }}></span>
            </div>
          ) : (
            <span className="material-symbols-outlined text-primary text-lg">
              volume_off
            </span>
          )}

          <span className="text-xs font-bold tracking-wide">
            {!isMuted && isPlaying ? (
              <span className="flex items-center gap-1.5">
                <span>Soothing Ambience</span>
                <span className="text-[10px] text-gray-400 group-hover:text-primary">(Mute)</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-[#FF5500]">
                <span>Play Sound</span>
                <span className="material-symbols-outlined text-xs">volume_up</span>
              </span>
            )}
          </span>
        </button>
      </div>

    </section>
  );
}
