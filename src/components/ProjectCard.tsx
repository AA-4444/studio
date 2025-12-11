import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
}

const ProjectCard = ({ title, category, image, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative cursor-pointer perspective-[1000px]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Number */}
      <span className="absolute -top-4 -left-4 text-display-md text-foreground/10 font-display z-10">
        {String(index + 1).padStart(2, '0')}
      </span>
      
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[4/5] bg-secondary">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-primary/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* View project text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-foreground text-sm uppercase tracking-[0.3em] px-6 py-3 border border-foreground/50">
            View Project
          </span>
        </motion.div>
      </div>
      
      {/* Info */}
      <div className="mt-6 flex justify-between items-start">
        <div>
          <h3 className="text-xl font-display text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-caption mt-1">{category}</p>
        </div>
        
        <motion.div
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center"
          animate={{
            scale: isHovered ? 1.2 : 1,
            borderColor: isHovered ? "hsl(var(--primary))" : "hsl(var(--border))",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none"
            animate={{ 
              x: isHovered ? 2 : 0,
              y: isHovered ? -2 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <path 
              d="M4 12L12 4M12 4H6M12 4V10" 
              stroke="currentColor" 
              strokeWidth="1.5"
              className="text-foreground"
            />
          </motion.svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
