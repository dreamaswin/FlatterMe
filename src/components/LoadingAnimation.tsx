
import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center z-50">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-transparent to-blue-950/20" />
      
      {/* Floating ambient orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative">
        {/* Outer glow ring */}
        <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-xl animate-pulse" />
        
        {/* Main loading circle */}
        <div className="relative w-24 h-24 rounded-full border-2 border-white/10">
          {/* Animated progress ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-400 border-r-purple-400 animate-spin" />
          <div className="absolute inset-2 rounded-full border border-transparent border-t-blue-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
          
          {/* Center logo/icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">✨</span>
            </div>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="mt-8 text-center">
          <p className="text-white/70 text-sm tracking-wider font-light animate-pulse">
            Loading Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
