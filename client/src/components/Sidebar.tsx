import React, { useState, useEffect } from 'react';
import { Home, Search, Image, Shield, Layers, Play, Archive } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NewIcon from '../assets/icon16.png'; // Import the new icon

interface SidebarProps {
  activeSectionId: string;
}

export default function Sidebar({ activeSectionId }: SidebarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index based on section ID
  useEffect(() => {
    const index = navItems.findIndex(item => item.id === activeSectionId);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [activeSectionId]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', name: 'Home', icon: <Home className="sidebar-icon" /> },
    { id: 'why', name: 'Why prom10', icon: <Search className="sidebar-icon" /> },
    { id: 'how', name: 'How It Works', icon: <Image className="sidebar-icon" /> },
    { id: 'features', name: 'Features', icon: <Shield className="sidebar-icon" /> },
    { id: 'roadmap', name: 'Roadmap', icon: <Layers className="sidebar-icon" /> },
    { id: 'beta', name: 'Join Beta', icon: <Archive className="sidebar-icon" /> },
  ];

  // Function to scroll to a section when clicking on sidebar item
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants for the sidebar items
  const itemVariants = {
    inactive: { scale: 1, opacity: 0.7 },
    active: { scale: 1.1, opacity: 1 }
  };

  return (
    <motion.div 
      className="fixed top-1/3 transform -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="glass-sidebar rounded-full flex flex-col items-center py-5 px-2 space-y-6 backdrop-blur-2xl"
        animate={{ 
          width: isHovered ? '70px' : '60px',
          boxShadow: isHovered ? '0 0 15px rgba(255, 255, 255, 0.2)' : '0 0 10px rgba(0, 0, 0, 0.3)'
        }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.id}
            className={`relative w-12 h-12 flex items-center justify-center rounded-full cursor-pointer ${
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
            
            {/* Icon */}
            {item.icon}
            
            {/* Tooltip on hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute left-14 bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
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

        {/* Divider (optional, for visual separation) */}
        <div className="w-full px-2">
          <div className="h-px bg-white/10"></div>
        </div>

        {/* New Icon */}
        <motion.div
          className="relative w-12 h-12 flex items-center justify-center rounded-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.7, y: 0 }} // Slightly faded as it's not active
          transition={{ duration: 0.3, delay: 0.5 }}
          whileHover={{ scale: 1.1, opacity: 1 }} // Add hover effect
        >
          <img src={NewIcon} alt="Settings" className="w-6 h-6" /> {/* Adjust size as needed */}
        </motion.div>

      </motion.div>
    </motion.div>
  );
}