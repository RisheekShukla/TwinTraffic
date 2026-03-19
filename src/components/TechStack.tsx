
import { motion } from 'framer-motion';

const TechStack = () => {
  const tech = [
    { name: 'Java 21', color: 'from-[#f89820] to-[#5382a1]' },
    { name: 'Spring Boot 3', color: 'from-[#6db33f] to-[#4b9b2b]' },
    { name: 'PostgreSQL', color: 'from-[#336791] to-[#244c6b]' },
    { name: 'Redis', color: 'from-[#d82c20] to-[#a31b11]' },
    { name: 'Docker', color: 'from-[#2496ed] to-[#1a6fb0]' },
  ];

  return (
    <section className="py-20 border-y border-border bg-[#0e0e11]" id="tech">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-sm font-semibold text-secondary tracking-widest uppercase mb-10">
          Built with production-ready technology
        </h3>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          {tech.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-lg blur opacity-0 group-hover:opacity-40 transition duration-500`} />
              <div className="relative glass-panel px-8 py-4 flex items-center justify-center font-mono font-semibold text-zinc-300 group-hover:text-white transition-colors">
                {item.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
