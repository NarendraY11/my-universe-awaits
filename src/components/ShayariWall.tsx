import { motion } from "framer-motion";

const shayaris = [
  "Tum jab thoda sa smile karti ho\ntoh dil ka system crash ho jata hai.",
  "Tum innocent act karti ho\npar mujhe pata hai tumhe tease karna pasand hai.",
  "Tumhari aankhon mein dekhna\nek risky hobby ban gaya hai.",
  "Tum meri life ka cutest distraction ho.",
  "Tumhari aankhon mein jo baat hai\nwoh kisi aur mein nahi.",
  "Tumhari smile ek choti si saazish hai\njo har baar dil chura leti hai.",
  "Tum paas hoti ho toh waqt slow ho jata hai.",
  "Tum meri life ka cutest chaos ho.",
];

interface ShayariWallProps {
  onContinue: () => void;
}

const ShayariWall = ({ onContinue }: ShayariWallProps) => {
  return (
    <div className="scene-container py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-display text-primary glow-text mb-16 text-center"
      >
        🔥 Things You Do To Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl px-4">
        {shayaris.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.8 }}
            className="glass-card p-6 text-center"
          >
            <p className="font-body text-foreground/80 italic text-lg whitespace-pre-line leading-relaxed">
              {line}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="mt-12"
      >
        <button onClick={onContinue} className="btn-romantic">
          💌 Read My Letter
        </button>
      </motion.div>
    </div>
  );
};

export default ShayariWall;
