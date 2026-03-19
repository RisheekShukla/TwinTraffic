import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-border">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[150px] rounded-[100%] pointer-events-none" />
      <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Production-grade mirror testing
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
        >
          Validate your backend <br className="hidden md:block" />
          <span className="gradient-text">safely using real traffic</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-secondary text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Mirror production requests, detect deep JSON bugs, and compare latencies between microservices — entirely in the background, without ever impacting your users.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#demo" className="primary-btn w-full sm:w-auto justify-center">
            Try Interactive Demo <ArrowRight className="w-5 h-5 ml-1" />
          </a>
          <a href="https://github.com/risheekshukla/ShadowTool" target="_blank" rel="noreferrer" className="secondary-btn w-full sm:w-auto justify-center">
            <Github className="w-5 h-5 mr-1" /> View Source Code
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
