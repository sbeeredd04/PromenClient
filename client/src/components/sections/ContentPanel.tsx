import React from 'react';
import { motion } from 'framer-motion';

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
      className="h-full w-full flex flex-col p-10"
    >
      {/* Header */}
      <div className="mb-6">
        {subtitle && (
          <motion.p 
            className="text-white/60 text-sm mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h2 
          className="text-3xl font-semibold text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title}
        </motion.h2>
      </div>

      {/* Content */}
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
}