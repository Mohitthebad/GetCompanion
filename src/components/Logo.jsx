import React from 'react';

export default function Logo({ className = 'h-10', isDark = false }) {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/logo.png"
        alt="Get Companion"
        className="h-full w-auto object-contain max-h-12"
      />
    </div>
  );
}
