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
  return <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 relative overflow-hidden bg-white">
      <div className="relative w-full max-w-4xl mx-auto z-10">
        {/* Title */}
        <h1 className="text-center mb-12">
          <span className="block font-bold text-gray-900 text-6xl md:text-8xl tracking-tight font-cereal" style={{
          letterSpacing: '-3px'
        }}>Have a nice Day!</span>
          <span className="text-sm text-gray-600 block mt-4 font-light md:text-base tracking-wide">The warmest lines </span>
        </h1>

        {/* Main Content */}
        {!activeCharacter && <div className="text-center mb-12">
            
            <button onClick={generateRandomCompliment} className="group relative text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 bg-gray-900 hover:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-105 transform">
              <span className="relative z-10">Boost me up</span>
            </button>
            
          </div>}

        {/* Compliment Card */}
        {activeCharacter && compliment && <div className="mb-8 animate-fade-in">
            <ComplimentCard character={activeCharacter} compliment={compliment} />
          </div>}

        {/* Another one button */}
        {activeCharacter && compliment && <div className="flex justify-center">
            <button onClick={generateRandomCompliment} className="group relative bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
              <span className="relative z-10">Give me more! ✨</span>
            </button>
          </div>}
      </div>

      {/* Confetti animation */}
      {showConfetti && <Confetti colors={activeCharacter ? [activeCharacter.borderColor, activeCharacter.textColor, "#8B5CF6", "#3B82F6"] : undefined} />}
    </div>;
};
export default Index;