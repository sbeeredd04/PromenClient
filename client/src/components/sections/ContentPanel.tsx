import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

interface ContentPanelProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function ContentPanel({ id, title, subtitle, children }: ContentPanelProps) {
  return (
    <div
      id={id}
      className="h-full w-full flex flex-col"
    >
      {/* Header */}
      <div className="px-10 pt-8 pb-6 flex items-center">
        <div className="w-7 h-7 mr-4 flex items-center justify-center">
          <ChevronLeft className="w-5 h-5 text-white/60" />
        </div>
        
        <div>
          {subtitle && (
            <motion.p 
              className="text-white/60 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {subtitle}
            </motion.p>
          )}
          <motion.h2 
            className="text-3xl font-semibold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </motion.h2>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-grow overflow-auto panel-content">
        {children}
      </div>
    </div>
  );
}