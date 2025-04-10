import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Wand2, Bot } from 'lucide-react';

// Keyboard shortcut component
const KeyboardShortcut = ({ shortcut }: { shortcut: string }) => (
  <span className="inline-flex items-center justify-center bg-white/10 rounded px-1.5 py-0.5 text-xs font-mono mx-0.5">
    {shortcut}
  </span>
);

interface FeatureProps {
  title: string;
  description: string;
  keyboardShortcut: string;
  bulletPoints: string[];
  image: string;
  reverse?: boolean;
  comingSoon?: boolean;
  icon: React.ReactNode;
}

function Feature({ 
  title, 
  description, 
  keyboardShortcut, 
  bulletPoints, 
  image, 
  reverse = false,
  comingSoon = false,
  icon
}: FeatureProps) {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className={`order-2 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="inline-block glass px-3 py-1 rounded-full text-sm text-white/80 mb-4 flex items-center">
          {icon}
          <span className="ml-2">{keyboardShortcut}</span>
          {comingSoon && <span className="ml-2 bg-purple-500/30 px-2 py-0.5 rounded text-xs">Coming Soon</span>}
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-white/70 text-lg mb-6">{description}</p>
        
        <ul className="space-y-3">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-white/80">{point}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={`order-1 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-xl blur-xl"></div>
          <div className="glass rounded-xl p-5 relative">
            <img
              src={image}
              alt={`${title} Feature`}
              className="w-full h-auto rounded-lg"
            />
            
            {comingSoon && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                <div className="text-center p-6 glass rounded-xl max-w-xs">
                  <div className="h-16 w-16 rounded-full bg-purple-500/50 flex items-center justify-center mx-auto mb-4">
                    {icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">Coming Soon</h4>
                  <p className="text-white/70 text-sm">Join the beta to be among the first to try it.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      title: "Enhance Prompt",
      description: "Transforms basic prompts into detailed instructions. For example, turning 'Summarize this article' into a specific request for key findings, policy implications, and solutions within a word limit.",
      keyboardShortcut: "Ctrl+Shift+L / Cmd+Shift+L",
      bulletPoints: [
        "Adds crucial context and structure for clarity",
        "Guides AI to provide specific, relevant information",
        "Significantly improves the quality and focus of AI output"
      ],
      image: "/src/assets/enhance.png",
      icon: <Sparkles className="h-4 w-4" />
    },
    {
      title: "Rephrase Prompt",
      description: "Optimizes your prompt phrasing for better clarity and conciseness while preserving your original goal, ensuring the AI understands your exact intent.",
      keyboardShortcut: "Ctrl+Shift+R / Cmd+Shift+R",
      bulletPoints: [
        "Refines wording for maximum impact",
        "Reduces ambiguity and potential misinterpretations",
        "Generates alternative phrasings to spark creativity"
      ],
      image: "/src/assets/rephrase.png",
      reverse: true,
      icon: <Wand2 className="h-4 w-4" />
    },
    {
      title: "AI Assistant",
      description: "An intelligent assistant that helps you craft the perfect prompt through conversation and suggestions.",
      keyboardShortcut: "Ctrl+Shift+A / Cmd+Shift+A",
      bulletPoints: [
        "Interactive conversation to refine your ideas",
        "Contextual suggestions based on your input",
        "Learning from your preferences over time"
      ],
      image: "/src/assets/agent.png",
      comingSoon: true,
      icon: <Bot className="h-4 w-4" />
    }
  ];

  return (
    <section 
      id="features" 
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
              <span>Powerful Features</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Everything You <span className="gradient-text">Need</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-white/70 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Promen comes packed with powerful features to enhance your AI interactions, 
              all accessible through simple keyboard shortcuts.
            </motion.p>
          </div>
          
          <div className="space-y-20">
            {features.map((feature, index) => (
              <Feature
                key={index}
                title={feature.title}
                description={feature.description}
                keyboardShortcut={feature.keyboardShortcut}
                bulletPoints={feature.bulletPoints}
                image={feature.image}
                reverse={feature.reverse}
                comingSoon={feature.comingSoon}
                icon={feature.icon}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}