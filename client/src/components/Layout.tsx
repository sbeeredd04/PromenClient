import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import Navbar from './Navbar';
import Footer from './Footer';
import { getRandomWavePattern } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // Create SVG wave backgrounds
  const wavePatterns = [
    getRandomWavePattern(0, { brightness: 0.2, contrast: 1.5, hueRotate: 210 }),
    getRandomWavePattern(1, { brightness: 0.15, contrast: 2, hueRotate: 200 }),
  ];

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background waves */}
      <div 
        className="waves wave1 opacity-60" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1974&auto=format&fit=crop')`,
          filter: 'brightness(0.2) contrast(1.5) hue-rotate(210deg)',
          transform: 'scale(1.1)'
        }} 
      />
      <div 
        className="waves wave2 opacity-30" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1974&auto=format&fit=crop')`,
          filter: 'brightness(0.15) contrast(2) hue-rotate(200deg)',
          transform: 'scale(1.2) rotate(10deg)'
        }} 
      />

      <Navbar />
      
      <motion.main 
        className="flex-grow relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      
      <Footer />
    </div>
  );
}
