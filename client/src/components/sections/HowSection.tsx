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
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="container mx-auto max-w-6xl">
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
                delay={0.3 + (index * 0.1)}
              />
            ))}
          </div>
          
          <motion.div
            className="relative mt-12 glass p-6 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <img 
                src="https://images.unsplash.com/photo-1661956602868-6ae368943878?q=80&w=1470&auto=format&fit=crop" 
                alt="Promen Demo" 
                className="w-full h-auto rounded-lg object-cover opacity-80" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-purple-500/80 flex items-center justify-center cursor-pointer hover:bg-purple-500 transition-colors">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mt-4">See Promen in Action</h3>
            <p className="text-white/70">
              Watch our demo to see how Promen can transform your interaction with AI tools, making your 
              prompts more effective and your workflow more efficient.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}