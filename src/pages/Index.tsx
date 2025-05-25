
import React, { useState } from "react";
import { characters } from "../data/characters";
import ComplimentCard from "@/components/ComplimentCard";
import Confetti from "@/components/Confetti";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Index = () => {
  const [activeCharacter, setActiveCharacter] = useState<typeof characters[0] | null>(null);
  const [compliment, setCompliment] = useState<string>("");
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();

  const generateRandomCompliment = () => {
    // Get random character
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];

    // Get random compliment from that character
    const randomCompliment = randomCharacter.quotes[Math.floor(Math.random() * randomCharacter.quotes.length)];
    
    setActiveCharacter(randomCharacter);
    setCompliment(randomCompliment);

    // Show confetti effect
    setShowConfetti(true);
    // Hide confetti after animation completes
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-slate-900/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none" />

      <div className="relative w-full max-w-4xl mx-auto z-10">
        {/* Title */}
        <h1 className="text-center mb-12">
          <span className="block font-bold text-white text-6xl md:text-8xl tracking-tight font-cereal" style={{ letterSpacing: '-3px' }}>
            Catch-phrased.
          </span>
          <span className="text-sm text-slate-400 block mt-4 font-light md:text-base tracking-wide">
            Your favorite characters. Their nicest words. Just for YOU!
          </span>
        </h1>

        {/* Main Content */}
        {!activeCharacter && (
          <div className="text-center mb-12">
            <p className="text-slate-300 mb-12 text-lg font-light">
              Get a delightful compliment from your favourite TV characters with a burst of confetti!
            </p>
            <button 
              onClick={generateRandomCompliment} 
              className="group relative text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 transform"
            >
              <span className="relative z-10">Hit me with a compliment!</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <div className="mt-12">
              <Link 
                to="/joe" 
                className="inline-flex items-center text-sm text-slate-400 hover:text-slate-200 transition-colors duration-300"
              >
                <span className="mr-2">🔍</span> Try Joe Goldberg's darker compliments
              </Link>
            </div>
          </div>
        )}

        {/* Compliment Card */}
        {activeCharacter && compliment && (
          <div className="mb-8 animate-fade-in">
            <div className="relative">
              {/* Ambient glow behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent rounded-3xl blur-xl scale-110" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />
              
              <ComplimentCard character={activeCharacter} compliment={compliment} />
            </div>
          </div>
        )}

        {/* Another one button */}
        {activeCharacter && compliment && (
          <div className="flex justify-center">
            <button 
              onClick={generateRandomCompliment} 
              className="group relative bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 transform"
            >
              <span className="relative z-10">Give me more! ✨</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        )}
      </div>

      {/* Confetti animation */}
      {showConfetti && (
        <Confetti colors={activeCharacter ? [activeCharacter.borderColor, activeCharacter.textColor, "#8B5CF6", "#3B82F6"] : undefined} />
      )}
    </div>
  );
};

export default Index;
