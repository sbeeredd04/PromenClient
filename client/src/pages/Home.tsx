import { motion } from 'framer-motion';
import ContentPanel from '@/components/sections/ContentPanel';
import GlassLayout from '@/components/GlassLayout';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <GlassLayout>
      {/* Home Panel */}
      <ContentPanel
        id="home"
        title="Promen AI"
        subtitle="Plus, experience 3D models and the interactive app Evolution Dinosaurs"
      >
        <div className="flex flex-col h-full">
          <motion.div 
            className="flex-grow mt-6 relative rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1655720035610-0def00a6d998?q=80&w=2532&auto=format&fit=crop" 
              alt="Promen AI Assistant" 
              className="w-full h-full object-cover rounded-xl"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
              <h2 className="text-4xl font-bold mb-2">Prompt Assistant</h2>
              <p className="text-lg text-white/80 mb-4">Enhance your AI prompts with intelligent suggestions</p>
              <div className="flex space-x-4">
                <a 
                  href="https://forms.gle/NkbERKZgyy3GEYVX8" 
                  target="_blank" 
                  rel="noreferrer"
                  className="button-primary inline-flex items-center"
                >
                  Join Beta <ChevronRight className="w-4 h-4 ml-1" />
                </a>
                <button className="button-secondary">New Episode</button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div>
              <h3 className="text-xl font-medium mb-1">Step into the Future of Storytelling</h3>
              <p className="text-white/60">Experience AI-powered prompt enhancement</p>
            </div>
            
            <ChevronRight className="w-5 h-5 text-white/60" />
          </motion.div>
        </div>
      </ContentPanel>
      
      {/* Why Panel */}
      <ContentPanel
        id="why"
        title="Search"
        subtitle="Find content across your AI tools"
      >
        <div className="h-full flex flex-col">
          <motion.div 
            className="glass-card p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium mb-4">Why Choose Promen</h3>
            <p className="text-white/70 mb-4">
              Promen enhances your productivity and creativity when working with AI tools
              by providing intelligent prompt assistance right at your fingertips.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-medium mb-2">Smart Suggestions</h4>
                <p className="text-sm text-white/70">Intelligent prompt enhancements based on context</p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-medium mb-2">Keyboard Shortcuts</h4>
                <p className="text-sm text-white/70">Access features with intuitive shortcuts</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-grow relative rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card p-6 h-full">
              <h3 className="text-xl font-medium mb-4">Search AI Prompts</h3>
              <div className="glass-card p-4 mb-4 rounded-lg">
                <input 
                  type="text" 
                  placeholder="Search for AI prompts..." 
                  className="w-full bg-transparent border-none outline-none text-white"
                />
              </div>
              <div className="space-y-4">
                <div className="glass-card p-3 rounded-lg">
                  <p className="text-white/80 text-sm">Recent: <span className="text-white">Write content for website</span></p>
                </div>
                <div className="glass-card p-3 rounded-lg">
                  <p className="text-white/80 text-sm">Popular: <span className="text-white">Generate ideas for project</span></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </ContentPanel>
      
      {/* How Panel */}
      <ContentPanel
        id="how"
        title="Gallery"
        subtitle="Browse AI generated content"
      >
        <div className="grid grid-cols-2 gap-6 h-full">
          <motion.div 
            className="col-span-2 glass-card p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium mb-4">How It Works</h3>
            <p className="text-white/70 mb-4">
              Promen integrates seamlessly into your workflow, appearing only when you need it
              and staying out of your way when you don't.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center mx-auto mb-3">1</div>
                <h4 className="font-medium mb-2">Install Extension</h4>
                <p className="text-sm text-white/70">Add to Chrome</p>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center mx-auto mb-3">2</div>
                <h4 className="font-medium mb-2">Write Prompt</h4>
                <p className="text-sm text-white/70">In any text field</p>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center mx-auto mb-3">3</div>
                <h4 className="font-medium mb-2">Use Shortcut</h4>
                <p className="text-sm text-white/70">Enhance your prompt</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-medium mb-4">Recent Prompts</h3>
            <div className="space-y-4">
              <div className="glass-card p-3 rounded-lg">
                <p className="text-white/80 text-sm">Original: <span className="text-white">Write about climate change</span></p>
              </div>
              <div className="glass-card p-3 rounded-lg border border-purple-500/30">
                <p className="text-white/80 text-sm">Enhanced:</p>
                <p className="text-white text-sm">Write a comprehensive 500-word analysis of climate change, discussing its causes, current impacts, and potential solutions.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-medium mb-4">Popular Templates</h3>
            <div className="space-y-4">
              <div className="glass-card p-3 rounded-lg flex items-center">
                <div className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center mr-3">✓</div>
                <div>
                  <h4 className="font-medium">Business Email</h4>
                  <p className="text-xs text-white/70">Professional email template</p>
                </div>
              </div>
              <div className="glass-card p-3 rounded-lg flex items-center">
                <div className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center mr-3">✓</div>
                <div>
                  <h4 className="font-medium">Blog Post</h4>
                  <p className="text-xs text-white/70">SEO-optimized blog structure</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </ContentPanel>
      
      {/* Features Panel */}
      <ContentPanel
        id="features"
        title="Features"
        subtitle="Explore Promen's capabilities"
      >
        <div className="h-full flex flex-col">
          <motion.div 
            className="glass-card p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-between mb-4">
              <h3 className="text-xl font-medium">Key Features</h3>
              <span className="text-sm text-white/60">Powered by AI</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-medium mb-2">Enhance Prompt</h4>
                <p className="text-sm text-white/70">Ctrl+Shift+L / Cmd+Shift+L</p>
                <p className="text-sm text-white/70 mt-2">Expands your prompt with detail and context</p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-medium mb-2">Rephrase Prompt</h4>
                <p className="text-sm text-white/70">Ctrl+Shift+K / Cmd+Shift+K</p>
                <p className="text-sm text-white/70 mt-2">Improves clarity and precision</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 rounded-xl flex-grow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-medium mb-4">Premium Features</h3>
            <p className="text-white/70 mb-6">
              Coming soon - access these features first by joining our beta program.
            </p>
            
            <div className="relative p-6 glass-card rounded-xl overflow-hidden">
              <div className="absolute top-2 right-2 bg-purple-500/50 px-2 py-1 rounded text-xs">
                Coming Soon
              </div>
              
              <h4 className="text-lg font-medium mb-2">Agent Mode</h4>
              <p className="text-white/70 mb-4">
                Interact with an AI agent directly within text fields. Give it instructions 
                or ask questions, and the agent will generate responses or modify text in place.
              </p>
              
              <div className="flex justify-between">
                <p className="text-sm text-white/60">Shortcut: Ctrl+Shift+U / Cmd+Shift+U</p>
                <a 
                  href="https://forms.gle/NkbERKZgyy3GEYVX8" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-purple-400 text-sm"
                >
                  Join Beta
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </ContentPanel>
      
      {/* Roadmap Panel */}
      <ContentPanel
        id="roadmap"
        title="Roadmap"
        subtitle="Our development timeline"
      >
        <div className="h-full flex flex-col">
          <motion.div 
            className="glass-card p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-between mb-4">
              <h3 className="text-xl font-medium">Development Timeline</h3>
              <span className="text-sm text-white/60">Updated Apr 2025</span>
            </div>
            
            <div className="space-y-6 mt-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-purple-500/50 flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-white">Q2</span>
                </div>
                <div className="glass-card p-4 rounded-lg flex-grow">
                  <h4 className="font-medium mb-1">Beta Launch</h4>
                  <div className="flex items-center">
                    <span className="text-xs bg-purple-500/30 px-2 py-0.5 rounded mr-2">Current</span>
                    <span className="text-sm text-white/70">Q2 2025</span>
                  </div>
                  <p className="text-sm text-white/70 mt-2">
                    Initial release with core prompt enhancement features, available to beta testers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-white">Q3</span>
                </div>
                <div className="glass-card p-4 rounded-lg flex-grow">
                  <h4 className="font-medium mb-1">Public Release</h4>
                  <span className="text-sm text-white/70">Q3 2025</span>
                  <p className="text-sm text-white/70 mt-2">
                    Official release on Chrome Web Store with enhanced prompt capabilities and UI improvements.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 rounded-xl flex-grow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-medium mb-4">Future Plans</h3>
            <div className="space-y-4">
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-medium mb-2">Advanced Features</h4>
                <p className="text-sm text-white/70">Q4 2025</p>
                <p className="text-sm text-white/70 mt-2">
                  Introducing Agent Mode and context-aware suggestions for different AI platforms.
                </p>
              </div>
              
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-medium mb-2">Platform Expansion</h4>
                <p className="text-sm text-white/70">Q1 2026</p>
                <p className="text-sm text-white/70 mt-2">
                  Support for Firefox, Safari, and other browsers, plus more advanced customization options.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </ContentPanel>
      
      {/* Beta Panel */}
      <ContentPanel
        id="beta"
        title="Join Beta"
        subtitle="Limited spots available"
      >
        <div className="grid grid-cols-2 gap-6 h-full">
          <motion.div 
            className="glass-card p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium mb-4">Beta Program</h3>
            <p className="text-white/70 mb-6">
              Be among the first to experience Promen and help shape its future. Our beta testers 
              receive early access to new features and a direct line to our development team.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-white/80">Early access to all features before public release</p>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-white/80">Direct influence on product development</p>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-white/80">Free premium features when we launch</p>
              </div>
            </div>
            
            <a 
              href="https://forms.gle/NkbERKZgyy3GEYVX8" 
              target="_blank" 
              rel="noreferrer"
              className="button-primary inline-flex items-center"
            >
              Apply for Beta Access <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-medium mb-4">Testimonials</h3>
            
            <div className="space-y-4">
              <div className="glass-card p-4 rounded-lg">
                <p className="text-white/80 italic text-sm mb-3">
                  "The prompt enhancement feature saved me so much time when working with AI tools. 
                  It's like having an AI expert by my side at all times."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500/30 mr-2"></div>
                  <span className="text-sm text-white/60">Alex K., Product Designer</span>
                </div>
              </div>
              
              <div className="glass-card p-4 rounded-lg">
                <p className="text-white/80 italic text-sm mb-3">
                  "I've tried many prompt tools, but Promen is by far the most intuitive. 
                  The keyboard shortcuts make it seamless to use while writing."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500/30 mr-2"></div>
                  <span className="text-sm text-white/60">Sarah M., Content Creator</span>
                </div>
              </div>
            </div>
            
            <p className="mt-6 text-sm text-white/70">
              Beta access is limited to ensure we can provide personal support to every tester. 
              Apply now to secure your spot.
            </p>
          </motion.div>
        </div>
      </ContentPanel>
    </GlassLayout>
  );
}
