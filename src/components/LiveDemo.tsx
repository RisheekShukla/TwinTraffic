import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, XCircle, AlertCircle, Clock, ArrowRightLeft } from 'lucide-react';

const mockResponses = [
  { type: 'MATCH', v1: 200, v2: 200, diff: '0ms', body: { status: 'ok', data: { value: 42 } }, error: null },
  { type: 'MISMATCH', v1: 200, v2: 500, diff: '20ms', body: { status: 'error', code: 500 }, error: 'JSON Body Diff detected: mapped fields altered' },
  { type: 'TIMEOUT', v1: 200, v2: 504, diff: '5002ms', body: null, error: 'v2 timed out after 5000ms' },
];

const LiveDemo = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const handleFireRequest = () => {
    setLoading(true);
    
    // Simulate network delay
    setTimeout(() => {
      const isMismatch = Math.random() > 0.4;
      let newResult;
      
      if (!isMismatch) {
        newResult = mockResponses[0];
      } else {
        newResult = Math.random() > 0.5 ? mockResponses[1] : mockResponses[2];
      }
      
      setResults(prev => [newResult, ...prev].slice(0, 4));
      setLoading(false);
    }, 600);
  };

  return (
    <section className="py-24 relative" id="demo">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#101014] to-[#09090b] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">See the <span className="gradient-text">Diff Engine</span> in action.</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Fire a mock request. Watch it hit v1 instantly, while v2 executes in the background. If v2 breaks, the client never knows — but the gateway logs the mismatch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls */}
          <div className="lg:col-span-4 glass-panel p-6">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <TerminalIcon /> API Console
            </h3>
            
            <div className="bg-[#09090b] rounded-lg p-4 font-mono text-sm border border-border mb-6">
              <div className="text-blue-400 mb-2">POST /proxy</div>
              <div className="text-purple-400">{"{"}</div>
              <div className="pl-4 text-green-300">"endpoint": <span className="text-yellow-300">"/api/data"</span>,</div>
              <div className="pl-4 text-green-300">"payload": {"{"} <span className="text-zinc-400">...</span> {"}"}</div>
              <div className="text-purple-400">{"}"}</div>
            </div>

            <button 
              onClick={handleFireRequest}
              disabled={loading}
              className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${loading ? 'bg-zinc-800 text-zinc-500' : 'bg-primary hover:bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]'}`}
            >
              {loading ? <Clock className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              {loading ? 'Proxying...' : 'Send Test Request'}
            </button>
            <p className="text-xs text-secondary mt-4 text-center">Simulates 100% v1 success, 60% v2 failure (chaos engineering)</p>
          </div>

          {/* Real-time Dashboard */}
          <div className="lg:col-span-8 glass-panel p-6 min-h-[500px] flex flex-col">
            <h3 className="text-lg font-semibold mb-6 border-b border-border pb-4 flex justify-between items-center">
              <span>Shadow Dashboard</span>
              <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded border border-accent/30 font-mono">Live</span>
            </h3>

            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              <AnimatePresence>
                {results.length === 0 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex items-center justify-center text-secondary text-sm">
                    No requests recorded yet. Fire a request over there 👉
                  </motion.div>
                )}
                
                {results.map((res, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20, height: 0 }}
                    animate={{ opacity: 1, x: 0, height: 'auto' }}
                    className={`p-4 rounded-xl border font-mono text-sm grid grid-cols-1 md:grid-cols-5 items-center gap-4 ${
                      res.type === 'MATCH' ? 'bg-success/5 border-success/20' : 
                      res.type === 'TIMEOUT' ? 'bg-yellow-500/5 border-yellow-500/20' : 
                      'bg-danger/5 border-danger/20'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold md:col-span-1">
                      {res.type === 'MATCH' && <CheckCircle2 className="w-5 h-5 text-success" />}
                      {res.type === 'TIMEOUT' && <Clock className="w-5 h-5 text-yellow-500" />}
                      {res.type === 'MISMATCH' && <XCircle className="w-5 h-5 text-danger" />}
                      {res.type}
                    </div>
                    
                    <div className="flex justify-between items-center text-xs md:col-span-2 bg-[#09090b] p-2 rounded border border-border">
                      <span className="text-zinc-400">v1: <span className="text-white">{res.v1}</span></span>
                      <ArrowRightLeft className="w-3 h-3 text-zinc-600" />
                      <span className="text-zinc-400">v2: <span className={res.v2 === 200 ? "text-white" : "text-danger"}>{res.v2}</span></span>
                    </div>

                    <div className="md:col-span-2 text-xs">
                      {res.error ? (
                        <span className="text-danger flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {res.error}</span>
                      ) : (
                        <span className="text-secondary flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Perfect JSON Match</span>
                      )}
                      <div className="text-zinc-500 mt-1">Δ Latency: {res.diff}</div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

const TerminalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
);

export default LiveDemo;
