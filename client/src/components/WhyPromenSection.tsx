import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Zap, Lightbulb, Keyboard } from 'lucide-react';

export default function WhyPromenSection() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-foreground" />,
      title: "Seamless Integration",
      description: "Works across all websites and text fields without disrupting your workflow."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-foreground" />,
      title: "AI-Powered Enhancement",
      description: "Intelligent suggestions that improve clarity, context, and effectiveness of your prompts."
    },
    {
      icon: <Keyboard className="h-6 w-6 text-foreground" />,
      title: "Keyboard Shortcuts",
      description: "Quickly access features with intuitive shortcuts, keeping your hands on the keyboard."
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
    <section id="why" className="py-20 px-4 md:px-8 relative">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            Why <span className="gradient-text">Promen</span>?
          </h2>
          <p className="text-secondary text-lg">
            In the near future, the only bridge that will connect humans with AI tools is the prompt. Promen aims to be at the forefront of this transformation by providing a powerful and intuitive interface for crafting and refining prompts.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="glass gradient-border p-6 rounded-xl feature-card h-full">
                <div className="h-12 w-12 rounded-lg bg-purple-500/30 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-secondary">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
