
import React, { useState, useEffect } from "react";
import { Copy } from "lucide-react";
import { Character } from "../data/characters";
import { toast } from "@/hooks/use-toast";

interface ComplimentCardProps {
  character: Character;
  compliment: string;
  className?: string;
}

const ComplimentCard: React.FC<ComplimentCardProps> = ({
  character,
  compliment,
  className = "",
}) => {
  const [showCopyNudge, setShowCopyNudge] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${compliment} - ${character.name} (${character.show})`);
    setShowCopyNudge(true);
    
    toast({
      title: "Copied to clipboard",
      description: "Share the compliment with your friends!",
      duration: 2000,
    });
  };

  // Hide copy nudge after 3 seconds
  useEffect(() => {
    if (showCopyNudge) {
      const timer = setTimeout(() => {
        setShowCopyNudge(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [showCopyNudge]);

  return (
    <div
      className={`relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transition-all duration-300 ${className} max-w-2xl w-full mx-auto border border-white/10 hover:shadow-purple-500/10`}
      style={{
        boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)`
      }}
    >
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      <div className="flex items-start mb-8 relative z-10">
        <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200/50 mr-4 shadow-sm">
          {character.emoji}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-800 font-cereal" style={{ letterSpacing: '-1px' }}>
            {character.name}
          </h3>
          <p className="text-sm text-slate-500 font-light tracking-wide">{character.show}</p>
        </div>
      </div>

      <div className="relative mb-8 z-10">
        <div className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed font-cereal" style={{ letterSpacing: '-1px' }}>
          "{compliment}"
        </div>
      </div>
      
      <div className="relative">
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white text-sm transition-all duration-300 relative z-10 shadow-lg hover:shadow-xl hover:scale-105 transform"
        >
          <Copy size={14} />
          <span>Copy</span>
        </button>
        
        {/* Copy nudge that appears and disappears */}
        {showCopyNudge && (
          <div className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-3 py-1 rounded-lg text-sm animate-fade-in shadow-lg">
            Copied!
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-green-600 rotate-45" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplimentCard;
