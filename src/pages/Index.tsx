
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
  const {
    toast
  } = useToast();

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
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 animate-gradient-xy"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 animate-gradient-xy opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-green-400 via-blue-500 to-purple-500 animate-gradient-xy opacity-50"></div>
      
      <div className="relative w-full max-w-4xl mx-auto z-10">
        {/* Title */}
        <h1 className="text-center mb-12">
          <span className="block font-bold text-white text-6xl md:text-8xl tracking-tight font-cereal drop-shadow-lg" style={{
            letterSpacing: '-3px'
          }}>Have a nice Day!</span>
          <span className="text-sm text-white/90 block mt-4 font-light md:text-base tracking-wide drop-shadow">The warmest lines </span>
        </h1>

        {/* Main Content */}
        {!activeCharacter && (
          <div className="text-center mb-12">
            <button 
              onClick={generateRandomCompliment} 
              className="group relative text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 bg-white/20 backdrop-blur-sm hover:bg-white/30 shadow-lg hover:shadow-xl hover:scale-105 transform border border-white/30"
            >
              <span className="relative z-10">Boost me up</span>
            </button>
          </div>
        )}

        {/* Compliment Card */}
        {activeCharacter && compliment && (
          <div className="mb-8 animate-fade-in">
            <ComplimentCard character={activeCharacter} compliment={compliment} />
          </div>
        )}

        {/* Another one button */}
        {activeCharacter && compliment && (
          <div className="flex justify-center">
            <button 
              onClick={generateRandomCompliment} 
              className="group relative bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform border border-white/30"
            >
              <span className="relative z-10">Give me more! ✨</span>
            </button>
          </div>
        )}
      </div>

      {/* Confetti animation */}
      {showConfetti && <Confetti colors={activeCharacter ? [activeCharacter.borderColor, activeCharacter.textColor, "#8B5CF6", "#3B82F6"] : undefined} />}
    </div>
  );
};

export default Index;
