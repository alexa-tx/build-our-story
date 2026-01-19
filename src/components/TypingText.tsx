import { useEffect, useState } from "react";

type TypingTextProps = {
  text: string;
  speed?: number;
};

export function TypingText({ text, speed = 40 }: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayed(text.slice(0, index));
      index++;
      if (index > text.length) clearInterval(typingInterval);
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <pre className="whitespace-pre-wrap leading-relaxed">
      {displayed}
      {showCursor && <span className="text-green-400">▍</span>}
    </pre>
  );
}
