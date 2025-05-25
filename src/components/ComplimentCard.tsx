import React, { useState, useEffect } from "react";
import { Copy } from "lucide-react";
import { Character } from "../data/characters";
import CopyToast from "./CopyToast";
interface ComplimentCardProps {
  character: Character;
  compliment: string;
  className?: string;
}
const ComplimentCard: React.FC<ComplimentCardProps> = ({
  character,
  compliment,
  className = ""
}) => {
  const [showToast, setShowToast] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${compliment} - ${character.name} (${character.show})`);
    setShowToast(true);
  };

  // Hide toast after 3 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);
  return <>
      <div className={`relative bg-white rounded-3xl shadow-lg p-8 transition-all duration-300 ${className} max-w-2xl w-full mx-auto border border-gray-100`}>
        <div className="flex items-start mb-8">
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl bg-gray-100 mr-4">
            {character.emoji}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 font-cereal" style={{
            letterSpacing: '-1px'
          }}>
              {character.name}
            </h3>
            <p className="text-gray-500-font-normal text-sm font-normal">{character.show}</p>
          </div>
        </div>

        <div className="mb-8">
          <div style={{
          letterSpacing: '-1px'
        }} className="text-xl md:text-2xl font-regular text-gray-900\n-relaxed font-cereal">
            "{compliment}"
          </div>
        </div>
        
        <div className="relative">
          <button onClick={copyToClipboard} className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 hover:bg-gray-800 text-white text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
            <Copy size={14} />
            <span>Copy</span>
          </button>
        </div>
      </div>

      <CopyToast isVisible={showToast} onClose={() => setShowToast(false)} />
    </>;
};
export default ComplimentCard;