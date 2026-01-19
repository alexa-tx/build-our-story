import { motion } from "framer-motion";
import { TypingText } from "./TypingText";
import { useState } from "react";
import Confetti from "react-confetti";

type ModuleCardProps = {
  title: string;
  content: string;
  onClickModule?: () => void;
};

export function ModuleCard({ title, content, onClickModule }: ModuleCardProps) {
  const [clicked, setClicked] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [floatingEmojis, setFloatingEmojis] = useState<{id: number, emoji: string, x: number}[]>([]);

  const handleClick = () => {
    setClicked(clicked + 1);
    setShowConfetti(true);

    const newEmojis = Array.from({ length: 5 }).map((_, i) => ({
      id: Date.now() + i,
      emoji: ["💙", "⚡", "✨"][Math.floor(Math.random() * 3)],
      x: Math.floor(Math.random() * 80) - 40 
    }));
    setFloatingEmojis([...floatingEmojis, ...newEmojis]);

    if (onClickModule) onClickModule();
    setTimeout(() => setShowConfetti(false), 800);

    setTimeout(() => setFloatingEmojis([]), 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, rotate: 10, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-zinc-800 p-4 rounded-lg mb-4 shadow-md cursor-pointer hover:shadow-[0_0_20px_rgba(0,255,0,0.5)] hover:-translate-y-1 transition-all relative"
      onClick={handleClick}
    >
      <h3 className="text-green-400 font-bold">{title}</h3>
      <TypingText text={content} speed={30} />

      {clicked >= 3 && (
        <div className="absolute top-2 right-2 animate-bounce text-xl">💫</div>
      )}

      {showConfetti && <Confetti numberOfPieces={30} recycle={false} />}

      {floatingEmojis.map((f) => (
        <motion.span
          key={f.id}
          initial={{ y: 0, opacity: 1, x: 0 }}
          animate={{ y: -60, opacity: 0, x: f.x }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute text-xl left-1/2"
          style={{ transform: `translateX(${f.x}px)` }}
        >
          {f.emoji}
        </motion.span>
      ))}
    </motion.div>
  );
}
