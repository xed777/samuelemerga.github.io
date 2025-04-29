import { motion } from "framer-motion";

interface BrutalButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function BrutalButton({ children, onClick, className = "" }: BrutalButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 bg-[#0200EA] text-white font-anton uppercase tracking-wider ${className}`}
      whileHover={{
        scale: 1.02,
        x: [0, -2, 2, -2, 0],
        transition: {
          x: {
            repeat: Infinity,
            duration: 0.2,
          },
        },
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
