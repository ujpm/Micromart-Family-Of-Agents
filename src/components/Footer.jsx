import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="text-lg font-bold text-slate-900">MicroSmart</span>
          <p className="text-sm text-slate-500 mt-1">
            © {new Date().getFullYear()} MicroSmart Project. Open Science.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-slate-500 hover:text-medical-blue transition-colors text-sm">
            Privacy
          </a>
          <a href="#" className="text-slate-500 hover:text-medical-blue transition-colors text-sm">
            Terms
          </a>
          <a href="https://github.com/your-username/microsmart" className="text-slate-500 hover:text-medical-blue transition-colors text-sm">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
