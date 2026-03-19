
import { motion } from 'framer-motion';
import { Server, Database, Activity, ArrowRightLeft, Cpu } from 'lucide-react';

const Architecture = () => {
  return (
    <section className="py-24 bg-[#0a0a0c] border-y border-border relative overflow-hidden" id="architecture">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How it <span className="text-accent">Works</span></h2>
          <p className="text-secondary text-lg">
            Intercept, branch, and validate traffic in real-time.
          </p>
        </div>

        <div className="glass-panel p-8 md:p-12 relative">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
            
            {/* Client */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center z-10"
            >
              <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center border border-zinc-700 shadow-lg mb-4">
                <Activity className="w-8 h-8 text-primary" />
              </div>
              <span className="font-semibold">Client App</span>
              <span className="text-xs text-secondary mt-1">Sends exact payload</span>
            </motion.div>

            {/* Gateway */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center relative z-10"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border border-primary/30 shadow-[0_0_30px_rgba(59,130,246,0.3)] mb-4 backdrop-blur-md">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <span className="font-bold text-lg text-primary text-center">Proxy Gateway</span>
              <span className="text-xs text-secondary mt-1 max-w-[120px] text-center bg-zinc-900/50 p-2 rounded-lg border border-border">Splits traffic 100% async</span>
            </motion.div>

            {/* V1 Side */}
            <div className="flex flex-col gap-12 z-10">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-6"
              >
                <div className="h-px w-12 custom-dashed-line bg-secondary/30 hidden md:block" />
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center border-2 border-primary/50 shadow-lg mb-3">
                    <Server className="w-8 h-8 text-primary" />
                  </div>
                  <span className="font-medium text-sm">v1 Service</span>
                  <span className="text-xs text-secondary text-primary/80">Primary (Sync)</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-6"
              >
                <div className="h-px w-12 custom-dashed-line bg-secondary/30 hidden md:block" />
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center border-2 border-accent/50 shadow-lg mb-3">
                    <Server className="w-8 h-8 text-accent" />
                  </div>
                  <span className="font-medium text-sm">v2 Service</span>
                  <span className="text-xs text-secondary text-accent/80">Shadow (Async)</span>
                </div>
              </motion.div>
            </div>

            {/* Comparison */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center z-10"
            >
              <div className="h-px w-12 custom-dashed-line bg-secondary/30 hidden md:block" />
              <div className="w-20 h-20 bg-zinc-900 rounded-full flex flex-col items-center justify-center border border-border shadow-2xl mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                <ArrowRightLeft className="w-8 h-8 text-zinc-300 relative z-10" />
              </div>
              <span className="font-bold text-sm text-center">Diff Engine</span>
              <span className="text-xs text-secondary mt-1">Matches JSON</span>
            </motion.div>

            {/* DB */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center z-10"
            >
              <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700 shadow-lg mb-4">
                <Database className="w-8 h-8 text-purple-400" />
              </div>
              <span className="font-semibold text-sm text-center">PostgreSQL</span>
              <span className="text-xs text-secondary mt-1">Logs everything</span>
            </motion.div>
            
          </div>
          
          {/* Connecting lines for desktop */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0" style={{ opacity: 0.3 }}>
             <path d="M 120 150 L 250 150" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-pulse" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
