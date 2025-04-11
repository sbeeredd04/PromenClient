import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 md:px-8 flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold leading-tight mb-6">
              The AI <span className="gradient-text">Prompt Assistant</span> for your browser
            </h1>
            <p className="text-secondary text-lg md:text-xl mb-8 max-w-2xl">
              prom10 enhances your productivity and creativity when working with AI tools by providing intelligent prompt assistance right at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="gradient" size="lg" asChild>
                <a href="#beta">Join the Beta</a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="#features">See Features</a>
              </Button>
            </div>
            <motion.div 
              className="flex items-center text-sm text-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Zap className="h-5 w-5 mr-2" />
              Available as a Chrome extension
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 floating"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass gradient-border p-4 sm:p-6 rounded-xl relative overflow-hidden max-w-xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1770&auto=format&fit=crop" 
                alt="prom10 UI mockup showing AI prompt assistance" 
                className="w-full h-auto rounded-lg" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 glass rounded-b-lg">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-purple-500/80 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground font-medium">Enhancing your prompt...</p>
                    <p className="text-xs text-secondary">Making it more specific and effective</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
