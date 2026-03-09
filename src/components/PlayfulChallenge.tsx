import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PlayfulChallengeProps {
  onContinue: () => void;
}

const PlayfulChallenge = ({ onContinue }: PlayfulChallengeProps) => {
  const [answered, setAnswered] = useState<string | null>(null);

  return (
    <div className="scene-container">
      <div className="max-w-lg text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-display text-foreground italic"
        >
          Tum itni cute kyun ho?
        </motion.h2>

        <AnimatePresence mode="wait">
          {!answered && (
            <motion.div
              key="buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => setAnswered("nahi")}
                className="btn-romantic"
                style={{ background: "hsl(260 80% 65%)", boxShadow: "0 0 30px hsl(260 80% 65% / 0.4)" }}
              >
                Mujhe nahi pata
              </button>
              <button
                onClick={() => setAnswered("hoon")}
                className="btn-romantic"
              >
                Main hoon hi 💅
              </button>
            </motion.div>
          )}

          {answered === "hoon" && (
            <motion.div
              key="resp-hoon"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl font-body text-primary glow-text italic">
                Haan… aur isi wajah se problem hoti hai. 😏
              </p>
              <button onClick={onContinue} className="btn-romantic">✨ Continue</button>
            </motion.div>
          )}

          {answered === "nahi" && (
            <motion.div
              key="resp-nahi"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl font-body text-primary glow-text italic">
                Toh main bata deta hoon — tum naturally adorable ho. ❤️
              </p>
              <button onClick={onContinue} className="btn-romantic">✨ Continue</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PlayfulChallenge;
