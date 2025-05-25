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
  return <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 relative overflow-hidden bg-[#fcfdfd]">
      <div className="relative w-full max-w-4xl mx-auto z-10">
        {/* Title */}
        <h1 className="text-center mb-12">
          <span style={{
          letterSpacing: '-3px'
        }} className="block font-bold text-6xl tracking-tight font-cereal text-indigo-500 md:text-8xl">
            Catch-phrased.
          </span>
          <span className="text-sm text-gray-600 block mt-4 font-light md:text-base tracking-wide">
            Your favorite characters. Their nicest words. Just for YOU!
          </span>
        </h1>

        {/* Main Content */}
        {!activeCharacter && <div className="text-center mb-12">
            
            <button onClick={generateRandomCompliment} className="group relative text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 bg-gray-900 hover:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-105 transform">
              <span className="relative z-10">Hit me with a compliment!</span>
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

      {/* Footer */}
      <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <p className="text-sm text-gray-500 font-medium">
          Built with{" "}
          <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 underline transition-colors">
            Lovable
          </a>
          {" "}by Surya
        </p>
      </footer>

      {/* Confetti animation */}
      {showConfetti && <Confetti colors={activeCharacter ? [activeCharacter.borderColor, activeCharacter.textColor, "#8B5CF6", "#3B82F6"] : undefined} />}
    </div>;
};
export default Index;