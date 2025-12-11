import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  
  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    closed: { 
      opacity: 0, 
      y: 50,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }
    },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    },
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
        <nav className="flex justify-between items-center px-6 md:px-12 py-6">
          <motion.a 
            href="#"
            className="text-foreground text-xl font-display font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            STUDIO
          </motion.a>
          
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 text-foreground text-sm uppercase tracking-[0.2em] link-underline"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {isOpen ? "Close" : "Menu"}
          </motion.button>
        </nav>
      </header>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background"
            initial={{ clipPath: "circle(0% at calc(100% - 60px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 60px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 60px) 40px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="h-full flex flex-col justify-center items-center"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {menuItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  variants={itemVariants}
                  className="text-display-lg text-foreground hover:text-primary transition-colors duration-300 py-4"
                >
                  {item.label}
                </motion.a>
              ))}
              
              <motion.div 
                variants={itemVariants}
                className="mt-16 text-center"
              >
                <p className="text-caption mb-4">Get in touch</p>
                <a 
                  href="mailto:hello@studio.com" 
                  className="text-body-lg text-foreground link-underline"
                >
                  hello@studio.com
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
