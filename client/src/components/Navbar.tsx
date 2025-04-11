import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from './ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Beta', href: '#beta' },
    { name: 'Roadmap', href: '#roadmap' }
  ];

  return (
    <motion.nav
      className={`glass fixed w-full top-0 z-50 px-4 py-3 md:px-8 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-xl shadow-lg' : 'backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <a className="flex items-center mr-8">
              <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-almond" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h1 className="text-xl md:text-2xl font-display font-semibold text-foreground">prom10</h1>
            </a>
          </Link>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-item text-secondary hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="glass" radius="full" size="default" asChild>
            <a href="#beta">Sign In</a>
          </Button>
          <Button variant="gradient" radius="full" size="default" asChild>
            <a href="#beta">Get Started</a>
          </Button>
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden glass absolute top-full left-0 right-0 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-secondary hover:text-foreground py-2 px-4 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-lavender/10">
                <Button variant="glass" radius="full" size="default" asChild>
                  <a href="#beta" onClick={() => setMobileMenuOpen(false)}>Sign In</a>
                </Button>
                <Button variant="gradient" radius="full" size="default" asChild>
                  <a href="#beta" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
