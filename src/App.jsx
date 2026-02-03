import React, { useState } from 'react';
import './App.css';
import { agents } from './data/agents';
import { Github, Activity, Dna, X, Terminal, Cpu, Database, Lightbulb, Users, HeartPulse, Linkedin, Twitter, Mail, Phone, Globe, ArrowRight } from 'lucide-react';

// --- Components ---

const StatusBadge = ({ status }) => {
  return (
    <span className={`status-badge status-${status}`}>
      {status === 'op' ? 'Concept' : status}
    </span>
  );
};

// The Popup Modal (The "Personnel File")
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
            <a href={agent.link} target="_blank" className="btn btn-primary btn-sm fw-bold d-flex align-items-center gap-2">
              <Github size={16} /> View Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

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

// --- Main App ---

function App() {
  const [selectedAgent, setSelectedAgent] = useState(null);

  return (
    <div className="min-vh-100 d-flex flex-column bg-white">
      
      {selectedAgent && (
        <AgentModal agent={selectedAgent} onClose={() => setSelectedAgent(null)} />
      )}

      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-medical sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center fw-bold" href="#">
            <div className="brand-icon"><Dna size={20} /></div>
            MicroSmart
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto gap-4 small fw-bold align-items-center">
              <a href="#about" className="nav-link text-secondary">Our Mission</a>
              <a href="#agents" className="nav-link text-secondary">The Family</a>
              <a href="https://github.com/ujpm" target="_blank" className="btn btn-sm btn-outline-primary rounded-pill px-3 d-flex align-items-center gap-2">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section text-center">
        <div className="container">
          <div className="badge-pill mb-4">
            <Activity size={16} />
            Autonomous Laboratory Systems
          </div>
          <h1 className="display-4 fw-bold mb-4">
            The Digital Staff for <br />
            <span style={{color: 'var(--medical-blue)'}}>Modern Microscopy</span>
          </h1>
          <p className="lead text-muted mb-5 mx-auto" style={{maxWidth: '700px'}}>
            We are building a roster of specialized AI agents to assist laboratory professionals 
            in diagnosis, analysis, and routine microscopy tasks.
          </p>
        </div>
      </header>

      {/* DETAILED ABOUT SECTION: The Mission & Status */}
      <section id="about" className="py-5 bg-white">
        <div className="container">
          
          {/* 1. The Ultimate Goal */}
          <div className="mb-5">
            <h2 className="display-6 fw-bold mb-4">The Ultimate Goal</h2>
            <p className="lead text-muted">
              MicroSmart isn't just a collection of scripts; it is a vision for the <strong>Fully Autonomous Microscopy Pipeline</strong>. 
              Our goal is to standardize diagnostics across resource-limited settings by deploying AI agents that can see, analyze, and report with the precision of a senior pathologist.
            </p>
          </div>

          <div className="row g-4">
            {/* 2. Active Operations (PF & Heme) */}
            <div className="col-md-6">
              <div className="p-4 border rounded-3 h-100 bg-light border-primary-subtle">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Activity className="text-primary" />
                  <h3 className="h5 fw-bold mb-0">Current Operations</h3>
                </div>
                <p className="small text-muted mb-3">
                  These agents are currently built and undergoing iteration. They represent our core focus.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start gap-2">
                    <ArrowRight size={16} className="mt-1 text-primary flex-shrink-0" />
                    <span className="small"><strong>MicroSmart PF:</strong> Our Malaria diagnostic tool. Using Computer Vision to detect <em>P. falciparum</em> in thin smears.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <ArrowRight size={16} className="mt-1 text-primary flex-shrink-0" />
                    <span className="small"><strong>MicroSmart Heme:</strong> A Telegram-based LLM assistant for Hematology report analysis and decision support.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. Research & Concepts (Cyto & O&P) */}
            <div className="col-md-6">
              <div className="p-4 border rounded-3 h-100 bg-light">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Cpu className="text-secondary" />
                  <h3 className="h5 fw-bold mb-0">R&D Concepts</h3>
                </div>
                <p className="small text-muted mb-3">
                  These projects are in the research phase or conceptual design.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start gap-2">
                    <ArrowRight size={16} className="mt-1 text-secondary flex-shrink-0" />
                    <span className="small"><strong>MicroSmart Cyto:</strong> An ambitious project to automate Pap smear screening for cervical cancer (Bethesda System).</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <ArrowRight size={16} className="mt-1 text-secondary flex-shrink-0" />
                    <span className="small"><strong>MicroSmart O&P:</strong> Addressing the complex challenge of identifying intestinal parasites in stool samples.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roster Grid */}
      <section id="agents" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h2 fw-bold">Meet the MicroSmart Family Agents</h2>
            <p className="text-muted">Meet the digital colleagues currently on shift.</p>
          </div>
          <div className="row">
            {agents.map(agent => (
              <AgentCard key={agent.id} agent={agent} onClick={setSelectedAgent} />
            ))}
          </div>
        </div>
      </section>

      {/* THE PARADOX (Testimonial Style Placement) */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bg-light border-start border-4 border-warning p-4 rounded position-relative overflow-hidden shadow-sm">
                <div className="position-absolute top-0 end-0 p-3 opacity-10">
                  <Lightbulb size={120} className="text-warning" />
                </div>
                <h3 className="h5 fw-bold text-dark mb-3 d-flex align-items-center gap-2">
                  <Lightbulb size={20} className="text-warning" /> 
                  The Lab Tech's Paradox
                </h3>
                <blockquote className="blockquote mb-0">
                  <p className="fs-5 text-secondary fst-italic mb-3">
                    "Am I dumb enough to build the very tools that have the potential to take my job? 
                    Maybe. But have you ever tried to manually count 5,000 RBCs at 3 AM?"
                  </p>
                  <footer className="blockquote-footer mt-2">
                    Jean Pierre, <cite title="Source Title">Founder & Tired Lab Tech</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA (NOW LIGHT THEME) */}
      <section className="py-5" style={{backgroundColor: '#f0f9ff'}}> {/* Medical Blue 50 */}
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="mb-4 d-inline-block p-3 rounded-circle bg-white text-primary shadow-sm">
                <Users size={32} />
              </div>
              <h2 className="h2 fw-bold mb-4 text-dark">We Need More Hands on Deck</h2>
              <p className="lead text-secondary mb-5">
                We are building the future of the lab, and we can't do it alone. 
                Whether you are a developer, a pathologist, or a student, there is a commit waiting for you.
              </p>
              
              <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
                <div className="px-3 py-2 bg-white border border-primary-subtle text-primary rounded-pill small fw-bold">Needed: React Developers</div>
                <div className="px-3 py-2 bg-white border border-primary-subtle text-primary rounded-pill small fw-bold">Needed: ML Engineers</div>
                <div className="px-3 py-2 bg-white border border-primary-subtle text-primary rounded-pill small fw-bold">Needed: Hematologists</div>
              </div>

              <a href="https://github.com/ujpm/Microsmart_PF" className="btn btn-primary btn-lg px-5 fw-bold rounded-pill shadow-sm">
                Check Issues on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row g-4 justify-content-between">
            
            {/* Brand Column */}
            <div className="col-md-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <Dna className="text-primary" size={24} />
                <span className="fw-bold h5 mb-0">MicroSmart</span>
              </div>
              <p className="text-white-50 small mb-4">
                Automating microscopy to empower laboratory professionals.
                Built in Rwanda. 🇷🇼
              </p>
            </div>

            {/* Contact Column */}
            <div className="col-md-4">
              <h5 className="fw-bold h6 mb-3 text-white">Contact Founder</h5>
              <div className="d-flex flex-column gap-2 small">
                
                {}
                <span className="d-flex align-items-center gap-2 text-white-50">
                   <Phone size={14}/> +250 737 787 395
                </span>
                <span className="d-flex align-items-center gap-2 text-white-50">
                   <Mail size={14}/> uwizeyimanajp2@gmail.com
                </span>

                <a href="https://fase.pages.dev/" target="_blank" className="d-flex align-items-center gap-2 text-white-50 text-decoration-none hover-white">
                   <Globe size={14}/>Portfolio
                </a>
              </div>
            </div>

            {/* Socials Column */}
            <div className="col-md-3">
               <h5 className="fw-bold h6 mb-3 text-white">Connect</h5>
               <div className="d-flex gap-3">
                 <a href="https://x.com/Uwizeyi30479056" target="_blank" className="text-white-50 hover-primary"><Twitter size={20}/></a>
                 <a href="https://linkedin.com/in/ujeanpierre45" target="_blank" className="text-white-50 hover-primary"><Linkedin size={20}/></a>
                 <a href="https://github.com/ujpm" target="_blank" className="text-white-50 hover-primary"><Github size={20}/></a>
               </div>
            </div>

          </div>
          
          <div className="border-top border-secondary mt-5 pt-4 text-center">
            <p className="mb-0 text-white-50 small">© 2025 MicroSmart Initiative. Open Source.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;