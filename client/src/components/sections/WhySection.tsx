import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, Lightbulb, Keyboard } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div 
      className="glass p-6 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="h-12 w-12 rounded-lg bg-purple-500/30 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
}

export default function WhySection() {
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Seamless Integration",
      description: "Works across all websites and text fields without disrupting your workflow."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      title: "AI-Powered Enhancement",
      description: "Turn basic prompts into detailed requests. Our intelligent suggestions improve clarity, context, and effectiveness, transforming vague requests like 'Summarize this' into specific instructions for better AI output."
    },
    {
      icon: <Keyboard className="h-6 w-6 text-white" />,
      title: "Keyboard Shortcuts",
      description: "Quickly access features with intuitive shortcuts, keeping your hands on the keyboard."
    }
  ];

  return (
    <section 
      id="why" 
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
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-purple-500/20 text-white/80 mb-4"
            >
              <span>Why Choose prom10</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              The Future of <span className="gradient-text">AI Interaction</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-white/70 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              In the near future, prompts are the primary bridge to AI tools. The quality of your prompt directly dictates the quality of the AI's output. A basic prompt might yield a vague response, while a well-crafted one unlocks detailed, relevant results. 
              prom10 is designed to elevate your prompts, providing a powerful interface for crafting and refining your interaction with AI.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={0.3 + index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}