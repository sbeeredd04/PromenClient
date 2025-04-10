import React, { useState, useEffect } from 'react';
import { Home, Search, Image, Shield, Layers, Play, Archive } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  activeSectionId: string;
}

export default function Sidebar({ activeSectionId }: SidebarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index based on section ID
  useEffect(() => {
    const index = navItems.findIndex(item => item.id === activeSectionId);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [activeSectionId]);

  const navItems = [
    { id: 'home', name: 'Home', icon: <Home className="sidebar-icon" /> },
    { id: 'why', name: 'Why Promen', icon: <Search className="sidebar-icon" /> },
    { id: 'how', name: 'How It Works', icon: <Image className="sidebar-icon" /> },
    { id: 'features', name: 'Features', icon: <Shield className="sidebar-icon" /> },
    { id: 'roadmap', name: 'Roadmap', icon: <Layers className="sidebar-icon" /> },
    { id: 'beta', name: 'Join Beta', icon: <Archive className="sidebar-icon" /> },
  ];

  // Function to scroll to a section when clicking on sidebar item
  const scrollToSection = (id: string) => {
    const container = document.querySelector('.scroll-smooth');
    const element = document.getElementById(id);
    if (element && container) {
      container.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Animation variants for the sidebar items
  const itemVariants = {
    inactive: { scale: 1, opacity: 0.7 },
    active: { scale: 1.1, opacity: 1 }
  };

  return (
    <motion.div 
      className="h-full flex flex-col items-center justify-center z-30 px-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="glass-sidebar rounded-full flex flex-col items-center py-6 px-2 space-y-8 backdrop-blur-2xl"
        animate={{ 
          width: isHovered ? '60px' : '50px',
          boxShadow: isHovered ? '0 0 15px rgba(255, 255, 255, 0.2)' : '0 0 10px rgba(0, 0, 0, 0.3)'
        }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.id}
            className={`relative w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ${
              activeSectionId === item.id ? 'text-white' : 'text-white/50'
            }`}
            onClick={() => scrollToSection(item.id)}
            variants={itemVariants}
            initial="inactive"
            animate={activeSectionId === item.id ? "active" : "inactive"}
            whileHover={{ scale: 1.15, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {/* Active indicator dot */}
            {activeSectionId === item.id && (
              <motion.div 
                className="absolute right-0 w-1.5 h-1.5 bg-white rounded-full"
                layoutId="active-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            
            {/* Icon with glow effect when active */}
            <motion.div
              animate={{ 
                filter: activeSectionId === item.id 
                  ? "drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))" 
                  : "drop-shadow(0 0 0px rgba(255, 255, 255, 0))"
              }}
              transition={{ duration: 0.3 }}
            >
              {item.icon}
            </motion.div>
            
            {/* Tooltip on hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute left-14 bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap z-50"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}