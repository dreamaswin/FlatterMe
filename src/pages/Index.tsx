
import React, { useState } from "react";
import { characters } from "../data/characters";
import ComplimentCard from "@/components/ComplimentCard";
import Confetti from "@/components/Confetti";
import { useToast } from "@/hooks/use-toast";

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
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-white relative overflow-hidden">
      {/* Background icons with depth of field effect - visible even before selecting a character */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-[10%] left-[5%] text-6xl">🧪</div>
        <div className="absolute top-[25%] right-[10%] text-7xl rotate-12">📄</div>
        <div className="absolute bottom-[15%] left-[15%] text-8xl -rotate-12">🎬</div>
        <div className="absolute bottom-[20%] right-[8%] text-5xl rotate-45">🎩</div>
        <div className="absolute top-[40%] left-[25%] text-6xl rotate-6">🎸</div>
        <div className="absolute top-[70%] right-[25%] text-7xl -rotate-6">📚</div>
        <div className="absolute top-[60%] left-[50%] text-5xl rotate-12">⚔️</div>
        <div className="absolute bottom-[40%] left-[40%] text-8xl -rotate-12">⚗️</div>
      </div>

      <div className="relative w-full max-w-3xl mx-auto z-10">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-medium text-center mb-8">
          <span className="block text-6xl font-bold text-center text-slate-950">🎬 ConfetTV </span>
          <span className="text-sm text-gray-500 block mt-2 font-normal md:text-base">TV's nicest quotes. Your daily dose of dopamine!</span>
        </h1>

        {/* Main Content */}
        {!activeCharacter && <div className="text-center mb-12">
            <p className="text-gray-600 mb-8">Get a delightful compliment from your favourite TV characters with a burst of confetti!</p>
            <button onClick={generateRandomCompliment} className="text-white px-6 py-3 rounded-full text-base font-medium transition-all bg-blue-700 hover:bg-blue-600">
              Hit me with a compliment!
            </button>
          </div>}

        {/* Compliment Card */}
        {activeCharacter && compliment && <div className="mb-8 animate-fade-in">
            <ComplimentCard character={activeCharacter} compliment={compliment} />
          </div>}

        {/* Another one button */}
        {activeCharacter && compliment && <div className="flex justify-center">
            <button onClick={generateRandomCompliment} className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full transition-all">Another one ✨</button>
          </div>}
      </div>

      {/* Confetti animation */}
      {showConfetti && <Confetti colors={activeCharacter ? [activeCharacter.borderColor, activeCharacter.textColor, "#FFC700", "#000000"] : undefined} />}
    </div>
  );
};

export default Index;
