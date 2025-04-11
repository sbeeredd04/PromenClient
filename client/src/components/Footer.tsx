import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Twitter, Linkedin, Github, Facebook, Dribbble, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-4 md:px-8 relative">
      <div className="container mx-auto">
        <motion.div 
          className="glass gradient-border p-8 md:p-12 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">prom10</h3>
              </div>
              <p className="text-secondary text-sm mb-6">
                Enhancing your productivity and creativity when working with AI tools.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-secondary hover:text-foreground transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-secondary hover:text-foreground transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-secondary hover:text-foreground transition-colors">
                  <Dribbble size={20} />
                </a>
                <a href="#" className="text-secondary hover:text-foreground transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="text-secondary hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-secondary hover:text-foreground transition-colors">How It Works</a></li>
                <li><a href="#roadmap" className="text-secondary hover:text-foreground transition-colors">Roadmap</a></li>
                <li><a href="#" className="text-secondary hover:text-foreground transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-secondary hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="text-secondary hover:text-foreground transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-secondary hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-secondary hover:text-foreground transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-secondary hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="text-secondary hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="text-secondary hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-secondary hover:text-foreground transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-lavender/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-secondary mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} prom10. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-secondary hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="text-sm text-secondary hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="text-sm text-secondary hover:text-foreground transition-colors">Cookies</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
