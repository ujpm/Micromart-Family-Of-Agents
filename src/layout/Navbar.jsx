import React from 'react';
// Import the logo from your assets folder
import logo2 from '../assets/logo-2.svg'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-medical sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center fw-bold" href="#">
          {/* Replace the icon with your official logo */}
          <img 
            src={logo2} 
            alt="MicroSmart Logo" 
            height="40" 
            className="d-inline-block align-text-top me-2"
          />
          MicroSmart
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3 align-items-center">
            <li className="nav-item"><a className="nav-link" href="#agents">The Agents</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">Mission</a></li>
            <li className="nav-item">
              <a className="btn btn-primary btn-sm rounded-pill px-3" href="https://github.com/ujpm/Microsmart_PF">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;