
import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) {
  const prefersReducedMotion = useReducedMotion();

  const offset = {
    up: { x: 0, y: 35 },
    down: { x: 0, y: -35 },
    left: { x: 35, y: 0 },
    right: { x: -35, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={
        prefersReducedMotion
          ? false
          : { opacity: 0, ...offset[direction] }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
