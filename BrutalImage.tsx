import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface BrutalImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function BrutalImage({ src, alt, className = "" }: BrutalImageProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      whileHover={{
        scale: 1.02,
        filter: "brightness(1.1)",
        transition: { duration: 0.2 },
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform hover:scale-105"
      />
    </motion.div>
  );
}
