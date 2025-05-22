
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
      className={`bg-white rounded-2xl shadow-lg p-8 transition-all ${className} max-w-xl w-full mx-auto`}
      style={{
        borderLeft: `4px solid ${character.borderColor}`,
      }}
    >
      <div className="flex items-start mb-6">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-gray-50 border border-gray-100 mr-4">
          {character.emoji}
        </div>
        <div>
          <h3 className="text-lg font-medium">{character.name}</h3>
          <p className="text-sm text-gray-500">{character.show}</p>
        </div>
      </div>

      <div className="relative mb-6">
        <div 
          className={`text-xl md:text-2xl font-medium text-gray-800 leading-relaxed`}
        >
          "{compliment}"
        </div>
      </div>
      
      <button
        onClick={copyToClipboard}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-black hover:bg-gray-800 text-white text-sm transition-all"
      >
        <Copy size={14} />
        <span>Copy</span>
      </button>
    </div>
  );
};

export default ComplimentCard;
