import React from 'react';
import { Activity, ArrowRight, Cpu } from 'lucide-react';

const Mission = () => {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        <div className="mb-5">
          <h2 className="display-6 fw-bold mb-4">The Ultimate Goal</h2>
          <p className="lead text-muted">
            MicroSmart isn't just a collection of scripts; it is a vision for the <strong>Fully Autonomous Microscopy Pipeline</strong>. 
            Our goal is to standardize diagnostics across resource-limited settings by deploying AI agents that can see, analyze, and report with the precision of a senior pathologist.
          </p>
        </div>

        <div className="row g-4">
          {/* Active Operations */}
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

          {/* R&D Concepts */}
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
  );
};

export default Mission;