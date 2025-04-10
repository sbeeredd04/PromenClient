import { ReactNode, useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import { ChevronDown, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GlassLayoutProps {
  children: ReactNode;
}

export default function GlassLayout({ children }: GlassLayoutProps) {
  const [activeSectionId, setActiveSectionId] = useState('home');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Function to update active section based on scroll position in the container
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    const handleScroll = () => {
      const scrollPosition = container.scrollTop + 100; // Offset to trigger a bit earlier
      
      // Get all section elements within the container
      const sections = container.querySelectorAll('section[id]');
      
      // Hide scroll indicator after scrolling
      if (container.scrollTop > 150 && showScrollIndicator) {
        setShowScrollIndicator(false);
      } else if (container.scrollTop <= 100 && !showScrollIndicator) {
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
    
    container.addEventListener('scroll', handleScroll);
    
    // Call once on mount to set initial active section
    handleScroll();
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [showScrollIndicator, containerRef.current]);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
      {/* Darkened overlay to enhance glass effect */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      
      {/* Vision Pro style container */}
      <motion.div 
        className="relative w-[85%] h-[80%] max-w-7xl overflow-hidden z-10 vision-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header bar with title */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-14 bg-black/20 backdrop-blur-md z-20 flex items-center justify-center border-b border-white/5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-center">
            <ChevronLeft className="h-4 w-4 text-white/60 mr-2" />
            <span className="text-white/80 text-sm font-medium tracking-wide">
              Only on <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold">Promen AI</span>
            </span>
          </div>
        </motion.div>
        
        {/* Main flex container */}
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="flex-shrink-0 h-full py-12">
            <Sidebar activeSectionId={activeSectionId} />
          </div>
          
          {/* Main content scrollable area */}
          <div 
            ref={containerRef}
            className="flex-grow h-full overflow-y-auto overflow-x-hidden scroll-smooth" 
            style={{ 
              background: 'rgba(25, 25, 30, 0.25)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '0 24px 24px 0'
            }}
          >
            {children}
            
            {/* Scroll indicator (only shown on home section) */}
            <AnimatePresence>
              {activeSectionId === 'home' && showScrollIndicator && (
                <motion.div 
                  className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
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
          </div>
        </div>
      </motion.div>
      
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