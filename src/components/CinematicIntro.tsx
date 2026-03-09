import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypeWriter from "./TypeWriter";

interface CinematicIntroProps {
  onComplete: () => void;
}

const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [phase, setPhase] = useState(0);

  const nextPhase = useCallback(() => {
    setPhase((p) => p + 1);
  }, []);

  return (
    <div className="scene-container" style={{ background: "hsl(240 20% 3%)" }}>
      <div className="max-w-2xl text-center space-y-6">
        <AnimatePresence mode="wait">
          {/* Scene 1: Opening */}
          {phase === 0 && (
            <motion.div
              key="s1"
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl font-body text-foreground/80 italic leading-relaxed">
                <TypeWriter
                  text="Kabhi kabhi zindagi bilkul normal chal rahi hoti hai…"
                  speed={50}
                  onComplete={() => setTimeout(nextPhase, 2500)}
                />
              </p>
            </motion.div>
          )}

          {phase === 1 && (
            <motion.div
              key="s1b"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl font-body text-foreground/80 italic leading-relaxed">
                <TypeWriter
                  text="Phir ek din koi milta hai…"
                  speed={50}
                  onComplete={() => setTimeout(nextPhase, 2000)}
                />
              </p>
            </motion.div>
          )}

          {phase === 2 && (
            <motion.div
              key="s1c"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <p className="text-2xl md:text-3xl font-body text-foreground italic leading-relaxed glow-text">
                <TypeWriter
                  text="Aur sab kuch change ho jata hai."
                  speed={50}
                  onComplete={() => setTimeout(nextPhase, 2500)}
                />
              </p>
            </motion.div>
          )}

          {/* Scene 2: The Universe */}
          {phase === 3 && (
            <motion.div
              key="s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="space-y-8"
            >
              <p className="text-lg md:text-xl font-body text-foreground/70 leading-relaxed">
                <TypeWriter
                  text="Mujhe nahi pata tha ki ek ladki meri life ko itna interesting bana degi."
                  speed={45}
                  onComplete={() => setTimeout(nextPhase, 2000)}
                />
              </p>
            </motion.div>
          )}

          {phase === 4 && (
            <motion.div
              key="s2b"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl font-body text-foreground/90 italic">
                <TypeWriter
                  text="Par phir tum aayi."
                  speed={70}
                  onComplete={() => setTimeout(nextPhase, 1500)}
                />
              </p>
            </motion.div>
          )}

          {phase === 5 && (
            <motion.div
              key="name"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="space-y-4"
            >
              <h1 className="text-6xl md:text-8xl font-display font-bold glow-text text-primary tracking-wider">
                LOLO
              </h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                onAnimationComplete={() => setTimeout(nextPhase, 1500)}
              >
                <p className="text-muted-foreground font-body text-sm tracking-[0.3em] uppercase">
                  the one who changed everything
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* Scene 3: Rising Tension */}
          {phase === 6 && (
            <motion.div
              key="s3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl font-body text-foreground/80 italic">
                <TypeWriter text="Tumhari smile…" speed={60} onComplete={() => setTimeout(nextPhase, 1500)} />
              </p>
            </motion.div>
          )}

          {phase === 7 && (
            <motion.div
              key="s3b"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-xl md:text-2xl font-body text-foreground/80 italic">
                <TypeWriter text="Tumhari teasing…" speed={60} onComplete={() => setTimeout(nextPhase, 1500)} />
              </p>
            </motion.div>
          )}

          {phase === 8 && (
            <motion.div
              key="s3c"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-xl md:text-2xl font-body text-foreground/80 italic">
                <TypeWriter text="Tumhari aankhon ka wo strange sa magic…" speed={50} onComplete={() => setTimeout(nextPhase, 1500)} />
              </p>
            </motion.div>
          )}

          {phase === 9 && (
            <motion.div
              key="s3d"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="space-y-4"
            >
              <p className="text-2xl md:text-3xl font-display text-primary glow-text italic">
                <TypeWriter text="Sab kuch dangerously addictive hai." speed={50} onComplete={() => setTimeout(nextPhase, 2500)} />
              </p>
            </motion.div>
          )}

          {/* Scene 4: Confession */}
          {phase === 10 && (
            <motion.div
              key="s4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-lg md:text-xl font-body text-foreground/70 italic">
                <TypeWriter text="Shayad tumhe pata bhi nahi hai…" speed={55} onComplete={() => setTimeout(nextPhase, 2000)} />
              </p>
            </motion.div>
          )}

          {phase === 11 && (
            <motion.div
              key="s4b"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              <p className="text-xl md:text-2xl font-body text-foreground italic leading-relaxed">
                <TypeWriter
                  text="Par tum meri life ka sabse beautiful distraction ho."
                  speed={50}
                  onComplete={() => setTimeout(nextPhase, 2500)}
                />
              </p>
            </motion.div>
          )}

          {/* Scene 5: The Reveal + Button */}
          {phase === 12 && (
            <motion.div
              key="s5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <p className="text-lg md:text-xl font-body text-foreground/80 italic leading-relaxed">
                  <TypeWriter
                    text="Welcome to a small universe jo sirf tumhare liye bana hai."
                    speed={45}
                  />
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4, duration: 1.5 }}
              >
                <button
                  onClick={onComplete}
                  className="btn-romantic text-xl animate-heartbeat"
                >
                  ❤️ Enter My Universe
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CinematicIntro;
