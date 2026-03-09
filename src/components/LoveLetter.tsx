import { motion } from "framer-motion";

interface LoveLetterProps {
  onContinue: () => void;
}

const LoveLetter = ({ onContinue }: LoveLetterProps) => {
  return (
    <div className="scene-container py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="glass-card max-w-lg p-10 md:p-14 text-center space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-display text-primary glow-text italic">
          Tumhari wajah se
        </h2>

        <div className="space-y-4 text-foreground/80 font-body italic text-lg leading-relaxed">
          <p>Lolo,</p>
          <p>
            pata nahi tumne kya magic kiya hai par ab jab bhi koi cute cheez dekhta hoon
            toh automatically tum yaad aati ho.
          </p>
          <p>
            Kabhi kabhi bas tumhe dekhne ka mann karta hai bina kisi reason ke.
          </p>
          <p>
            Shayad isliye kyunki tum meri life ka sabse beautiful chaos ho.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="pt-4"
        >
          <p className="text-primary glow-text font-display text-xl">— Tumhara</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="mt-10"
      >
        <button onClick={onContinue} className="btn-romantic">
          😈 Next
        </button>
      </motion.div>
    </div>
  );
};

export default LoveLetter;
