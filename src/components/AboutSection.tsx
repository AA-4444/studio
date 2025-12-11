import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { number: "150+", label: "Projects Delivered" },
  { number: "12", label: "Years Experience" },
  { number: "40+", label: "Awards Won" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left content */}
        <div>
          <motion.p
            className="text-caption mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            About Us
          </motion.p>
          
          <motion.h2
            className="text-display-lg text-foreground mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            We craft <span className="italic text-primary">unforgettable</span> brand experiences
          </motion.h2>
          
          <motion.p
            className="text-body-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            We're a collective of strategists, designers, and developers who believe in the power of meaningful design. Our work is driven by curiosity, refined by craft, and defined by impact.
          </motion.p>
          
          <motion.p
            className="text-body text-muted-foreground mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            From brand strategy to immersive digital experiences, we help ambitious brands stand out in a crowded world.
          </motion.p>
          
          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {stats.map((stat, index) => (
              <div key={stat.label}>
                <motion.span
                  className="text-display-md text-primary block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5 + index * 0.1, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                >
                  {stat.number}
                </motion.span>
                <span className="text-caption mt-2 block">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Right - Floating elements */}
        <div className="relative h-[500px] md:h-[600px]">
          {/* Decorative circles */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 rounded-full border border-primary/20"
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
          
          <motion.div
            className="absolute bottom-20 left-0 w-48 h-48 rounded-full bg-primary/10"
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
          
          {/* Main content card */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-card p-8 border border-border"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-caption block mb-4">Our Philosophy</span>
            <p className="text-xl font-display text-foreground italic">
              "Design is not just what it looks like. Design is how it works."
            </p>
            <span className="text-sm text-muted-foreground mt-4 block">— Steve Jobs</span>
          </motion.div>
          
          {/* Floating accent */}
          <motion.div
            className="absolute top-20 left-10 w-4 h-4 bg-primary animate-pulse-glow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
          
          <motion.div
            className="absolute bottom-10 right-20 w-2 h-2 bg-gold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
