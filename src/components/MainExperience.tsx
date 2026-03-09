import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypeWriter from "./TypeWriter";
import ShayariWall from "./ShayariWall";
import LoveLetter from "./LoveLetter";
import ComplimentGenerator from "./ComplimentGenerator";
import PlayfulChallenge from "./PlayfulChallenge";
import HeartCatchGame from "./HeartCatchGame";
import HiddenSecret from "./HiddenSecret";
import FinalScene from "./FinalScene";

const MainExperience = () => {
  const [scene, setScene] = useState(0);

  const nextScene = useCallback(() => {
    setScene((s) => s + 1);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {/* Scene 1: The First Message */}
        {scene === 0 && (
          <motion.div
            key="msg1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="scene-container"
          >
            <div className="max-w-xl text-center space-y-8">
              <p className="text-xl md:text-2xl font-body text-foreground/80 italic">
                <TypeWriter text="Ek problem hai." speed={70} />
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="text-lg md:text-xl font-body text-foreground/70 italic"
              >
                <TypeWriter text="Tumhari wajah se mera focus kharab ho gaya hai." speed={50} delay={3000} />
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 7 }}
                className="text-lg md:text-xl font-body text-foreground/60 italic leading-relaxed"
              >
                <TypeWriter
                  text="Jab bhi phone uthata hoon… bas tumhari yaad aa jati hai."
                  speed={45}
                  delay={7000}
                />
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 12 }}
              >
                <button onClick={nextScene} className="btn-romantic">
                  💌 Continue
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Scene 2: The Confession */}
        {scene === 1 && (
          <motion.div
            key="confess"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="scene-container"
          >
            <div className="max-w-xl text-center space-y-8">
              <p className="text-2xl md:text-3xl font-body text-foreground italic">
                <TypeWriter text="Sach bataun?" speed={80} />
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="space-y-4"
              >
                <p className="text-lg md:text-xl font-body text-foreground/70 italic leading-relaxed">
                  <TypeWriter
                    text="Kabhi kabhi lagta hai tumhe pata bhi nahi hai tum kitni dangerous ho."
                    speed={45}
                    delay={3000}
                  />
                </p>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 8 }}
                className="text-xl md:text-2xl font-display text-primary glow-text italic"
              >
                <TypeWriter text="Ek smile… aur mera pura mood change." speed={50} delay={8000} />
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 13 }}
              >
                <button onClick={nextScene} className="btn-romantic">
                  🔥 Continue
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Scene 3: Shayari Wall */}
        {scene === 2 && (
          <motion.div
            key="shayari"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <ShayariWall onContinue={nextScene} />
          </motion.div>
        )}

        {/* Scene 4: Love Letter */}
        {scene === 3 && (
          <motion.div
            key="letter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <LoveLetter onContinue={nextScene} />
          </motion.div>
        )}

        {/* Scene 5: Playful Challenge */}
        {scene === 4 && (
          <motion.div
            key="challenge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <PlayfulChallenge onContinue={nextScene} />
          </motion.div>
        )}

        {/* Scene 6: Heart Catch Game */}
        {scene === 5 && (
          <motion.div
            key="heart-game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <HeartCatchGame onContinue={nextScene} />
          </motion.div>
        )}

        {/* Scene 7: Compliment Generator */}
        {scene === 6 && (
          <motion.div
            key="compliments"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <ComplimentGenerator onContinue={nextScene} />
          </motion.div>
        )}

        {/* Scene 8: Hidden Secret */}
        {scene === 7 && (
          <motion.div
            key="secret"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <HiddenSecret onContinue={nextScene} />
          </motion.div>
        )}

        {/* Final Scene */}
        {scene === 8 && (
          <motion.div
            key="final"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <FinalScene />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainExperience;
