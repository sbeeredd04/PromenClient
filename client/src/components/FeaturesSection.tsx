import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Check } from 'lucide-react';

// Keyboard shortcut component
const KeyboardShortcut = ({ shortcut }: { shortcut: string }) => (
  <span className="shortcut-key">{shortcut}</span>
);

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="features" className="py-20 px-4 md:px-8 relative">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-secondary text-lg">
            Promen offers a suite of powerful tools to enhance your interactions with AI models, making your prompts more effective and your workflow more efficient.
          </p>
        </motion.div>
        
        <motion.div 
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Feature 1: Enhance Prompt */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block glass px-3 py-1 rounded-full text-sm text-secondary mb-4">
                <KeyboardShortcut shortcut="Ctrl+Shift+L" /> / <KeyboardShortcut shortcut="Cmd+Shift+L" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">Enhance Prompt</h3>
              <p className="text-secondary text-lg mb-6">
                Takes your current prompt and expands upon it, adding detail, context, and specificity to make it more effective for AI models.
              </p>
              <ul className="space-y-3 text-secondary">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  Adds crucial context that AI models need
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  Expands brief ideas into detailed instructions
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  Improves output quality with better input
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 floating">
              <Card className="glass gradient-border rounded-xl overflow-hidden max-w-md mx-auto">
                <img 
                  src="" 
                  alt="Enhance Prompt Feature" 
                  className="w-full h-auto" 
                />
                <div className="p-5">
                  <div className="flex flex-col gap-4">
                    <div className="glass rounded-lg p-3 text-sm">
                      <p className="text-xs text-secondary">Original Prompt:</p>
                      <p className="text-foreground">Write about climate change</p>
                    </div>
                    <div className="glass rounded-lg p-3 text-sm border border-purple-500/30">
                      <p className="text-xs text-secondary">Enhanced Prompt:</p>
                      <p className="text-foreground">Write a comprehensive 500-word analysis on climate change, discussing its causes, current impacts, and potential solutions. Include recent scientific data and address both environmental and economic perspectives.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
          
          {/* Feature 2: Rephrase Prompt */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <Card className="glass gradient-border rounded-xl overflow-hidden max-w-md mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1974&auto=format&fit=crop" 
                  alt="Rephrase Prompt Feature" 
                  className="w-full h-auto" 
                />
                <div className="p-5">
                  <div className="flex flex-col gap-4">
                    <div className="glass rounded-lg p-3 text-sm">
                      <p className="text-xs text-secondary">Original Prompt:</p>
                      <p className="text-foreground">I want to make an app that helps people find restaurants but I don't know how to start can you help me with this problem</p>
                    </div>
                    <div className="glass rounded-lg p-3 text-sm border border-purple-500/30">
                      <p className="text-xs text-secondary">Rephrased Prompt:</p>
                      <p className="text-foreground">Please provide a step-by-step guide for developing a restaurant finder application, including initial planning, required technologies, and key features to implement.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="order-2">
              <div className="inline-block glass px-3 py-1 rounded-full text-sm text-secondary mb-4">
                <KeyboardShortcut shortcut="Ctrl+Shift+K" /> / <KeyboardShortcut shortcut="Cmd+Shift+K" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">Rephrase Prompt</h3>
              <p className="text-secondary text-lg mb-6">
                Rewrites your prompt to be clearer, more concise, and precise, improving its overall quality and effectiveness.
              </p>
              <ul className="space-y-3 text-secondary">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  Eliminates ambiguity and wordiness
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  Structures prompts for better comprehension
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  Maintains your intent while improving clarity
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Feature 3: Agent Mode (Coming Soon) */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block glass px-3 py-1 rounded-full text-sm text-secondary mb-4">
                <KeyboardShortcut shortcut="Ctrl+Shift+U" /> / <KeyboardShortcut shortcut="Cmd+Shift+U" />
                <span className="ml-2 text-xs bg-purple-500/30 px-2 py-0.5 rounded">Coming Soon</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">Agent Mode</h3>
              <p className="text-secondary text-lg mb-6">
                Interact with an AI agent directly within text fields. Give it instructions or ask questions, and the agent will generate responses or modify text in place.
              </p>
              <ul className="space-y-3 text-secondary">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  Works as your personal writing assistant
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  Handles complex text transformations
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  Adapts to your specific needs and context
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 floating">
              <Card className="glass gradient-border rounded-xl overflow-hidden max-w-md mx-auto relative">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" 
                  alt="Agent Mode Feature" 
                  className="w-full h-auto opacity-80" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6 glass rounded-xl max-w-xs">
                    <div className="h-16 w-16 rounded-full bg-purple-500/50 flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Coming Soon</h4>
                    <p className="text-secondary text-sm">Our most advanced feature is in development. Join the beta to be among the first to try it.</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
