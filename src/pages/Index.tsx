import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

const Index = () => {
  useEffect(() => {
    // Hide default cursor on desktop
    if (window.matchMedia('(hover: hover)').matches) {
      document.body.style.cursor = 'none';
      
      const allElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
      allElements.forEach(el => {
        (el as HTMLElement).style.cursor = 'none';
      });
    }
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="grain">
      <CustomCursor />
      <Navigation />
      
      <SmoothScroll>
        <main>
          <Hero />
          
          <Marquee 
            words={["Branding", "Digital Design", "Development", "Strategy", "Art Direction"]} 
          />
          
          <WorkSection />
          
          <Marquee 
            words={["Innovation", "Creativity", "Excellence", "Passion", "Impact"]} 
            reverse 
          />
          
          <AboutSection />
          
          <ContactSection />
        </main>
        
        <Footer />
      </SmoothScroll>
    </div>
  );
};

export default Index;
