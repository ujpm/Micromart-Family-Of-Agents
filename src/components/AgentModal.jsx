import React from 'react';
import { Github, X, Terminal, Cpu, Database } from 'lucide-react';

const AgentModal = ({ agent, onClose }) => {
  if (!agent) return null;
  const Icon = agent.icon;
  
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content-custom" onClick={e => e.stopPropagation()}>
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div className="d-flex gap-3 align-items-center">
            <div className="icon-box-lg bg-light text-primary p-3 rounded">
              <Icon size={32} />
            </div>
            <div>
              <h2 className="h4 fw-bold mb-0">{agent.name}</h2>
              <span className="text-muted small">{agent.role}</span>
            </div>
          </div>
          <button onClick={onClose} className="btn btn-link text-secondary p-0"><X size={24} /></button>
        </div>
        
        <div className="mb-4 bg-light p-3 rounded border-start border-4 border-primary">
          <h5 className="h6 fw-bold text-uppercase text-secondary mb-2" style={{fontSize: '0.75rem'}}>Agent Bio</h5>
          <p className="mb-0 text-dark small">{agent.bio}</p>
        </div>
        
        <div className="mb-4">
          <h5 className="h6 fw-bold text-uppercase text-secondary mb-3 d-flex align-items-center gap-2" style={{fontSize: '0.75rem'}}>
            <Terminal size={14} /> Developer Specifications
          </h5>
          <div className="row g-3">
            <div className="col-12">
              <div className="border rounded p-2">
                <span className="d-block text-muted" style={{fontSize: '0.7rem'}}>Architecture</span>
                <span className="fw-bold small"><Cpu size={14} className="me-1"/> {agent.technical.architecture}</span>
              </div>
            </div>
            <div className="col-12">
              <div className="border rounded p-2">
                <span className="d-block text-muted" style={{fontSize: '0.7rem'}}>Data/Knowledge</span>
                <span className="fw-bold small"><Database size={14} className="me-1"/> {agent.technical.dataset || agent.technical.knowledgeBase || agent.technical.focus}</span>
              </div>
            </div>
            <div className="col-12">
               <div className="border rounded p-2 bg-dark text-white font-monospace small">
                <span className="text-success">➜</span> Stack: {agent.technical.stack}
               </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">
          <button onClick={onClose} className="btn btn-light btn-sm fw-bold">Close File</button>
          {agent.link !== '#' && (
            <a href={agent.link} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm fw-bold d-flex align-items-center gap-2">
              <Github size={16} /> View Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentModal;