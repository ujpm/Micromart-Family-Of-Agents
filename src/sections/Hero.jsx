import React from 'react';
import { Activity } from 'lucide-react';
// 1. Import the logo
import logo1 from '../assets/logo-1.svg';

const Hero = () => {
  return (
    // Added 'position-relative' and 'overflow-hidden' to contain the background image
    <header className="hero-section text-center position-relative overflow-hidden">
      
      {/* 2. Background Watermark Layer */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%', 
          height: '100%',
          backgroundImage: `url(${logo1})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain', // Keeps the logo fully visible within the section
          opacity: 0.05, // 3. Very low opacity for subtle watermark effect
          zIndex: 0,
          pointerEvents: 'none' // Ensures clicks pass through to the text/buttons
        }}
      />

      {/* 4. Content Container (z-index 1 ensures it sits above the logo) */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
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