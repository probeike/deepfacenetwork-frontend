'use client';

import { useMemo } from 'react';

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  opacity: number;
}

export default function RetroSpaceBackground() {
  // Generate random stars with useMemo to avoid regenerating on every render
  const stars = useMemo(() => {
    // Create an array of 100 stars with random positions
    return Array.from({ length: 100 }, (_, index) => {
      return {
        id: index,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1, // Size between 1-3px
        opacity: Math.random() * 0.7 + 0.3, // Opacity between 0.3-1
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Stars */}
      {stars.map((star: Star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Planet 1 - Large purple planet with slow rotation */}
      <div
        className="absolute rounded-full bg-gradient-to-br from-retro-purple to-retro-blue animate-spin-slow"
        style={{
          width: '120px',
          height: '120px',
          top: '15%',
          right: '10%',
          boxShadow: '0 0 40px rgba(157, 78, 221, 0.4), inset 0 0 20px rgba(0, 0, 0, 0.6)',
        }}
      />

      {/* Planet 2 - Medium teal planet with slower rotation */}
      <div
        className="absolute rounded-full bg-gradient-to-br from-retro-teal to-retro-blue animate-spin-slower"
        style={{
          width: '80px',
          height: '80px',
          bottom: '20%',
          left: '15%',
          boxShadow: '0 0 30px rgba(0, 180, 216, 0.4), inset 0 0 15px rgba(0, 0, 0, 0.6)',
        }}
      />

      {/* Planet 3 - Small pink planet with no rotation */}
      <div
        className="absolute rounded-full bg-gradient-to-br from-retro-pink to-retro-purple"
        style={{
          width: '40px',
          height: '40px',
          top: '60%',
          left: '70%',
          boxShadow: '0 0 20px rgba(255, 93, 143, 0.4), inset 0 0 10px rgba(0, 0, 0, 0.6)',
        }}
      />

      {/* Retro Arc 1 */}
      <svg
        className="absolute"
        style={{ top: '30%', left: '30%', width: '200px', height: '200px', transform: 'rotate(45deg)' }}
      >
        <defs>
          <linearGradient id="arcGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4361ee" />
            <stop offset="100%" stopColor="#9d4edd" />
          </linearGradient>
        </defs>
        <path
          d="M 10 100 A 90 90 0 0 1 190 100"
          fill="none"
          stroke="url(#arcGradient1)"
          strokeWidth="2"
        />
      </svg>

      {/* Retro Arc 2 */}
      <svg
        className="absolute"
        style={{ bottom: '20%', right: '25%', width: '300px', height: '300px', transform: 'rotate(-30deg)' }}
      >
        <defs>
          <linearGradient id="arcGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff5d8f" />
            <stop offset="100%" stopColor="#00b4d8" />
          </linearGradient>
        </defs>
        <path
          d="M 20 150 A 130 130 0 0 1 280 150"
          fill="none"
          stroke="url(#arcGradient2)"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}