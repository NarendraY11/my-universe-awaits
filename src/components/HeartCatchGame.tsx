import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeartCatchGameProps {
  onContinue: () => void;
}

interface FallingHeart {
  id: number;
  x: number; // percent across screen
  speed: number; // seconds to fall
  size: number; // px
  caught: boolean;
}

const GOAL = 7;

const HeartCatchGame = ({ onContinue }: HeartCatchGameProps) => {
  const [hearts, setHearts] = useState<FallingHeart[]>([]);
  const [caught, setCaught] = useState(0);
  const [missed, setMissed] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [started, setStarted] = useState(false);
  const [catchEffects, setCatchEffects] = useState<{ id: number; x: number; y: number }[]>();
  const nextId = useRef(0);
  const spawnInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const catchEffectId = useRef(0);

  const spawnHeart = useCallback(() => {
    const id = nextId.current++;
    const heart: FallingHeart = {
      id,
      x: 5 + Math.random() * 90,
      speed: 2.5 + Math.random() * 2,
      size: 28 + Math.floor(Math.random() * 20),
      caught: false,
    };
    setHearts((prev) => [...prev, heart]);

    // Remove after fall + buffer
    setTimeout(() => {
      setHearts((prev) => {
        const existing = prev.find((h) => h.id === id);
        if (existing && !existing.caught) {
          setMissed((m) => {
            const newMissed = m + 1;
            if (newMissed >= 5) setGameOver(true);
            return newMissed;
          });
        }
        return prev.filter((h) => h.id !== id);
      });
    }, (heart.speed + 0.5) * 1000);
  }, []);

  const startGame = () => {
    setStarted(true);
    setCaught(0);
    setMissed(0);
    setWin(false);
    setGameOver(false);
    setHearts([]);
    nextId.current = 0;
  };

  useEffect(() => {
    if (!started || gameOver || win) {
      if (spawnInterval.current) clearInterval(spawnInterval.current);
      return;
    }
    spawnInterval.current = setInterval(spawnHeart, 900);
    return () => {
      if (spawnInterval.current) clearInterval(spawnInterval.current);
    };
  }, [started, gameOver, win, spawnHeart]);

  const catchHeart = (id: number, x: number) => {
    setHearts((prev) => {
      const h = prev.find((h) => h.id === id);
      if (!h || h.caught) return prev;
      return prev.map((h) => (h.id === id ? { ...h, caught: true } : h));
    });

    // Spawn catch effect
    const effectId = catchEffectId.current++;
    setCatchEffects((prev) => [...(prev || []), { id: effectId, x, y: 85 }]);
    setTimeout(() => {
      setCatchEffects((prev) => (prev || []).filter((e) => e.id !== effectId));
    }, 700);

    setCaught((c) => {
      const newCaught = c + 1;
      if (newCaught >= GOAL) {
        setWin(true);
        setHearts([]);
      }
      return newCaught;
    });
  };

  return (
    <div className="scene-container select-none">
      <div className="w-full max-w-lg text-center space-y-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-display text-foreground italic"
        >
          Dil Pakad Khel 💘
        </motion.h2>

        {!started && !win && !gameOver && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <p className="font-body text-foreground/70 text-lg italic">
              {GOAL} dil pakad lo… agar himmat hai toh 😏
            </p>
            <button onClick={startGame} className="btn-romantic">
              💗 Khel Shuru Karo
            </button>
          </motion.div>
        )}

        {/* Game Area */}
        {started && !win && !gameOver && (
          <div className="space-y-3">
            {/* Score Bar */}
            <div className="flex justify-between items-center px-2 font-body text-sm text-foreground/60">
              <span>💗 Pakde: <span className="text-primary font-semibold">{caught}</span> / {GOAL}</span>
              <span>💔 Miss: <span className="text-destructive font-semibold">{missed}</span> / 5</span>
            </div>

            {/* Arena */}
            <div
              className="relative w-full rounded-2xl overflow-hidden border border-border"
              style={{
                height: 360,
                background: "hsl(var(--card) / 0.4)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Catcher zone indicator */}
              <div
                className="absolute bottom-0 left-0 right-0 h-16 rounded-b-2xl flex items-center justify-center"
                style={{ background: "hsl(var(--primary) / 0.08)" }}
              >
                <p className="font-body text-xs text-foreground/30 tracking-widest uppercase">
                  — tap hearts here —
                </p>
              </div>

              {/* Falling Hearts */}
              <AnimatePresence>
                {hearts
                  .filter((h) => !h.caught)
                  .map((h) => (
                    <motion.button
                      key={h.id}
                      initial={{ top: "-10%", opacity: 1 }}
                      animate={{ top: "92%" }}
                      transition={{ duration: h.speed, ease: "linear" }}
                      onClick={() => catchHeart(h.id, h.x)}
                      className="absolute cursor-pointer focus:outline-none"
                      style={{
                        left: `${h.x}%`,
                        fontSize: h.size,
                        transform: "translateX(-50%)",
                        textShadow: "0 0 12px hsl(var(--heart-color) / 0.8)",
                        lineHeight: 1,
                        background: "none",
                        border: "none",
                        padding: 0,
                      }}
                      aria-label="Catch heart"
                    >
                      ❤️
                    </motion.button>
                  ))}
              </AnimatePresence>

              {/* Catch spark effects */}
              <AnimatePresence>
                {(catchEffects || []).map((e) => (
                  <motion.div
                    key={e.id}
                    initial={{ opacity: 1, scale: 1, top: `${e.y}%`, left: `${e.x}%` }}
                    animate={{ opacity: 0, scale: 2 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute pointer-events-none text-2xl"
                    style={{ transform: "translate(-50%, -50%)" }}
                  >
                    ✨
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Win Screen */}
        <AnimatePresence>
          {win && (
            <motion.div
              key="win"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
                className="text-6xl"
              >
                💝
              </motion.div>
              <p className="text-2xl md:text-3xl font-display text-primary glow-text italic">
                Lagta hai tumhe bhi meri yaad aa rahi thi.
              </p>
              <p className="font-body text-foreground/60 italic text-base">
                Tune saare {GOAL} dil pakad liye… bilkul waise jaise tune mera. ❤️
              </p>
              <button onClick={onContinue} className="btn-romantic">
                ✨ Continue
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Game Over Screen */}
        <AnimatePresence>
          {gameOver && !win && (
            <motion.div
              key="gameover"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <p className="text-2xl font-display text-foreground/80 italic">
                Aww… 5 dil toota 💔
              </p>
              <p className="font-body text-foreground/50 italic">
                Koi baat nahi, ek aur baar try karo 😏
              </p>
              <button onClick={startGame} className="btn-romantic">
                🔄 Dobara Khelo
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeartCatchGame;
