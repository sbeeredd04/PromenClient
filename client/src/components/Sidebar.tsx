import React, { useState, useEffect } from 'react';
import { Search, Home, Image, Shield, Bookmark, Download, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  activeSectionId: string;
  onSectionChange: (sectionId: string) => void;
}

export default function Sidebar({ activeSectionId, onSectionChange }: SidebarProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const navItems = [
    { id: 'home', name: 'Home', icon: <Home className="sidebar-icon" /> },
    { id: 'why', name: 'Search', icon: <Search className="sidebar-icon" /> },
    { id: 'how', name: 'Gallery', icon: <Image className="sidebar-icon" /> },
    { id: 'features', name: 'Features', icon: <Shield className="sidebar-icon" /> },
    { id: 'roadmap', name: 'Bookmarks', icon: <Bookmark className="sidebar-icon" /> },
    { id: 'beta', name: 'Downloads', icon: <Download className="sidebar-icon" /> },
  ];

  // Animation variants for the sidebar items
  const itemVariants = {
    inactive: { 
      scale: 1, 
      opacity: 0.6,
      filter: "grayscale(30%)"
    },
    active: { 
      scale: 1, 
      opacity: 1,
      filter: "grayscale(0%)"
    }
  };

  return (
    <motion.div
      className="glass-sidebar flex flex-col items-center py-6 px-3 space-y-8"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-7 h-7 flex items-center justify-center rounded-full cursor-pointer text-white/80 mb-4"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.div>

      {navItems.map((item, index) => (
        <motion.div
          key={item.id}
          className={`relative w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${
            activeSectionId === item.id ? 'text-white' : 'text-white/50'
          }`}
          onClick={() => onSectionChange(item.id)}
          variants={itemVariants}
          initial="inactive"
          animate={activeSectionId === item.id ? "active" : "inactive"}
          whileHover={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {item.icon}
          
          {/* Tooltip on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute left-10 bg-black/70 text-white px-2 py-1 rounded text-xs whitespace-nowrap"
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -5 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
}