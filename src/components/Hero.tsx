import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/hero-architecture.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  const titleWords = ["Creating", "Digital", "Experiences"];

  return (
    <section 
      ref={containerRef}
      className="relative h-[150vh] overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background z-10" />
        <img 
          src={heroImage}
          alt="Dramatic architectural photography"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Main content */}
      <motion.div 
        className="sticky top-0 h-screen flex flex-col justify-center items-center z-20"
        style={{ opacity }}
      >
        {/* Floating badge */}
        <motion.div
          className="absolute top-32 right-8 md:right-20"
          initial={{ opacity: 0, rotate: -12 }}
          animate={{ opacity: 1, rotate: 12 }}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-foreground/20 flex items-center justify-center animate-spin-slow">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-foreground/60">
              Est. 2024
            </span>
          </div>
        </motion.div>
        
        {/* Main title */}
        <div className="text-center px-4 perspective-[1000px]">
          {titleWords.map((word, index) => (
            <div key={word} className="overflow-hidden">
              <motion.h1
                className={`text-display-xl text-foreground ${index === 1 ? 'italic text-primary' : ''}`}
                initial={{ y: "100%", rotateX: -80 }}
                animate={{ y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.3 + index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>
        
        {/* Subtitle */}
        <motion.p
          className="text-caption mt-12 max-w-md text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
         A creative studio crafting bold brands & immersive digital experiences
        </motion.p>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <span className="text-caption">Scroll</span>
          <motion.div
            className="w-[1px] h-16 bg-foreground/30 origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 2, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
