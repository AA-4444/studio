import { ReactNode, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
  });

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};

export default SmoothScroll;
