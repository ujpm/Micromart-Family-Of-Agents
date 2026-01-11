import React from 'react';
import { Github, Users } from 'lucide-react';

const Collab = () => {
  return (
    <section id="collab" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-slate-100 rounded-full mb-8">
          <Users className="w-8 h-8 text-slate-700" />
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mb-6">Join the Digital Lab</h2>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          We are looking for collaborators at the intersection of MedLab Science and AI.
          Whether you are a developer, a pathologist, or a lab tech, your input is valuable.
        </p>

        <a
          href="https://github.com/your-username/microsmart"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white bg-slate-900 hover:bg-slate-800 transition-all"
        >
          <Github className="w-6 h-6 mr-3" />
          Collaborate on GitHub
        </a>
      </div>
    </section>
  );
};

export default Collab;
