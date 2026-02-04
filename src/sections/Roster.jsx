import React from 'react';
import { agents } from '../data/agents';
import AgentCard from '../components/AgentCard';

const Roster = ({ onSelectAgent }) => {
  return (
    <section id="agents" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="h2 fw-bold">Meet the MicroSmart Family Agents</h2>
          <p className="text-muted">Meet the digital colleagues currently on shift.</p>
        </div>
        <div className="row">
          {agents.map(agent => (
            <AgentCard key={agent.id} agent={agent} onClick={onSelectAgent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roster;