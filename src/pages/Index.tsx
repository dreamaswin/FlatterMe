
import React, { useState, useEffect } from "react";
import { characters } from "../data/characters";
import ComplimentCard from "@/components/ComplimentCard";
import Confetti from "@/components/Confetti";
import LoadingAnimation from "@/components/LoadingAnimation";
import CharacterCaricatures from "@/components/CharacterCaricatures";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeCharacter, setActiveCharacter] = useState<typeof characters[0] | null>(null);
  const [compliment, setCompliment] = useState<string>("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate loading time for premium feel
    setTimeout(() => setIsLoading(false), 2500);
  }, []);

  const generateRandomCompliment = () => {
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    const randomCompliment = randomCharacter.quotes[Math.floor(Math.random() * randomCharacter.quotes.length)];
    
    setActiveCharacter(randomCharacter);
    setCompliment(randomCompliment);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-transparent to-blue-950/20 pointer-events-none" />
      
      {/* Floating ambient orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-lavender-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-[-0.03em] leading-none">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Compliment
            </span>
            <br />
            <span className="text-white/90">
              Generator
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-12 tracking-[-0.01em] font-light max-w-2xl mx-auto leading-relaxed">
            Receive delightful words from your favorite characters, crafted with ethereal precision
          </p>

          {/* UI Preview with Ambient Glow */}
          <div className="relative mb-12">
            {/* Translucent gradient halo */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl scale-110 opacity-60" />
            
            {/* Main UI container with glow */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />
              <div className="absolute inset-0 rounded-3xl shadow-[0_0_50px_rgba(139,92,246,0.3)]" />
              
              <div className="relative z-10">
                {!activeCharacter ? (
                  <div className="text-center">
                    <CharacterCaricatures />
                    <div className="mt-8">
                      <button 
                        onClick={generateRandomCompliment}
                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 text-white rounded-full font-medium text-lg tracking-[-0.01em] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] active:scale-95"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        Generate Compliment
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <ComplimentCard character={activeCharacter} compliment={compliment} />
                    <div className="text-center">
                      <button 
                        onClick={generateRandomCompliment}
                        className="group relative px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium tracking-[-0.01em] transition-all duration-300 hover:bg-white/20 hover:scale-105"
                      >
                        Another One ✨
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-white/50 text-sm tracking-[-0.01em] font-light">
          Crafted with otherworldly attention to detail
        </div>
      </div>

      {/* Confetti animation */}
      {showConfetti && (
        <Confetti 
          colors={activeCharacter ? [activeCharacter.borderColor, activeCharacter.textColor, "#8B5CF6", "#3B82F6"] : ["#8B5CF6", "#3B82F6", "#A855F7", "#06B6D4"]} 
        />
      )}
    </div>
  );
};

export default Index;
