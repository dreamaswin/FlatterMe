
import React from "react";
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
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${compliment} - ${character.name} (${character.show})`);
    toast({
      title: "Copied to clipboard",
      description: "Share the compliment with your friends!",
      duration: 2000,
    });
  };

  return (
    <div
      className={`skeuomorphic-card animate-bounce-in ${character.bgColor} ${className} max-w-xl w-full mx-auto`}
      style={{
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: character.borderColor,
      }}
    >
      <div className="flex items-center justify-center mb-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-white">
          {character.emoji}
        </div>
      </div>

      <div className="relative mb-4">
        {/* Quote bubble */}
        <div 
          className={`relative text-xl md:text-2xl font-medium ${character.textColor} text-center mb-2 py-4 px-2`}
        >
          "{compliment}"
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold">{character.name}</p>
        <p className="text-sm text-gray-500 mb-4">{character.show}</p>
        
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 hover:bg-white text-gray-700 text-sm transition-all"
        >
          <Copy size={14} />
          <span>Copy</span>
        </button>
      </div>
    </div>
  );
};

export default ComplimentCard;
