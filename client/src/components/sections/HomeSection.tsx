import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function HomeSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="glass p-10 md:p-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-full md:w-3/5">
              <div className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-sm bg-purple-500/20 text-white/80">
                <span className="mr-2">Chrome Extension</span>
                <span className="inline-flex items-center justify-center rounded-full bg-purple-500/30 h-5 w-5 text-xs">✓</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                The AI <span className="gradient-text">Prompt Assistant</span> for your browser
              </h1>
              
              <p className="text-lg text-white/70 mb-8">
                Promen enhances your productivity and creativity when working with AI tools 
                by providing intelligent prompt assistance right at your fingertips.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://forms.gle/NkbERKZgyy3GEYVX8" 
                  target="_blank" 
                  rel="noreferrer"
                  className="button-primary flex items-center justify-center"
                >
                  Join Beta <ChevronRight className="w-4 h-4 ml-1" />
                </a>
                <a 
                  href="#features" 
                  className="button-secondary flex items-center justify-center"
                >
                  See Features <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
            
            <div className="w-full md:w-2/5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-xl blur-xl"></div>
                <div className="glass rounded-xl p-6 relative">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center mr-3">
                      <div className="h-6 w-6 bg-white/90 rounded-sm flex items-center justify-center text-purple-700 font-bold text-xs">
                        P
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold">Promen AI Assistant</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="glass p-3 rounded-lg text-white/80 text-sm">
                      <p>Original prompt: <span className="text-white">Write about climate change</span></p>
                    </div>
                    
                    <div className="glass p-3 rounded-lg border border-purple-500/30 text-white/80 text-sm">
                      <p>Enhanced prompt:</p>
                      <p className="text-white">Write a comprehensive 500-word analysis of climate change, discussing its causes, current impacts, and potential solutions. Include scientific data and address both environmental and economic perspectives.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}