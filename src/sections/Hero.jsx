import React from 'react';
import { Activity } from 'lucide-react';

const Hero = () => {
  return (
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
  );
};

export default Hero;