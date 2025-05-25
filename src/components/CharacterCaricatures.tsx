
import React from 'react';
import { characters } from '../data/characters';

const CharacterCaricatures = () => {
  return (
    <div className="relative">
      <h3 className="text-white/90 text-lg font-medium mb-6 tracking-[-0.01em]">
        Meet Your Storytellers
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {characters.slice(0, 8).map((character, index) => (
          <div
            key={character.name}
            className="group relative p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Character icon/emoji */}
            <div className="text-3xl mb-2 text-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              {character.icon || "🎭"}
            </div>
            
            {/* Character name */}
            <div className="text-white/80 text-xs font-medium text-center tracking-[-0.01em] group-hover:text-white transition-colors duration-300">
              {character.name.split(' ')[0]}
            </div>
            
            {/* Subtle glow on hover */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"
              style={{ backgroundColor: character.borderColor }}
            />
          </div>
        ))}
      </div>
      
      <p className="text-white/50 text-sm mt-6 tracking-[-0.01em] font-light">
        Each with their own unique voice and wisdom
      </p>
    </div>
  );
};

export default CharacterCaricatures;
