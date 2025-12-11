import { motion } from "framer-motion";

interface MarqueeProps {
  words: string[];
  reverse?: boolean;
}

const Marquee = ({ words, reverse = false }: MarqueeProps) => {
  const doubledWords = [...words, ...words];
  
  return (
    <div className="overflow-hidden py-8 border-y border-border">
      <motion.div
        className={`flex gap-8 whitespace-nowrap ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {doubledWords.map((word, index) => (
          <span 
            key={index} 
            className="text-display-md text-foreground/10 uppercase tracking-wider flex items-center gap-8"
          >
            {word}
            <span className="w-3 h-3 rounded-full bg-primary/30" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
