
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Book, Coffee, Eye, MapPin, Mail, Pencil } from "lucide-react";
import Confetti from "@/components/Confetti";
import { motion } from "framer-motion";

const joeCompliments = [
  "You're not like the others. I'd *definitely* Google you.",
  "A face that says 'I read Murakami but still ghost people.'",
  "You browse bookstores like you're searching for something deeper. I like that.",
  "That smile hides secrets. Don't worry, I'm good at keeping them too.",
  "You have exquisite taste in... everything. I've been watching.",
  "The way you fidget with your hair when you're nervous? Adorable and very telling.",
  "You're the kind of person who dog-ears book pages, aren't you? Deliciously flawed.",
  "In a room full of people, you're the only one I'd follow home—I mean, talk to.",
  "You care what people think, but pretend you don't. We're more alike than you know.",
  "That look in your eyes says 'complicated past.' Don't worry, mine's worse.",
  "You deserve someone who appreciates your... uniqueness. Someone observant.",
  "You're the plot twist I didn't see coming, and I read a lot of books."
];

const JoeGoldberg = () => {
  const [compliment, setCompliment] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [isButtonAnimating, setIsButtonAnimating] = useState(false);

  const generateCompliment = () => {
    const randomCompliment = joeCompliments[Math.floor(Math.random() * joeCompliments.length)];
    setCompliment(randomCompliment);
    setShowConfetti(true);
    setIsButtonAnimating(true);
    
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
    
    setTimeout(() => {
      setIsButtonAnimating(false);
    }, 600);
  };

  // Floating sticker icons with subtle animation
  const FloatingIcon = ({ 
    children, 
    top = undefined, 
    left = undefined, 
    right = undefined, 
    bottom = undefined, 
    delay = 0 
  }) => (
    <motion.div
      className="absolute text-black bg-white p-3 rounded-full shadow-lg z-10"
      style={{ top, left, right, bottom }}
      initial={{ y: 0 }}
      animate={{ 
        y: [0, -10, 0], 
        rotate: [0, -5, 0, 5, 0],
      }}
      transition={{ 
        duration: 8, 
        ease: "easeInOut", 
        repeat: Infinity,
        delay: delay
      }}
      whileHover={{ 
        y: -5, 
        scale: 1.1,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" 
      }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen relative bg-[#f5f5f5] overflow-hidden">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "radial-gradient(#c0c0c0 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}
      />

      {/* Floating stickers */}
      <FloatingIcon top="10%" left="5%" right={undefined} bottom={undefined} delay={0}>
        <Book size={24} />
      </FloatingIcon>
      <FloatingIcon top="15%" right="10%" left={undefined} bottom={undefined} delay={1}>
        <Coffee size={24} />
      </FloatingIcon>
      <FloatingIcon bottom="20%" left="8%" top={undefined} right={undefined} delay={2}>
        <Eye size={24} />
      </FloatingIcon>
      <FloatingIcon bottom="25%" right="6%" top={undefined} left={undefined} delay={3}>
        <MapPin size={24} />
      </FloatingIcon>
      <FloatingIcon top="70%" left="15%" right={undefined} bottom={undefined} delay={1.5}>
        <Mail size={24} />
      </FloatingIcon>
      <FloatingIcon top="60%" right="12%" left={undefined} bottom={undefined} delay={2.5}>
        <Pencil size={24} />
      </FloatingIcon>

      <div className="container max-w-3xl mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 text-black font-cereal tracking-tight">
            Joe Goldberg's <br/> Compliment Generator
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Hey You, You Look...
          </h2>
          
          <p className="text-[#ff6a3d] text-xl mb-12 font-medium">
            Let Joe finish that sentence.
          </p>
          
          <div className="w-full max-w-md">
            <Button 
              onClick={generateCompliment}
              className={`w-full py-6 text-lg bg-black hover:bg-gray-800 text-white rounded-xl transition-all ${
                isButtonAnimating ? 'animate-jelly-button' : ''
              }`}
            >
              What Would Joe Say?
            </Button>
          </div>
          
          {compliment && (
            <motion.div 
              className="mt-12 p-8 bg-white rounded-xl shadow-lg w-full max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <p className="text-xl md:text-2xl italic text-gray-900 leading-relaxed">
                "{compliment}"
              </p>
              <p className="mt-4 text-right text-gray-500">— Joe Goldberg</p>
            </motion.div>
          )}
          
          <p className="mt-12 text-gray-500 text-sm italic max-w-md text-center">
            Compliments brought to you by an unhealthy obsession and a perfectly curated bookshelf.
          </p>
        </div>
      </div>

      {/* Confetti */}
      {showConfetti && <Confetti colors={["#ff6a3d", "#000000", "#f5f5f5", "#ffffff"]} />}
    </div>
  );
};

export default JoeGoldberg;
