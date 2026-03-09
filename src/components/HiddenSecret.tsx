import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypeWriter from "./TypeWriter";

interface HiddenSecretProps {
  onContinue: () => void;
}

const HiddenSecret = ({ onContinue }: HiddenSecretProps) => {
  const [revealed, setRevealed] = useState(false);
  const [phase, setPhase] = useState(0);

  return (
    <div className="scene-container">
      <div className="max-w-lg text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl md:text-3xl font-display text-foreground/60 italic"
        >
          Something is hidden here...
        </motion.h2>

        {!revealed && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 3 }}
            onClick={() => setRevealed(true)}
            className="w-8 h-8 rounded-full bg-star cursor-pointer mx-auto block border-0"
            style={{ boxShadow: "0 0 20px hsl(45 100% 90% / 0.6)" }}
          />
        )}

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              {phase === 0 && (
                <p className="text-lg md:text-xl font-body text-foreground/80 italic">
                  <TypeWriter
                    text="Agar tum yahan tak pahunch gayi ho toh clearly tum curious ho."
                    speed={45}
                    onComplete={() => setTimeout(() => setPhase(1), 2000)}
                  />
                </p>
              )}
              {phase >= 1 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xl md:text-2xl font-body text-primary glow-text italic"
                >
                  <TypeWriter
                    text="Aur mujhe tumhari curiosity bahut pasand hai."
                    speed={50}
                  />
                </motion.p>
              )}
              {phase >= 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                >
                  <button onClick={onContinue} className="btn-romantic">
                    ❤️ One Last Thing
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HiddenSecret;
