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
      if (target) {
        const isClickable =
          target.closest('button') ||
          target.closest('a') ||
          target.closest('.cursor-pointer') ||
          target.closest('input') ||
          target.closest('header') ||
          target.closest('nav');

        setIsHovered(!!isClickable);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Glow Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[99999] rounded-full transition-transform duration-200 ease-out border ${
          isHovered
            ? 'w-11 h-11 bg-orange-500/10 border-[#FF5500] scale-110 shadow-[0_0_15px_rgba(255,85,0,0.3)]'
            : 'w-8 h-8 border-orange-500/40 bg-orange-500/5'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      {/* Inner Pinpoint Dot */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[99999] rounded-full transition-all duration-75 ${
          isHovered ? 'w-2.5 h-2.5 bg-[#FF5500] shadow-[0_0_10px_#FF5500]' : 'w-2 h-2 bg-[#FF5500]'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
}
