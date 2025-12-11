import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projectFashion from "@/assets/project-fashion.jpg";
import projectProduct from "@/assets/project-product.jpg";
import projectArt from "@/assets/project-art.jpg";

const projects = [
  {
    title: "Noir Fashion",
    category: "Brand Identity",
    image: projectFashion,
  },
  {
    title: "Vaudéail",
    category: "Product Design",
    image: projectProduct,
  },
  {
    title: "Geometric Dreams",
    category: "Art Direction",
    image: projectArt,
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-24">
      {/* Section header */}
      <div className="mb-20">
        <motion.p
          className="text-caption mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Selected Work
        </motion.p>
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.h2
            className="text-display-lg text-foreground max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Projects that define{" "}
            <span className="italic text-primary">excellence</span>
          </motion.h2>
          
          <motion.p
            className="text-body text-muted-foreground max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Every project is a story of collaboration, innovation, and relentless pursuit of perfection.
          </motion.p>
        </div>
        
        {/* Divider line */}
        <motion.div
          className="h-[1px] bg-border mt-12 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            index={index}
          />
        ))}
      </div>
      
      {/* View all button */}
      <motion.div
        className="mt-20 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.button
          className="group relative px-12 py-5 border border-foreground/20 overflow-hidden"
          whileHover={{ borderColor: "hsl(var(--primary))" }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className="absolute inset-0 bg-primary"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
          <span className="relative z-10 text-sm uppercase tracking-[0.2em] text-foreground group-hover:text-primary-foreground transition-colors duration-300">
            View All Projects
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default WorkSection;
