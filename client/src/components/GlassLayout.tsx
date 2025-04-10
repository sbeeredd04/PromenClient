import React, { ReactNode, useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  content: ReactNode;
  isActive: boolean;
}

const Section = ({ id, title, content, isActive }: SectionProps) => {
  return (
    <motion.div
      className={`section-fade ${isActive ? 'active' : ''} h-full w-full absolute inset-0`}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        zIndex: isActive ? 10 : -1,
      }}
      transition={{ duration: 0.6 }}
    >
      {content}
    </motion.div>
  );
};

interface GlassLayoutProps {
  children: ReactNode;
}

export default function GlassLayout({ children }: GlassLayoutProps) {
  const [activeSectionId, setActiveSectionId] = useState('home');
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Extract individual section components from children
  const sections = React.Children.toArray(children)
    .filter((child): child is React.ReactElement => 
      React.isValidElement(child) && Boolean(child.props?.id)
    );
  
  // Handle section change from sidebar
  const handleSectionChange = (sectionId: string) => {
    setActiveSectionId(sectionId);
    const index = sections.findIndex(
      section => section.props.id === sectionId
    );
    if (index !== -1) {
      setCurrentIndex(index);
    }
  };

  // Navigate between sections
  const goToNextSection = () => {
    if (currentIndex < sections.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      const nextSection = sections[nextIndex];
      setActiveSectionId(nextSection.props.id);
    }
  };

  const goToPrevSection = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      const prevSection = sections[prevIndex];
      setActiveSectionId(prevSection.props.id);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNextSection();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSection();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <div className="h-full flex items-center justify-center overflow-hidden">
      {/* Sidebar Navigation - positioned by CSS */}
      <Sidebar 
        activeSectionId={activeSectionId} 
        onSectionChange={handleSectionChange} 
      />
      
      {/* Main Glass Container */}
      <div className="main-container">
        <div className="glass-panel relative">
          {/* Content Area */}
          <div 
            ref={contentRef} 
            className="relative h-full w-full content-area"
          >
            {React.Children.map(children, (child, index) => {
              if (React.isValidElement(child)) {
                return (
                  <Section
                    key={child.props.id}
                    id={child.props.id}
                    title={child.props.title || 'Section'}
                    content={child}
                    isActive={index === currentIndex}
                  />
                );
              }
              return null;
            })}
          </div>
          
          {/* Navigation Controls */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
            {sections.map((section, index) => (
              <div 
                key={index}
                className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  setCurrentIndex(index);
                  setActiveSectionId(section.props.id);
                }}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-1/3 z-30">
            <div className="progress-bar">
              <motion.div 
                className="progress-bar-active"
                initial={{ width: '0%' }}
                animate={{ 
                  width: `${(currentIndex / Math.max(sections.length - 1, 1)) * 100}%` 
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}