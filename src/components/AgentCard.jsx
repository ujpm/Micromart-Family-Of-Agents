import React from 'react';
import { ExternalLink } from 'lucide-react';

const AgentCard = ({ agent }) => {
  const { name, role, status, description, icon: Icon, link, linkText } = agent;

  const statusConfig = {
    active: {
      color: 'bg-green-100 text-green-700 ring-green-600/20',
      label: 'Active'
    },
    beta: {
      color: 'bg-yellow-100 text-yellow-800 ring-yellow-600/20',
      label: 'Beta'
    },
    concept: {
      color: 'bg-slate-100 text-slate-700 ring-slate-600/20',
      label: 'Concept'
    }
  };

  const statusStyle = statusConfig[status] || statusConfig.concept;

  return (
    <div className="group relative bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-medical-blue/10 transition-colors">
          <Icon className="w-6 h-6 text-medical-blue" />
        </div>
        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${statusStyle.color}`}>
          {statusStyle.label}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 mb-1">{name}</h3>
      <p className="text-sm font-medium text-medical-blue mb-3">{role}</p>
      <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      <a
        href={link}
        target={link === '#' ? '_self' : '_blank'}
        rel={link === '#' ? '' : 'noopener noreferrer'}
        className={`inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-colors border ${
            linkText === 'Roadmap'
            ? 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            : 'bg-white text-medical-blue border-medical-blue hover:bg-medical-blue hover:text-white'
        }`}
      >
        {linkText}
        {linkText !== 'Roadmap' && <ExternalLink size={16} className="ml-2" />}
      </a>
    </div>
  );
};

export default AgentCard;
