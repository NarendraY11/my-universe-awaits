import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const compliments = [
  "Tumhari smile addictive hai.",
  "Tum meri favorite distraction ho.",
  "Tumhari aankhon mein kuch dangerous hai.",
  "Tumhari presence hi mood change kar deti hai.",
  "Tum meri life ka most beautiful coincidence ho.",
  "Tumhe dekh ke mera pura din ban jata hai.",
  "Tum cute ho, that's a fact not a compliment.",
  "Tumhari hasi sunke sab theek lagta hai.",
];

interface ComplimentGeneratorProps {
  onContinue: () => void;
}

const ComplimentGenerator = ({ onContinue }: ComplimentGeneratorProps) => {
  const [current, setCurrent] = useState<string | null>(null);
  const [used, setUsed] = useState<Set<number>>(new Set());

  const generate = () => {
    const available = compliments.map((_, i) => i).filter((i) => !used.has(i));
    if (available.length === 0) {
      setUsed(new Set());
      setCurrent(compliments[Math.floor(Math.random() * compliments.length)]);
      return;
    }
    const idx = available[Math.floor(Math.random() * available.length)];
    setUsed((prev) => new Set([...prev, idx]));
    setCurrent(compliments[idx]);
  };

  return (
    <div className="scene-container">
      <div className="max-w-lg text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-display text-foreground italic"
        >
          💫 Something About You
        </motion.h2>

        <AnimatePresence mode="wait">
          {current && (
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-card p-8"
            >
              <p className="text-xl md:text-2xl font-body text-primary glow-text italic">
                "{current}"
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={generate} className="btn-romantic">
            ✨ Tell me something
          </button>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            onClick={onContinue}
            className="btn-romantic"
            style={{ background: "hsl(260 80% 65%)", boxShadow: "0 0 30px hsl(260 80% 65% / 0.4)" }}
          >
            🌙 Continue
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ComplimentGenerator;
