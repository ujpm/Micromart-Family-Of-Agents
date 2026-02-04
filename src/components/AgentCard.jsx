import React from 'react';
import { Activity } from 'lucide-react';
import StatusBadge from './StatusBadge';
// Import Logo 3 (The "MICROSMART" wordmark)
import logo3 from '../assets/logo-3.svg';

const AgentCard = ({ agent, onClick }) => {
  const Icon = agent.icon;

  // Logic to strip "MicroSmart" so we just get "PF", "Heme", etc.
  const agentSuffix = agent.name.replace(/MicroSmart/i, '').trim();

  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="agent-card p-4 h-100 d-flex flex-column cursor-pointer" onClick={() => onClick(agent)}>
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div className="icon-box">
            <Icon size={24} />
          </div>
          <StatusBadge status={agent.status} />
        </div>
        
        {/* Updated Header: Logo + Styled Suffix Badge */}
        <div className="mb-1 d-flex align-items-center flex-wrap gap-2">
          {/* 1. The Brand Logo */}
          <img 
            src={logo3} 
            alt="MicroSmart" 
            style={{ height: '32px', width: 'auto' }} 
          />
          
          {/* 2. The Suffix with Solid BG (<style>pf</style>) */}
          <span 
            className="fw-bold text-white px-2 py-1 rounded"
            style={{ 
              backgroundColor: 'var(--medical-blue)', 
              fontSize: '1rem',
              letterSpacing: '0.5px',
              lineHeight: '1'
            }}
          >
            {agentSuffix}
          </span>
        </div>

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