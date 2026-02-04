import React from 'react';
import { Lightbulb } from 'lucide-react';

const Paradox = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-light border-start border-4 border-warning p-4 rounded position-relative overflow-hidden shadow-sm">
              <div className="position-absolute top-0 end-0 p-3 opacity-10">
                <Lightbulb size={120} className="text-warning" />
              </div>
              <h3 className="h5 fw-bold text-dark mb-3 d-flex align-items-center gap-2">
                <Lightbulb size={20} className="text-warning" /> 
                The Lab Tech's Paradox
              </h3>
              <blockquote className="blockquote mb-0">
                <p className="fs-5 text-secondary fst-italic mb-3">
                  "Am I dumb enough to build the very tools that have the potential to take my job? 
                  Maybe. But have you ever tried to manually count 5,000 RBCs at 3 AM?"
                </p>
                <footer className="blockquote-footer mt-2">
                  Jean Pierre, <cite title="Source Title">Founder & Tired Lab Tech</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Paradox;