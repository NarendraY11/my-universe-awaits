import { useState } from "react";
import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";

const FinalScene = () => {
  const [phase, setPhase] = useState(0);

  return (
    <div className="scene-container">
      <div className="max-w-xl text-center space-y-8">
        {phase === 0 && (
          <p className="text-xl md:text-2xl font-body text-foreground/70 italic">
            <TypeWriter
              text="Shayad main perfect words nahi likh pata."
              speed={50}
              onComplete={() => setTimeout(() => setPhase(1), 2500)}
            />
          </p>
        )}

        {phase >= 1 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl font-body text-foreground/80 italic"
          >
            <TypeWriter
              text="Par ek baat clear hai."
              speed={60}
              onComplete={() => setTimeout(() => setPhase(2), 2500)}
            />
          </motion.p>
        )}

        {phase >= 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="space-y-8 pt-8"
          >
            <h1 className="text-3xl md:text-5xl font-display text-primary glow-text italic leading-tight">
              Tum meri life ka best part ho.
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-6xl animate-heartbeat"
            >
              ❤️
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="text-muted-foreground font-body text-sm tracking-[0.2em] uppercase"
            >
              Meri duniya tumhare bina incomplete hai
            </motion.p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FinalScene;
