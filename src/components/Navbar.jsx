import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-medical-blue tracking-tight">MicroSmart</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-600 hover:text-medical-blue transition-colors text-sm font-medium">About</a>
            <a href="#roster" className="text-slate-600 hover:text-medical-blue transition-colors text-sm font-medium">Agents</a>
            <a href="#collab" className="text-slate-600 hover:text-medical-blue transition-colors text-sm font-medium">Collaborate</a>
            <a
              href="https://github.com/your-username/microsmart"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              GitHub
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#about"
              className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-medical-blue hover:bg-slate-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#roster"
              className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-medical-blue hover:bg-slate-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Agents
            </a>
            <a
              href="#collab"
              className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-medical-blue hover:bg-slate-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Collaborate
            </a>
            <div className="pt-4">
               <a
                href="https://github.com/your-username/microsmart"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 rounded-md bg-slate-900 text-white text-base font-medium hover:bg-slate-800"
                onClick={() => setIsOpen(false)}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
