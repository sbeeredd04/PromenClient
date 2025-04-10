import HomeSection from '@/components/sections/HomeSection';
import WhySection from '@/components/sections/WhySection';
import HowSection from '@/components/sections/HowSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import BetaSection from '@/components/sections/BetaSection';
import GlassLayout from '@/components/GlassLayout';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

// Gemini PoweredBy component - sticky top right
function PoweredByGemini() {
  return (
    <motion.div 
      className="fixed top-4 right-4 z-50 flex items-center bg-black/30 backdrop-blur-md rounded-full px-3 py-1.5 shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <div className="flex items-center space-x-2">
        <span className="text-white/70 text-sm">Powered by</span>
        <span className="font-semibold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Gemini</span>
        <img 
          src="/src/assets/gemini_icon.png" 
          alt="Gemini Logo" 
          className="w-5 h-5 ml-1" 
        />
      </div>
    </motion.div>
  );
}

export default function Home() {
  // Initialize scroll animation observer
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.section-fade-in');
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      sections.forEach((section) => sectionObserver.unobserve(section));
    };
  }, []);

  return (
    <>
      <PoweredByGemini />
      <GlassLayout>
        <HomeSection />
        <WhySection />
        <HowSection />
        <FeaturesSection />
        <RoadmapSection />
        <BetaSection />
      </GlassLayout>
    </>
  );
}
