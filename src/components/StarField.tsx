import { useEffect, useRef } from "react";

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const stars: { x: number; y: number; size: number; speed: number; opacity: number; twinkleSpeed: number }[] = [];
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; color: string; life: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.3 + 0.05,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    // Create floating particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.5 - 0.1,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5,
        color: Math.random() > 0.5 ? "330, 100%, 60%" : "260, 80%, 65%",
        life: Math.random() * 1000,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.1) star.twinkleSpeed *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(45, 100%, 90%, ${star.opacity})`;
        ctx.fill();

        // Glow
        if (star.size > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(330, 100%, 60%, ${star.opacity * 0.1})`;
          ctx.fill();
        }
      });

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life += 1;
        p.opacity = Math.sin(p.life * 0.01) * 0.4 + 0.1;

        if (p.y < -10) p.y = canvas.height + 10;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.color}, ${Math.max(0, p.opacity)})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default StarField;
