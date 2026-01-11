import React from 'react';
import { Github, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.slate.100),white)] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-medical-blue bg-blue-50 mb-8 border border-blue-100">
          <span className="flex w-2 h-2 bg-medical-blue rounded-full mr-2 animate-pulse"></span>
          Now Hiring Digital Staff
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
          The AI-Powered <br className="hidden sm:block" />
          <span className="text-medical-blue">Autonomous Laboratory</span>
        </h1>

        <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          A family of specialized agents designed to assist the modern medical laboratory.
          Building the digital workforce for the modern microscope.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://github.com/your-username/microsmart"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-medical-blue hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-medical-blue transition-all"
          >
            <Github className="w-5 h-5 mr-2" />
            View on GitHub
          </a>
          <a
            href="#roster"
            className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all"
          >
            Meet the Agents
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
