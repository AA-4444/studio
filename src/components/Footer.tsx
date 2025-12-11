import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.p
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          © 2024 Studio. All rights reserved.
        </motion.p>
        
        <motion.div
          className="flex gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
            Terms of Service
          </a>
        </motion.div>
        
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -2 }}
        >
          Back to top
          <motion.svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="rotate-[-90deg]"
          >
            <path
              d="M2 6H10M10 6L6 2M10 6L6 10"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </motion.svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
