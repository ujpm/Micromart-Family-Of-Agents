import React from 'react';
import { Microscope } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0">
            <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-xl mb-6">
              <Microscope className="w-8 h-8 text-medical-blue" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Built from the Bench</h2>
            <div className="prose prose-lg text-slate-600">
              <p className="mb-4">
                Initiated by a medical lab technologist who realized the need for better tools.
                We are building the digital staff we wished we had during the night shift.
              </p>
              <p>
                Our goal is to automate microscopy routines using specialized AI agents,
                freeing up human experts to focus on complex cases and patient care.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-medical-blue/20 to-transparent rounded-2xl transform rotate-3 scale-105"></div>
            <div className="relative bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-medical-blue shrink-0"></div>
                  <p className="text-slate-700 italic">"Why are we still manually counting cells in 2024?"</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-medical-blue shrink-0"></div>
                  <p className="text-slate-700 italic">"I need a second opinion at 3 AM when the pathologist is asleep."</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-medical-blue shrink-0"></div>
                  <p className="text-slate-700 italic">"Training new staff takes months. We need an always-on mentor."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
