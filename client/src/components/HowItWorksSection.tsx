import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Play } from 'lucide-react';

export default function HowItWorksSection() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="how-it-works" className="py-20 px-4 md:px-8 relative">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            How <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-secondary text-lg">
            Promen integrates seamlessly into your workflow, appearing only when you need it and staying out of your way when you don't.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="glass gradient-border p-6 rounded-xl h-full">
                <div className="h-12 w-12 rounded-full bg-purple-500/30 flex items-center justify-center mb-4">
                  <span className="text-xl font-display font-bold text-foreground">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-secondary">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 glass gradient-border p-6 md:p-10 rounded-xl max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="aspect-w-16 aspect-h-9 mb-8 relative">
            <img 
              src="https://images.unsplash.com/photo-1661956602868-6ae368943878?q=80&w=1470&auto=format&fit=crop" 
              alt="Promen Demo" 
              className="w-full h-auto rounded-lg object-cover" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="h-16 w-16 rounded-full bg-purple-500/80 flex items-center justify-center cursor-pointer hover:bg-purple-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="h-8 w-8 text-foreground ml-1" />
              </motion.div>
            </div>
          </div>
          <h3 className="text-2xl font-display font-semibold mb-4">See Promen in Action</h3>
          <p className="text-secondary">
            Watch our demo to see how Promen can transform your interaction with AI tools, making your prompts more effective and your workflow more efficient.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
