
import React, { useCallback, useEffect, useRef } from "react";

interface ConfettiPiece {
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  speed: number;
  opacity: number;
  shape: string;
}

interface ConfettiProps {
  colors?: string[];
  amount?: number;
  duration?: number;
}

const Confetti: React.FC<ConfettiProps> = ({
  colors = ["#FFC700", "#FF0045", "#9B5DE5", "#00F5D4", "#00BBF9"],
  amount = 150,
  duration = 2000,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const confettiPieces = useRef<ConfettiPiece[]>([]);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  
  const createConfetti = useCallback(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Reset canvas dimensions to match window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Clear previous confetti
    confettiPieces.current = [];
    
    // Create new confetti pieces
    for (let i = 0; i < amount; i++) {
      const shapes = ["circle", "square", "triangle", "line"];
      
      confettiPieces.current.push({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * 100, // Start above viewport
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 5 + Math.random() * 10,
        speed: 2 + Math.random() * 3,
        opacity: 0.8 + Math.random() * 0.2,
        shape: shapes[Math.floor(Math.random() * shapes.length)]
      });
    }
    
    startTimeRef.current = Date.now();
    animate();
  }, [amount, colors]);
  
  const animate = useCallback(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const elapsed = Date.now() - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw confetti pieces
    confettiPieces.current.forEach((piece, index) => {
      // Update position
      piece.y += piece.speed;
      piece.rotation += 2;
      
      // If confetti is getting to the end of animation, make it more transparent
      if (progress > 0.7) {
        piece.opacity = Math.max(0, piece.opacity - 0.02);
      }
      
      // Draw confetti
      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate((piece.rotation * Math.PI) / 180);
      ctx.globalAlpha = piece.opacity;
      ctx.fillStyle = piece.color;
      
      // Draw different shapes
      switch (piece.shape) {
        case "circle":
          ctx.beginPath();
          ctx.arc(0, 0, piece.size / 2, 0, Math.PI * 2);
          ctx.fill();
          break;
        case "square":
          ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
          break;
        case "triangle":
          ctx.beginPath();
          ctx.moveTo(0, -piece.size / 2);
          ctx.lineTo(-piece.size / 2, piece.size / 2);
          ctx.lineTo(piece.size / 2, piece.size / 2);
          ctx.closePath();
          ctx.fill();
          break;
        case "line":
          ctx.lineWidth = 2;
          ctx.strokeStyle = piece.color;
          ctx.beginPath();
          ctx.moveTo(0, -piece.size / 2);
          ctx.lineTo(0, piece.size / 2);
          ctx.stroke();
          break;
      }
      ctx.restore();
    });
    
    // Continue animation if not finished
    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [duration]);
  
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    createConfetti();
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [createConfetti]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="confetti-container"
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 100,
      }}
    />
  );
};

export default Confetti;
