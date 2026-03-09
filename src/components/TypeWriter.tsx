import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  className?: string;
  showCursor?: boolean;
}

const TypeWriter = ({ text, speed = 60, delay = 0, onComplete, className = "", showCursor = true }: TypeWriterProps) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setDone(true);
      onComplete?.();
    }
  }, [started, displayed, text, speed, onComplete]);

  if (!started) return null;

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {displayed}
      {showCursor && !done && <span className="typing-cursor" />}
    </motion.span>
  );
};

export default TypeWriter;
