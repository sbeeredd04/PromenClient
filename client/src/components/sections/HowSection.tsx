import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

function StepCard({ number, title, description, delay }: StepCardProps) {
  return (
    <motion.div 
      className="glass p-6 rounded-xl relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="h-12 w-12 rounded-full bg-purple-500/30 flex items-center justify-center mb-4">
        <span className="text-xl font-bold text-white">{number}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
}

export default function HowSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      number: "1",
      title: "Install Extension",
      description: "Add Promen to Chrome with just a few clicks. No account required to get started."
    },
    {
      number: "2",
      title: "Write Your Prompt",
      description: "Start typing in any text field across the web. Promen will detect it automatically."
    },
    {
      number: "3",
      title: "Use Keyboard Shortcuts",
      description: "Access Promen's features with simple keyboard shortcuts to enhance or rephrase your prompt."
    }
  ];

  return (
    <section 
      id="how" 
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
              <span>Simple Process</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              How <span className="gradient-text">It Works</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-white/70 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Promen integrates seamlessly into your workflow, appearing only when you need it and 
              staying out of your way when you don't.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                delay={0.3 + index * 0.1}
              />
            ))}
          </div>
          
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass p-6 rounded-xl max-w-2xl"
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center mr-3">
                  <Play className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Watch Demo</h3>
              </div>
              
              <div className="aspect-video bg-black/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white/70 mb-2">Video demo coming soon</p>
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-purple-500/20 text-white/80">
                    <span>Stay tuned</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}