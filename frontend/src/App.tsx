import { motion } from 'framer-motion';
import { Activity, Brain, Code2, FileText, Search, Sparkles, Zap } from 'lucide-react';

const agents = [
  { name: 'Planner', icon: Brain, description: 'Builds a roadmap and prioritizes the work.' },
  { name: 'Research', icon: Search, description: 'Collects trusted sources and synthesizes findings.' },
  { name: 'Coding', icon: Code2, description: 'Drafts production-ready code and refactors safely.' },
  { name: 'Documentation', icon: FileText, description: 'Produces docs, APIs, and deployment guides.' },
];

const metrics = [
  { label: 'Active Agents', value: '8' },
  { label: 'Projects', value: '24' },
  { label: 'Response Time', value: '<2s' },
  { label: 'Coverage', value: '92%' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.2),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] text-slate-100">
      <main className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 lg:px-8">
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
                <Sparkles className="h-4 w-4" />
                Production-ready AI engineering copilot
              </div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                AI Engineer Multi-Agent Assistant
              </h1>
              <p className="text-lg text-slate-300">
                Orchestrate planners, researchers, coders, testers, and documentation agents in one polished workspace.
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">
              <Zap className="h-4 w-4" />
              Launch workspace
            </button>
          </div>
        </motion.header>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-500/20 p-2 text-emerald-300">
                <Activity className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Live orchestration</p>
                <h2 className="text-xl font-semibold">Agent activity and reasoning flow</h2>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">{metric.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-xl">
            <h2 className="text-xl font-semibold">Collaborating agents</h2>
            <div className="mt-6 space-y-3">
              {agents.map((agent) => {
                const Icon = agent.icon;
                return (
                  <div key={agent.name} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="rounded-xl bg-cyan-400/10 p-2 text-cyan-300">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">{agent.name}</p>
                      <p className="text-sm text-slate-400">{agent.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
