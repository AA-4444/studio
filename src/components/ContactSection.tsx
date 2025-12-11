import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll be in touch soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left content */}
          <div>
            <motion.p
              className="text-caption mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Get In Touch
            </motion.p>
            
            <motion.h2
              className="text-display-lg text-foreground mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Let's create something{" "}
              <span className="italic text-primary">extraordinary</span>
            </motion.h2>
            
            <motion.p
              className="text-body text-muted-foreground mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Have a project in mind? We'd love to hear about it. Send us a message and let's start a conversation.
            </motion.p>
            
            {/* Contact info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <span className="text-caption block mb-2">Email</span>
                <a 
                  href="mailto:hello@studio.com" 
                  className="text-xl text-foreground link-underline"
                >
                  hello@studio.com
                </a>
              </div>
              
              <div>
                <span className="text-caption block mb-2">Location</span>
                <p className="text-xl text-foreground">
                  New York / Los Angeles
                </p>
              </div>
              
              <div>
                <span className="text-caption block mb-2">Social</span>
                <div className="flex gap-6">
                  {["Instagram", "Twitter", "Dribbble"].map((social) => (
                    <a 
                      key={social}
                      href="#" 
                      className="text-foreground link-underline text-sm uppercase tracking-wider"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right - Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Name field */}
            <div className="relative">
              <motion.label
                className="text-caption block mb-3"
                animate={{
                  color: focusedField === "name" ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                }}
              >
                Your Name
              </motion.label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full bg-transparent border-b border-border py-4 text-lg text-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                placeholder="John Doe"
              />
            </div>
            
            {/* Email field */}
            <div className="relative">
              <motion.label
                className="text-caption block mb-3"
                animate={{
                  color: focusedField === "email" ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                }}
              >
                Your Email
              </motion.label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full bg-transparent border-b border-border py-4 text-lg text-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                placeholder="john@example.com"
              />
            </div>
            
            {/* Message field */}
            <div className="relative">
              <motion.label
                className="text-caption block mb-3"
                animate={{
                  color: focusedField === "message" ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                }}
              >
                Your Message
              </motion.label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                required
                rows={4}
                className="w-full bg-transparent border-b border-border py-4 text-lg text-foreground focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            
            {/* Submit button */}
            <motion.button
              type="submit"
              className="group relative w-full py-5 bg-primary text-primary-foreground overflow-hidden"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 bg-foreground"
                initial={{ x: "-100%" }}
                variants={{
                  hover: { x: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
              <span className="relative z-10 text-sm uppercase tracking-[0.2em] group-hover:text-background transition-colors duration-300">
                Send Message
              </span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
