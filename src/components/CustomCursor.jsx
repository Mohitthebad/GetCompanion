import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isClickable =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.cursor-pointer') ||
        target.closest('input');

      setIsHovered(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-300 ease-out border ${
          isHovered
            ? 'w-12 h-12 -translate-x-1/2 -translate-y-1/2 bg-orange-500/10 border-orange-500/50 scale-125 backdrop-blur-[2px]'
            : 'w-8 h-8 -translate-x-1/2 -translate-y-1/2 border-orange-400/30 bg-orange-400/5'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      {/* Inner Pinpoint Dot */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-all duration-150 ${
          isHovered ? 'w-3 h-3 bg-[#FF5500] shadow-[0_0_12px_#FF5500]' : 'w-2 h-2 bg-[#FF5500]'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
}
