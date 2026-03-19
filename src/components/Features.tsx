import { motion } from 'framer-motion';
import { Code2, Activity, ShieldCheck, Zap, GitCommit } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Activity className="w-6 h-6 text-primary" />,
      title: "100% Request Mirroring",
      description: "Intercept incoming requests and asynchronously mirror them to a secondary shadow environment."
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "Non-Blocking Async",
      description: "Shadow traffic never impacts user latency. Built on robust ThreadPool execution."
    },
    {
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      title: "Deep JSON Diff Engine",
      description: "Recursively compare v1 and v2 responses to find missing fields, mutated data, and status codes."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-success" />,
      title: "Fail-Safe Architecture",
      description: "If your shadow instance crashes or times out, the main gateway swallows the error safely."
    },
    {
      icon: <GitCommit className="w-6 h-6 text-purple-400" />,
      title: "End-to-End Replays",
      description: "Hit an endpoint to replay old recorded traffics through both systems again to verify fixes."
    },
    {
      icon: <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      title: "Configurable Chaos",
      description: "Test your monitoring with built-in Chaos Engineering via configurable error and latency injection."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="features">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Enterprise-grade <span className="text-primary">Validation</span></h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Everything you need to confidently deploy changes to your backend, without ever risking user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center mb-6 border border-border">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
