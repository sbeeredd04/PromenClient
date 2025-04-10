import { ReactNode, useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { ChevronDown, MousePointer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GlassLayoutProps {
  children: ReactNode;
}

export default function GlassLayout({ children }: GlassLayoutProps) {
  const [activeSectionId, setActiveSectionId] = useState('home');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Function to update mouse position for subtle parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Function to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset to trigger a bit earlier
      
      // Get all section elements
      const sections = document.querySelectorAll('section[id]');
      
      // Hide scroll indicator after scrolling
      if (window.scrollY > 150 && showScrollIndicator) {
        setShowScrollIndicator(false);
      } else if (window.scrollY <= 100 && !showScrollIndicator) {
        setShowScrollIndicator(true);
      }
      
      // Find the section that is currently in view
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSectionId(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Call once on mount to set initial active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showScrollIndicator]);

  return (
    <div className="relative min-h-screen">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-purple-600/20 blur-3xl"
          animate={{ 
            x: mousePosition.x * 0.02, 
            y: mousePosition.y * 0.02,
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"
          animate={{ 
            x: mousePosition.x * -0.02, 
            y: mousePosition.y * -0.02,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
          style={{ bottom: '10%', right: '20%' }}
        />
      </div>
      
      {/* Main content */}
      <div className="relative min-h-screen flex">
        {/* Sidebar */}
        <Sidebar activeSectionId={activeSectionId} />
        
        {/* Main Content */}
        <main className="flex-grow">
          {children}
          
          {/* Scroll indicator (only shown on home section) */}
          <AnimatePresence>
            {activeSectionId === 'home' && showScrollIndicator && (
              <motion.div 
                className="scroll-indicator"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="flex flex-col items-center"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <span className="text-sm text-white/60 mb-1">Scroll to explore</span>
                  <ChevronDown className="w-5 h-5 text-white/60" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
      
      {/* Mouse follower cursor effect */}
      <motion.div
        className="fixed w-6 h-6 rounded-full border-2 border-white/30 pointer-events-none z-50 hidden md:flex items-center justify-center"
        animate={{ 
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: activeSectionId === 'home' ? 1.2 : 1
        }}
        transition={{ duration: 0.1, ease: "linear" }}
      >
        <motion.div 
          className="w-1.5 h-1.5 bg-white/50 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}