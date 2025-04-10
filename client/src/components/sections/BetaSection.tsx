import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function BetaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const benefits = [
    "Early access to all features before public release",
    "Direct influence on product development",
    "Private Discord community with the Promen team",
    "Free premium features when we launch"
  ];

  return (
    <section 
      id="beta" 
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
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-purple-500/20 text-white/80 mb-4"
              >
                <span>Limited Spots Available</span>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Join Our <span className="gradient-text">Beta Program</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-white/70 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Be among the first to experience Promen and help shape its future. Our beta testers receive early access to new features and a direct line to our development team.
              </motion.p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="h-6 w-6 rounded-full bg-purple-500/30 flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/80">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <a 
                  href="https://forms.gle/NkbERKZgyy3GEYVX8" 
                  target="_blank" 
                  rel="noreferrer"
                  className="button-primary inline-flex items-center"
                >
                  Apply for Beta Access <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-xl blur-xl"></div>
                <div className="glass rounded-xl p-6 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1550063873-ab792950096b?q=80&w=1770&auto=format&fit=crop" 
                    alt="Beta Program" 
                    className="w-full h-auto rounded-lg mb-6"
                  />
                  
                  <h3 className="text-xl font-semibold mb-2">What Beta Testers Say</h3>
                  
                  <div className="glass p-4 rounded-lg mb-4">
                    <p className="text-white/80 italic">"The prompt enhancement feature saved me so much time when working with AI tools. It's like having an AI expert by my side at all times."</p>
                    <div className="flex items-center mt-3">
                      <div className="h-8 w-8 rounded-full bg-purple-500/30 mr-2"></div>
                      <span className="text-sm text-white/60">Alex K., Product Designer</span>
                    </div>
                  </div>
                  
                  <p className="text-white/70 text-sm">
                    Beta access is limited to ensure we can provide personal support 
                    to every tester. Apply now to secure your spot.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}