
import React, { useState } from "react";
import { characters } from "../data/characters";
import ComplimentCard from "@/components/ComplimentCard";
import Confetti from "@/components/Confetti";
import { useToast } from "@/hooks/use-toast";

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
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      {/* Background texture and gradient are applied in CSS */}
      
      {/* Main Content */}
      <div className="relative w-full max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          <span className="block">Compliment Confetti</span>
          <span className="text-lg md:text-xl text-gray-600 font-normal block mt-2">Pop Culture Edition</span>
        </h1>

        {/* Main CTA Button */}
        <div className="w-full flex justify-center mb-12">
          <button
            onClick={generateRandomCompliment}
            className={`skeuomorphic-button py-4 px-8 text-xl bg-gradient-to-br from-purple-500 to-purple-700 ${activeCharacter ? 'mt-4' : ''}`}
          >
            {activeCharacter ? "Hit me again!" : "Hit me with a compliment!"}
          </button>
        </div>

        {/* Compliment Card */}
        {activeCharacter && compliment && (
          <div className="mb-8">
            <ComplimentCard 
              character={activeCharacter} 
              compliment={compliment} 
            />
          </div>
        )}

        {/* Another one button */}
        {activeCharacter && compliment && (
          <div className="flex justify-center">
            <button
              onClick={generateRandomCompliment}
              className="bg-white/70 hover:bg-white rounded-full px-6 py-2 text-purple-700 font-medium transition-colors"
            >
              Another one!
            </button>
          </div>
        )}
      </div>

      {/* Confetti animation */}
      {showConfetti && (
        <Confetti 
          colors={activeCharacter ? [
            activeCharacter.borderColor,
            activeCharacter.textColor,
            "#FFC700",
            "#9B5DE5"
          ] : undefined}
        />
      )}
    </div>
  );
};

export default Index;
