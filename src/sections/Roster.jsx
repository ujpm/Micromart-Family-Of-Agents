import React from 'react';
import AgentCard from '../components/AgentCard';
import { agents } from '../data/agents';

const Roster = () => {
  return (
    <section id="roster" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">The Staff Roster</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Meet the specialized agents currently employed or in training at MicroSmart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roster;
