import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 bg-white border-top mt-auto">
      <div className="container text-center">
        <p className="text-muted small mb-0">
          &copy; {new Date().getFullYear()} MicroSmart Laboratory Systems. 
          <br />
          Built by <span className="text-primary fw-bold">Jean Pierre</span> (The Tired Lab Tech).
        </p>
      </div>
    </footer>
  );
};

export default Footer;