import { useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  isLeft: boolean;
  current?: boolean;
}

function TimelineItem({ date, title, description, isLeft, current = false }: TimelineItemProps) {
  return (
    <div className={`relative flex items-center ${isLeft ? 'justify-end' : ''}`}>
      {/* Timeline connector */}
      <div className="absolute left-1/2 w-px h-full bg-purple-500/30 -translate-x-1/2 z-0"></div>
      
      {/* Content */}
      <motion.div
        className={`relative z-10 glass p-6 rounded-xl max-w-md ${isLeft ? 'mr-8 md:mr-12' : 'ml-8 md:ml-12'}`}
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-2">
          <span className="text-sm text-white/60 bg-white/10 px-2 py-1 rounded">{date}</span>
          {current && (
            <span className="ml-2 text-xs bg-purple-500/30 px-2 py-1 rounded">Current</span>
          )}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </motion.div>
      
      {/* Center dot */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20">
        {current ? (
          <div className="h-10 w-10 rounded-full bg-purple-500/30 flex items-center justify-center">
            <CheckCircle2 className="h-6 w-6 text-purple-400" />
          </div>
        ) : (
          <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
            <Circle className="h-4 w-4 text-white/60" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function RoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const timelineItems = [
    {
      date: "Q2 2025",
      title: "Beta Launch",
      description: "Initial release with core prompt enhancement features, available to beta testers.",
      isLeft: false,
      current: true
    },
    {
      date: "Q3 2025",
      title: "Public Release",
      description: "Official release on Chrome Web Store with enhanced prompt capabilities and UI improvements.",
      isLeft: true
    },
    {
      date: "Q4 2025",
      title: "Advanced Features",
      description: "Introducing Agent Mode and context-aware suggestions for different AI platforms.",
      isLeft: false
    },
    {
      date: "Q1 2026",
      title: "Platform Expansion",
      description: "Support for Firefox, Safari, and other browsers, plus more advanced customization options.",
      isLeft: true
    }
  ];

  return (
    <section 
      id="roadmap" 
      ref={sectionRef}
      className="min-h-screen flex items-center py-20"
    >
      <div className="w-full">
        <motion.div 
          className="glass p-10 md:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-purple-500/20 text-white/80 mb-4"
            >
              <span>Future Plans</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our <span className="gradient-text">Roadmap</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-white/70 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We have an exciting roadmap ahead, with plans to expand Promen's capabilities 
              and make it available across more platforms.
            </motion.p>
          </div>
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                date={item.date}
                title={item.title}
                description={item.description}
                isLeft={item.isLeft}
                current={item.current}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}