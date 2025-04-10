import { ReactNode, useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { ChevronDown } from 'lucide-react';

interface GlassLayoutProps {
  children: ReactNode;
}

export default function GlassLayout({ children }: GlassLayoutProps) {
  const [activeSectionId, setActiveSectionId] = useState('home');

  // Function to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset to trigger a bit earlier
      
      // Get all section elements
      const sections = document.querySelectorAll('section[id]');
      
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
  }, []);

  return (
    <div className="relative min-h-screen flex">
      {/* Sidebar */}
      <Sidebar activeSectionId={activeSectionId} />
      
      {/* Main Content */}
      <main className="flex-grow pl-20 md:pl-64">
        {children}
        
        {/* Scroll indicator (only shown on home section) */}
        {activeSectionId === 'home' && (
          <div className="scroll-indicator">
            <span className="text-sm text-white/60 mb-1">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 text-white/60" />
          </div>
        )}
      </main>
    </div>
  );
}