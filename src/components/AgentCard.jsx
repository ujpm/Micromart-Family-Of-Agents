import React from 'react';
import { Activity } from 'lucide-react';
import StatusBadge from './StatusBadge';

const AgentCard = ({ agent, onClick }) => {
  const Icon = agent.icon;
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="agent-card p-4 h-100 d-flex flex-column cursor-pointer" onClick={() => onClick(agent)}>
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div className="icon-box">
            <Icon size={24} />
          </div>
          <StatusBadge status={agent.status} />
        </div>
        <h3 className="h5 fw-bold mb-1">{agent.name}</h3>
        <p className="text-primary small fw-bold mb-3">{agent.role}</p>
        <p className="text-muted small mb-4 flex-grow-1">{agent.shortDesc}</p>
        <div className="mt-auto pt-3 border-top">
           <span className="text-primary small fw-bold d-flex align-items-center gap-1 group-hover-arrow">
             View Agent Bio <Activity size={14} />
           </span>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;